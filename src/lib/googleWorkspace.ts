import { initializeApp, getApps } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App safely if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/gmail.send');
provider.addScope('https://www.googleapis.com/auth/calendar.events');

let isSigningIn = false;
let cachedAccessToken: string | null = null;

/**
 * Initialize auth listener
 */
export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

/**
 * Trigger Google Sign In with required Workspace scopes
 */
export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Failed to obtain Google access token');
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Google Sign-In Error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = (): string | null => {
  return cachedAccessToken;
};

export const logoutGoogle = async () => {
  await auth.signOut();
  cachedAccessToken = null;
};

/**
 * Encodes text into base64url format for Gmail API
 */
function base64UrlEncode(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export interface InquiryDetails {
  name: string;
  contact: string;
  email?: string;
  inquiries: string;
}

/**
 * Send inquiry email via Gmail API
 */
export async function sendInquiryEmail(
  accessToken: string,
  details: InquiryDetails,
  recipientEmail: string = 'jackong930919@gmail.com'
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const subject = `[CUCKOO Website Inquiry] ${details.name} - ${details.contact}`;
    const emailBody = [
      `To: ${recipientEmail}`,
      `Subject: ${subject}`,
      `Content-Type: text/plain; charset=utf-8`,
      `MIME-Version: 1.0`,
      ``,
      `NEW CUCKOO CUSTOMER INQUIRY`,
      `==========================`,
      `Customer Name: ${details.name}`,
      `Contact Number: ${details.contact}`,
      `Customer Email: ${details.email || 'Not provided'}`,
      `Date & Time: ${new Date().toLocaleString()}`,
      ``,
      `Inquiry Details:`,
      `${details.inquiries}`,
      ``,
      `--------------------------`,
      `Sent automatically via CUCKOO Official Website Customer Portal.`
    ].join('\r\n');

    const rawMessage = base64UrlEncode(emailBody);

    const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ raw: rawMessage })
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error?.message || `Gmail API error: ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, messageId: data.id };
  } catch (err: any) {
    console.error('Failed to send email via Gmail API:', err);
    return { success: false, error: err.message || 'Failed to send email' };
  }
}

/**
 * Set a Google Calendar reminder starting 1 hour from now
 */
export async function createCalendarReminder(
  accessToken: string,
  details: InquiryDetails
): Promise<{ success: boolean; eventUrl?: string; startTime?: string; error?: string }> {
  try {
    const now = new Date();
    const startTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour from now
    const endTime = new Date(startTime.getTime() + 30 * 60 * 1000); // 30 minutes duration

    const event = {
      summary: `[CUCKOO Follow-up] ${details.name} (${details.contact})`,
      description: `Follow up with customer regarding inquiry.\n\n` +
        `Customer Name: ${details.name}\n` +
        `Contact Number: ${details.contact}\n` +
        `Email: ${details.email || 'N/A'}\n\n` +
        `Inquiry Message:\n${details.inquiries}`,
      start: {
        dateTime: startTime.toISOString()
      },
      end: {
        dateTime: endTime.toISOString()
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 10 },
          { method: 'email', minutes: 10 }
        ]
      }
    };

    const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error?.message || `Calendar API error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      success: true,
      eventUrl: data.htmlLink,
      startTime: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  } catch (err: any) {
    console.error('Failed to create Calendar event:', err);
    return { success: false, error: err.message || 'Failed to create calendar reminder' };
  }
}
