import { Product, ContactInfo, ProductCategory } from '../types';

export const CUCKOO_CONTACT: ContactInfo = {
  companyName: 'CUCKOO',
  agentName: 'Jack Ong',
  phone: '0186668787',
  whatsappNumber: '60186668787',
  email: 'jack93.cuckoomalaysia@gmail.com',
  branchAddress: 'LG-30A-1 & LG-30A-2 Sunway Putra Mall, JALAN PUTRA, CHOW KIT 50350 KUALA LUMPUR.',
  mallName: 'Sunway Putra Mall',
  unitNo: 'LG-30A-1 & LG-30A-2',
  district: 'Chow Kit, Kuala Lumpur'
};

export const CATEGORIES_LIST: { id: ProductCategory | 'ALL'; label: string; count: number }[] = [
  { id: 'ALL', label: 'All Products', count: 34 },
  { id: 'WATER PURIFIER', label: 'Water Purifier', count: 11 },
  { id: 'OUTDOOR FILTER', label: 'Outdoor Filter', count: 1 },
  { id: 'AIR PURIFIER', label: 'Air Purifier', count: 7 },
  { id: 'MASSAGE CHAIR', label: 'Massage Chair', count: 2 },
  { id: 'AIRCONDITIONER', label: 'Air Conditioner', count: 2 },
  { id: 'MATTRESS', label: 'Mattress', count: 4 },
  { id: 'SAMSUNG PRODUCT', label: 'Samsung Product', count: 4 },
  { id: 'RICE COOKER', label: 'Rice Cooker', count: 1 },
  { id: 'DAYBED', label: 'Daybed', count: 1 },
  { id: 'TREADMILL', label: 'Treadmill', count: 1 },
];

