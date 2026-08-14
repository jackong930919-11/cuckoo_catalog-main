import { useEffect } from 'react';
import { getStoredSeoSettings } from '../lib/seoStore';

export const SeoHead: React.FC = () => {
  useEffect(() => {
    const applySeo = () => {
      const settings = getStoredSeoSettings();

      document.title = settings.metaTitle || settings.siteTitle || 'CUCKOO Malaysia';

      const setMeta = (selector: string, value: string | undefined, attribute = 'content') => {
        if (!value) return;
        let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
        if (!tag) {
          tag = document.createElement('meta');
          const key = selector.replace(/^meta\[name=|meta\[property=|\]$/g, '');
          if (selector.startsWith('meta[name=')) {
            tag.setAttribute('name', key);
          } else if (selector.startsWith('meta[property=')) {
            tag.setAttribute('property', key);
          }
          document.head.appendChild(tag);
        }
        tag.setAttribute(attribute, value);
      };

      setMeta('meta[name="title"]', settings.metaTitle || settings.siteTitle);
      setMeta('meta[name="description"]', settings.metaDescription);
      setMeta('meta[name="keywords"]', settings.keywords);
      setMeta('meta[property="og:title"]', settings.ogTitle || settings.metaTitle || settings.siteTitle);
      setMeta('meta[property="og:description"]', settings.ogDescription || settings.metaDescription);
      setMeta('meta[property="og:image"]', settings.ogImage);
      setMeta('meta[property="og:url"]', settings.canonicalUrl);
      setMeta('meta[name="twitter:title"]', settings.twitterTitle || settings.metaTitle || settings.siteTitle);
      setMeta('meta[name="twitter:description"]', settings.twitterDescription || settings.metaDescription);
      setMeta('meta[name="twitter:image"]', settings.twitterImage || settings.ogImage);

      let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = settings.canonicalUrl || 'https://cuckoo-malaysia.app';

      let script = document.getElementById('cuckoo-seo-json-ld') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'cuckoo-seo-json-ld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      try {
        const rawJson = settings.jsonLd && settings.jsonLd.trim() ? settings.jsonLd : '{}';
        JSON.parse(rawJson);
        script.textContent = rawJson;
      } catch (error) {
        console.warn('Invalid SEO JSON-LD, keeping fallback object.', error);
        script.textContent = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: settings.siteTitle,
          description: settings.metaDescription,
          url: settings.canonicalUrl,
          telephone: '+60186668787'
        });
      }
    };

    applySeo();
    const handleSeoUpdated = () => applySeo();
    window.addEventListener('cuckoo_seo_updated', handleSeoUpdated);
    return () => window.removeEventListener('cuckoo_seo_updated', handleSeoUpdated);
  }, []);

  return null;
};
