import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

export const FloatingWhatsApp: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName}, I am browsing the CUCKOO portal and would like to inquire about products and promotions.`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 group">
      {/* Tooltip / Label Card */}
      <div 
        onClick={handleWhatsAppClick}
        className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-900/95 hover:bg-slate-900 text-white shadow-lg backdrop-blur-md border border-slate-800 cursor-pointer transition-all hover:scale-105"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <div className="text-left">
          <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider leading-none">
            Online
          </div>
          <div className="text-[11px] font-bold text-white mt-0.5">
            WhatsApp Jack Ong
          </div>
        </div>
      </div>

      {/* Main Floating WhatsApp Button */}
      <div className="relative">
        {/* Close Button "x" */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsClosed(true);
          }}
          aria-label="Close WhatsApp float"
          className="absolute -top-1.5 -right-1.5 z-10 w-4 h-4 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-red-600 border border-slate-700 flex items-center justify-center shadow-xs transition-all cursor-pointer"
        >
          <X className="w-2.5 h-2.5" />
        </button>

        {/* Floating Green WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          aria-label="Contact Sales Agent on WhatsApp"
          className="w-11 h-11 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer ring-2 ring-emerald-400/30"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
        </button>
      </div>
    </div>
  );
};


