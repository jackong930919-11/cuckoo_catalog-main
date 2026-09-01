import { SeoSettings } from '../types';

const SEO_STORAGE_KEY = 'cuckoo_seo_settings_v1';

export const DEFAULT_SEO_SETTINGS: SeoSettings = {
  siteTitle: 'CUCKOO Malaysia Official Sales Agent | Jack Ong (+6018-6668787)',
  metaTitle: 'CUCKOO Malaysia Official Sales Agent | Jack Ong (+6018-6668787) | Water Purifier, Air Purifier & Aircond Rental',
  metaDescription: 'Official CUCKOO Malaysia sales portal by Authorized Agent Jack Ong (+6018-6668787). Top water purifier & air purifier rental in Selangor, KL, and nationwide. CUCKOO vs Coway vs LG comparison, CUCKOO King Top 2, XCEL 2, GRANDE, TITAN, ACE Undersink, Vita-5TAR Airconds, and Napure Mattresses with free installation & servicing.',
  keywords: 'CUCKOO water purifier, water purifier, Water purifier in malaysia, top water purifier, cuckoo air purifier, air purifier, cuckoo vs coway, coway vs cuckoo, which brand of water purifier is better, CUCKOO Malaysia Official Agent, By Jack Ong, CUCKOO Agent Jack Ong 0186668787, aircond rental, mattress, water purifier in selangor',
  canonicalUrl: 'https://www.cuckooebrandshop.com',
  ogTitle: 'CUCKOO Malaysia Official Sales Agent | Jack Ong (+6018-6668787)',
  ogDescription: 'Official CUCKOO Malaysia sales portal by Authorized Agent Jack Ong (+6018-6668787). Water Purifiers, Airconds, Air Purifiers & Mattresses with low monthly rental, FREE delivery, installation & warranty.',
  ogImage: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=1200&q=80',
  twitterTitle: 'CUCKOO Malaysia Official Sales Agent | Jack Ong (+6018-6668787)',
  twitterDescription: 'Official CUCKOO Malaysia sales portal by Authorized Agent Jack Ong (+6018-6668787). Water purifiers, air purifiers, airconds & mattresses with free installation & servicing.',
  twitterImage: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=1200&q=80',
  jsonLd: `{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CUCKOO Malaysia Authorized Agent - Jack Ong",
    "description": "Official CUCKOO Malaysia Authorized Sales Agent Jack Ong (+6018-6668787). Direct online orders, rental applications, and outright discounts for CUCKOO Water Purifiers, Air Purifiers, and Air Conditioners.",
    "url": "https://cuckoo-malaysia.app",
    "telephone": "+60186668787",
    "areaServed": "Malaysia",
    "priceRange": "RM 55 - RM 3399"
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
