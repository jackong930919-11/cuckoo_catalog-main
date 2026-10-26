import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { CUCKOO_CONTACT, PRODUCTS } from '../src/data/cuckooData';

const siteUrl = 'https://www.cuckooebrandshop.com';
const distPath = path.resolve('dist');

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });

const productUrl = (id: string) => `/products/${encodeURIComponent(id)}/`;

const renderProductPage = (product: (typeof PRODUCTS)[number]) => {
  const canonical = `${siteUrl}${productUrl(product.id)}`;
  const description = `${product.name}: ${product.description} Rental ${product.rentalPrice}; outright ${product.outrightPrice}. Contact Jack Ong to confirm current terms.`;
  const specs = Object.entries(product.specs ?? {})
    .map(([label, value]) => `<tr><th scope="row">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`)
    .join('');
  const plans = (product.rentalPlans ?? [])
    .map(
      (plan) =>
        `<li><strong>${escapeHtml(plan.planName)}</strong>: RM ${plan.monthlyRate}/month for ${plan.months} months; ${escapeHtml(plan.customerType)}.</li>`,
    )
    .join('');
  const features = product.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join('');

  return `<!doctype html>
<html lang="en-MY">
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5S6R6LG5');</script>
<!-- End Google Tag Manager -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(product.name)} Price, Rental &amp; Specifications | CUCKOO Malaysia</title>
<meta name="description" content="${escapeHtml(description.slice(0, 300))}">
<meta name="robots" content="index,follow">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="product">
<meta property="og:title" content="${escapeHtml(product.name)} | CUCKOO Malaysia">
<meta property="og:description" content="${escapeHtml(description.slice(0, 300))}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${siteUrl}${escapeHtml(product.image)}">
<style>
body{margin:0;font:16px/1.6 system-ui,-apple-system,sans-serif;color:#172033;background:#f8fafc}
main{max-width:900px;margin:0 auto;padding:32px 20px}
a{color:#3730a3}nav{font-size:14px}h1{line-height:1.2}table{width:100%;border-collapse:collapse;background:#fff}
th,td{text-align:left;padding:10px;border-bottom:1px solid #e2e8f0}th{width:36%;background:#f1f5f9}
.price{font-size:1.1rem;font-weight:700}.cta{display:inline-block;padding:10px 16px;background:#047857;color:#fff;border-radius:8px;text-decoration:none}
img{display:block;width:min(100%,520px);height:auto;margin:20px auto;background:#fff}
</style>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S6R6LG5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<main>
<nav><a href="/">CUCKOO Malaysia catalog</a> / ${escapeHtml(product.category)}</nav>
<article>
<h1>${escapeHtml(product.name)}</h1>
<p><strong>${escapeHtml(product.subtitle)}</strong></p>
<p>${escapeHtml(product.description)}</p>
<img src="${siteUrl}${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}">
<p class="price">Rental: ${escapeHtml(product.rentalPrice)} · Outright: ${escapeHtml(product.outrightPrice)}</p>
<p>CCSP service: ${escapeHtml(product.ccspPrice)}. Prices and plan eligibility may change; confirm current terms with the sales agent.</p>
${plans ? `<h2>Rental plans</h2><ul>${plans}</ul>` : ''}
<h2>Features</h2><ul>${features}</ul>
${specs ? `<h2>Specifications</h2><table><tbody>${specs}</tbody></table>` : ''}
<p><a class="cta" href="https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${encodeURIComponent(`Hi, I would like to ask about ${product.name}.`)}">Ask about this product on WhatsApp</a></p>
</article>
<p><a href="/">Browse all CUCKOO products</a> · <a href="/#customer-contact-form">Contact</a></p>
</main></body></html>`;
};

mkdirSync(distPath, { recursive: true });
const sitemapUrls = [`${siteUrl}/`];

for (const product of PRODUCTS) {
  const url = productUrl(product.id);
  const outputPath = path.join(distPath, url, 'index.html');
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, renderProductPage(product));
  sitemapUrls.push(`${siteUrl}${url}`);
}

const indexPath = path.join(distPath, 'index.html');
let indexHtml = readFileSync(indexPath, 'utf8');
indexHtml = indexHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CUCKOO Malaysia Authorized Sales Agent - Jack Ong',
  url: siteUrl,
  telephone: `+${CUCKOO_CONTACT.whatsappNumber}`,
  email: CUCKOO_CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CUCKOO_CONTACT.branchAddress,
    addressLocality: 'Kuala Lumpur',
    postalCode: '50350',
    addressCountry: 'MY',
  },
  areaServed: ['Kuala Lumpur', 'Selangor', 'Malaysia'],
};
indexHtml = indexHtml.replace('</head>', `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>\n</head>`);
writeFileSync(indexPath, indexHtml);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`;
writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