export const PRODUCTS: Product[] = [
  // --- WATER PURIFIERS (11 Real Models) ---
  {
    id: 'wp-granite',
    name: 'CUCKOO GRANITE Ice-Making Water Purifier',
    category: 'WATER PURIFIER',
    subtitle: 'BREAK THE ICE, BRING THE HEAT.',
    description: 'CUCKOO GRANITE makes 0°C to 100°C all yours to command. Chill out. Turn up the heat. Indulge every sip.',
    image: '/images/granite-main.png',
    rentalPrice: 'RM 155 / mth',
    rentalPlans: [
      { planName: 'Normal Rental Plan', monthlyRate: 155, months: 60, customerType: 'New / Existing Customer' }
    ],
    outrightPrice: 'RM 7,200',
    ccspPrice: 'RM 711.90 / yr',
    features: [
      '0°C–100°C All-purpose Range',
      '18-Minute Rapid Ice-Making',
      '6-Stage Filtration System with 3 Filters',
      'In & Out Auto Electrolysis Sterilisation',
      'UV Ice Tank Sterilisation',
      'Sterilisation Water'
    ],
    popular: true,
    tag: 'NEW 🔥',
    specs: {
      'Product Colour': 'Black',
      'Weight': '22.9 kg',
      'Dimensions (W x D x H)': '260 x 527 x 506 mm',
      'Rated Voltage': 'Single Phase AC 220-240V / 50Hz',
      'Power Consumption': 'Cold 0.8A | Hot 2,500W | Total 2,600W',
      'Tank Capacity': 'Room (Direct), Cold (Direct), Hot (Direct), Ice (700g)',
      'Filter Set Replacement Cycle': 'Sediment Filter (4mth), Carbon Composite (4mth), Nano Positive Plus Filter (8mth)',
      'Filtration System': 'Nano Filtration System (6-Stage with 3 Filters)',
      'Refrigerant Type': 'R600',
      'Rental Plan': 'RM155/month (5 years) (FREE scheduled service every 4 month)',
      'Outright Purchase': 'RM7,200 (FREE 2 year of schedule service & warranty)',
      'CCSP Package': 'RM711.90 / year'
    }
  },
  {
    id: 'wp-1',
    name: 'CUCKOO KING TOP 2',
    category: 'WATER PURIFIER',
    subtitle: 'NEW KING, NEW ERA — Minimalist Modern Design',
    description: 'Indoor water purifier that is aesthetically pleasing and fits into any home. Effortless operation featuring a 6-stage filtration system, Room/Cold switching valve, Child Lock safety feature, antibacterial stainless-steel water tank, and status light indicator.',
    image: '/images/kingtop2-main.png',
    rentalPrice: 'From RM 61 / mth',
    rentalPlans: [
      { planName: 'Rental (5-Year)', monthlyRate: 86, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'CUCKOO GOOODPLAN™ (7-Year)', monthlyRate: 61, months: 84, customerType: 'New / Existing Customer' },
      { planName: 'CUCKOO GOOODPLAN™ (60m)', monthlyRate: 76, months: 60, customerType: 'Existing Customer' }
    ],
    outrightPrice: 'RM 3,850',
    ccspPrice: 'RM 567.00 / yr',
    features: [
      'Minimalist Modern Design (Fits Any Home)',
      '6-Stage Mild Alkaline Filtration System',
      'Effortless Room/Cold Switching Valve',
      'Child Lock Safety Feature',
      'Antibacterial Stainless-Steel Water Tank',
      'Status Light Indicator'
    ],
    popular: true,
    tag: 'NEW KING',
    specs: {
      'Model': 'CUCKOO KING TOP 2',
      'Power Consumption': 'Cold Water: 0.6A | Hot Water: 300W',
      'Filtration Type': '6-Stage Filtration System',
      'Filter Replacement': 'Sediment (4mth), Pre-Carbon 2.0 (8mth), Natural 2.0 (12mth), Nano Positive (12mth)',
      'Tank Capacity': 'Cold: 1.0L | Room: 0.3L | Hot: 1.0L (Suitable for 4-8 members)',
      'GOOODPLAN Rental': 'RM 61.00/mth (Free 7-year service & warranty)',
      'Standard Rental': 'RM 86.00/mth (1st-5th Yr) (Free 5-year service & warranty)',
      'Outright Purchase': 'RM 3,850.00 (Free 1-year service & warranty)'
    }
  },
  {
    id: 'wp-2',
    name: 'XCEL 2',
    category: 'WATER PURIFIER',
    subtitle: 'Modernised and Upgraded Countertop Water Purifier',
    description: 'Modernised and upgraded design with 6-stage filtration system, stylish touch panel, upgraded safety button lock, and next-gen temperature indicator lights.',
    image: '/images/xcel2-main.png',
    rentalPrice: 'From RM 83 / mth',
    rentalPlans: [
      { planName: 'Rental Option A (5-Year)', monthlyRate: 100, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'Rental Option B (7-Year)', monthlyRate: 83, months: 84, customerType: 'New / Existing Customer' },
      { planName: 'Trade In Rental Plan', monthlyRate: 85, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 4,200',
    ccspPrice: 'RM 680.40 / yr',
    features: [
      'Modernised & Upgraded Design',
      '6-Stage Filtration System with 4 Filters',
      'Stylish New Touch Panel',
      'Upgraded Safety with Button Lock',
      'Next-Gen Temperature Indicator Lights',
      'Upgraded Faucet-Tray Spacing for Ease of Use'
    ],
    popular: true,
    tag: 'Hot Seller',
    specs: {
      'Model': 'CUCKOO XCEL 2',
      'Weight': '14.1 kg',
      'Panel Colour': 'Jet Black | White',
      'Filtration Type': 'Nano Positive Filtration System (6-Stage with 4 Filters)',
      'Filter Replacement Period': 'Sediment (4mth), Pre-Carbon (8mth), Natural (12mth), Nano Positive (12mth)',
      'Tank Capacity': 'Cold (1.0ℓ), Purified/Room (0.3ℓ), Hot (1.0ℓ)',
      'Power Consumption': '400W',
      'Outright Purchase': 'RM 4,200',
      'Rental Option A': 'RM100/mth (5-Yr) with free 5-year service & warranty',
      'Rental Option B': 'RM83/mth (7-Yr) with free 7-year service & warranty'
    }
  },
  {
    id: 'wp-3',
    name: 'CUCKOO WARRIOR',
    category: 'WATER PURIFIER',
    subtitle: 'The Health Protector Of Every Family',
    description: 'While you’re outside fighting for your family, CUCKOO WARRIOR is at home protecting every family with pure, healthy water. Features a 6-stage filtration system, high-capacity antibacterial stainless-steel tank, instant hot & cold water, 21cm-tall tall outlet space, cold water temp knob, and child safety lock.',
    image: '/images/warrior-main.png',
    rentalPrice: 'From RM 95 / mth',
    rentalPlans: [
      { planName: 'Rental Option A (5-Year)', monthlyRate: 105, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'Rental Option B (7-Year)', monthlyRate: 95, months: 84, customerType: 'New / Existing Customer' },
      { planName: 'Trade In Rental Plan', monthlyRate: 95, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 3,400',
    ccspPrice: 'RM 601.02 / yr',
    features: [
      '6-Stage Mild Alkaline Filtration System',
      'High-Capacity Antibacterial Stainless-Steel Water Tank',
      'Instant Hot and Cold Water Output',
      'Extra Comfortable Space (21cm-Tall Outlet Height)',
      'Cold Water Temperature Control Knob',
      'Child Safety Lock Protection'
    ],
    popular: true,
    tag: 'Family Protector',
    specs: {
      'Model': 'CUCKOO WARRIOR',
      'Filtration Type': '6-Stage Filtration System',
      'Filter Replacement': 'Sediment (4mth), Pre-Carbon 2.0 (8mth), Natural 2.0 (12mth), Nano Positive (12mth)',
      'Power Consumption': 'Hot: 350W | Cold: 100W',
      'Tank Capacity': 'Room: 1.0L | Cold: 2.8L | Hot: 1.4L (Total 5.2L for 4-8 members)',
      'Dimensions & Weight': '260mm (W) x 508mm (D) x 508mm (H) | 14.3kg',
      'Rental Option A': 'RM 105.00/mth (5-Yr) with free 5-year service & warranty',
      'Rental Option B': 'RM 95.00/mth (7-Yr) with free 7-year service & warranty',
      'Outright Purchase': 'RM 3,400.00 (Free 1-year service & warranty)'
    }
  },
  {
    id: 'wp-4',
    name: 'CUCKOO VIVID',
    category: 'WATER PURIFIER',
    subtitle: 'THE BIGGEST HOT WATER TANK IN TOWN',
    description: 'The CUCKOO VIVID is a lightweight powerhouse that will provide you and your loved ones with mild alkaline water that is free from harmful bacteria and viruses. Features the largest 5.3L hot water tank in town, antibacterial stainless-steel tank, 3 hot water level indicators, child lock, and 6-stage filtration.',
    image: '/images/vivid-main.png',
    rentalPrice: 'From RM 66 / mth',
    rentalPlans: [
      { planName: 'Rental Option A (5-Year)', monthlyRate: 77, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'Rental Option B (7-Year)', monthlyRate: 66, months: 84, customerType: 'New / Existing Customer' },
      { planName: 'Trade In Rental Plan', monthlyRate: 67, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 3,360',
    ccspPrice: 'RM 601.02 / yr',
    features: [
      'THE BIGGEST HOT WATER TANK IN TOWN (5.3L Hot Water Tank)',
      'Antibacterial Stainless-Steel Water Tank',
      '3 Hot Water Level Indicator',
      'Child Lock Safety Feature',
      '6-Stage Mild Alkaline Filtration System',
      'Lightweight Powerhouse (7.9 kg)'
    ],
    popular: true,
    tag: '5.3L Hot Tank',
    specs: {
      'Model': 'CUCKOO VIVID',
      'Weight': '7.9 kg',
      'Filtration Type': '6-Stage Filtration System',
      'Filter Replacement': 'Sediment (4mth), Pre-Carbon 2.0 (8mth), Natural 2.0 (12mth), Nano Positive (12mth)',
      'Power Consumption': 'Warm Water: 100W | Hot Water: 800W',
      'Tank Capacity': 'Warm: 1.3L | Hot: 5.3L (Largest Hot Tank! Total 6.6L)',
      'Material': 'Antibacterial Stainless-Steel Water Tank',
      'Rental Option A': 'RM 77.00/mth (5-Yr) with free 5-year service & warranty',
      'Rental Option B': 'RM 66.00/mth (7-Yr) with free 7-year service & warranty',
      'Outright Purchase': 'RM 3,360.00 (Free 1-year service & warranty)'
    }
  },
  {
    id: 'wp-5',
    name: 'CUCKOO TITAN',
    category: 'WATER PURIFIER',
    subtitle: '1st in Malaysia Instant 100°C Extra Hot & Tankless Water Purifier',
    description: 'Who knew such a tiny body could pack such titanic power? CUCKOO TITAN brings you instant 100°C hot water purified by cutting-edge filtration technologies, in-out auto sterilisation, voice navigation, and 166mm ultra-slim design.',
    image: '/images/titan-main.png',
    rentalPrice: 'From RM 109 / mth',
    rentalPlans: [
      { planName: 'Rental Option A (5-Year)', monthlyRate: 119, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'Rental Option B (7-Year)', monthlyRate: 109, months: 84, customerType: 'New / Existing Customer' },
      { planName: 'Trade In Rental Plan', monthlyRate: 109, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 4,550',
    ccspPrice: 'RM 737.10 / yr',
    features: [
      'Instant Extra Hot Function (100°C Boiling)',
      '5-Stage Advanced Filtration System',
      'Multiple Hot Water Temperature Settings',
      'Sterilisation Water Dispensing',
      'In & Out Auto-Sterilisation',
      'Adjustable Height Faucet',
      'Hidden Stop Touch Safety Button',
      'Voice Navigation in Malay & English',
      'Ambient Mood Lighting & Energy Saving'
    ],
    popular: true,
    tag: '100°C Tankless',
    specs: {
      'Model': 'CUCKOO TITAN',
      'Filtration Type': '5-Stage Filtration System',
      'Filter Replacement': 'Carbon Composite Filter (4mth), Nano Positive Filter (8mth)',
      'Power Consumption': 'Hot: 2400W | Cold: 100W',
      'Capacity': 'Direct Water Flow (Tankless) — Suitable for 2-4 members',
      'Dimensions & Weight': '166mm (W) x 514mm (D) x 399mm (H) | 11kg',
      'Rental Option A': 'RM 119.00/mth (5-Yr) with free 5-year service & warranty',
      'Rental Option B': 'RM 109.00/mth (7-Yr) with free 7-year service & warranty',
      'Outright Purchase': 'RM 4,550.00 (Free 1-year service & warranty)'
    }
  },
  {
    id: 'wp-6',
    name: 'CUCKOO KIUT',
    category: 'WATER PURIFIER',
    subtitle: 'Mild Alkaline Tankless Water Purifier',
    description: 'Match Your Mood with KIUT’s Interchangeable Panels (Pink / Blue / Silver). Featuring Faucet Electrolysis Sterilisation (99.99% bacteria-free), slim tankless design, and safety lock function.',
    image: '/images/kiut-main.png',
    rentalPrice: 'From RM 62 / mth',
    rentalPlans: [
      { planName: 'Rental Option A (5-Year)', monthlyRate: 72, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'Rental Option B (7-Year)', monthlyRate: 62, months: 84, customerType: 'New / Existing Customer' },
      { planName: 'Trade In Rental Plan', monthlyRate: 62, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 3,050',
    ccspPrice: 'RM 510.30 / yr',
    features: [
      'Interchangeable Panels (Pink / Blue / Silver)',
      'Faucet Electrolysis Sterilisation (99.99%)',
      'Multiple Volume Dispensing Options',
      'Slim Tankless Design',
      'Instant Freshness (One-Button Operation)',
      'Safety Lock Function'
    ],
    popular: true,
    tag: 'Trendy Choice',
    specs: {
      'Model': 'CUCKOO KIUT',
      'Product Colour': 'Joyful Pink | Cool Silver | Calm Blue',
      'Dimensions & Weight': '135mm (W) x 388mm (D) x 364mm (H) | 4kg',
      'Filtration Type': '4-Stage Filtration System',
      'Filter Replacement': 'Dual Sediment Carbon (4mth), Natural Plus 2.0 (8mth), Nano Positive (12mth)',
      'Tank Capacity': 'Tankless (Instant Dispense)',
      'Power Consumption': 'Room Temp: 52W',
      'Outright Purchase': 'RM3,050 (Enjoy RM100 Off + Free 2-yr service + free panel set)',
      'Rental Option A': 'RM72/mth (5-Yr) with free 5-year service & warranty',
      'Rental Option B': 'RM62/mth (7-Yr) with free 7-year service & warranty'
    }
  },
  {
    id: 'wp-7',
    name: 'CUCKOO GLAMOUR',
    category: 'WATER PURIFIER',
    subtitle: 'Champagne Pink & Matte Black Two-Toned Beauty',
    description: 'Don’t judge its abilities by its looks. CUCKOO GLAMOUR is a two-toned beauty in Champagne Pink & Matte Black with an extra-large 7.6L tank, multiple volume options, memory function, energy-saving mode, and instant hot water.',
    image: '/images/glamour-main.png',
    rentalPrice: 'From RM 100 / mth',
    rentalPlans: [
      { planName: 'Rental Option A (5-Year)', monthlyRate: 110, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'Rental Option B (7-Year)', monthlyRate: 100, months: 84, customerType: 'New / Existing Customer' },
      { planName: 'Trade In Rental Plan', monthlyRate: 100, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 4,350',
    ccspPrice: 'RM 646.38 / yr',
    features: [
      'Extra Large 7.6L Tank (4-8 Family Members)',
      'Multiple Volume Dispensing Options',
      'Child Lock Safety Features',
      'Smart Memory Function',
      'Energy-Saving Eco Mode',
      'Instant Hot Water Dispensing',
      '6-Stage Filtration System'
    ],
    popular: true,
    tag: 'Extra Large 7.6L',
    specs: {
      'Model': 'CUCKOO GLAMOUR',
      'Product Colour': 'Champagne Pink with Matte Black',
      'Filtration Type': '6-Stage Filtration System',
      'Filter Replacement': 'Sediment (4mth), Carbon Composite (4mth), Nano Positive (8mth)',
      'Power Consumption': 'Cold: 0.6A | Hot: 450W',
      'Tank Capacity': 'Cold: 2.5L | Room: 2.7L | Hot: 2.4L (Total 7.6L)',
      'Dimensions & Weight': '260mm (W) x 527mm (D) x 506mm (H) | 16.5kg',
      'Rental Option A': 'RM 110.00/mth (5-Yr) with free 5-year service & warranty',
      'Rental Option B': 'RM 100.00/mth (7-Yr) with free 7-year service & warranty',
      'Outright Purchase': 'RM 4,350.00 (Free 1-year service & warranty)'
    }
  },
  {
    id: 'wp-8',
    name: 'CUCKOO GRANDE',
    category: 'WATER PURIFIER',
    subtitle: 'Ultra Versatile • Highly Convenient • Super Innovative',
    description: 'Your hydration solution, now epic-sized. Capacity-packed and feature-loaded from 5°C cold to 100°C extra hot with faucet sterilisation, tri-lingual voice guide, and 7.6L tank capacity.',
    image: '/images/grandeimage1.png',
    rentalPrice: 'From RM 110 / mth',
    rentalPlans: [
      { planName: 'Rental Option A (5-Year)', monthlyRate: 121, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'Rental Option B (7-Year)', monthlyRate: 110, months: 84, customerType: 'New / Existing Customer' },
      { planName: 'Trade In Rental Plan', monthlyRate: 111, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 4,750',
    ccspPrice: 'RM 680.40 / yr',
    features: [
      'Fast & Fuss-Free (5°C to 100°C Extra Hot)',
      'Hot Water Faucet Sterilisation',
      '6-Stage Mild Alkaline Filtration System',
      'Tri-Lingual Voice Navigation (ENG / BM / CHN)',
      'Large 7.6-Litre Tank Capacity (Suitable for 4-8 Members)',
      'Memory Function & Energy Eye Sensor',
      'Mood Lamp & Voice Volume Control'
    ],
    popular: true,
    tag: '100°C Extra Hot & 7.6L',
    specs: {
      'Model': 'CUCKOO GRANDE',
      'Filtration Type': '6-Stage Filtration System',
      'Filter Replacement': 'Sediment (4mth), Carbon Composite (4mth), Nano Positive (8mth)',
      'Power Consumption': 'Cold: 0.6A | Hot: 450W | Extra Hot: 2400W',
      'Tank Capacity': 'Cold: 2.5L | Room: 2.7L | Hot & Extra Hot: 2.4L (Total 7.6L)',
      'Dimensions & Weight': '260mm (W) x 527mm (D) x 506mm (H) | 18.5kg',
      'Rental Option A': 'RM 121.00/mth (5-Yr) with free 5-year service & warranty',
      'Rental Option B': 'RM 110.00/mth (7-Yr) with free 7-year service & warranty',
      'Outright Purchase': 'RM 4,750.00 (Free 1-year service & warranty)'
    }
  },
  {
    id: 'wp-9',
    name: 'CUCKOO FLO (Flo Stand)',
    category: 'WATER PURIFIER',
    subtitle: 'Big Tank Sleek Style — Mild Alkaline Water Purifier',
    description: 'Experience unmatched capacity and cutting-edge design in every drop. Enjoy mild alkaline water all day from a generously-sized water purifier that’s sleek, efficient, and perfect for any space.',
    image: '/images/flostand-main.png',
    rentalPrice: 'From RM 92 / mth',
    rentalPlans: [
      { planName: 'Rental Option A (5-Year)', monthlyRate: 121, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'Rental Option B (7-Year)', monthlyRate: 92, months: 84, customerType: 'New / Existing Customer' },
      { planName: 'Trade In Rental Plan', monthlyRate: 111, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 4,450',
    ccspPrice: 'RM 793.80 / yr',
    features: [
      '16.0L Huge Tank Capacity',
      '6-Stage Mild Alkaline Filtration System',
      'Child Lock Safety Features',
      'Hot/Cold Water Indicator Light',
      'Instantly Dispenses Hot, Cold & Room Water'
    ],
    popular: true,
    tag: '16.0L Big Tank',
    specs: {
      'Product Name': 'CUCKOO FLO',
      'Product Colour': 'Matte White',
      'Filtration Type': '6-Stage Filtration System',
      'Filter Replacement': 'Sediment (4mth), Pre-Carbon 2.0 (8mth), Natural 2.0 (12mth), Nano Positive (12mth)',
      'Power Consumption': 'Cold: 0.8A | Hot: 500W',
      'Tank Capacity': 'Room: 7.0L | Cold: 5.0L | Hot: 4.0L (Total 16.0L)',
      'Dimensions & Weight': '360(W) x 465(D) x 1305(H) mm | 27.6kg',
      'Rental Option A': 'RM 121.00/mth (5-Yr) with free 5-year service & warranty',
      'Rental Option B': 'RM 92.00/mth (7-Yr) with free 7-year service & warranty',
      'Outright Purchase': 'RM 4,450.00 (Free 1-year service & warranty)'
    }
  },
  {
    id: 'wp-10',
    name: 'CUCKOO ACE UNDERSINK',
    category: 'WATER PURIFIER',
    subtitle: '1st Under Sink Water Purifier in Malaysia with Steam Sterilisation',
    description: '100°C Steam Sterilisation thoroughly sanitises the faucet with high heat to eliminate bacteria. Space-saving minimalist concealed design instantly dispenses 5°C cold to 100°C hot water.',
    image: '/images/aceundersink-main.png',
    rentalPrice: 'Outright Only',
    outrightPrice: 'RM 6,350',
    ccspPrice: 'RM 884.52 / yr',
    features: [
      '100°C Steam Sterilisation',
      'In & Out Auto Sterilisation & Cleaning Water',
      '5-Stage Filtration System',
      'Space-Saving Minimalist Design',
      'Instantly Dispenses 5°C Cold to 100°C Hot Water',
      'Kill 99.9% of Bacteria',
      'Human Detection Sensor',
      'One Touch Panel & Jog Dial (180° Rotation)'
    ],
    popular: true,
    tag: 'RM500 OFF PROMO',
    youtubeUrl: 'https://youtu.be/jn5EXPDW2Ms?si=wnJhmjLUc05eBJuv',
    youtubeEmbedId: 'jn5EXPDW2Ms',
    specs: {
      'Product Name': 'CUCKOO ACE (CP-AAS100ULDS)',
      'Type': 'Under Sink Water Purifier',
      'Rated Voltage': '200V / 60Hz',
      'Product Colour': 'Lumi Dark Silver',
      'Filtration Type': '5-Stage Filtration System (Carbon Composite & Nano Positive Filters)',
      'Operation Pressure': '15 PSI – 40 PSI',
      'Dimensions & Weight': 'Faucet: 61(W) x 187(D) x 306(H) mm | 0.9kg | Body: 166(W) x 390(D) x 418(H) mm | 11kg',
      'Power Consumption': '2600W | Cold Water: 0.6A | Hot Water: 2500W',
      'Capacity': 'Direct Water Flow',
      'Launching Promo Price': 'RM 6,350 (RM500 OFF + Free 2-Year Service & Warranty)',
      'Normal Price': 'RM 6,850 (Free 2-Year Service & Warranty)'
    }
  },

  // --- OUTDOOR FILTER (1 Model) ---
  {
    id: 'of-1',
    name: 'CUCKOO Prime X3 Outdoor Filter',
    category: 'OUTDOOR FILTER',
    subtitle: 'FILTER THE WATER BEFORE IT REACHES YOUR TAPS',
    description: 'Outdoor water filtration systems are whole-home systems installed on the main pipeline that supplies water to your home for everyday use. Features Re-Engineered PVDF 2.0 Ultra-Filtration Membrane (0.05μm), Prime-X Flush System, Automated Flushing System, Royal Out-To-In Filtration System, SS304 Stainless Steel Vessel, and Non-Electric Compact High-Performance Design.',
    image: '/images/primex3-main.png',
    rentalPrice: 'RM 88 / mth',
    rentalPlans: [
      { planName: 'Normal Rental Plan (60 Months)', monthlyRate: 88, months: 60, customerType: 'New / Existing Customer' }
    ],
    outrightPrice: 'RM 2,100',
    ccspPrice: 'RM 601.02 / yr (Free 1 Yr Included)',
    features: [
      'Re-Engineered PVDF 2.0 Ultra-Filtration Membrane (0.05 μm)',
      'Prime-X Flush System & Automated Flushing System',
      'Royal Out-To-In Filtration Technology',
      'SS304 Premium Stainless Steel Vessel',
      'Non-Electric Outdoor Filter (Zero Power Consumption)',
      'Ultra-Compact Footprint (135mm W × 155mm D × 590mm H)',
      'Free Filter Replacement on 36th Month',
      'Free Auto-Flush Timer (worth RM100)'
    ],
    popular: true,
    tag: 'Whole-Home UF Filter',
    youtubeUrl: 'https://youtu.be/Sv7qAWjG49I?si=FdPUUzwWj2BmEa7O',
    youtubeEmbedId: 'Sv7qAWjG49I',
    specs: {
      'Model': 'CUCKOO Prime X3 Outdoor Filter',
      'Dimensions (W × D × H)': '135 mm (Front W) × 155 mm (Side D) × 590 mm (H)',
      'Membrane Pore Size': '0.05 μm (PVDF 2.0 Membrane)',
      'Vessel Casing': 'SS304 Heavy-Duty Stainless Steel',
      'Filtration System': 'Royal Out-To-In Ultra-Filtration System',
      'Flushing System': 'Prime-X Flush + Automated Flushing Timer',
      'Power Consumption': 'Non-Electric System (0 Watts)',
      'Rental Option': 'RM 88 / month (60-Month contract)',
      'Rental Perks': 'Free 6-monthly servicing, Free filter replacement on 36th month, Free Auto-Flush Timer (RM100)',
      'Outright Purchase': 'RM 2,100.00 (Promo Price, Free 1-year CCSP service & warranty)'
    }
  },

  // --- AIR PURIFIER (7 Models) ---
  {
    id: 'ap-r',
    name: 'CUCKOO R Model',
    category: 'AIR PURIFIER',
    subtitle: 'Charming & Amazing — Protecting Your Health In Style (570 sq. ft.)',
    description: 'All-new CUCKOO R Model Air Purifier, winner of the prestigious Red Dot Design Award. Designed and manufactured in South Korea, featuring 3-stage filtration system (Pre-Filter, Deodorisation Filter, True HEPA H13), 8-colour LED Air Quality Indicator, gracefully subtle 56dB low noise level, and 7 user-friendly operating modes for coverage up to 570 sq. ft.',
    image: '/images/rmodel-main.png',
    rentalPrice: 'From RM 67 / mth',
    rentalPlans: [
      { planName: '5 Years Rental Plan (Normal)', monthlyRate: 77, months: 60, customerType: 'New / Existing Customer' },
      { planName: '5 Years Rental Plan (Trade In)', monthlyRate: 67, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 2,550',
    ccspPrice: 'RM 440.00 / yr',
    features: [
      'Red Dot Design Award Winner (South Korea)',
      '3-Stage Filtration System (True HEPA H13)',
      '8-Colour LED Air Quality Indicator',
      'Gracefully Subtle 56dB Low Noise Level',
      '7 Operating Modes (Auto, Sleep, Turbo, etc.)',
      'Coverage Area 53 m² / 570 sq. ft.',
      'CADR Rate 414 m³/h (243 cfm)',
      'Power Consumption 50W | Lightweight 6.7kg'
    ],
    popular: true,
    tag: 'Red Dot Award Winner 🏆',
    youtubeUrl: 'https://youtu.be/Ltt1R3IlMew',
    youtubeEmbedId: 'Ltt1R3IlMew',
    specs: {
      'PRODUCT NAME': 'CUCKOO R MODEL',
      'RATED VOLTAGE': 'Single Phase AC 220-240V / 50 Hz',
      'NOISE LEVEL': '56 db',
      'COVERAGE AREA': '53 m² / 570 Sqft',
      'CADR': '414 m³ / 243 cfm',
      'POWER CONSUMPTION': '50W',
      'FILTERATION STAGES': '3-Stage Filtration System',
      'FILTERS': 'Pre-Filter, Deodorisation Filter, True HEPA H13 Filter',
      'MODES': 'Timer Mode, Sleep Mode, Turbo Mode, Energy Eye Mode, Auto Mode, Manual Mode, Button Sound Mode',
      'DIMENSIONS & WEIGHT': '384mm(W) x 208mm(D) x 576mm(H) | 6.7kg',
      'Purchase (Outright)': 'RM 2,550.00 (Free 1-year service & warranty)',
      'Rent (Rental Plan)': 'RM 77.00/month (1st - 5th Year) (Free 5-year service & warranty)',
      'CCSP': 'RM 440.00/year'
    }
  },
  {
    id: 'ap-l',
    name: 'CUCKOO L Model',
    category: 'AIR PURIFIER',
    subtitle: 'Ultra-Deo HEPA+ H13 Filter For Ultra Clean Air',
    description: 'More Freshness & comfort with CUCKOO L Model Air Purifier. Features CUCKOO Plasma Ioniser to improve air quality and reduce virus levels, Ultra-Deo HEPA+ H13 Filter with Copper Sulfide, 4-Stage Filtration System, 8-Colour LED PM2.5 indicator, Voice Navigation, and up to 7 operation modes for coverage up to 600 sq. ft.',
    image: '/images/lmodel-main.png',
    rentalPrice: 'From RM 95 / mth',
    rentalPlans: [
      { planName: '5 Years Rental Plan (Normal)', monthlyRate: 105, months: 60, customerType: 'New / Existing Customer' },
      { planName: '5 Years Rental Plan (Trade In)', monthlyRate: 95, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 3,200',
    ccspPrice: 'RM 615.60 / yr (Free 2 Yrs Included)',
    features: [
      'CUCKOO Plasma Ioniser (Reduces Viruses)',
      'Ultra-Deo HEPA+ H13 with Copper Sulfide',
      '4 Stage Filtration System (3 Filters)',
      'PM2.5 Quality Indicator (8-Colour LED)',
      'Coverage Area up to 600 sq. ft.',
      'Voice Navigation (ENG / BM / CN)',
      'Strengthens Your Immune System',
      'Up to 7 Operation Modes'
    ],
    popular: true,
    tag: 'NEW 🔥',
    specs: {
      'Model': 'CUCKOO L Model',
      'Product Weight': '7kg',
      'Product Dimensions': '384mm(W) x 218mm(D) x 576mm(H)',
      'Power Consumption (W)': '60W',
      'Rated Voltage (V)': '220-240V / 50Hz',
      'Coverage (sq. ft.)': '600 sq. ft.',
      'Noise Level (dB)': '55dB',
      'Voice Navigation': 'English, Malay, Chinese',
      'Air Quality Indicator': 'PM 2.5 (8 Colour LED Indicator)',
      'Sensor': 'Illumination Sensor & Dust Sensor',
      'Plasma Ioniser': 'Yes (Improves air quality & reduces viruses)',
      'Fan Speed Control': '2 Speed + Turbo',
      'HEPA Filter': 'Ultra-Deo HEPA+ H13 Filter (coated with Copper Sulfide)',
      'Filters Stage': '3 Filter with 4-Stage Filtration (Pre, Allergen, True HEPA+ H13, Deodorisation)',
      'Features & Modes': '7 Modes (Auto/Eco, Turbo, Energy Conservation, Sleep, Manual, Timer, Child Lock)',
      'Outright Purchase': 'RM 3,200 (FREE 1 Year Scheduled Service & Warranty)',
      '5 Years Rental Plan': 'RM105/mth (1st-5th Year) (Free 5-Year Service & Warranty Every 4 Months)'
    }
  },
  {
    id: 'ap-k',
    name: 'CUCKOO K Model',
    category: 'AIR PURIFIER',
    subtitle: 'HEAVY ON PERFORMANCE, LIGHT ON WALLET (710 sq ft)',
    description: 'Easy to carry, hard on pollutants. The CUCKOO K Model is a lightweight 7.0kg air purifier equipped with powerful 4-stage filtration system, 1-button simple control, 6 operating modes, and an impressive CADR rate of 520 m³/h to safeguard ultrawide rooms up to 710 sq ft.',
    image: '/images/kmodel-main.png',
    rentalPrice: 'From RM 84 / mth',
    rentalPlans: [
      { planName: '5 Years Rental Plan (Normal)', monthlyRate: 94, months: 60, customerType: 'New / Existing Customer' },
      { planName: '5 Years Rental Plan (Trade In)', monthlyRate: 84, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 2,750',
    ccspPrice: 'RM 605.00 / yr',
    features: [
      'Ultrawide 710 sq ft (66m²) Coverage Area',
      '4-Stage Filtration System (Ultra-Deo HEPA13)',
      '1 Button Simple & Effortless Control',
      '6 Operating Modes (Auto, Baby, Turbo, etc.)',
      'High CADR Rate 520 m³/h',
      'Lightweight 7.0kg & Portable Body',
      'Low Noise Level <60 dB(A)',
      'Power Consumption 60W'
    ],
    popular: true,
    tag: 'Ultrawide 710 sqft 🔥',
    youtubeUrl: 'https://youtu.be/UL4jJnxzbXQ',
    youtubeEmbedId: 'UL4jJnxzbXQ',
    specs: {
      'Model': 'CUCKOO K MODEL',
      'Power Consumption': 'Single Phase AC 220-240V / 60W',
      'Noise Level': '< 60 db (A)',
      'Coverage': '66m² / 710 sq ft',
      'CADR': '520 m³ / h',
      'Product Size & Weight': '336mm(W) x 336mm(D) x 650mm(H) | 7.0kg',
      'Filtration Stages': '4 Filtration Stages',
      'Filters': 'Pre Filter, Allergen Filter, Ultra-Deo HEPA13 Filter (True HEPA H13 Filter & Deodorisation Filter)',
      'Features': '6 Modes (Auto, Baby, Manual, Turbo, Button Sound, Energy Eye)',
      'Purchase (Outright)': 'RM 2,750.00 (Free 1-year service & warranty)',
      'Rent (Rental Plan)': 'RM 94.00/month (1st - 5th Year) (Free 5-year service & warranty)',
      'CCSP': 'RM 605.00/year'
    }
  },
  {
    id: 'ap-d',
    name: 'CUCKOO D Model',
    category: 'AIR PURIFIER',
    subtitle: 'BREATHE BIG — 360° Absorption & Massive Coverage (710.42 sq ft)',
    description: 'Intelligently built to offer 360° purified air with HUGE coverage for offices and spacious homes. Features 4-stage filtration system with Ultra-Deo HEPA14 Filter, CUCKOO Plasma Ioniser, 6-colour air cleanliness indicator, 10 operating modes, and 4-language voice navigation.',
    image: '/images/dmodel-main.png',
    rentalPrice: 'From RM 117 / mth',
    rentalPlans: [
      { planName: '5 Years Rental Plan (Normal)', monthlyRate: 127, months: 60, customerType: 'New / Existing Customer' },
      { planName: '5 Years Rental Plan (Trade In)', monthlyRate: 117, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 3,550',
    ccspPrice: 'RM 605.00 / yr',
    features: [
      '360° Absorption with Massive Coverage (710.42 sq ft)',
      'Ultra-Deo HEPA14 Filter (True HEPA H14 + Deodorization)',
      'CUCKOO Plasma Ioniser Sterilisation Technology',
      '6-Colour Air Cleanliness LED Indicator',
      '10 Operating Modes (Auto, Baby, Sterilisation, Yellow Dust)',
      'Voice Navigation in 4 Languages (ENG, BM, CN, KR)',
      'Fine Dust Sensor & Filter Replacement Indicator',
      'Power Consumption 65W | Weight 11 kg'
    ],
    popular: true,
    tag: '360° Massive Coverage 🏢',
    specs: {
      'Model': 'CUCKOO D MODEL',
      'Product Weight & Dimensions': '11 kg | 396mm(W) x 396mm(D) x 755mm(H)',
      'Recommended Coverage Area': '66 m² / 710.42 ft²',
      'Power Consumption': '65W',
      'Sensor': 'Fine Dust Sensor',
      'Modes': '10 Modes (Auto, Baby, Lock, Repeat, Energy Eye, Turbo, Filter Replacement, Sterilisation, Room Care, Yellow Dust)',
      'Filters': 'Pre-Filter, Allergen Filter, Ultra-Deo HEPA14 Filter (Combines Deodorisation Filter + True HEPA H14)',
      'Voice Navigation': 'English, Malay, Chinese, Korean',
      'Purchase (Outright)': 'RM 3,550.00 (Free 1-year service & warranty)',
      'Rent (Rental Plan)': 'RM 127.00/month (1st - 5th Year) (Free 5-year service & warranty)',
      'CCSP': 'RM 605.00/year'
    }
  },
  {
    id: 'ap-cplus',
    name: 'CUCKOO C+ Model',
    category: 'AIR PURIFIER',
    subtitle: 'Air Purifier + Humidifier — Purified & Humidified Air (402.57 sq. ft.)',
    description: 'Malaysia’s 1st air purifier + humidifier with periodic service. CUCKOO C+ Model delivers purified and humidified air with superfine moisture particles (300ml/h), True HEPA H14 Filter (eliminates 99.95% dust), CUCKOO Plasma Ioniser, 5-stage filtration, 11 operating modes, and 4-language voice guide.',
    image: '/images/c+model-main.png',
    rentalPrice: 'From RM 111 / mth',
    rentalPlans: [
      { planName: '5 Years Rental Plan (Normal)', monthlyRate: 121, months: 60, customerType: 'New / Existing Customer' },
      { planName: '5 Years Rental Plan (Trade In)', monthlyRate: 111, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 3,100',
    ccspPrice: 'RM 660.00 / yr',
    features: [
      '2-in-1 Air Purifier + Humidifier',
      'Superfine Humidification Moisture (300 ml/h)',
      'True HEPA H14 Filter (99.95% Filtration)',
      'CUCKOO Plasma Ioniser Technology',
      '5-Stage Filtration System',
      '11 Operating Modes (Auto Humidity, Sterilisation, etc.)',
      'Voice Navigation in 4 Languages (ENG, BM, CN, KR)',
      'Water Tank Size: 2.5 L | Low Energy 25W'
    ],
    popular: true,
    tag: 'Purifier + Humidifier 💦',
    youtubeUrl: 'https://youtu.be/8MpRsqxfuk0',
    youtubeEmbedId: '8MpRsqxfuk0',
    specs: {
      'Model': 'C+ Model | Air Purifier + Humidifier',
      'Product Weight & Dimensions': '9.2 kg | 430mm(W) x 276mm(D) x 550mm(H)',
      'Recommended Coverage Area': '37.4 m² / 402.57 ft²',
      'Power Consumption': '25W',
      'Humidifying Capability & Tank': '300 ml/h | Water Tank Size: 2.5 L',
      'Sensors': 'Fine Dust Sensor & Humidification Sensor',
      'Modes': '11 Modes (Auto, Baby, Lock, Auto Humidity, Repeat, Energy Eye, Turbo, Filter Replacement, Sterilisation, Room Care, Yellow Dust)',
      'Filters': 'Pre-Filter, Harmful Gas Relax Filter, Deodorisation Filter, True HEPA H14 Filter, Humidification Filter',
      'Voice Navigation': 'English, Malay, Chinese, Korean',
      'Purchase (Outright)': 'RM 3,100.00 (Free 1-year service & warranty)',
      'Rent (Rental Plan)': 'RM 121.00/month (1st - 5th Year) (Free 5-year service & warranty)',
      'CCSP': 'RM 660.00/year'
    }
  },
  {
    id: 'ap-u',
    name: 'CUCKOO U Model',
    category: 'AIR PURIFIER',
    subtitle: 'Filtering Power and Coverage Unlike Any Other (1161 sq ft)',
    description: 'Breathe in only the best with CUCKOO U Model. Advanced multi-level protection safeguards your air from even the nano-est impurities in every corner. Features massive 360° absorption coverage (107.9m² / 1161 sq.ft.), effective 8-Colour LED Air Quality Indicator, CUCKOO Plasma Ionizer, Ultra-Deo HEPA+ Filter (removes 99.995% airborne particles), and 10 operating modes. Perfect for commercial use.',
    image: '/images/umodel-main.png',
    rentalPrice: 'From RM 133 / mth',
    rentalPlans: [
      { planName: '5 Years Rental Plan (Normal)', monthlyRate: 143, months: 60, customerType: 'New / Existing Customer' },
      { planName: '5 Years Rental Plan (Trade In)', monthlyRate: 133, months: 60, customerType: 'Existing Customer Only' }
    ],
    outrightPrice: 'RM 4,400',
    ccspPrice: 'RM 770.00 / yr',
    features: [
      'Massive 360° Absorption (1161 sq. ft.)',
      'Removes 99.995% Airborne Particles',
      'Effective 8-Colour LED Air Quality Indicator',
      'Extra-Pure Air with CUCKOO Plasma Ionizer',
      '10 Operating Modes Available',
      'Ultra-Deo HEPA+ H14 Filter',
      'Perfect for Commercial & Office Use',
      '4-Stage Filtration System'
    ],
    tag: 'Commercial & Large Spaces 🔥',
    specs: {
      'MODEL': 'CUCKOO U MODEL',
      'POWER CONSUMPTION': 'AC 220 - 240 / 50 Hz',
      'RATED POWER CONSUMPTION': '80W (1.5A)',
      'NOISE LEVEL': '53.7 dBA',
      'COVERAGE': '107.9m² / 1161 sq.ft.',
      'PRODUCT SIZE & WEIGHT': '410 mm(W) x 410 mm(D) x 895mm(H) | 14kg',
      'FILTRATION STAGES': '4-Stage Filtration System',
      'FILTERS': 'Pre-Filter, Allergen Filter, Ultra-Deo HEPA+ Filter (True HEPA+ H14 + Deodorization Filter)',
      'OPERATING MODE': '10 Modes (Smart, ECO, Repeat, Fine Dust, Sleep, Baby, Turbo Plus, Manual, Energy Eye, Refresh)',
      'Purchase (Outright)': 'RM 4,400.00 (Free 1-year service & warranty)',
      'Rent (Rental Plan)': 'RM 143.00/month (1st - 5th Year) (Free 5-year service & warranty)',
      'CCSP': 'RM 770.00/year'
    }
  },
  {
    id: 'ap-i',
    name: 'CUCKOO i Model',
    category: 'AIR PURIFIER',
    subtitle: 'Compact Design • LED Air Quality Indicator • 3-Stage Filtration',
    description: 'Compact CUCKOO i Model Air Purifier featuring real-time LED air quality indicator, dust sensor automatic operation, Ioniser mode, and 3-stage Ultra-Deo HEPA H13 filtration. Special Outright promotion at RM1,400 (Discount RM600 off original RM2,000 price, includes 3 Sets of Ultra-Deo HEPA Filters).',
    image: '/images/imodel-main.png',
    rentalPrice: 'Outright Only',
    outrightPrice: 'RM 1,400 (Was RM 2,000)',
    ccspPrice: 'Includes 3 Sets Filters',
    features: [
      'Compact Design & Space-Saving',
      'LED Air Quality Indicator',
      'Automatic Operation (Dust Sensor)',
      '3-Stage Ultra-Deo HEPA H13 Filtration',
      'Coverage Area 32.9m² / 354 sq. ft.',
      'CADR Rate 219 m³/h',
      'Power Consumption 45W | Noise <55dB',
      'Includes 3 Sets Ultra-Deo HEPA Filters'
    ],
    popular: true,
    tag: 'RM600 OFF PROMO 🔥',
    specs: {
      'Product Name': 'CUCKOO i Model Air Purifier',
      'Coverage Area': '32.9m² / 354ft²',
      'CADR': '219m³/h',
      'Noise': '<55dB',
      'Power Consumption': '45W',
      'Power Supply': 'Input: 100-240V, 50Hz/60Hz | Output: 24V/2.0A',
      'Modes': 'Timer Mode | Auto Mode | Manual Mode | Ioniser Mode',
      'Filtration Stages': '3-Stage Filtration System',
      'Filters': 'Ultra-Deo HEPA Filter (Pre-Filter, Deodorisation Filter, True HEPA H13 Filter)',
      'DIY Filter Replacement': 'Every 4 Months',
      'Dimensions & Weight': '244mm(W) x 244mm(D) x 544mm(H) | 3.45kg',
      'Outright Purchase': 'RM 1,400 (Original RM 2,000 - Save RM 600! Includes 3 Sets Filters)'
    }
  },

  // --- MASSAGE CHAIR (2 Models) ---
  {
    id: 'mc-1',
    name: 'Bespoke Lounger',
    category: 'MASSAGE CHAIR',
    subtitle: 'CUCKOO BESPOKE Massage Lounger (Cosy Caramel)',
    description: 'Executive luxury massage lounger with 119cm L-Track massage, lumbar thermotherapy (45°C), 8 compression airbags, and 2-stage zero gravity recline (125° & 136°). Requires only 6cm wall clearance with ultra-quiet 50-58dB operation.',
    image: '/images/lounger-main.jpg',
    rentalPrice: 'From RM 99 / mth',
    rentalPlans: [
      { planName: 'Rental Plan (60 Months / 5 Years)', monthlyRate: 99, months: 60, customerType: 'New & Existing Customer' }
    ],
    outrightPrice: 'RM 4,999',
    ccspPrice: 'RM 480 (CUCKOO+ Care Package)',
    features: [
      'Colour: Cosy Caramel',
      'Rental RM 99 / mth (60 Months) - Free Service Every 6 Mths',
      'Outright RM 4,999 (Orig. RM 6,500 - Save RM 1,501 🔥)',
      'FREE 1 Year Scheduled Service & Warranty Included',
      'CUCKOO+ Care Package RM 480 - Free 1-Time Service & Leather Change',
      'Lumbar Thermotherapy Heat Therapy (45°C)',
      '8 Airbags System (2 Lumbar + 6 Calf)',
      'Zero Gravity 2-Stage Recline (125° & 136°)',
      'Compact Wall Clearance: 6cm',
      '119cm L-Track Massage Rail',
      'FREE Delivery, Installation & Processing Fees'
    ],
    popular: true,
    tag: 'PROMO 🔥',
    youtubeUrl: 'https://youtu.be/2r3KQBvN-fY?si=q_HYswVhrxHTIFzX',
    youtubeEmbedId: '2r3KQBvN-fY',
    specs: {
      'Brand & Model': 'CUCKOO BESPOKE Massage Lounger',
      'Colour': 'Cosy Caramel',
      'Rental Plan (5 Years)': 'RM 99 / mth (FREE Scheduled Service Every 6 Months)',
      'Outright Purchase': 'RM 4,999 [Orig. RM 6,500 - Save RM 1,501 OFF] (FREE 1 Year Scheduled Service & Warranty)',
      'CUCKOO+ Care Service': 'RM 480 (FREE 1-Time Service & Leather Change)',
      'Size - Regular (Upright)': '120cm × 65cm × 106cm',
      'Size - Reclined': '140cm × 65cm × 84cm',
      'Distance From Wall': '6cm (Compact Zero Wall Clearance)',
      'Massage Track': 'Length: 119cm | Width: 31.5cm',
      'Thermotherapy': 'Lumbar Area (Heat around 45°C)',
      'Airbags': '8 Airbags (2 Lumbar Airbags, 6 Calf Airbags)',
      'Zero Gravity Angles': 'Stage 1: 125° | Stage 2: 136°',
      'Recommended User Weight': 'Up to 100kg',
      'Noise Level': 'Min 50dB ~ Max 58dB',
      'Power Consumption': '100W (AC 220-240V~, 50-60Hz)',
      'Materials': 'Frame: Metal | Cover: Premium Leather',
      'Weight': 'Gross Weight: Approx. 61.5kg | Net Weight: Approx. 51.5kg'
    }
  },
  {
    id: 'mc-2',
    name: 'Bespoke 2.0 Massage Chair By OGAWA',
    category: 'MASSAGE CHAIR',
    subtitle: 'Executive Smart AI Massage Chair Co-Created with OGAWA',
    description: 'Premium Smart 4D AI Massage Chair engineered in partnership with OGAWA for total body relaxation. Features zero-gravity recline, heat therapy, custom airbag compression, free service & warranty, and free leather replacement at the 36th month.',
    image: '/images/bespoke2-main.png',
    rentalPrice: 'From RM 133 / mth',
    rentalPlans: [
      { planName: 'Normal Rental Plan', monthlyRate: 148, months: 60, customerType: 'New & Existing Customer' },
      { planName: 'Loyalty Rental Plan', monthlyRate: 133, months: 60, customerType: 'Existing Customer Only (Save RM15/mth)' }
    ],
    outrightPrice: 'RM 7,750',
    ccspPrice: 'N/A',
    features: [
      'Co-Created with OGAWA',
      'Normal Rental: RM 148 / mth (60 Months)',
      'Loyalty Rental: RM 133 / mth (Existing CUCKOO Users - Save RM15/mth)',
      'Outright Promo: RM 7,750 (Orig. RM 8,250 - Save RM500)',
      '34 Airbags & 6 Massage Programs (11 Techniques)',
      'Dual Stage Zero Gravity (126° & 170°)',
      'Thermotherapy Lumbar Back Heat (~45°C)',
      'Free OGAWA Comfy Eyemask worth RM139 (Early Bird)',
      'FREE Delivery, Installation & Processing Fees'
    ],
    popular: true,
    tag: 'OGAWA Co-Created',
    specs: {
      'Brand Partnership': 'CUCKOO × OGAWA',
      'Model Name': 'CUCKOO BESPOKE 2 Massage Chair',
      'Normal Rental Fee': 'RM 148 / month (60 months)',
      'Loyalty Rental Fee': 'RM 133 / month (Existing CUCKOO Customer - Save RM15/mth)',
      'Outright Purchase': 'RM 7,750 [Orig. RM 8,250] + Free OGAWA Comfy Eyemask (RM139)',
      'Service & Warranty': 'FREE 5 Years Service & Warranty (Rental) / 3 Years (Outright)',
      'Colours': 'Charcoal Grey with Metallic Champagne Gold',
      'Airbags': '34 Airbags (Hand, Shoulder, Upper & Lower Leg)',
      'Zero Gravity': 'Stage 1 (126°) & Stage 2 (170°)',
      'Heat Therapy': '~45°C Lumbar Thermotherapy',
      'Dimensions (L×W×H)': 'Regular: 151.5cm × 76cm × 110.5cm | Reclined: 181.0cm × 76cm × 89.5cm',
      'Wall Clearance': '26cm',
      'Delivery & Installation': 'FREE Delivery & Installation Fees'
    }
  },

  // --- AIR CONDITIONER (1 Model with 2 Variety) ---
  {
    id: 'ac-1-10',
    name: 'CUCKOO Vita 5TAR 1.0HP',
    category: 'AIRCONDITIONER',
    subtitle: 'CUCKOO x Fujiaire 5-Star Inverter Air Conditioner (1.0HP)',
    description: 'CUCKOO x Fujiaire Vita 5TAR 1.0HP 5-Star Inverter Air Conditioner with high energy efficiency (saves 25% more energy compared to 4-Star). Includes free scheduled servicing every 6 months, free installation, and free delivery fees. *Terms and conditions applied.',
    image: '/images/vita-main.png',
    rentalPrice: 'From RM 88 / mth',
    rentalPlans: [
      { planName: 'Normal Rental Plan', monthlyRate: 103, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'Loyalty Rental Plan', monthlyRate: 88, months: 60, customerType: 'Existing Customer Only (Save RM15/mth)' }
    ],
    outrightPrice: 'N/A',
    ccspPrice: 'N/A',
    features: [
      '5-Star Inverter Cooling',
      'Saves 25% More Energy vs 4-Star',
      'Normal Plan: RM 103 / mth (60 Months Contract)',
      'Loyalty Plan: RM 88 / mth (Existing CUCKOO Users - Save RM15/mth)',
      'Free Servicing Every 6 Months',
      'FREE Standard Installation',
      '✔ 10ft Copper Piping',
      '✔ 10ft Electrical Wiring',
      '(As per Official Installation SOP)',
      '*Terms and conditions applied'
    ],
    popular: true,
    tag: '5-Star Inverter',
    specs: {
      'Brand Partnership': 'CUCKOO x Fujiaire',
      'Energy Rating': '5-Star Inverter Cooling',
      'Energy Efficiency': 'Saves 25% more energy compared to 4-Star',
      'Model': 'CUCKOO Vita 5TAR 1.0HP',
      'Normal Rental Fee': 'RM 103 / month (60 months)',
      'Loyalty Rental Fee': 'RM 88 / month (Existing CUCKOO Customer - Save RM15/mth)',
      'Service Frequency': 'Every 6 months',
      'Installation': 'FREE Standard Installation',
      'Installation Package': '10ft Copper Piping & 10ft Electrical Wiring (As per Official Installation SOP)',
      'Delivery Fees': 'FREE Delivery',
      'Outright Plan': 'N/A',
      'CCSP Service': 'N/A',
      'Note': '*Terms and conditions applied'
    }
  },
  {
    id: 'ac-1-15',
    name: 'CUCKOO Vita 5TAR 1.5HP',
    category: 'AIRCONDITIONER',
    subtitle: 'CUCKOO x Fujiaire 5-Star Inverter Air Conditioner (1.5HP)',
    description: 'CUCKOO x Fujiaire Vita 5TAR 1.5HP 5-Star Inverter Air Conditioner with high energy efficiency (saves 25% more energy compared to 4-Star). Includes free scheduled servicing every 6 months, free installation, and free delivery fees. *Terms and conditions applied.',
    image: '/images/vita-main.png',
    rentalPrice: 'From RM 98 / mth',
    rentalPlans: [
      { planName: 'Normal Rental Plan', monthlyRate: 113, months: 60, customerType: 'New / Existing Customer' },
      { planName: 'Loyalty Rental Plan', monthlyRate: 98, months: 60, customerType: 'Existing Customer Only (Save RM15/mth)' }
    ],
    outrightPrice: 'N/A',
    ccspPrice: 'N/A',
    features: [
      '5-Star Inverter Cooling',
      'Saves 25% More Energy vs 4-Star',
      'Normal Plan: RM 113 / mth (60 Months Contract)',
      'Loyalty Plan: RM 98 / mth (Existing CUCKOO Users - Save RM15/mth)',
      'Free Servicing Every 6 Months',
      'FREE Standard Installation',
      '✔ 10ft Copper Piping',
      '✔ 10ft Electrical Wiring',
      '(As per Official Installation SOP)',
      '*Terms and conditions applied'
    ],
    popular: true,
    tag: '5-Star Inverter',
    specs: {
      'Brand Partnership': 'CUCKOO x Fujiaire',
      'Energy Rating': '5-Star Inverter Cooling',
      'Energy Efficiency': 'Saves 25% more energy compared to 4-Star',
      'Model': 'CUCKOO Vita 5TAR 1.5HP',
      'Normal Rental Fee': 'RM 113 / month (60 months)',
      'Loyalty Rental Fee': 'RM 98 / month (Existing CUCKOO Customer - Save RM15/mth)',
      'Service Frequency': 'Every 6 months',
      'Installation': 'FREE Standard Installation',
      'Installation Package': '10ft Copper Piping & 10ft Electrical Wiring (As per Official Installation SOP)',
      'Delivery Fees': 'FREE Delivery',
      'Outright Plan': 'N/A',
      'CCSP Service': 'N/A',
      'Note': '*Terms and conditions applied'
    }
  },

  // --- MATTRESS (4 Models) ---
  {
    id: 'mt-1',
    name: 'A-Luxe Mattress by Napure',
    category: 'MATTRESS',
    subtitle: 'Luxury Ergonomic Spine Care Mattress with Natural Latex',
    description: 'A-Luxe Mattress by Napure offers premium spinal support and ergonomic motion isolation. Available in Queen and King sizes, with or without bedframe, across 36, 60, or 84-month rental plans.',
    image: '/images/aluxe-main.png',
    rentalPrice: 'From RM 108 / mth',
    outrightPrice: 'From RM 5,350',
    ccspPrice: 'N/A',
    rentalPlans: [
      { planName: 'Queen (w/o Frame - 84m)', monthlyRate: 108, months: 84, customerType: 'Queen Size' },
      { planName: 'Queen (w/o Frame - 60m)', monthlyRate: 133, months: 60, customerType: 'Queen Size' },
      { planName: 'Queen (w/o Frame - 36m)', monthlyRate: 154, months: 36, customerType: 'Queen Size' },
      { planName: 'Queen (with Frame - 84m)', monthlyRate: 139, months: 84, customerType: 'Queen + Frame' },
      { planName: 'Queen (with Frame - 60m)', monthlyRate: 163, months: 60, customerType: 'Queen + Frame' },
      { planName: 'King (w/o Frame - 84m)', monthlyRate: 129, months: 84, customerType: 'King Size' },
      { planName: 'King (w/o Frame - 60m)', monthlyRate: 153, months: 60, customerType: 'King Size' },
      { planName: 'King (w/o Frame - 36m)', monthlyRate: 185, months: 36, customerType: 'King Size' },
      { planName: 'King (with Frame - 84m)', monthlyRate: 159, months: 84, customerType: 'King + Frame' },
      { planName: 'King (with Frame - 60m)', monthlyRate: 184, months: 60, customerType: 'King + Frame' }
    ],
    outrightPlans: [
      { optionName: 'Queen Size (Without Bedframe)', outrightPrice: 'RM 5,350', perks: 'Free 2x Waterproof Mattress Protector + Delivery' },
      { optionName: 'Queen Size (With Bedframe)', outrightPrice: 'RM 6,600', perks: 'Free 2x Waterproof Mattress Protector + Delivery' },
      { optionName: 'King Size (Without Bedframe)', outrightPrice: 'RM 5,650', perks: 'Free 2x Waterproof Mattress Protector + Delivery' },
      { optionName: 'King Size (With Bedframe)', outrightPrice: 'RM 6,900', perks: 'Free 2x Waterproof Mattress Protector + Delivery' }
    ],
    features: [
      'FREE 2x Waterproof Mattress Protector 🎁',
      'FREE Delivery & Professional Installation',
      'FREE Processing Fees',
      '36, 60 & 84 Months Rental Plans',
      'Queen & King Sizes (With / Without Bedframe)',
      'Natural Latex Ergonomic Spine Care'
    ],
    popular: true,
    tag: 'Napure Luxury Series',
    youtubeUrl: 'https://youtu.be/DMrJChwdLuY?si=nUDQa-wjNWFT7Bvb',
    youtubeEmbedId: 'DMrJChwdLuY',
    specs: {
      'Brand': 'A-Luxe by Napure',
      'Free Gift': '2 x Waterproof Mattress Protector',
      'Queen (w/o Frame)': '84m: RM108/mth | 60m: RM133/mth | 36m: RM154/mth | Outright RM5,350',
      'Queen (with Frame)': '84m: RM139/mth | 60m: RM163/mth | 36m: N/A | Outright RM6,600',
      'King (w/o Frame)': '84m: RM129/mth | 60m: RM153/mth | 36m: RM185/mth | Outright RM5,650',
      'King (with Frame)': '84m: RM159/mth | 60m: RM184/mth | 36m: N/A | Outright RM6,900',
      'Delivery & Fees': 'FREE Delivery, Processing & Installation'
    }
  },
  {
    id: 'mt-2',
    name: 'A-Lite Mattress by Napure',
    category: 'MATTRESS',
    subtitle: 'Streamlined Comfort & Ergonomic Support Mattress',
    description: 'A-Lite Mattress by Napure provides balanced pressure relief and body alignment for restorative sleep at an affordable 60-month rental.',
    image: '/images/alite-main.png',
    rentalPrice: 'From RM 105 / mth',
    outrightPrice: 'From RM 3,850',
    ccspPrice: 'N/A',
    rentalPlans: [
      { planName: 'Queen (w/o Frame - 60m)', monthlyRate: 105, months: 60, customerType: 'Queen Size' },
      { planName: 'Queen (with Frame - 60m)', monthlyRate: 136, months: 60, customerType: 'Queen + Frame' },
      { planName: 'King (w/o Frame - 60m)', monthlyRate: 125, months: 60, customerType: 'King Size' },
      { planName: 'King (with Frame - 60m)', monthlyRate: 156, months: 60, customerType: 'King + Frame' }
    ],
    outrightPlans: [
      { optionName: 'Queen Size (Without Bedframe)', outrightPrice: 'RM 3,850', perks: 'Free 2x Waterproof Mattress Protector + Delivery' },
      { optionName: 'Queen Size (With Bedframe)', outrightPrice: 'RM 5,100', perks: 'Free 2x Waterproof Mattress Protector + Delivery' },
      { optionName: 'King Size (Without Bedframe)', outrightPrice: 'RM 4,150', perks: 'Free 2x Waterproof Mattress Protector + Delivery' },
      { optionName: 'King Size (With Bedframe)', outrightPrice: 'RM 5,400', perks: 'Free 2x Waterproof Mattress Protector + Delivery' }
    ],
    features: [
      'FREE 2x Waterproof Mattress Protector 🎁',
      'FREE Delivery & Professional Installation',
      'FREE Processing Fees',
      '60 Months Rental Plan',
      'Queen & King Sizes (With / Without Bedframe)',
      'Natural Latex Ergonomic Core by Napure'
    ],
    specs: {
      'Brand': 'A-Lite by Napure',
      'Free Gift': '2 x Waterproof Mattress Protector',
      'Queen (w/o Frame)': '60m: RM105/mth | Outright RM3,850',
      'Queen (with Frame)': '60m: RM136/mth | Outright RM5,100',
      'King (w/o Frame)': '60m: RM125/mth | Outright RM4,150',
      'King (with Frame)': '60m: RM156/mth | Outright RM5,400',
      'Delivery & Fees': 'FREE Delivery, Processing & Installation'
    }
  },
  {
    id: 'mt-3',
    name: 'S-Lite Mattress by Napure',
    category: 'MATTRESS',
    subtitle: 'Spinal Alignment & Pressure Relief Mattress',
    description: 'S-Lite Mattress by Napure combines responsive support with plush comfort for optimal back alignment and nightlong relaxation.',
    image: '/images/slite-main.png',
    rentalPrice: 'From RM 102 / mth',
    outrightPrice: 'From RM 3,850',
    ccspPrice: 'N/A',
    rentalPlans: [
      { planName: 'Queen (w/o Frame - 60m)', monthlyRate: 102, months: 60, customerType: 'Queen Size' },
      { planName: 'Queen (with Frame - 60m)', monthlyRate: 133, months: 60, customerType: 'Queen + Frame' },
      { planName: 'King (w/o Frame - 60m)', monthlyRate: 122, months: 60, customerType: 'King Size' },
      { planName: 'King (with Frame - 60m)', monthlyRate: 153, months: 60, customerType: 'King + Frame' }
    ],
    outrightPlans: [
      { optionName: 'Queen Size (Without Bedframe)', outrightPrice: 'RM 3,850', perks: 'Free 2x Waterproof Mattress Protector + Delivery' },
      { optionName: 'Queen Size (With Bedframe)', outrightPrice: 'RM 5,100', perks: 'Free 2x Waterproof Mattress Protector + Delivery' },
      { optionName: 'King Size (Without Bedframe)', outrightPrice: 'RM 4,150', perks: 'Free 2x Waterproof Mattress Protector + Delivery' },
      { optionName: 'King Size (With Bedframe)', outrightPrice: 'RM 5,400', perks: 'Free 2x Waterproof Mattress Protector + Delivery' }
    ],
    features: [
      'FREE 2x Waterproof Mattress Protector 🎁',
      'FREE Delivery & Professional Installation',
      'FREE Processing Fees',
      '60 Months Rental Plan',
      'Queen & King Sizes (With / Without Bedframe)',
      'Napure Spinal Pressure Relief Tech'
    ],
    specs: {
      'Brand': 'S-Lite by Napure',
      'Free Gift': '2 x Waterproof Mattress Protector',
      'Queen (w/o Frame)': '60m: RM102/mth | Outright RM3,850',
      'Queen (with Frame)': '60m: RM133/mth | Outright RM5,100',
      'King (w/o Frame)': '60m: RM122/mth | Outright RM4,150',
      'King (with Frame)': '60m: RM153/mth | Outright RM5,400',
      'Delivery & Fees': 'FREE Delivery, Processing & Installation'
    }
  },
  {
    id: 'mt-4',
    name: 'CUCKOO Hugz Mattress',
    category: 'MATTRESS',
    subtitle: 'Tilam di dalam kotak (Bed-in-a-Box Concept)',
    description: 'Tilam di dalam kotak. Premium roll-packed bed-in-a-box mattress delivered straight to your doorstep via courier.',
    image: '/images/hugs-main.png',
    rentalPrice: 'Outright Only',
    outrightPrice: 'RM 2,499',
    ccspPrice: 'N/A',
    outrightPlans: [
      { optionName: 'CUCKOO Hugz Mattress (Bed-in-a-Box)', outrightPrice: 'RM 2,499 (Orig. RM 2,999)', perks: 'Tilam di dalam kotak • Free Courier Delivery' }
    ],
    features: [
      'Tilam Di Dalam Kotak (Bed-In-A-Box)',
      'Outright Special Promo RM 2,499 (Orig. RM 2,999)',
      'FREE Delivery Fees (Courier Direct to Installation Address)',
      'FREE Processing Fees',
      'No Rental Plan Required',
      'No CCSP Service Plan Required'
    ],
    tag: 'Bed-in-a-Box',
    youtubeUrl: 'https://youtube.com/shorts/sktTY7nZN0Q?si=RACVFtaYPFBYWoG5',
    youtubeEmbedId: 'sktTY7nZN0Q',
    specs: {
      'Concept': 'Tilam di dalam kotak',
      'Outright Price': 'RM 2,499 [Original RM 2,999]',
      'Rental Plan': 'No Rental Plan (Outright Only)',
      'CCSP Service': 'No CCSP Service Plan',
      'Delivery & Courier': 'FREE Delivery Fees (Couriered direct to customer address)',
      'Processing Fees': 'FREE Processing Fees'
    }
  },

  // --- SAMSUNG PRODUCT (4 Products) ---
  {
    id: 'sp-1',
    name: 'Samsung Refrigerator 583L Side-by-Side',
    category: 'SAMSUNG PRODUCT',
    subtitle: 'SmartThings AI Energy Gentle Silver Matt (583L SBS)',
    description: 'Do the SmartThings at home — Control Anywhere with Wi-Fi Embedded, SmartThings AI Energy Mode, SmartThings Home Care, SmartThings Food, 583L large capacity, Digital Inverter Compressor with 10-Year Warranty, No Frost, Power Cool & Freeze, and All-Around Cooling.',
    image: '/images/refrigerator-main.png',
    rentalPrice: 'RM 85 / mth',
    outrightPrice: 'RM 4,099',
    ccspPrice: 'N/A',
    rentalPlans: [
      { planName: '5-Year Rental Plan', monthlyRate: 85, months: 60, customerType: 'New & Existing Customer' }
    ],
    outrightPlans: [
      { optionName: 'Outright Purchase', outrightPrice: 'RM 4,099', perks: 'Free 2-Yr Standard + 1-Yr CUCKOO Extended Exclusive Warranty' }
    ],
    features: [
      'Control Anywhere — Wi-Fi Embedded & SmartThings Support',
      'SmartThings Energy — Smart Savings & AI Energy Mode',
      'SmartThings Home Care (Easy Upkeep) & SmartThings Food (Smart Cooking)',
      '583L Large Capacity (Net Fridge 375L / Net Freezer 208L)',
      'Digital Inverter Compressor with 10-Year Warranty',
      'No Frost, Power Cool, Power Freeze & All-Around Cooling',
      'Easy Access Controls & Modern Gentle Silver Matt Finish',
      'Free 5-Year Exclusive Warranty (Rental Plan)',
      'Free 2-Yr Standard + 1-Yr CUCKOO Extended Exclusive Warranty (Outright)'
    ],
    popular: true,
    tag: 'SmartThings AI Refrigerator 🧊',
    youtubeUrl: 'https://youtu.be/M0cd-Ru2TQo?si=tIEqq6EkHXTG5L0N',
    youtubeEmbedId: 'M0cd-Ru2TQo',
    specs: {
      'Model': '583L Refrigerator SBS - SmartThings AI Energy Gentle Silver Matt',
      'Net Capacity': '583L (Fridge 375L / Freezer 208L)',
      'Dimensions (WxHxD)': '912 x 1780 x 654 mm (Weight: 91 kg)',
      'Cooling Features': 'No Frost, Power Cool, Power Freeze, Mono Cooling',
      'Compressor': 'Digital Inverter Compressor (10-Year Warranty)',
      'Smart Features': 'Wi-Fi Embedded, SmartThings App Support, AI Energy Mode',
      'Energy Consumption': '385 kWh/year',
      'Exterior Finish': 'Gentle Silver Matt, Flat Door, Recess Handle, Simple UX LED',
      'Purchase (Outright)': 'RM 4,099.00 (Free 2-Yr Standard + 1-Yr CUCKOO Extended Warranty)',
      'Rental Plan': 'RM 85.00 / month (5 Years, Free 5-Year Exclusive Warranty)'
    }
  },
  {
    id: 'sp-2',
    name: 'Bespoke AI Laundry Combo AI Ecobubble™ 12/7kg',
    category: 'SAMSUNG PRODUCT',
    subtitle: 'Smart Laundry, Tailored for You (Model: WD12DB8B85GBFQ)',
    description: 'Experience smarter washing with AI Ecobubble™ creating bubbles that remove 24% more soil even in cool water. Features AI Wash auto-sensing, Super Speed 39-min wash, Auto Dispense, QuickDrive™, Air Wash, DIT Motor, and scheduled servicing every 6 months by CUCKOO personnel.',
    image: '/images/samsungwasher-main.png',
    rentalPrice: 'RM 99 / mth',
    outrightPrice: 'RM 5,299',
    ccspPrice: 'N/A',
    rentalPlans: [
      { planName: '7-Year Rental Plan', monthlyRate: 99, months: 84, customerType: 'New & Existing Customer' }
    ],
    outrightPlans: [
      { optionName: 'Outright Purchase', outrightPrice: 'RM 5,299', perks: 'Free 1-Yr Standard + 2-Yr CUCKOO Extended Warranty + 6-Mth Servicing' }
    ],
    features: [
      'AI Ecobubble™ — 24% More Soil Removal in Cool Water',
      'AI Wash — Auto-senses weight, fabric softness & soil level',
      'Super Speed — Wash a complete load in just 39 minutes',
      'Auto Dispense — Automatic detergent & softener dosing',
      '12.0kg Washing / 7.0kg Drying Capacity (Black, Tempered Glass Door)',
      'Digital Inverter Technology (DIT) Motor & 1400 rpm Spin Speed',
      'QuickDrive™, Air Wash, Hygiene Steam, Drum Clean+ & Wi-Fi SmartThings',
      'Free Scheduled Service Every 6 Months by CUCKOO Personnel',
      'Free 7-Year CUCKOO Extended Exclusive Warranty (Rental Plan)',
      'Free 1-Yr Standard + 2-Yr CUCKOO Extended Warranty (Outright)'
    ],
    popular: true,
    tag: 'Bespoke AI Laundry 🧺',
    youtubeUrl: 'https://youtu.be/KJ30ERPByog?si=lZ2j1LwXt7RQ6vqf',
    youtubeEmbedId: 'KJ30ERPByog',
    specs: {
      'Product Model Code': 'WD12DB8B85GBFQ',
      'Capacity': '12.0 kg Washing / 7.0 kg Drying',
      'Design & Display': 'Black Finish, Tempered Glass Door, AI Control Panel',
      'Smart Tech': 'AI Ecobubble™, AI Wash, Auto Dispense, Super Speed 39-Min',
      'Wash Features': 'QuickDrive™, Air Wash, Hygiene Steam, Drum Clean+, Swirl Drum',
      'Motor & Spin': 'DIT (Digital Inverter Motor) | 1400 rpm Spin Speed',
      'Smart Connectivity': 'Wi-Fi Embedded | SmartThings App Support',
      'Dimensions & Weight': '600 x 850 x 600 mm | Weight: 77 kg (Net)',
      'Purchase (Outright)': 'RM 5,299.00 (Free 1-Yr + 2-Yr Warranty & 6-Mth CUCKOO Servicing)',
      'Rental Plan': 'RM 99.00 / month (7 Years, Free 7-Yr Warranty & 6-Mth CUCKOO Servicing)'
    }
  },
  {
    id: 'sp-3',
    name: '65″ Mini LED M1EH 4K Samsung Vision AI Smart TV (2026)',
    category: 'SAMSUNG PRODUCT',
    subtitle: 'Smarter Mini LED 4K Viewing, Powered by Vision AI (Model: UA65M1EHAKXXM)',
    description: 'Experience enhanced clarity, richer colors, and immersive sound powered by Samsung Vision AI. Features Mini LED Processor 4K, Pure Spectrum Color, Motion Xcelerator, DLG 120Hz, Object Tracking Sound (OTS Lite), Q-Symphony, Tizen Smart TV OS, and AI Companion.',
    image: '/images/samsungtv-main.png',
    rentalPrice: 'RM 115 / mth',
    outrightPrice: 'RM 4,599.00',
    ccspPrice: 'N/A',
    rentalPlans: [
      { planName: '5-Year Rental Plan', monthlyRate: 115, months: 60, customerType: 'New & Existing Customer' }
    ],
    outrightPlans: [
      { optionName: 'Outright Purchase', outrightPrice: 'RM 4,599', perks: 'Free 2-Yr Standard + 1-Yr CUCKOO Extended Exclusive Warranty' }
    ],
    features: [
      'Advanced Mini LED Technology & Pure Spectrum Color',
      'Mini LED Processor 4K & Supreme Mini LED Dimming',
      'Motion Xcelerator & DLG 120Hz Refresh Rate',
      'Vision AI Companion & Personalized Smart Discovery',
      'OTS Lite (Object Tracking Sound) & Q-Symphony 20W 2ch',
      'Tizen™ Smart TV with AirPlay, Google Cast & Bixby',
      'Auto Game Mode (ALLM), VRR & HGiG Support',
      'Metal Stream 3 Bezel-Less Design with Full Motion Mount Y22'
    ],
    popular: true,
    tag: 'Vision AI 4K Mini LED 📺',
    youtubeUrl: 'https://youtu.be/rjB2lsko5C0?si=YdmD_uJWNlGqKAcl',
    youtubeEmbedId: 'rjB2lsko5C0',
    specs: {
      'Product Model Code': 'UA65M1EHAKXXM (2026)',
      'Display': '65″ Mini LED 4K (3840 x 2160) | Refresh: 50Hz / DLG 120Hz',
      'Video Processor': 'Mini LED Processor 4K | Mini LED HDR / HDR 10+',
      'Audio System': 'OTS Lite | Q-Symphony | 20W 2ch | Adaptive Sound',
      'Smart TV & AI': 'Tizen™ Smart TV | Vision AI Companion | AirPlay & Google Cast',
      'Gaming': 'Auto Game Mode (ALLM) | VRR | HGiG',
      'Ports': '3x HDMI (4K 60Hz eARC), 1x USB-A, Wi-Fi 5, Bluetooth 5.3',
      'Dimensions & Weight': '1444.1 x 882.2 x 222 mm (Set w/ Stand) | Weight: 14.5 kg',
      'Power Consumption': 'Max 170W / Typical 111W / Standby 0.5W (206.04 kWh/yr)',
      'Purchase (Outright)': 'RM 4,599.00 (Free 2-Yr Standard + 1-Yr CUCKOO Extended Warranty)',
      'Rental Plan': 'RM 115.00 / month (5 Years / 60 Months, Free 2-Yr Standard + 1-Yr CUCKOO Extended Warranty)'
    }
  },
  {
    id: 'sp-4',
    name: 'Galaxy Tab S10 FE+ (Wi-Fi) [12GB + 256GB]',
    category: 'SAMSUNG PRODUCT',
    subtitle: 'Big Screen, Big Possibilities — Massive 13.1″ WQXGA+ Display & S Pen Included (*Existing Customer Special)',
    description: 'Enjoy a bigger, brighter, and smoother experience with Wi-Fi connectivity. Stream, work, and play seamlessly on the Galaxy Tab S10 FE+. Features Circle to Search with Google, Homework help AI, Exynos 1580 Octa-Core processor, 12GB RAM, 256GB Storage (up to 2TB MicroSD), 10,090 mAh battery (21 hrs video playback), and security updates valid until 30 April 2032.',
    image: '/images/samsungtab-main.png',
    rentalPrice: 'RM 160 / mth',
    outrightPrice: 'RM 2,999',
    ccspPrice: 'N/A',
    rentalPlans: [
      { planName: '2-Year Rental Plan', monthlyRate: 160, months: 24, customerType: 'Existing Customer Only' }
    ],
    outrightPlans: [
      { optionName: 'Outright Purchase (Existing Customers)', outrightPrice: 'RM 2,999', perks: 'Free 2-Yr Standard + 1-Yr CUCKOO Extended Warranty (*Existing Customers Only)' }
    ],
    features: [
      '13.1″ (332.8mm) WQXGA+ (2880 x 1800) Display — Largest Screen on Galaxy Tab FE',
      'Circle to Search with Google & Homework Help AI Support',
      'Exynos 1580 Octa-Core Processor (2.9GHz, 2.6GHz, 1.9GHz)',
      '12GB RAM + 256GB Storage (Expandable up to 2TB MicroSD)',
      'S Pen Included in Box for Seamless Note-Taking & Drawing',
      '10,090 mAh Long-Lasting Battery with up to 21 Hours Video Playback',
      '13.0 MP Rear Camera (UHD 4K Video) + 12.0 MP Front Camera',
      'Wi-Fi 6, Bluetooth v5.3, USB-C, GPS & Smart Switch Sync',
      'Security Update Period Valid until 30 April 2032',
      '🌟 Exclusive Offer for Existing CUCKOO Customers Only'
    ],
    popular: true,
    tag: 'Galaxy Tab S10 FE+ 📱',
    youtubeUrl: 'https://youtu.be/hSdQBZxMRFo?si=eCPGr9UAYkNkXiOb',
    youtubeEmbedId: 'hSdQBZxMRFo',
    specs: {
      'Product Model Code': 'SM-X620NZAEXME',
      'Color & Display': 'Gray Finish | 13.1″ WQXGA+ (2880 x 1800) TFT 16M Colors',
      'RAM & Storage': '12GB RAM + 256GB Storage (Avail: 233.7GB) | Up to 2TB MicroSD',
      'Processor & OS': 'Exynos 1580 Octa-Core (2.9GHz, 2.6GHz, 1.9GHz) | Android OS',
      'Cameras & Video': '13MP Rear + 12MP Front | UHD 4K Video Recording @30fps',
      'Battery Life': '10,090 mAh Typical | Up to 21 Hours Video Playback',
      'Connectivity': 'Wi-Fi 6 (2.4+5GHz MIMO), Bluetooth 5.3, USB 2.0 Type-C, GPS',
      'Dimensions & Weight': '194.7 x 300.6 x 6.0 mm | Weight: 664 g',
      'Security Updates': 'Valid until 30 April 2032',
      'Outright Purchase': 'RM 2,999 (Free 2-Yr Standard + 1-Yr CUCKOO Extended Warranty)',
      'Rental Plan': 'RM 160 / month (2 Years, Free 2-Yr Standard + 1-Yr CUCKOO Extended Warranty)'
    }
  },

  // --- RICE COOKER (1 Model) ---
  {
    id: 'rc-1',
    name: 'CUCKOO P10 Pressure Multi-Cooker',
    category: 'RICE COOKER',
    subtitle: 'Eco Pressure Multi Cooker (CRP-P10 Series in Pinkish Pearl White)',
    description: 'Discover the joy of cooking with CUCKOO P10! Features Eco Pressure cooking, Xwall Diamond Coating, 14 Safety Features, Stainless Steel Detachable Cover, Double Layer Rubber Packing, Auto Steam Sterilisation, Voice Navigation (English & Mandarin), Smart Algorithm, and 9 Cooking Modes.',
    image: '/images/p10-main.png',
    rentalPrice: 'Outright Only',
    outrightPrice: 'RM 1,575.00',
    ccspPrice: 'N/A',
    features: [
      'Eco Pressure Multi Cooker (78.4 kPa)',
      '14 Safety Features Protection',
      'Xwall Diamond Coating Non-Stick Pot',
      'Stainless Steel Detachable Cover',
      'Double Layer Rubber Packing',
      'Auto Steam Sterilisation',
      'Voice Navigation (English & Mandarin)',
      'Smart Algorithm & Preset Timer',
      '9 Cooking Modes (Rice, Oven, GABA, Turbo, etc.)',
      '1 Year CUCKOO Warranty'
    ],
    popular: true,
    tag: 'Outright Only',
    specs: {
      'Model': 'CRP-P10 Series',
      'Colour': 'Pinkish Pearl White',
      'Weight': '7.2 kg',
      'Dimension': '(W)294mm X (L)395mm X (H)290mm',
      'Power Cord Length': '1 m',
      'Pressure': '78.4 kPa (0.8 kgf/cm²)',
      'Power Consumption': '1150 W',
      'Heating': 'Hotplate',
      'Cups Serving': '10 Cups (1.8 Litres)',
      'Max. Preset Time': '12 Hours 50 Minutes',
      'Safety Lock': 'Yes (14 Safety Features)',
      'Auto Steam Sterilisation': 'Yes',
      'Detachable Cover': 'Stainless Steel Detachable',
      'Voice Navigation': 'English, Mandarin',
      'Other Features': 'Soft Steam Cap, Double Layer Rubber Packing, Preset Cooking',
      'Purchase Price': 'RM 1,575.00 (Outright)'
    }
  },

  // --- DAYBED (1 Model) ---
  {
    id: 'db-1',
    name: 'Flex DayBed by Napure',
    category: 'DAYBED',
    subtitle: 'CUCKOO FLEX Daybed Co-Created with Napure (3-Seater)',
    description: 'Transformative 3-seater luxury daybed featuring 100% Full Latex top layer, supremely versatile 8-angle comfort adjustment, and effortless switching between sofa and bed. Comes with free 3-year scheduled servicing every 4 months & warranty, plus a free extra Yale Blue daybed cover at the 24th month.',
    image: '/images/daybed-main.png',
    rentalPrice: 'RM 102 / mth',
    rentalPlans: [
      { planName: 'Rental Plan (36 Months)', monthlyRate: 102, months: 36, customerType: 'New & Existing Customer' }
    ],
    outrightPrice: 'RM 3,900',
    ccspPrice: 'N/A',
    features: [
      '100% FULL LATEX ON TOP LAYER',
      'Supremely Versatile 8-Angle Comfort',
      'EASY SWITCH BETWEEN SOFA & BED',
      'RM 102 / mth (36 Months Contract)',
      'Free 3-Year Scheduled Service Every 4 Months & Warranty',
      'FREE 1 Extra Yale Blue Daybed Cover at 24th Month',
      'FREE Delivery, Installation & Service'
    ],
    popular: true,
    tag: 'NEW 🔥',
    youtubeUrl: 'https://youtu.be/w7LTStfMtmk?si=BPTCMzY12NXxirdE',
    youtubeEmbedId: 'w7LTStfMtmk',
    specs: {
      'Brand': 'CUCKOO Co-Created with Napure',
      'Product Name': 'CUCKOO FLEX Daybed',
      'Colour Options': 'Meta Grey (Default) | Yale Blue',
      'Capacity': '3-Seater',
      'Product Dimension (L × W × H)': 'Folded: 198cm × 97cm × 40cm | Unfolded: 198cm × 49cm × 77cm',
      'Carton Box Measurement': '208cm × 101cm × 22.5cm',
      'Product Weight': 'Gross Weight: 45.2kg | Net Weight: 43kg',
      'Weight Supported': 'Up to 100kg',
      'Outright Purchase': 'RM 3,900 (FREE 1 Year Scheduled Service Every 4 Months & Free 1 Extra Yale Blue Cover)',
      'Rental Plan': 'RM 102 / month (36 Months) (FREE 3 Years Service Every 4 Months & Free Extra Cover at 24th Month)'
    }
  },

  // --- TREADMILL (1 Model) ---
  {
    id: 'tm-1',
    name: 'B-FIT Treadmill',
    category: 'TREADMILL',
    subtitle: 'Your 24/7 Fitness Partner - Anytime, Anywhere',
    description: 'A compact treadmill machine built for home use with a 2-in-1 design that shifts from walking treadmill to running treadmill in seconds. Slim, foldable and quiet for condos and landed homes across Malaysia. Rental plans and outright purchase available with local service support.',
    image: '/images/treadmill-main.png',
    rentalPrice: 'RM 102 / mth',
    rentalPlans: [
      { planName: 'Rental Plan (36 Months)', monthlyRate: 102, months: 36, customerType: 'New & Existing Customer' }
    ],
    outrightPrice: 'RM 3,099',
    outrightPlans: [
      { optionName: 'Outright Purchase Promo', outrightPrice: 'RM 3,099', perks: 'Free 1-Yr CCSP Service & Warranty + Free Belt Changing at 24th Month' }
    ],
    ccspPrice: 'N/A',
    features: [
      'RM 102 / mth Rental Plan (36 Months Contract)',
      'FREE Scheduled Service Every 6 Months',
      'FREE Delivery & Professional Installation',
      'FREE Belt Changing at 24th Month',
      'DC Motor Peak Power 2.0 HP (Running Speed 1-14km/h)',
      'Max Weight Supported: 100kg ONLY'
    ],
    popular: true,
    tag: 'B-FIT Home Fitness',
    youtubeUrl: 'https://youtube.com/shorts/wZ4mY0sTwZk?si=am2uQcME0AXHeVvc',
    youtubeEmbedId: 'wZ4mY0sTwZk',
    specs: {
      'Display': 'LED',
      'Input Voltage': '220V/60HZ',
      'Display Readout': 'Speed, Step Number, Time, Distance, Calories',
      'Built-In Program': 'Built-In Program',
      'Custom Program': '3 Programs (U1-U3)',
      'Running Speed Range': '1-14km/Hour',
      'Walking Speed Range': '1-6km/Hour',
      'Max Weight Supported': '100kg ONLY',
      'Motor': 'DC Motor Peak Power 2.0 HP',
      'Running Belt (L x W)': '1050 x 420mm',
      'Folded Size (L x W x H)': '1327 x 758 x 200mm',
      'Unfolded Size (L x W x H)': '1255 x 758 x 1087mm',
      'Package Size (L x W x H)': '1430 x 750 x 165mm',
      'Gross Weight / Net Weight': '39.2kg / 32.5kg',
      'Outright Purchase': 'RM 3,099 (FREE 1-Year CCSP Service & Warranty, Free Belt Change at 24th Month)',
      'Rental Plan': 'RM 102 / month (36 Months) (FREE 3-Year Service Every 6 Months & Free Belt Change at 24th Month)'
    }
  }
];
