import type { CUCKOO_CONTACT, PRODUCTS } from '../src/data/cuckooData';

type Product = (typeof PRODUCTS)[number];
type Contact = typeof CUCKOO_CONTACT;

export const OFFICE_PAGE_PATH = '/office-water-purifier-malaysia/';

const esc = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);

const GTM_HEAD = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5S6R6LG5');</script>
<!-- End Google Tag Manager -->`;

const GTM_BODY = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S6R6LG5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

interface UseCase {
  title: string;
  intro: string;
  considerations: string[];
  models: string[];
}

const USE_CASES: UseCase[] = [
  {
    title: 'Staff pantry and small office',
    intro: 'A shared pantry for a small team needs a compact countertop unit with hot and cold water and easy daily use.',
    considerations: ['Counter space in the pantry', 'Hot and cold water for coffee, tea and instant meals', 'Number of staff sharing the unit'],
    models: ['wp-1', 'wp-2', 'wp-4', 'wp-6'],
  },
  {
    title: 'Corporate office and co-working space',
    intro: 'Busier floors benefit from larger tanks and fast hot water so staff and visitors are not waiting in line.',
    considerations: ['Peak-hour usage around lunch and meetings', 'Tank size and hot water recovery', 'A clean, professional look in the pantry'],
    models: ['wp-7', 'wp-9', 'wp-3', 'wp-8'],
  },
  {
    title: 'Government and public-facing counters',
    intro: 'Waiting areas and service counters need a simple, reliable dispenser that staff and the public can use without instructions.',
    considerations: ['Safety features such as a child lock', 'Simple one-touch operation', 'Procurement and approval steps that your office follows'],
    models: ['wp-9', 'wp-3', 'wp-1'],
  },
  {
    title: 'Clinic and healthcare front desk',
    intro: 'Clinics usually want hot and cold water for staff and patients in a small footprint, with hygiene-focused features.',
    considerations: ['Compact footprint at reception or staff room', 'Hot water faucet sterilisation and stainless-steel tanks', 'Under-sink options to keep counters clear'],
    models: ['wp-10', 'wp-6', 'wp-4'],
  },
  {
    title: 'Factory, warehouse and high-volume sites',
    intro: 'Sites with many workers drink more water and use hot water more often, so tank capacity matters most.',
    considerations: ['Large tank capacity for continuous use', 'Instant hot water so shifts are not delayed', 'Pre-filtering incoming water before it reaches the taps'],
    models: ['wp-9', 'wp-5', 'of-1'],
  },
  {
    title: 'School, tuition centre and training room',
    intro: 'Learning spaces need safe dispensing and steady capacity during breaks when many people refill at once.',
    considerations: ['Child lock and controlled hot water output', 'Capacity during break times', 'Where the unit can be placed safely'],
    models: ['wp-9', 'wp-7', 'wp-3'],
  },
  {
    title: 'Workplace wellness and premium pantry',
    intro: 'Offices that want to offer more than basic hot and cold water can look at mild alkaline filtration or an ice-making model.',
    considerations: ['Mild alkaline filtration for everyday drinking', 'Ice-making for cold drinks', 'Wide temperature range from cold to boiling'],
    models: ['wp-granite', 'wp-1', 'wp-8'],
  },
];

export const renderOfficePage = (siteUrl: string, contact: Contact, products: readonly Product[]) => {
  const byId = new Map(products.map((p) => [p.id, p]));
  const canonical = `${siteUrl}${OFFICE_PAGE_PATH}`;
  const waLink = (message: string) => `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const mainMessage = `Hi ${contact.agentName}, I am looking for a water purifier for my office.\nWorkplace type: \nNumber of staff: \nLocation: \nPlease recommend a suitable model and share the current rental and purchase options. Thank you!`;
  const mainWa = waLink(mainMessage);
  const productLink = (p: Product) => `/products/${encodeURIComponent(p.id)}/`;

  const waterModels = products.filter((p) => p.category === 'WATER PURIFIER');

  const useCaseHtml = USE_CASES.map((useCase) => {
    const picks = useCase.models
      .map((id) => byId.get(id))
      .filter((p): p is Product => Boolean(p))
      .map((p) => `<li><a href="${productLink(p)}"><strong>${esc(p.name)}</strong></a> – ${esc(p.subtitle)} <span class="muted">(${esc(p.rentalPrice)})</span></li>`)
      .join('');
    const points = useCase.considerations.map((c) => `<li>${esc(c)}</li>`).join('');
    const message = `Hi ${contact.agentName}, I am looking for a water purifier for a ${useCase.title.toLowerCase()}.\nNumber of staff: \nLocation: \nPlease recommend a suitable model. Thank you!`;
    return `<section class="card">
<h3>${esc(useCase.title)}</h3>
<p>${esc(useCase.intro)}</p>
<p class="label">What to consider</p><ul>${points}</ul>
<p class="label">Models to shortlist</p><ul>${picks}</ul>
<p><a class="btn ghost" href="${waLink(message)}">Get a recommendation for this workplace</a></p>
</section>`;
  }).join('\n');

  const tableRows = waterModels
    .map(
      (p) =>
        `<tr><th scope="row"><a href="${productLink(p)}">${esc(p.name)}</a></th><td>${esc(p.features.slice(0, 3).join('; '))}</td><td>${esc(p.rentalPrice)}</td><td>${esc(p.outrightPrice)}</td></tr>`,
    )
    .join('');

  const faqs: { q: string; a: string }[] = [
    {
      q: 'What water purifier is suitable for an office in Malaysia?',
      a: 'It depends on how many people use it, how much hot water they need and how much space the pantry has. Compact countertop models such as the CUCKOO KING TOP 2 or XCEL 2 suit small teams, while larger-tank models such as the CUCKOO FLO (16.0L tank) or GLAMOUR (7.6L tank) suit busier pantries. Send your staff count and workplace type on WhatsApp for a recommendation.',
    },
    {
      q: 'Can a company rent a CUCKOO water purifier instead of buying it?',
      a: 'Most CUCKOO water purifier models list monthly rental plans as well as outright purchase prices. Rental eligibility and terms for companies should be confirmed with the sales agent before you commit.',
    },
    {
      q: 'Which CUCKOO water purifier has the largest tank for an office?',
      a: 'Among the water purifier models listed on this site, the CUCKOO FLO (Flo Stand) has the largest tank at 16.0L, followed by the CUCKOO GLAMOUR at 7.6L.',
    },
    {
      q: 'Is there a CUCKOO water purifier that does not take up counter space?',
      a: 'Yes. The CUCKOO ACE UNDERSINK is installed under the sink and is offered for outright purchase only.',
    },
    {
      q: 'Which models give boiling hot water for offices?',
      a: 'The CUCKOO TITAN is a tankless model with instant 100°C extra hot water, and the CUCKOO GRANITE covers a 0°C–100°C range with ice-making. The CUCKOO GRANDE offers a 5°C to 100°C range.',
    },
    {
      q: 'Can I filter the water for the whole building or site?',
      a: 'The CUCKOO Prime X3 Outdoor Filter filters water before it reaches your taps. It is a separate product from the drinking water purifiers, so ask which setup suits your premises.',
    },
    {
      q: 'Which areas do you serve?',
      a: `The sales office is at ${contact.mallName}, ${contact.district}, and the main service areas are Kuala Lumpur and Selangor. Message on WhatsApp with your location to confirm availability.`,
    },
    {
      q: 'How do I get a quotation for my office?',
      a: `Message ${contact.agentName} on WhatsApp with your workplace type, number of staff and location. You will receive a model recommendation and the current rental and purchase options.`,
    },
  ];

  const faqHtml = faqs.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n');

  const title = 'Office Water Purifier Malaysia | Rental & Purchase for Workplaces | CUCKOO';
  const description =
    'Find the right CUCKOO water purifier for your office, clinic, factory, school or government counter in Malaysia. Compare models by workplace type and WhatsApp Jack Ong for current rental and purchase options.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonical,
      inLanguage: 'en-MY',
      about: 'Office water purifier rental and purchase in Malaysia',
      isPartOf: { '@type': 'WebSite', name: 'CUCKOO Malaysia Authorized Sales Portal', url: siteUrl },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'CUCKOO Malaysia', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Office Water Purifier Malaysia', item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `CUCKOO Malaysia Authorized Sales Agent - ${contact.agentName}`,
      url: siteUrl,
      telephone: `+${contact.whatsappNumber}`,
      email: contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: contact.branchAddress,
        addressLocality: 'Kuala Lumpur',
        postalCode: '50350',
        addressCountry: 'MY',
      },
      areaServed: ['Kuala Lumpur', 'Selangor', 'Malaysia'],
    },
  ]
    .map((data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`)
    .join('\n');

  return `<!doctype html>
<html lang="en-MY">
<head>
${GTM_HEAD}
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="en_MY">
<meta property="og:image" content="${siteUrl}/images/kingtop2-main.png">
<meta name="twitter:card" content="summary_large_image">
${jsonLd}
<style>
*{box-sizing:border-box}
body{margin:0;font:16px/1.65 system-ui,-apple-system,sans-serif;color:#172033;background:#f8fafc}
a{color:#3730a3}
.wrap{max-width:980px;margin:0 auto;padding:0 20px}
nav{padding:16px 0;font-size:14px}
.hero{background:linear-gradient(135deg,#1e1b4b,#3730a3);color:#fff;padding:40px 0 44px}
.hero a{color:#fff}
.hero h1{font-size:clamp(1.8rem,5vw,2.6rem);line-height:1.15;margin:8px 0 14px}
.hero p{max-width:720px;margin:0 0 18px;color:#e0e7ff}
.btn{display:inline-block;padding:12px 20px;background:#047857;color:#fff!important;border-radius:10px;text-decoration:none;font-weight:700}
.btn.ghost{background:#fff;color:#047857!important;border:2px solid #047857;padding:8px 14px;font-size:14px}
.btn.big{font-size:1.05rem;padding:14px 24px}
h2{font-size:1.5rem;margin:40px 0 12px;line-height:1.25}
h3{margin:0 0 8px}
.answer{background:#ecfdf5;border-left:4px solid #047857;padding:16px 18px;border-radius:8px;margin:28px 0}
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(290px,1fr))}
.card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:18px}
.card ul{padding-left:20px;margin:6px 0 12px}
.label{font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:.04em;color:#475569;margin:12px 0 0}
.muted{color:#64748b;font-size:14px}
.tablewrap{overflow-x:auto}
table{width:100%;border-collapse:collapse;background:#fff;font-size:14px}
th,td{text-align:left;padding:10px;border-bottom:1px solid #e2e8f0;vertical-align:top}
thead th{background:#f1f5f9}
details{background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;margin:8px 0}
summary{cursor:pointer;font-weight:600}
.cta-band{background:#fff;border:2px solid #047857;border-radius:14px;padding:24px;text-align:center;margin:40px 0}
footer{padding:28px 0 90px;font-size:14px;color:#475569}
.float{position:fixed;right:16px;bottom:16px;z-index:10;box-shadow:0 6px 18px rgba(0,0,0,.25)}
</style>
</head>
<body>
${GTM_BODY}
<header class="hero"><div class="wrap">
<nav aria-label="Breadcrumb"><a href="/">CUCKOO Malaysia</a> / Office Water Purifier</nav>
<h1>Office Appliance Solutions Malaysia: Water Purifiers for Every Workplace</h1>
<p>Compare CUCKOO water purifiers by purpose, from staff pantry drinking water to corporate, government, clinic, factory, school and workplace wellness needs. The aim is to help each workplace shortlist products that fit real daily use instead of choosing by product category alone.</p>
<a class="btn big" href="${mainWa}">WhatsApp ${esc(contact.agentName)} for an office recommendation</a>
</div></header>
<main class="wrap">

<div class="answer">
<strong>Quick answer:</strong> choose an office water purifier by headcount, hot water use and pantry space. Compact countertop models suit small teams, larger-tank models suit busy pantries and high-volume sites, and an under-sink model keeps the counter clear. Message ${esc(contact.agentName)} on WhatsApp with your workplace type, staff count and location to get a model recommendation and the current rental and purchase options.
</div>

<h2>How to choose a water purifier for your office</h2>
<ul>
<li><strong>Headcount and usage:</strong> more staff means more refills at peak times, so tank size and hot water speed matter.</li>
<li><strong>Hot and cold needs:</strong> some models focus on instant hot water, others on a wide temperature range or ice-making.</li>
<li><strong>Space:</strong> countertop, floor-standing and under-sink models fit different pantries.</li>
<li><strong>Rental or purchase:</strong> most models list a monthly rental plan and an outright price. Confirm the current terms for your company before deciding.</li>
</ul>

<h2>Water purifiers by workplace type</h2>
<div class="grid">
${useCaseHtml}
</div>

<h2>All CUCKOO water purifiers at a glance</h2>
<p class="muted">Prices are shown as listed on this site and may change. Confirm current promotions and terms with the sales agent.</p>
<div class="tablewrap"><table>
<thead><tr><th scope="col">Model</th><th scope="col">Key features</th><th scope="col">Rental</th><th scope="col">Outright</th></tr></thead>
<tbody>${tableRows}</tbody>
</table></div>

<div class="cta-band">
<h2 style="margin-top:0">Not sure which model fits your office?</h2>
<p>Tell ${esc(contact.agentName)} your workplace type, number of staff and location, and get a shortlist on WhatsApp.</p>
<a class="btn big" href="${mainWa}">Chat on WhatsApp</a>
<p class="muted">Or call <a href="tel:+${contact.whatsappNumber}">${esc(contact.phone)}</a> · ${esc(contact.mallName)}, ${esc(contact.district)}</p>
</div>

<h2>Frequently asked questions</h2>
${faqHtml}

</main>
<footer><div class="wrap">
<p><strong>CUCKOO Malaysia Authorized Sales Agent – ${esc(contact.agentName)}</strong><br>
${esc(contact.branchAddress)}<br>
<a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></p>
<p><a href="/">Browse the full CUCKOO catalog</a></p>
</div></footer>
<a class="btn float" href="${mainWa}" aria-label="Chat with ${esc(contact.agentName)} on WhatsApp">WhatsApp us</a>
</body></html>`;
};
