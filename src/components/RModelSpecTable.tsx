import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Wind, Zap, Award, Layers, CheckCircle2, Sliders, Volume2 } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface RModelSpecTableProps {
  onInquire?: (model: string) => void;
}

export const RModelSpecTable: React.FC<RModelSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO R Model Air Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO R Model Air Purifier (Red Dot Award Winner - 570 sq.ft. / 53m²)${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM77/mth rental plan, RM2,550 outright purchase, and current promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-600/50 text-rose-300 text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5 text-rose-400" />
            Red Dot Design Award Winner
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>CUCKOO R MODEL</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold">
              3-Stage Filtration • 570 Sqft
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-rose-300 font-bold mt-1 uppercase tracking-wider">
            ALL NEW CUCKOO R MODEL AIR PURIFIER — Protecting Your Health In Style
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Designed and manufactured in South Korea, chosen for the prestigious Red Dot Design Award. A stylish and efficient air purifier crafted to elevate home décor while delivering clean and fresh air.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('R Model Air Purifier Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire R Model</span>
          </button>
        </div>
      </div>

      {/* Unique Selling Points (USP Highlights Grid) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-rose-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Unique Selling Points (USP)</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <Award className="w-5 h-5 text-rose-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Red Dot Design Award</div>
              <div className="text-[10px] text-slate-400 font-medium">Made in South Korea in style</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <Layers className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">3-Stage Filtration</div>
              <div className="text-[10px] text-slate-400 font-medium">Pre, Deodorisation & True HEPA H13</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <Volume2 className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">56dB Low Noise</div>
              <div className="text-[10px] text-slate-400 font-medium">Gracefully subtle whisper-quiet</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <Sliders className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">7 Operating Modes</div>
              <div className="text-[10px] text-slate-400 font-medium">Auto, Sleep, Turbo, Energy Eye & more</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <Wind className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Coverage 570 Sqft</div>
              <div className="text-[10px] text-slate-400 font-medium">53 m² area coverage</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <Zap className="w-5 h-5 text-blue-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">CADR 414 m³/h</div>
              <div className="text-[10px] text-slate-400 font-medium">High airflow rate (243 cfm)</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <Sparkles className="w-5 h-5 text-purple-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">8-Colour LED Display</div>
              <div className="text-[10px] text-slate-400 font-medium">Air quality visual indicator</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-teal-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Lightweight 6.7kg</div>
              <div className="text-[10px] text-slate-400 font-medium">Easy placement in any room</div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Specification Chart Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 mb-6">
        <table className="w-full text-left text-xs text-slate-300 divide-y divide-slate-800/80">
          <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider font-extrabold">
            <tr>
              <th className="py-3.5 px-4 w-2/5 sm:w-1/3">Specification Field</th>
              <th className="py-3.5 px-4 w-3/5 sm:w-2/3">Details / Specifications</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50 text-xs">
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">PRODUCT NAME</td>
              <td className="py-3 px-4 text-white font-black text-sm">CUCKOO R MODEL</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">RATED VOLTAGE</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">Single Phase AC 220-240V / 50 Hz</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">NOISE LEVEL</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">56 db</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">COVERAGE AREA</td>
              <td className="py-3 px-4 text-rose-300 font-extrabold">53 m² / 570 Sqft</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">CADR</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">414 m³ / 243 cfm</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">POWER CONSUMPTION</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">50W</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">FILTERATION STAGES</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">3-Stage Filtration System</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">FILTERS</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="font-bold text-slate-100 mb-1">3 Filters System:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[11px]">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-rose-400">1. Pre-Filter:</span> Captures dust, hair & large particles
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-rose-400">2. Deodorisation Filter:</span> Removes offensive odors & gases
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-rose-400">3. True HEPA H13 Filter:</span> Traps 99.97% fine dust & allergens
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">MODES</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="font-bold text-slate-100 mb-1.5">7 Operating Modes Available:</div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-rose-300 font-semibold">Timer Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-rose-300 font-semibold">Sleep Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-rose-300 font-semibold">Turbo Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-rose-300 font-semibold">Energy Eye Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-rose-300 font-semibold">Auto Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-rose-300 font-semibold">Manual Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-rose-300 font-semibold">Button Sound Mode</span>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">DIMENSIONS & WEIGHT</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">384mm(W) x 208mm(D) x 576mm(H) | Weight: 6.7kg</td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">PRICE & PACKAGES</td>
              <td className="py-3.5 px-4 text-slate-200 space-y-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Purchase (Outright)</span>
                    <span className="text-base font-black text-emerald-400">RM 2,550.00</span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 1-year service & warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('R Model Outright RM2,550')}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Outright
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-rose-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Rent (Rental Plan)</span>
                    <span className="text-base font-black text-rose-300">RM 77.00 / month <span className="text-xs font-normal text-slate-400">(1st - 5th Year)</span></span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 5-year service & warranty every 4 months</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('R Model Rental RM77/mth')}
                    className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Rental
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">CUCKOO+ CARE SERVICE PACKAGE (CCSP)</span>
                    <span className="text-sm font-bold text-slate-200">RM 440.00 / year</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('R Model CCSP RM440/yr')}
                    className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Inquire CCSP
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
