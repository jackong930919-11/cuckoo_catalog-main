export type UserRole = 'guest' | 'editor' | 'admin';

export interface UserSession {
  role: UserRole;
  username: string;
  loginTime: string;
}

const AUTH_STORAGE_KEY = 'cuckoo_cms_auth_session';
const ADMIN_PASS_KEY = 'cuckoo_cms_admin_pass';
const EDITOR_PASS_KEY = 'cuckoo_cms_editor_pass';

const DEFAULT_ADMIN_PASS = 'Ozt1912@';
const DEFAULT_EDITOR_PASS = 'Ozt1912@';

export function getAdminPasscode(): string {
  return localStorage.getItem(ADMIN_PASS_KEY) || DEFAULT_ADMIN_PASS;
}

export function getEditorPasscode(): string {
  return localStorage.getItem(EDITOR_PASS_KEY) || DEFAULT_EDITOR_PASS;
}

export function setPasscodes(adminPass: string, editorPass: string): void {
  if (adminPass.trim()) localStorage.setItem(ADMIN_PASS_KEY, adminPass.trim());
  if (editorPass.trim()) localStorage.setItem(EDITOR_PASS_KEY, editorPass.trim());
}

export function getCurrentSession(): UserSession {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Failed to parse auth session:', err);
  }
  return { role: 'guest', username: 'Guest Visitor', loginTime: '' };
}

export function loginWithPasscode(passcode: string): { success: boolean; session?: UserSession; message?: string } {
  const cleanPass = passcode.trim();
  const adminPass = getAdminPasscode();
  const editorPass = getEditorPasscode();

  if (cleanPass === adminPass) {
    const session: UserSession = {
      role: 'admin',
      username: 'Authorized User',
      loginTime: new Date().toISOString(),
    };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
    window.dispatchEvent(new CustomEvent('cuckoo_auth_changed', { detail: session }));
    return { success: true, session };
  }

  if (cleanPass === editorPass) {
    const session: UserSession = {
      role: 'editor',
      username: 'Staff Access',
      loginTime: new Date().toISOString(),
    };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
    window.dispatchEvent(new CustomEvent('cuckoo_auth_changed', { detail: session }));
    return { success: true, session };
  }

  return { success: false, message: '密码错误 / Invalid Passcode.' };
}

export function quickLogin(role: 'admin' | 'editor'): UserSession {
  const session: UserSession = role === 'admin' 
    ? {
        role: 'admin',
        username: 'Authorized User',
        loginTime: new Date().toISOString(),
      }
    : {
        role: 'editor',
        username: 'Staff Access',
        loginTime: new Date().toISOString(),
      };

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  window.dispatchEvent(new CustomEvent('cuckoo_auth_changed', { detail: session }));
  return session;
}

export function logout(): UserSession {
  const session: UserSession = { role: 'guest', username: 'Guest Visitor', loginTime: '' };
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  window.dispatchEvent(new CustomEvent('cuckoo_auth_changed', { detail: session }));
  return session;
}
