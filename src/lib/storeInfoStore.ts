import { ContactInfo } from '../types';
import { CUCKOO_CONTACT as INITIAL_CONTACT } from '../data/cuckooData';
import { UserRole } from './authStore';

const STORE_INFO_STORAGE_KEY = 'cuckoo_store_info_v1';

export function getStoredContactInfo(): ContactInfo {
  try {
    const raw = localStorage.getItem(STORE_INFO_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.agentName && parsed.phone) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to load store info:', err);
  }
  return INITIAL_CONTACT;
}

export function saveContactInfo(info: ContactInfo, role: UserRole): { success: boolean; message: string; info: ContactInfo } {
  if (role !== 'admin') {
    return { 
      success: false, 
      message: '权限受限！仅 Admin (全权管理员) 允许修改店铺联系方式与分行信息。', 
      info: getStoredContactInfo() 
    };
  }

  try {
    localStorage.setItem(STORE_INFO_STORAGE_KEY, JSON.stringify(info));
    window.dispatchEvent(new CustomEvent('cuckoo_store_info_updated', { detail: info }));
    return { success: true, message: '店铺与代理分行信息更新成功！', info };
  } catch (err: any) {
    return { success: false, message: '保存失败: ' + err.message, info: getStoredContactInfo() };
  }
}
