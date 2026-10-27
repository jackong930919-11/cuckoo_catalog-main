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
    models: ['wp-9', 'wp-3', 'wp-1', 'wp-2'],
  },
  {
    title: 'Clinic and healthcare front desk',
    intro: 'Clinics usually want hot and cold water for staff and patients in a small footprint, with hygiene-focused features.',
    considerations: ['Compact footprint at reception or staff room', 'Hot water faucet sterilisation and stainless-steel tanks', 'Under-sink options to keep counters clear'],
    models: ['wp-10', 'wp-6', 'wp-4', 'wp-1'],
  },
  {
    title: 'Factory, warehouse and high-volume sites',
    intro: 'Sites with many workers drink more water and use hot water more often, so tank capacity matters most.',
    considerations: ['Large tank capacity for continuous use', 'Instant hot water so shifts are not delayed', 'Pre-filtering incoming water before it reaches the taps'],
    models: ['wp-9', 'wp-5', 'of-1', 'wp-3'],
  },
  {
    title: 'School, tuition centre and training room',
    intro: 'Learning spaces need safe dispensing and steady capacity during breaks when many people refill at once.',
    considerations: ['Child lock and controlled hot water output', 'Capacity during break times', 'Where the unit can be placed safely'],
    models: ['wp-9', 'wp-7', 'wp-3', 'wp-4'],
  },
  {
    title: 'Workplace wellness and premium pantry',
    intro: 'Offices that want to offer more than basic hot and cold water can look at mild alkaline filtration or an ice-making model.',
    considerations: ['Mild alkaline filtration for everyday drinking', 'Ice-making for cold drinks', 'Wide temperature range from cold to boiling'],
    models: ['wp-granite', 'wp-1', 'wp-8', 'wp-6'],
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
    const models = useCase.models.map((id) => byId.get(id)).filter((p): p is Product => Boolean(p));
    const thumbs = models
      .map(
        (p) =>
          `<a class="thumb" href="${productLink(p)}"><span class="thumbimg"><img src="/images/thumbs/${encodeURIComponent(p.id)}.webp" alt="${esc(p.name)}" width="120" height="120" loading="lazy"></span><span class="thumbname">${esc(p.name.replace(/^CUCKOO /, ''))}</span><span class="thumbprice">${esc(p.rentalPrice)}</span></a>`,
      )
      .join('');
    const points = useCase.considerations.map((c) => `<li>${esc(c)}</li>`).join('');
    const message = `Hi ${contact.agentName}, I am looking for a water purifier for a ${useCase.title.toLowerCase()}.\nNumber of staff: \nLocation: \nPlease recommend a suitable model. Thank you!`;
    return `<section class="card">
<h3>${esc(useCase.title)}</h3>
<p>${esc(useCase.intro)}</p>
<p class="label">What to consider</p><ul>${points}</ul>
<p class="label">Models to shortlist</p><div class="thumbs">${thumbs}</div>
<p><a class="btn green small" href="${waLink(message)}">Get a recommendation for this workplace</a></p>
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
body{margin:0;font:16px/1.6 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;color:#0f172a;background:#f8fafc;-webkit-font-smoothing:antialiased}
a{color:#4f46e5}
.wrap{max-width:1120px;margin:0 auto;padding:0 20px}
.topbar{background:#0f172a;color:#cbd5e1;font-size:12px;padding:8px 0}
.topbar .wrap{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;justify-content:space-between}
.pill{display:inline-block;background:#4f46e5;color:#fff;font-weight:600;font-size:11px;letter-spacing:.05em;text-transform:uppercase;padding:2px 10px;border-radius:999px}
.topbar strong{color:#fff}
.topbar a{color:#cbd5e1;text-decoration:none}
header.site{background:rgba(255,255,255,.96);border-bottom:1px solid #f1f5f9;box-shadow:0 1px 2px rgba(15,23,42,.05);position:sticky;top:0;z-index:20}
header.site .wrap{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding-top:10px;padding-bottom:10px}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:#801217}
.logo{line-height:1}
.logo b{display:block;font-weight:900;font-size:24px;letter-spacing:-.05em}
.logo i{display:block;font-style:normal;font-weight:900;font-size:8.5px;letter-spacing:.38em;margin-top:2px}
.official{border-left:1px solid #e2e8f0;padding-left:12px}
.official span{display:block;width:fit-content;font-size:10px;font-weight:700;color:#801217;background:#fef2f2;border:1px solid #fee2e2;padding:1px 8px;border-radius:999px}
.official small{font-size:11px;color:#64748b;font-weight:500}
.official small b{color:#1e293b}
.tabs{display:flex;gap:6px;padding:4px;background:rgba(241,245,249,.8);border:1px solid #e2e8f0;border-radius:16px;font-size:12px;font-weight:800;overflow-x:auto}
.tabs a{padding:8px 14px;border-radius:12px;text-decoration:none;color:#475569;white-space:nowrap}
.tabs a.on{background:#0284c7;color:#fff}
.wa{display:inline-flex;align-items:center;gap:6px;background:#059669;color:#fff!important;font-weight:700;font-size:13px;padding:8px 14px;border-radius:12px;text-decoration:none;box-shadow:0 1px 2px rgba(15,23,42,.1)}
.wa:hover{background:#047857}
.hero{position:relative;overflow:hidden;background:linear-gradient(180deg,rgba(238,242,255,.7),#f8fafc 55%,#fff);border-bottom:1px solid #f1f5f9;padding:44px 0 52px}
.hero:before{content:"";position:absolute;top:-48px;right:-48px;width:380px;height:380px;border-radius:50%;background:rgba(199,210,254,.45);filter:blur(60px);pointer-events:none}
.hero .wrap{position:relative}
.crumb{font-size:13px;color:#64748b}
.crumb a{color:#64748b}
.badge{display:inline-block;background:#fff;border:1px solid #e0e7ff;border-radius:999px;padding:6px 14px;font-size:12px;font-weight:600;color:#1e293b;box-shadow:0 1px 2px rgba(15,23,42,.05);margin:14px 0 4px}
.badge b{color:#4f46e5}
.hero h1{font-size:clamp(1.9rem,5vw,2.9rem);line-height:1.12;font-weight:800;letter-spacing:-.02em;margin:10px 0 14px;max-width:820px}
.hero h1 em{font-style:normal;color:#801217}
.hero p{max-width:740px;margin:0 0 22px;color:#475569;font-size:1.05rem}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:13px 22px;background:#4f46e5;color:#fff!important;border-radius:12px;text-decoration:none;font-weight:700;box-shadow:0 4px 12px rgba(79,70,229,.25)}
.btn:hover{background:#4338ca}
.btn.green{background:#059669;box-shadow:0 4px 12px rgba(5,150,105,.25)}
.btn.green:hover{background:#047857}
.btn.small{padding:10px 14px;font-size:13px;width:100%;box-shadow:none;border-radius:12px}
h2{font-size:1.6rem;margin:44px 0 12px;line-height:1.25;font-weight:800;letter-spacing:-.01em}
h3{margin:0 0 6px;font-size:1.15rem;font-weight:800}
.answer{background:#fff;border:1px solid #c7d2fe;border-left:5px solid #4f46e5;padding:18px 20px;border-radius:16px;margin:32px 0 8px;box-shadow:0 1px 3px rgba(15,23,42,.06)}
.grid{display:grid;gap:18px;grid-template-columns:repeat(auto-fit,minmax(310px,1fr))}
.card{background:#fff;border:1px solid rgba(226,232,240,.9);border-radius:16px;padding:18px;box-shadow:0 1px 3px rgba(15,23,42,.06);display:flex;flex-direction:column;transition:box-shadow .2s,border-color .2s}
.card:hover{border-color:#a5b4fc;box-shadow:0 12px 28px rgba(199,210,254,.5)}
.card>p:last-child{margin:auto 0 0}
.card ul{padding-left:20px;margin:6px 0 10px;color:#334155;font-size:14px}
.card p{margin:0 0 6px;color:#334155;font-size:14.5px}
.label{font-weight:800;font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#64748b;margin:12px 0 6px!important}
.thumbs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:0 0 14px}
.thumb{display:flex;flex-direction:column;text-decoration:none;color:#0f172a;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:6px;text-align:center;transition:border-color .15s,background .15s}
.thumb:hover{border-color:#818cf8;background:#eef2ff}
.thumbimg{display:block;background:#fff;border-radius:8px;overflow:hidden}
.thumbimg img{display:block;width:100%;height:auto;aspect-ratio:1/1;object-fit:contain}
.thumbname{overflow-wrap:anywhere;font-size:11px;font-weight:700;line-height:1.25;margin-top:5px;color:#1e293b}
.thumbprice{font-size:10px;color:#4f46e5;font-weight:700;margin-top:2px}
.muted{color:#64748b;font-size:14px}
.tablewrap{overflow-x:auto;border:1px solid #e2e8f0;border-radius:16px;background:#fff;box-shadow:0 1px 3px rgba(15,23,42,.06)}
table{width:100%;border-collapse:collapse;font-size:14px}
th,td{text-align:left;padding:12px;border-bottom:1px solid #f1f5f9;vertical-align:top}
thead th{background:#f1f5f9;font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#475569}
tbody tr:last-child th,tbody tr:last-child td{border-bottom:0}
ul.points{padding-left:20px}
details{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:14px 18px;margin:10px 0;box-shadow:0 1px 2px rgba(15,23,42,.04)}
details[open]{border-color:#c7d2fe}
summary{cursor:pointer;font-weight:700}
details p{margin:10px 0 0;color:#475569}
.cta-band{background:#0f172a;color:#e2e8f0;border-radius:20px;padding:30px 24px;text-align:center;margin:44px 0}
.cta-band h2{margin:0 0 8px;color:#fff}
.cta-band p{margin:0 0 16px}
.cta-band .muted,.cta-band a:not(.btn){color:#a5b4fc}
footer{background:#0f172a;color:#94a3b8;padding:30px 0 96px;font-size:14px;margin-top:20px}
footer a{color:#a5b4fc}
footer strong{color:#fff}
.float{position:fixed;right:16px;bottom:16px;z-index:30;box-shadow:0 8px 22px rgba(5,150,105,.4)}
@media(max-width:520px){.thumbs{grid-template-columns:repeat(2,minmax(0,1fr))}.official{display:none}.topbar .wrap>div:last-child{display:none}}
</style>
</head>
<body>
${GTM_BODY}
<div class="topbar"><div class="wrap">
<div><span class="pill">Authorized CUCKOO Sales Agent</span> &nbsp;Contact: <strong>${esc(contact.agentName)} (${esc(contact.phone)})</strong></div>
<div><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a> &nbsp;|&nbsp; ${esc(contact.mallName)}, KL</div>
</div></div>
<header class="site"><div class="wrap">
<a class="brand" href="/"><span class="logo"><b>CUCKOO</b><i>INTERNATIONAL</i></span>
<span class="official"><span>OFFICIAL STORE</span><small>Sales Agent: <b>${esc(contact.agentName)}</b></small></span></a>
<nav class="tabs" aria-label="Main"><a href="/">Home</a><a class="on" href="${OFFICE_PAGE_PATH}" aria-current="page">Office Solution</a></nav>
<a class="wa" href="${mainWa}">WhatsApp</a>
</div></header>
<section class="hero"><div class="wrap">
<div class="crumb"><a href="/">CUCKOO Malaysia</a> / Office Solution</div>
<span class="badge">Office, clinic, factory &amp; school water solutions · <b>${esc(contact.agentName)} (${esc(contact.phone)})</b></span>
<h1>Office Appliance Solutions Malaysia: <em>Water Purifiers</em> for Every Workplace</h1>
<p>Compare CUCKOO water purifiers by purpose, from staff pantry drinking water to corporate, government, clinic, factory, school and workplace wellness needs. The aim is to help each workplace shortlist products that fit real daily use instead of choosing by product category alone.</p>
<a class="btn green" href="${mainWa}">WhatsApp ${esc(contact.agentName)} for an office recommendation</a>
</div></section>
<main class="wrap">

<div class="answer">
<strong>Quick answer:</strong> choose an office water purifier by headcount, hot water use and pantry space. Compact countertop models suit small teams, larger-tank models suit busy pantries and high-volume sites, and an under-sink model keeps the counter clear. Message ${esc(contact.agentName)} on WhatsApp with your workplace type, staff count and location to get a model recommendation and the current rental and purchase options.
</div>

<h2>How to choose a water purifier for your office</h2>
<ul class="points">
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
<h2>Not sure which model fits your office?</h2>
<p>Tell ${esc(contact.agentName)} your workplace type, number of staff and location, and get a shortlist on WhatsApp.</p>
<a class="btn green" href="${mainWa}">Chat on WhatsApp</a>
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
<a class="btn green float" href="${mainWa}" aria-label="Chat with ${esc(contact.agentName)} on WhatsApp">WhatsApp us</a>
</body></html>`;
};
