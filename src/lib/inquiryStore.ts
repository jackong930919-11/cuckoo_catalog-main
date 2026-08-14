export interface BackgroundInquiry {
  id: string;
  name: string;
  contact: string;
  email?: string;
  inquiries: string;
  timestamp: string;
  read: boolean;
}

const STORAGE_KEY = 'cuckoo_background_inquiries';

export function getBackgroundInquiries(): BackgroundInquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse background inquiries:', err);
    return [];
  }
}

export function saveBackgroundInquiry(data: Omit<BackgroundInquiry, 'id' | 'timestamp' | 'read'>): BackgroundInquiry {
  const existing = getBackgroundInquiries();
  const newItem: BackgroundInquiry = {
    ...data,
    id: 'inq_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    timestamp: new Date().toISOString(),
    read: false,
  };

  const updated = [newItem, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('cuckoo_inquiry_saved', { detail: newItem }));
  } catch (err) {
    console.error('Failed to save inquiry to background storage:', err);
  }

  return newItem;
}

export function deleteBackgroundInquiry(id: string): BackgroundInquiry[] {
  const existing = getBackgroundInquiries();
  const updated = existing.filter(item => item.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('cuckoo_inquiries_updated'));
  } catch (err) {
    console.error('Failed to update background inquiries:', err);
  }
  return updated;
}

export function clearAllBackgroundInquiries(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('cuckoo_inquiries_updated'));
  } catch (err) {
    console.error('Failed to clear background inquiries:', err);
  }
}

export function markInquiryAsRead(id: string): BackgroundInquiry[] {
  const existing = getBackgroundInquiries();
  const updated = existing.map(item => item.id === id ? { ...item, read: true } : item);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('cuckoo_inquiries_updated'));
  } catch (err) {
    console.error('Failed to mark inquiry as read:', err);
  }
  return updated;
}
