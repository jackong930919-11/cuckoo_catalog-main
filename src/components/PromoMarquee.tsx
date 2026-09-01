import React from 'react';

export const PromoMarquee: React.FC = () => {
  const promoText = "💥 Limited Time Offer : CUCKOO Madness 12 Promotion until 30 September 2026! 💥";

  return (
    <div className="w-full bg-gradient-to-r from-red-700 via-rose-600 to-red-700 text-white font-extrabold text-xs sm:text-sm py-2 overflow-hidden shadow-inner border-y border-red-800 flex items-center select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center shrink-0">
        <span className="px-6 tracking-wide drop-shadow-xs">{promoText}</span>
        <span className="px-6 tracking-wide drop-shadow-xs">{promoText}</span>
        <span className="px-6 tracking-wide drop-shadow-xs">{promoText}</span>
        <span className="px-6 tracking-wide drop-shadow-xs">{promoText}</span>
      </div>
      <div className="animate-marquee whitespace-nowrap flex items-center shrink-0" aria-hidden="true">
        <span className="px-6 tracking-wide drop-shadow-xs">{promoText}</span>
        <span className="px-6 tracking-wide drop-shadow-xs">{promoText}</span>
        <span className="px-6 tracking-wide drop-shadow-xs">{promoText}</span>
        <span className="px-6 tracking-wide drop-shadow-xs">{promoText}</span>
      </div>
    </div>
  );
};
