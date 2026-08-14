import React, { useState } from 'react';
import { Product } from '../types';
import { X, Check, MessageCircle, Phone, ShieldCheck, Zap, Sparkles, Tag, HelpCircle, Play } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';
import { AirconSpecTable } from './AirconSpecTable';
import { DaybedSpecTable } from './DaybedSpecTable';
import { BespokeLoungerSpecTable } from './BespokeLoungerSpecTable';
import { Bespoke2SpecTable } from './Bespoke2SpecTable';
import { MattressSpecTable } from './MattressSpecTable';
import { GraniteSpecTable } from './GraniteSpecTable';
import { Xcel2SpecTable } from './Xcel2SpecTable';
import { KiutSpecTable } from './KiutSpecTable';
import { AceUndersinkSpecTable } from './AceUndersinkSpecTable';
import { FloStandSpecTable } from './FloStandSpecTable';
import { GlamourSpecTable } from './GlamourSpecTable';
import { GrandeSpecTable } from './GrandeSpecTable';
import { KingTop2SpecTable } from './KingTop2SpecTable';
import { TitanSpecTable } from './TitanSpecTable';
import { WarriorSpecTable } from './WarriorSpecTable';
import { VividSpecTable } from './VividSpecTable';
import { PrimeX3SpecTable } from './PrimeX3SpecTable';
import { P10SpecTable } from './P10SpecTable';
import { LModelSpecTable } from './LModelSpecTable';
import { IModelSpecTable } from './IModelSpecTable';
import { UModelSpecTable } from './UModelSpecTable';
import { RModelSpecTable } from './RModelSpecTable';
import { KModelSpecTable } from './KModelSpecTable';
import { CPlusModelSpecTable } from './CPlusModelSpecTable';
import { DModelSpecTable } from './DModelSpecTable';
import { SamsungRefrigeratorSpecTable } from './SamsungRefrigeratorSpecTable';
import { SamsungTVSpecTable } from './SamsungTVSpecTable';
import { SamsungWasherDryerSpecTable } from './SamsungWasherDryerSpecTable';
import { SamsungTabSpecTable } from './SamsungTabSpecTable';
import { TreadmillSpecTable } from './TreadmillSpecTable';

