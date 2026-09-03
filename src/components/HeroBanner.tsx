import React from 'react';
import { ShieldCheck, Phone, MessageCircle, MapPin, Sparkles, CheckCircle2, Award, Zap, HeartHandshake } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';
import { VisitorCounter } from './VisitorCounter';

interface HeroBannerProps {
  onScrollToCatalog: () => void;
  onScrollToContact: () => void;
  onNavigatePage?: (page: 'rental' | 'outright' | 'ccsp') => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onScrollToCatalog, onScrollToContact, onNavigatePage }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi ${CUCKOO_CONTACT.agentName}, I would like to consult on CUCKOO product rentals and promotions.`);
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-slate-50 to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-100">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 sm:mb-10 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-900 shadow-xl">
          <img
            src="/images/Profile/cuckoomadness12_2026.jpg"
            alt="CUCKOO Madness 12 Promotion 2026"
            className="block w-full aspect-[2048/780] object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Agent Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-indigo-100 shadow-xs text-xs font-semibold text-slate-800">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CUCKOO Authorized Agent</span>
              <span className="text-slate-300">•</span>
              <span className="text-indigo-600 font-bold">{CUCKOO_CONTACT.agentName} ({CUCKOO_CONTACT.phone})</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Upgrade Your Home Living with <span className="text-[#801217]">CUCKOO</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore 35 premium product models across 9 categories. Flexible <strong className="text-slate-900 font-semibold">Monthly Rental</strong>, <strong className="text-slate-900 font-semibold">Outright Purchase</strong>, and <strong className="text-slate-900 font-semibold">CCSP Service Packages</strong> with free delivery & maintenance in Malaysia.
            </p>

            {/* Key Payment Value Props - Hyperlinked Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button
                onClick={() => onNavigatePage && onNavigatePage('rental')}
                className="p-3.5 rounded-xl bg-white hover:bg-indigo-50/80 border border-slate-200/80 hover:border-indigo-300 shadow-xs transition-all text-left cursor-pointer group"
              >
                <div className="text-indigo-600 font-bold text-sm flex items-center justify-between gap-1.5 mb-0.5">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    Monthly Rental
                  </span>
                  <span className="text-[10px] text-indigo-600 font-extrabold underline opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
                </div>
                <p className="text-xs text-slate-500">Affordable advance payment & RM0 fee. Free every 4/6 months servicing.</p>
              </button>

              <button
                onClick={() => onNavigatePage && onNavigatePage('outright')}
                className="p-3.5 rounded-xl bg-white hover:bg-amber-50/80 border border-slate-200/80 hover:border-amber-300 shadow-xs transition-all text-left cursor-pointer group"
              >
                <div className="text-slate-900 font-bold text-sm flex items-center justify-between gap-1.5 mb-0.5">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    Outright Purchase
                  </span>
                  <span className="text-[10px] text-amber-600 font-extrabold underline opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
                </div>
                <p className="text-xs text-slate-500">100% full ownership with official warranty coverage.</p>
              </button>

              <button
                onClick={() => onNavigatePage && onNavigatePage('ccsp')}
                className="p-3.5 rounded-xl bg-white hover:bg-emerald-50/80 border border-slate-200/80 hover:border-emerald-300 shadow-xs transition-all text-left cursor-pointer group"
              >
                <div className="text-indigo-600 font-bold text-sm flex items-center justify-between gap-1.5 mb-0.5">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <HeartHandshake className="w-4 h-4 text-emerald-600" />
                    CCSP Service
                  </span>
                  <span className="text-[10px] text-emerald-600 font-extrabold underline opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
                </div>
                <p className="text-xs text-slate-500">CUCKOO Care Service Plan for annual peace of mind.</p>
              </button>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-sm shadow-emerald-200 transition-all flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
                <span>WhatsApp {CUCKOO_CONTACT.agentName}</span>
              </button>

              <button
                onClick={onScrollToCatalog}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base shadow-sm shadow-indigo-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Browse Products</span>
              </button>
            </div>

            {/* Location Subtext */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>Visit Store: <button onClick={onScrollToContact} className="font-semibold text-slate-800 underline hover:text-indigo-600 cursor-pointer">{CUCKOO_CONTACT.unitNo}, Sunway Putra Mall</button></span>
            </div>

          </div>

          {/* Right Hero Agent Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-4 sm:p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#801217] text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-bl-lg">
                CUCKOO
              </div>

              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-black text-lg flex items-center justify-center shadow-xs shrink-0">
                  JO
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900">{CUCKOO_CONTACT.agentName}</h3>
                  <p className="text-xs font-semibold text-indigo-600">Authorized Sales Representative</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Water, Air, Mattress & Smart Appliances</p>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="py-3 space-y-2 text-xs text-slate-700">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                  <span className="text-slate-500 font-medium">WhatsApp / Call:</span>
                  <a href={`tel:${CUCKOO_CONTACT.phone}`} className="font-extrabold text-slate-900 hover:text-indigo-600">
                    {CUCKOO_CONTACT.phone}
                  </a>
                </div>

                <div className="flex flex-col gap-1 p-2 rounded-lg bg-slate-50">
                  <span className="text-slate-500 font-medium">Email:</span>
                  <a href={`mailto:${CUCKOO_CONTACT.email}`} className="font-bold text-slate-800 hover:text-indigo-600 break-all leading-relaxed text-left">
                    {CUCKOO_CONTACT.email}
                  </a>
                </div>

                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-slate-500 font-medium block mb-0.5">Branch Store Location:</span>
                  <span className="font-semibold text-slate-800 leading-tight block text-[11px]">
                    {CUCKOO_CONTACT.branchAddress}
                  </span>
                </div>
              </div>

              {/* Badges Guarantee */}
              <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-600 border-t border-slate-100">
                <span className="flex items-center gap-1 text-emerald-600">
                  <CheckCircle2 className="w-3 h-3" /> Fast Approval
                </span>
                <span className="flex items-center gap-1 text-indigo-600">
                  <CheckCircle2 className="w-3 h-3" /> MY Delivery
                </span>
                <span className="flex items-center gap-1 text-slate-800">
                  <CheckCircle2 className="w-3 h-3 text-indigo-600" /> Free Installation
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Live Visitor Counter Starting from 1,000,000+ */}
        <div className="mt-8 sm:mt-10">
          <VisitorCounter variant="hero" />
        </div>
      </div>
    </section>
  );
};
