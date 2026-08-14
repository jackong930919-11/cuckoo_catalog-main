import React from 'react';

interface CuckooLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
}

export const CuckooLogo: React.FC<CuckooLogoProps> = ({
  className = '',
  variant = 'full'
}) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? 'text-white' : 'text-[#801217]';
  const subTextColor = isWhite ? 'text-slate-200' : 'text-slate-800';
  const dividerColor = isWhite ? 'border-white/30' : 'border-slate-300';

  return (
    <div className={`inline-flex flex-col items-start justify-center select-none font-sans ${className}`}>
      {/* CUCKOO INTERNATIONAL Header */}
      <div className="leading-none">
        <span className={`block font-black text-xl sm:text-2xl tracking-tighter ${textColor}`}>
          CUCKOO
        </span>
        <span className={`block font-black text-[7px] sm:text-[8.5px] tracking-[0.38em] uppercase mt-0.5 ${textColor}`}>
          INTERNATIONAL
        </span>
      </div>

      {/* Sub-brands line: cuckoo | wonderlab | wonderklean✨ */}
      {variant === 'full' && (
        <div className={`flex items-center gap-1 sm:gap-1.5 text-[8.5px] sm:text-[9.5px] font-bold tracking-tight border-t ${dividerColor} pt-1 mt-1 ${subTextColor}`}>
          <span className="font-extrabold tracking-tighter">cuckoo</span>
          <span className="opacity-40 font-light">|</span>
          <span className="font-bold">wonderlab</span>
          <span className="opacity-40 font-light">|</span>
          <span className="font-bold inline-flex items-center gap-0.5">
            wõnderklean<span className="text-amber-400 font-black">✦</span>
          </span>
        </div>
      )}
    </div>
  );
};