const VALID_LOCAL_IMAGES = new Set([
  '/images/aceundersink-gallery-1.png',
  '/images/aceundersink-main.png',
  '/images/aceundersink-profile.png',
  '/images/alite-gallery-1.png',
  '/images/alite-gallery-2.png',
  '/images/alite-gallery-3.png',
  '/images/alite-gallery-4.png',
  '/images/alite-gallery-5.png',
  '/images/alite-main.png',
  '/images/alite-profile.png',
  '/images/aluxe-gallery-1.png',
  '/images/aluxe-gallery-2.png',
  '/images/aluxe-gallery-3.png',
  '/images/aluxe-main.png',
  '/images/aluxe-profile.png',
  '/images/bespoke2-gallery-1.png',
  '/images/bespoke2-gallery-2.png',
  '/images/bespoke2-gallery-3.png',
  '/images/bespoke2-gallery-4.png',
  '/images/bespoke2-main.png',
  '/images/bespoke2-profile.png',
  '/images/c+model-gallery-1.png',
  '/images/c+model-gallery-2.png',
  '/images/c+model-gallery-3.png',
  '/images/c+model-main.png',
  '/images/c+model-profile.png',
  '/images/daybed-gallery-1.png',
  '/images/daybed-gallery-2.png',
  '/images/daybed-main.png',
  '/images/daybed-profile.png',
  '/images/dmodel-gallery-1.png',
  '/images/dmodel-gallery-2.png',
  '/images/dmodel-main.png',
  '/images/dmodel-profile.png',
  '/images/flostand-gallery-1.png',
  '/images/flostand-gallery-2.png',
  '/images/flostand-gallery-3.png',
  '/images/flostand-gallery-4.png',
  '/images/flostand-main.png',
  '/images/flostand-profile.png',
  '/images/glamour-gallery-1.png',
  '/images/glamour-gallery-2.png',
  '/images/glamour-gallery-3.png',
  '/images/glamour-gallery-4.png',
  '/images/glamour-main.png',
  '/images/glamour-profile.png',
  '/images/grandeimage1.png',
  '/images/grandeimage2.png',
  '/images/grandeimage3.png',
  '/images/granite-gallery-1.png',
  '/images/granite-gallery-2.png',
  '/images/granite-gallery-3.png',
  '/images/granite-gallery-4.png',
  '/images/granite-main.png',
  '/images/granite-profile.png',
  '/images/hugs-gallery-1.png',
  '/images/hugs-gallery-2.png',
  '/images/hugs-gallery-3.png',
  '/images/hugs-gallery-4.png',
  '/images/hugs-gallery-5.png',
  '/images/hugs-gallery-6.png',
  '/images/hugs-main.png',
  '/images/hugs-profile.png',
  '/images/imodel-gallery-1.png',
  '/images/imodel-gallery-2.png',
  '/images/imodel-main.png',
  '/images/imodel-profile.png',
  '/images/kingtop2-gallery-1.png',
  '/images/kingtop2-gallery-2.png',
  '/images/kingtop2-gallery-3.png',
  '/images/kingtop2-gallery-4.png',
  '/images/kingtop2-gallery-5.png',
  '/images/kingtop2-main.png',
  '/images/kingtop2-profile.png',
  '/images/kiut-gallery-1.png',
  '/images/kiut-gallery-2.png',
  '/images/kiut-main.png',
  '/images/kiut-profile.png',
  '/images/kmodel-gallery-1.png',
  '/images/kmodel-gallery-2.png',
  '/images/kmodel-gallery-3.png',
  '/images/kmodel-gallery-4.png',
  '/images/kmodel-main.png',
  '/images/kmodel-profile.png',
  '/images/lmodel-gallery-1.png',
  '/images/lmodel-gallery-2.png',
  '/images/lmodel-gallery-3.png',
  '/images/lmodel-gallery-4.png',
  '/images/lmodel-gallery-5.png',
  '/images/lmodel-gallery-6.png',
  '/images/lmodel-main.png',
  '/images/lmodel-profile.png',
  '/images/lounger-gallery-1.png',
  '/images/lounger-gallery-2.png',
  '/images/lounger-gallery-3.png',
  '/images/lounger-gallery-4.png',
  '/images/lounger-gallery-5.png',
  '/images/lounger-main.jpg',
  '/images/lounger-profile.jpg',
  '/images/primex3-gallery-1.png',
  '/images/primex3-gallery-2.png',
  '/images/primex3-main.png',
  '/images/primex3-profile.png',
  '/images/product-placeholder.svg',
  '/images/p10-main.png',
  '/images/p10-gallery-1.png',
  '/images/p10-gallery-2.png',
  '/images/p10-gallery-3.png',
  '/images/p10-gallery-4.png',
  '/images/refrigerator-gallery-1.png',
  '/images/refrigerator-gallery-2.png',
  '/images/refrigerator-gallery-3.png',
  '/images/refrigerator-gallery-4.png',
  '/images/refrigerator-gallery-5.png',
  '/images/refrigerator-main.png',
  '/images/refrigerator-profile.png',
  '/images/rmodel-gallery-1.png',
  '/images/rmodel-gallery-2.png',
  '/images/rmodel-gallery-3.png',
  '/images/rmodel-gallery-4.png',
  '/images/rmodel-main.png',
  '/images/rmodel-profile.png',
  '/images/samsungtab-main.png',
  '/images/samsungtab-profile.png',
  '/images/samsungtv-gallery-1.png',
  '/images/samsungtv-gallery-2.png',
  '/images/samsungtv-gallery-3.png',
  '/images/samsungtv-gallery-4.png',
  '/images/samsungtv-gallery-5.png',
  '/images/samsungtv-main.png',
  '/images/samsungtv-profile.png',
  '/images/samsungwasher-gallery-1.png',
  '/images/samsungwasher-gallery-2.png',
  '/images/samsungwasher-main.png',
  '/images/samsungwasher-profile.png',
  '/images/slite-gallery-1.png',
  '/images/slite-gallery-2.png',
  '/images/slite-gallery-3.png',
  '/images/slite-main.png',
  '/images/slite-profile.png',
  '/images/titan-gallery-1.png',
  '/images/titan-gallery-2.png',
  '/images/titan-main.png',
  '/images/titan-profile.png',
  '/images/treadmill-gallery-1.png',
  '/images/treadmill-gallery-2.png',
  '/images/treadmill-gallery-3.png',
  '/images/treadmill-gallery-4.png',
  '/images/treadmill-gallery-5.png',
  '/images/treadmill-gallery-6.png',
  '/images/treadmill-gallery-7.png',
  '/images/treadmill-main.png',
  '/images/treadmill-profile.png',
  '/images/umodel-gallery-1.png',
  '/images/umodel-gallery-2.png',
  '/images/umodel-gallery-3.png',
  '/images/umodel-gallery-4.png',
  '/images/umodel-gallery-5.png',
  '/images/umodel-gallery-6.png',
  '/images/umodel-gallery-7.png',
  '/images/umodel-main.png',
  '/images/umodel-profile.png',
  '/images/vita-gallery-1.png',
  '/images/vita-gallery-2.png',
  '/images/vita-gallery-3.png',
  '/images/vita-main.png',
  '/images/vita-profile.png',
  '/images/vivid-gallery-1.png',
  '/images/vivid-main.png',
  '/images/vivid-profile.png',
  '/images/warrior-gallery-1.png',
  '/images/warrior-main.png',
  '/images/warrior-profile.png',
  '/images/xcel2-gallery-1.png',
  '/images/xcel2-gallery-2.png',
  '/images/xcel2-gallery-3.png',
  '/images/xcel2-gallery-4.png',
  '/images/xcel2-main.png',
  '/images/xcel2-profile.png',
]);

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const hasRental = product.rentalPrice !== 'Outright Only' && product.rentalPrice !== 'N/A';
  const hasOutright = product.outrightPrice !== 'N/A' && product.outrightPrice !== 'Not Available';
  const hasCcsp = product.ccspPrice !== 'N/A' && product.ccspPrice !== 'No CCSP Service';

  const buildProductGallery = (productImage: string): string[] => {
    if (!productImage) return [];

    const normalized = productImage.replace(/\\/g, '/');
    if (!VALID_LOCAL_IMAGES.has(normalized)) {
      return [];
    }

    const extMatch = normalized.match(/\.(png|jpg|jpeg|webp|svg)(?:\?.*)?$/i);
    const ext = extMatch ? extMatch[1].toLowerCase() : 'png';
    const baseWithoutExt = normalized.replace(/\.(png|jpg|jpeg|webp|svg)(?:\?.*)?$/i, '');
    const baseName = baseWithoutExt.replace(/-(main|profile)$/i, '');
    const candidates = [normalized];

    Array.from({ length: 8 }, (_, index) => index + 1).forEach((index) => {
      const galleryPath = `${baseName}-gallery-${index}.${ext}`;
      if (VALID_LOCAL_IMAGES.has(galleryPath)) {
        candidates.push(galleryPath);
      }
    });

    const unique = [...new Set(candidates.filter((url) => url && VALID_LOCAL_IMAGES.has(url)))];
    return unique.length > 1 ? unique : [normalized];
  };

  const [selectedPlan, setSelectedPlan] = useState<'rental' | 'outright' | 'ccsp'>(
    hasRental ? 'rental' : hasOutright ? 'outright' : 'rental'
  );
  const [selectedImage, setSelectedImage] = useState(product.image);

  React.useEffect(() => {
    setSelectedImage(product.image);
  }, [product]);

  const productGallery = React.useMemo(() => buildProductGallery(product.image), [product.image]);

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO ${product.name} (${product.category}).\nSelected Option: ${selectedPlan.toUpperCase()}\nRental: ${product.rentalPrice}\nOutright: ${product.outrightPrice}\nCCSP: ${product.ccspPrice}\n\nPlease contact me with the current promotion and application steps. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in cursor-pointer"
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors font-bold"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider">
                {product.category}
              </span>
              {product.tag && (
                <span className={`px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider ${
                  product.tag.includes('🔥') || product.tag.includes('NEW')
                    ? 'bg-rose-600'
                    : product.tag.toLowerCase().includes('office')
                    ? 'bg-teal-700'
                    : 'bg-emerald-600'
                }`}>
                  {product.tag}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {product.name}
            </h2>
            <p className="text-xs text-slate-200 font-medium">
              {product.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">

          {/* Description */}
          <div>
            <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">
              Product Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          {productGallery.length > 1 && (
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                Product Gallery
              </h4>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <img
                  src={selectedImage}
                  alt={product.name}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-64 sm:h-80 object-contain rounded-xl bg-white border border-slate-200"
                />
                <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {productGallery.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className={`overflow-hidden rounded-xl border transition-all ${
                        selectedImage === image ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} gallery ${index + 1}`}
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                        className="h-16 w-full object-cover bg-white"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3-Tier Plan Selector */}
          <div>
            <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-3">
              Select Package & Pricing
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Rental Option */}
              <button
                disabled={!hasRental}
                onClick={() => hasRental && setSelectedPlan('rental')}
                className={`p-4 rounded-2xl text-left border transition-all relative ${
                  !hasRental
                    ? 'border-slate-200 bg-slate-50 opacity-60 cursor-not-allowed'
                    : selectedPlan === 'rental'
                    ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-600/20 cursor-pointer'
                    : 'border-slate-200 bg-white hover:bg-slate-50 cursor-pointer'
                }`}
              >
                <span className="text-[10px] font-black uppercase text-indigo-600 block mb-1">
                  {hasRental ? 'Most Popular' : 'Not Applicable'}
                </span>
                <div className="text-xs font-bold text-slate-900">Rental Plan</div>
                <div className="text-lg font-black text-indigo-600 mt-1">
                  {hasRental ? product.rentalPrice : 'No Rental Plan'}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {hasRental ? 'Includes free filter & service' : 'Outright Purchase Only'}
                </div>
              </button>

              {/* Outright Option */}
              <button
                disabled={!hasOutright}
                onClick={() => hasOutright && setSelectedPlan('outright')}
                className={`p-4 rounded-2xl text-left border transition-all relative ${
                  !hasOutright
                    ? 'border-slate-200 bg-slate-50 opacity-60 cursor-not-allowed'
                    : selectedPlan === 'outright'
                    ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-600/20 cursor-pointer'
                    : 'border-slate-200 bg-white hover:bg-slate-50 cursor-pointer'
                }`}
              >
                <span className="text-[10px] font-black uppercase text-amber-600 block mb-1">
                  {hasOutright ? 'Full Ownership' : 'Not Applicable'}
                </span>
                <div className="text-xs font-bold text-slate-900">Outright Purchase</div>
                <div className="text-lg font-black text-slate-900 mt-1">
                  {hasOutright ? product.outrightPrice : 'N/A'}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {hasOutright ? 'Includes Warranty' : 'No Outright Plan'}
                </div>
              </button>

              {/* CCSP Service Package Option */}
              <button
                disabled={!hasCcsp}
                onClick={() => hasCcsp && setSelectedPlan('ccsp')}
                className={`p-4 rounded-2xl text-left border transition-all relative ${
                  !hasCcsp
                    ? 'border-slate-200 bg-slate-50 opacity-60 cursor-not-allowed'
                    : selectedPlan === 'ccsp'
                    ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-600/20 cursor-pointer'
                    : 'border-slate-200 bg-white hover:bg-slate-50 cursor-pointer'
                }`}
              >
                <span className="text-[10px] font-black uppercase text-slate-500 block mb-1">
                  {hasCcsp ? 'Annual Service' : 'Not Applicable'}
                </span>
                <div className="text-xs font-bold text-slate-900">CCSP Service</div>
                <div className="text-lg font-black text-slate-800 mt-1">
                  {hasCcsp ? product.ccspPrice : 'N/A'}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {hasCcsp ? 'CUCKOO Care Service Plan' : 'No CCSP Package'}
                </div>
              </button>
            </div>
          </div>

          {/* Breakdown of Rental Plans if available */}
          {product.rentalPlans && product.rentalPlans.length > 0 && selectedPlan === 'rental' && (
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-3">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-extrabold uppercase text-indigo-900 tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  Available Monthly Rental Plans
                </h5>
                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-full">
                  {product.rentalPlans.length} Plans Available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {product.rentalPlans.map((plan, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-indigo-200/80 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">{plan.planName}</div>
                      <div className="text-base font-black text-indigo-600 mt-1">
                        RM {plan.monthlyRate} <span className="text-[11px] font-semibold text-slate-500">/ mth</span>
                      </div>
                      <div className="text-[11px] font-bold text-slate-700 mt-0.5">{plan.months} Months Contract</div>
                    </div>
                    <div className="mt-2 text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-600 inline-block w-fit">
                      [{plan.customerType}]
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Breakdown of Outright Plans if available */}
          {product.outrightPlans && product.outrightPlans.length > 0 && (selectedPlan === 'outright' || product.category === 'MATTRESS') && (
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-extrabold uppercase text-amber-950 tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Available Outright Plan
                </h5>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  {product.outrightPlans.length} Outright Options
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.outrightPlans.map((plan, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-amber-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">{plan.optionName}</div>
                      <div className="text-base font-black text-amber-700 mt-1">
                        {typeof plan.outrightPrice === 'number' ? `RM ${plan.outrightPrice.toLocaleString()}` : plan.outrightPrice}
                      </div>
                    </div>
                    {plan.perks && (
                      <div className="mt-2 text-[10px] font-bold px-2 py-1 rounded bg-amber-100/80 text-amber-900 border border-amber-200/60 flex items-center gap-1">
                        <span>🎁</span>
                        <span>{plan.perks}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Benefits Included */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h5 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              What's Included in Your CUCKOO Order:
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Free Delivery & Professional Installation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Periodic Natural Care Service & Filter Swaps</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Official Warranty & Part Replacements</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Direct Consultant Support: {CUCKOO_CONTACT.agentName}</span>
              </li>
            </ul>
          </div>

          {/* YouTube Video Showcase if product has youtubeEmbedId */}
          {product.youtubeEmbedId && (
            <div className="my-6 p-4 sm:p-5 rounded-2xl bg-slate-950 text-slate-100 border border-rose-900/50 shadow-xl">
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-rose-950 border border-rose-800/60 text-rose-400">
                    <Play className="w-4 h-4 fill-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-wide">
                      {product.name} Video Showcase
                    </h4>
                    <p className="text-[11px] text-slate-400">Watch product feature video introduction</p>
                  </div>
                </div>
                {product.youtubeUrl && (
                  <a
                    href={product.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-rose-400 hover:text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-800/50 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Open on YouTube</span>
                  </a>
                )}
              </div>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
                <iframe
                  src={`https://www.youtube.com/embed/${product.youtubeEmbedId}`}
                  title={`${product.name} Video Showcase`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Full Aircon Specification Table if AIRCONDITIONER */}
          {product.category === 'AIRCONDITIONER' && (
            <div className="pt-2">
              <AirconSpecTable
                selectedHp={product.name.includes('1.0HP') || product.name.includes('1.0') ? '1.0HP' : '1.5HP'}
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full Daybed Specification Table if DAYBED */}
          {product.category === 'DAYBED' && (
            <div className="pt-2">
              <DaybedSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full Treadmill Specification Table & Infographic Chart if TREADMILL */}
          {(product.category === 'TREADMILL' || product.id === 'tm-1' || product.name.toLowerCase().includes('treadmill') || product.name.toLowerCase().includes('b-fit')) && (
            <div className="pt-2">
              <TreadmillSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full Bespoke Lounger Dimension Table if Bespoke Lounger */}
          {(product.id === 'mc-1' || product.name.includes('Bespoke Lounger')) && (
            <div className="pt-2">
              <BespokeLoungerSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full Bespoke 2.0 Dimension & Specification Chart if Bespoke 2.0 */}
          {(product.id === 'mc-2' || product.name.includes('Bespoke 2') || product.name.includes('BESPOKE 2')) && (
            <div className="pt-2">
              <Bespoke2SpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO Granite Specification Chart if CUCKOO GRANITE */}
          {(product.id === 'wp-granite' || product.name.toLowerCase().includes('granite')) && (
            <div className="pt-2">
              <GraniteSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO XCEL 2 Specification Chart if CUCKOO XCEL 2 */}
          {(product.id === 'wp-2' || product.name.toLowerCase().includes('xcel')) && (
            <div className="pt-2">
              <Xcel2SpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO KIUT Specification Chart if CUCKOO KIUT */}
          {(product.id === 'wp-6' || product.name.toLowerCase().includes('kiut')) && (
            <div className="pt-2">
              <KiutSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO ACE UNDERSINK Specification Chart if ACE */}
          {(product.id === 'wp-10' || product.name.toLowerCase().includes('ace')) && (
            <div className="pt-2">
              <AceUndersinkSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO FLO / Flo Stand Specification Chart if FLO */}
          {(product.id === 'wp-9' || product.name.toLowerCase().includes('flo')) && (
            <div className="pt-2">
              <FloStandSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO GLAMOUR Specification Chart if GLAMOUR */}
          {(product.id === 'wp-7' || product.name.toLowerCase().includes('glamour')) && (
            <div className="pt-2">
              <GlamourSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO GRANDE Specification Chart if GRANDE */}
          {(product.id === 'wp-8' || product.name.toLowerCase().includes('grande')) && (
            <div className="pt-2">
              <GrandeSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO KING TOP 2 Specification Chart if KING TOP 2 */}
          {(product.id === 'wp-1' || product.name.toLowerCase().includes('king top')) && (
            <div className="pt-2">
              <KingTop2SpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO TITAN Specification Chart if TITAN */}
          {(product.id === 'wp-5' || product.name.toLowerCase().includes('titan')) && (
            <div className="pt-2">
              <TitanSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO WARRIOR Specification Chart if WARRIOR */}
          {(product.id === 'wp-3' || product.name.toLowerCase().includes('warrior')) && (
            <div className="pt-2">
              <WarriorSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO VIVID Specification Chart if VIVID */}
          {(product.id === 'wp-4' || product.name.toLowerCase().includes('vivid')) && (
            <div className="pt-2">
              <VividSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO Prime X3 Specification Chart if PRIME X3 */}
          {(product.id === 'of-1' || product.name.toLowerCase().includes('prime x3') || product.name.toLowerCase().includes('prime')) && (
            <div className="pt-2">
              <PrimeX3SpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO P10 Specification Chart if P10 or RICE COOKER */}
          {(product.id === 'rc-1' || product.name.toLowerCase().includes('p10') || product.name.toLowerCase().includes('rice cooker')) && (
            <div className="pt-2">
              <P10SpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO L Model Specification Chart if L MODEL */}
          {(product.id === 'ap-l' || product.name.toLowerCase().includes('l model')) && (
            <div className="pt-2">
              <LModelSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO i Model Specification Chart if i MODEL */}
          {(product.id === 'ap-i' || product.name.toLowerCase().includes('i model') || product.name.toLowerCase().includes('i-model')) && (
            <div className="pt-2">
              <IModelSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO U Model Specification Chart if U MODEL */}
          {(product.id === 'ap-u' || product.name.toLowerCase().includes('u model') || product.name.toLowerCase().includes('u-model')) && (
            <div className="pt-2">
              <UModelSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO R Model Specification Chart if R MODEL */}
          {(product.id === 'ap-r' || product.name.toLowerCase().includes('r model') || product.name.toLowerCase().includes('r-model')) && (
            <div className="pt-2">
              <RModelSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO K Model Specification Chart if K MODEL */}
          {(product.id === 'ap-k' || product.name.toLowerCase().includes('k model') || product.name.toLowerCase().includes('k-model')) && (
            <div className="pt-2">
              <KModelSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO C+ Model Specification Chart if C+ MODEL */}
          {(product.id === 'ap-cplus' || product.name.toLowerCase().includes('c+ model') || product.name.toLowerCase().includes('c+')) && (
            <div className="pt-2">
              <CPlusModelSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full CUCKOO D Model Specification Chart if D MODEL */}
          {(product.id === 'ap-d' || product.name.toLowerCase().includes('d model') || product.name.toLowerCase().includes('d-model')) && (
            <div className="pt-2">
              <DModelSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full Samsung 583L Refrigerator Specification Chart if Samsung Refrigerator */}
          {(product.id === 'sp-1' || product.name.toLowerCase().includes('samsung refrigerator') || product.name.toLowerCase().includes('583l')) && (
            <div className="pt-2">
              <SamsungRefrigeratorSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full Samsung 65" Mini LED Vision AI TV Specification Chart */}
          {(product.id === 'sp-3' || product.name.toLowerCase().includes('vision ai') || product.name.toLowerCase().includes('m1eh') || product.name.toLowerCase().includes('ua65m1eh')) && (
            <div className="pt-2">
              <SamsungTVSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full Samsung Bespoke AI Laundry Combo Specification Chart */}
          {(product.id === 'sp-2' || product.name.toLowerCase().includes('laundry combo') || product.name.toLowerCase().includes('ecobubble') || product.name.toLowerCase().includes('wd12db')) && (
            <div className="pt-2">
              <SamsungWasherDryerSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full Samsung Galaxy Tab S10 FE+ Specification Chart */}
          {(product.id === 'sp-4' || product.name.toLowerCase().includes('tab s10') || product.name.toLowerCase().includes('sm-x620')) && (
            <div className="pt-2">
              <SamsungTabSpecTable
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Full Mattress Specification Matrix if MATTRESS */}
          {product.category === 'MATTRESS' && (
            <div className="pt-2">
              <MattressSpecTable
                productName={product.name}
                onInquire={(model) => handleWhatsAppInquiry()}
              />
            </div>
          )}

          {/* Product Specs */}
          {product.specs && (
            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-400 font-medium block">{key}</span>
                    <span className="font-semibold text-slate-800">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-2 space-y-3">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Inquire via WhatsApp ({CUCKOO_CONTACT.agentName} {CUCKOO_CONTACT.phone})</span>
            </button>

            <div className="flex items-center justify-between text-xs text-slate-500 px-2">
              <span>Authorized Agent: <strong className="text-slate-800">{CUCKOO_CONTACT.agentName}</strong></span>
              <a href={`tel:${CUCKOO_CONTACT.phone}`} className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> Call {CUCKOO_CONTACT.phone}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
