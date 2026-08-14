export type ProductCategory = 
  | 'WATER PURIFIER'
  | 'OUTDOOR FILTER'
  | 'AIR PURIFIER'
  | 'MASSAGE CHAIR'
  | 'AIRCONDITIONER'
  | 'MATTRESS'
  | 'SAMSUNG PRODUCT'
  | 'RICE COOKER'
  | 'DAYBED'
  | 'TREADMILL';

export interface RentalPlanOption {
  planName: string; // e.g. "Normal Rental Plan" | "Gooodplan" | "Trade In Rental Plan"
  monthlyRate: number; // e.g. 86
  months: number; // e.g. 60
  customerType: string; // e.g. "New & Existing Customer" | "Existing Customer Only"
}

export interface OutrightPlanOption {
  optionName: string; // e.g. "Queen Size (Without Bedframe)"
  outrightPrice: number | string; // e.g. 5350 or "RM 5,350"
  perks?: string; // e.g. "Includes 2 x Waterproof Mattress Protector"
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subtitle: string;
  description: string;
  image: string;
  rentalPrice: string; // e.g. "RM 60 / month"
  rentalPlans?: RentalPlanOption[];
  outrightPrice: string; // e.g. "RM 3,200"
  outrightPlans?: OutrightPlanOption[];
  ccspPrice: string; // e.g. "RM 450 / year"
  features: string[];
  popular?: boolean;
  tag?: string;
  youtubeUrl?: string;
  youtubeEmbedId?: string;
  specs?: { [key: string]: string };
}

export interface ContactInfo {
  agentName: string;
  companyName: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  branchAddress: string;
  mallName: string;
  unitNo: string;
  district: string;
}

export interface SeoSettings {
  siteTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  jsonLd: string;
}
