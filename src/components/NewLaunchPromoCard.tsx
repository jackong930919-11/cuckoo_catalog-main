import React from 'react';
import { Sparkles, MessageCircle, Gift, Zap, ShieldCheck, ArrowRight, Tag, Flame, Award } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

export type PromoVariant = 'NEW_LAUNCH' | 'HOT_SELLING' | 'TOP_PICK';

interface PromoCardProps {
  variant?: PromoVariant;
  onOpenCalculator?: () => void;
}

export const PromoCard: React.FC<PromoCardProps> = ({ variant = 'NEW_LAUNCH', onOpenCalculator }) => {
  const renderBadgeIcon = () => {
    switch (variant) {
      case 'HOT_SELLING':
        return <Flame className="w-3.5 h-3.5 fill-slate-950" />;
      case 'TOP_PICK':
        return <Award className="w-3.5 h-3.5 fill-slate-950" />;
      case 'NEW_LAUNCH':
      default:
        return <Sparkles className="w-3.5 h-3.5 fill-slate-950" />;
    }
  };

  const getCardDetails = () => {
    switch (variant) {
      case 'HOT_SELLING':
        return {
          badge: 'HOT SELLING & PROMO',
          badgeBg: 'from-rose-500 via-orange-500 to-amber-500',
          tag: 'BEST OFFER',
          tagBg: 'bg-rose-500',
          image: '/images/Madness12-promo.png',
          subtitle: 'Limited Time Offer',
          title: 'Madness 12 RM12 per month',
          description: 'To celebrate CUCKOO 12-Years Anniversary, CUCKOO doing special promotion with just RM12 per month for our household appliances.',
          giftTitle: 'MADNESS 12 Promotion',
          giftDesc: 'Start from RM12/month for Water Purifier / Air Purifier / Treadmill / Massage Chair / Mattress.',
          perk1: 'RM12/mth Special Anniversary Rental Rate',
          perk2: 'Free Scheduled Servicing & Filter Replacements Included',
          inquiryMsg: `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in the Madness 12 RM12 per month promotion on CUCKOO Portal!\n\nPlease guide me on how to register for the RM12/month anniversary deal. Thank you!`,
        };
      case 'TOP_PICK':
        return {
          badge: 'TOP PICK & PROMO',
          badgeBg: 'from-indigo-500 via-purple-500 to-pink-500',
          tag: 'Top Choice',
          tagBg: 'bg-indigo-500 text-white',
          image: '/images/bespoke2-main-promo.png',
          subtitle: 'Luxury Wellness & Relaxation',
          title: 'CUCKOO Bespoke 2.0 Massage Chair',
          description: 'Experience 5-star living with ergonomic full-body massage therapy, zero gravity reclining, and deep muscle relaxation.',
          giftTitle: 'Top Pick Exclusive Gift',
          giftDesc: 'Free Leather Changing on 36th months within the contract (worth RM1299)',
          perk1: 'RM12 Advance Payment & Zero Processing Fees',
          perk2: 'Free Scheduled Servicing Every 6 months',
          inquiryMsg: `Hi ${CUCKOO_CONTACT.agentName},\nI saw the TOP PICK & PROMO offer (CUCKOO Bespoke 2.0 Massage Chair) on CUCKOO Portal!\n\nPlease share details on monthly rental rates & free installation. Thank you!`,
        };
      case 'NEW_LAUNCH':
      default:
        return {
          badge: 'NEW LAUNCH & PROMO',
          badgeBg: 'from-amber-500 via-emerald-500 to-teal-500',
          tag: 'NEW 🔥',
          tagBg: 'bg-rose-500 text-white',
          image: '/images/granite-main-launching.png',
          subtitle: 'Official Launch Promo Deal',
          title: 'CUCKOO GRANITE Launching Deal',
          description: 'Register now with RM155 advance payment & RM0 processing fees. Included 100% full warranty + free scheduled servicing every 4 months within the contract period.',
          giftTitle: 'Launch Free Gift Promotion',
          giftDesc: 'Complimentary with CUCKOO Special Edition Knife Set for first 10 new applications this month!',
          perk1: 'RM155 Advance Payment & Zero Processing Fees',
          perk2: 'Free Filter Replacements & Servicing Every 4 months',
          inquiryMsg: `Hi ${CUCKOO_CONTACT.agentName},\nI saw the CUCKOO GRANITE Launching Deal on CUCKOO Portal!\n\nPlease guide me on how to register with RM155 advance payment & claim the Complimentary Knife Set. Thank you!`,
        };
    }
  };

  const details = getCardDetails();

  const handleInquirePromo = () => {
    const text = encodeURIComponent(details.inquiryMsg);
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl border-2 border-amber-400/80 shadow-xl overflow-hidden flex flex-col justify-between group relative transform hover:-translate-y-1 transition-all duration-300">
      
      {/* Top Launch Badge */}
      <div className={`absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${details.badgeBg} text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-lg animate-pulse`}>
        {renderBadgeIcon()}
        <span>{details.badge}</span>
      </div>

      {/* Special Offer Pill */}
      <div className={`absolute top-3 right-3 z-10 ${details.tagBg} text-slate-950 px-2.5 py-1 rounded-full font-black text-[10px] uppercase shadow-md flex items-center gap-1`}>
        <Tag className="w-3 h-3 fill-slate-950" />
        <span>{details.tag}</span>
      </div>

      <div>
        {/* Promotional Banner Image */}
        <div className="relative aspect-4/3 bg-slate-800 overflow-hidden">
          <img
            src={details.image}
            alt={details.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-3 left-3 right-3 space-y-1">
            <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest block">
              {details.subtitle}
            </span>
            <h3 className="text-base font-black text-white leading-tight drop-shadow-md">
              {details.title}
            </h3>
          </div>
        </div>

        {/* Promo Body Content */}
        <div className="p-4 space-y-3">
          <p className="text-xs text-slate-300 leading-relaxed">
            {details.description}
          </p>

          {/* Special Gift Highlight */}
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-extrabold text-amber-300">
              <Gift className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{details.giftTitle}</span>
            </div>
            <p className="text-[11px] text-slate-300">
              {details.giftDesc}
            </p>
          </div>

          {/* Quick Perks */}
          <div className="space-y-1 text-xs text-slate-300 pt-1">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{details.perk1 || 'RM155 Advance Payment & Zero Processing Fees'}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{details.perk2 || 'Free Filter Replacements & Servicing Every 4 months'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 pt-0 space-y-2 z-10">
        <button
          onClick={handleInquirePromo}
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all transform active:scale-95 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-slate-950" />
          <span>Claim Promo Offer via {CUCKOO_CONTACT.agentName}</span>
        </button>

        {onOpenCalculator && (
          <button
            onClick={onOpenCalculator}
            className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-indigo-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-white/10"
          >
            <span>Calculate Promo Rental Plan</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-300" />
          </button>
        )}
      </div>
    </div>
  );
};

// Export backward compatible component name
export const NewLaunchPromoCard = PromoCard;


