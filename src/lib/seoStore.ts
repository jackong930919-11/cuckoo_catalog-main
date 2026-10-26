import { SeoSettings } from '../types';

const SEO_STORAGE_KEY = 'cuckoo_seo_settings_v1';

export const DEFAULT_SEO_SETTINGS: SeoSettings = {
  siteTitle: 'CUCKOO Malaysia Product Catalog | Jack Ong',
  metaTitle: 'CUCKOO Malaysia Products, Rental & Purchase | Jack Ong',
  metaDescription: 'Browse CUCKOO Malaysia product specifications, current rental and outright prices, service plans, and contact details for water purifiers, air purifiers, air conditioners, mattresses, and home appliances.',
  keywords: '',
  canonicalUrl: 'https://www.cuckooebrandshop.com',
  ogTitle: 'CUCKOO Malaysia Products, Rental & Purchase | Jack Ong',
  ogDescription: 'Browse CUCKOO Malaysia product specifications, current prices and service plans.',
  ogImage: 'https://www.cuckooebrandshop.com/images/kingtop2-main.png',
  twitterTitle: 'CUCKOO Malaysia Products, Rental & Purchase | Jack Ong',
  twitterDescription: 'Browse CUCKOO Malaysia product specifications, current prices and service plans.',
  twitterImage: 'https://www.cuckooebrandshop.com/images/kingtop2-main.png',
  jsonLd: `{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CUCKOO Malaysia Authorized Agent - Jack Ong",
    "description": "Browse CUCKOO Malaysia product specifications, rental and outright prices, and service plans.",
    "url": "https://www.cuckooebrandshop.com",
    "telephone": "+60186668787",
    "areaServed": "Malaysia"
  }`
};

export function getStoredSeoSettings(): SeoSettings {
  try {
    const raw = localStorage.getItem(SEO_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return { ...DEFAULT_SEO_SETTINGS, ...parsed };
      }
    }
  } catch (err) {
    console.error('Failed to load SEO settings from localStorage:', err);
  }
  return DEFAULT_SEO_SETTINGS;
}

export function saveSeoSettings(settings: SeoSettings, role: 'admin' | 'editor' | 'guest'): { success: boolean; message: string; settings: SeoSettings } {
  if (role !== 'admin' && role !== 'editor') {
    return {
      success: false,
      message: '权限受限！仅 Admin 或 Editor 可更新 SEO / AEO 设置。',
      settings: getStoredSeoSettings(),
    };
  }

  try {
    const sanitized = { ...DEFAULT_SEO_SETTINGS, ...settings };
    localStorage.setItem(SEO_STORAGE_KEY, JSON.stringify(sanitized));
    window.dispatchEvent(new CustomEvent('cuckoo_seo_updated', { detail: sanitized }));
    return { success: true, message: 'SEO / AEO 设置已保存成功！', settings: sanitized };
  } catch (err: any) {
    return { success: false, message: '保存失败: ' + err.message, settings: getStoredSeoSettings() };
  }
}
