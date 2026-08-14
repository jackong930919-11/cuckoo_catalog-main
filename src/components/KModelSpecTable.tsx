import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Wind, Zap, Volume2, Layers, CheckCircle2, Sliders, Feather, ToggleLeft } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface KModelSpecTableProps {
  onInquire?: (model: string) => void;
}

export const KModelSpecTable: React.FC<KModelSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO K Model Air Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO K Model Air Purifier (Ultrawide 710 sq.ft. Coverage)${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM94/mth rental plan, RM2,750 outright purchase, and current promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-600/50 text-indigo-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>CUCKOO K MODEL</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-semibold">
              Ultrawide 710 Sqft Coverage
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-indigo-300 font-bold mt-1 uppercase tracking-wider">
            HEAVY ON PERFORMANCE, LIGHT ON WALLET
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Easy to carry, hard on pollutants. The CUCKOO K Model is a lightweight 7.0kg air purifier equipped with powerful filters and an equally powerful fan to safeguard even the widest of rooms.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('K Model Air Purifier Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire K Model</span>
          </button>
        </div>
      </div>

      {/* Unique Selling Points (USP Highlights Grid) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-indigo-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Unique Selling Points (USP)</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Wind className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Ultrawide 710 Sqft</div>
              <div className="text-[10px] text-slate-400 font-medium">66m² massive coverage area</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Layers className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">4-Stage Filtration</div>
              <div className="text-[10px] text-slate-400 font-medium">Pre, Allergen, Ultra-Deo HEPA13</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <ToggleLeft className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">1 Button Control</div>
              <div className="text-[10px] text-slate-400 font-medium">Simple effortless operation</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Sliders className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">6 Modes Available</div>
              <div className="text-[10px] text-slate-400 font-medium">Auto, Baby, Turbo, Energy Eye & more</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Zap className="w-5 h-5 text-blue-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">CADR 520 m³/h</div>
              <div className="text-[10px] text-slate-400 font-medium">Ultra high clean air intake speed</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Feather className="w-5 h-5 text-rose-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Lightweight 7.0kg</div>
              <div className="text-[10px] text-slate-400 font-medium">Easy to move between rooms</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Volume2 className="w-5 h-5 text-teal-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Quiet &lt; 60 dB(A)</div>
              <div className="text-[10px] text-slate-400 font-medium">Low noise operating profile</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-purple-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Light On Wallet</div>
              <div className="text-[10px] text-slate-400 font-medium">Affordable RM94/mth rental plan</div>
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
              <td className="py-3 px-4 font-bold text-slate-200">Model</td>
              <td className="py-3 px-4 text-white font-black text-sm">CUCKOO K MODEL</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">Single Phase AC 220-240V / 60W</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Noise Level</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">&lt; 60 db (A)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Coverage</td>
              <td className="py-3 px-4 text-indigo-300 font-extrabold">66m² / 710 sq ft</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">CADR</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">520 m³ / h</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Size & Weight</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">336mm(W) x 336mm(D) x 650mm(H) | 7.0kg</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Stages</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">4 Filtration Stages</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filters</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="font-bold text-slate-100 mb-1">Pre Filter | Allergen Filter | Ultra-Deo HEPA13 Filter</div>
                <div className="text-[11px] text-indigo-300 bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <span className="font-bold">Ultra-Deo HEPA13 Filter System:</span> Combines True HEPA H13 Filter & Deodorisation Filter for allergen and odor removal.
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Features / Operating Modes</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="font-bold text-slate-100 mb-1.5">6 Modes Available (1 Button Control):</div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 font-semibold">Auto Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 font-semibold">Baby Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 font-semibold">Manual Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 font-semibold">Turbo Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 font-semibold">Button Sound Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 font-semibold">Energy Eye Mode</span>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">Price & Packages</td>
              <td className="py-3.5 px-4 text-slate-200 space-y-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Purchase (Outright)</span>
                    <span className="text-base font-black text-emerald-400">RM 2,750.00</span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 1-year service & warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('K Model Outright RM2,750')}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Outright
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-indigo-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Rent (Rental Plan)</span>
                    <span className="text-base font-black text-indigo-300">RM 94.00 / month <span className="text-xs font-normal text-slate-400">(1st - 5th Year)</span></span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 5-year service & warranty every 4 months</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('K Model Rental RM94/mth')}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Rental
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">CUCKOO+ CARE SERVICE PACKAGE (CCSP)</span>
                    <span className="text-sm font-bold text-slate-200">RM 605.00 / year</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('K Model CCSP RM605/yr')}
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
