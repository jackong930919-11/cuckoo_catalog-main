import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Wind, Zap, Building2, Layers, CheckCircle2, Sliders, ShieldAlert } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface UModelSpecTableProps {
  onInquire?: (model: string) => void;
}

export const UModelSpecTable: React.FC<UModelSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO U Model Air Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO U Model Air Purifier (Massive Coverage 1161 sq.ft. / 107.9m²)${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM143/mth rental plan, RM4,400 outright purchase, and current commercial promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-blue-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>CUCKOO U MODEL</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold">
              Ultra-Deo HEPA+ H14 • 1161 sq.ft.
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-blue-300 font-bold mt-1 uppercase tracking-wider">
            FILTERING POWER AND COVERAGE UNLIKE ANY OTHER
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Breathe in only the best with CUCKOO U Model. With advanced multi-level protection to safeguard your air from even the “nano-est” impurities in every corner.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('U Model Air Purifier Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire U Model</span>
          </button>
        </div>
      </div>

      {/* Unique Selling Points (USP Highlights Grid) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-blue-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Unique Selling Points (USP)</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <Wind className="w-5 h-5 text-blue-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">360° Absorption</div>
              <div className="text-[10px] text-slate-400 font-medium">Massive 107.9m² / 1161 sq.ft. coverage</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">99.995% Filtration</div>
              <div className="text-[10px] text-slate-400 font-medium">Removes nano airborne particles</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <Building2 className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Commercial Grade</div>
              <div className="text-[10px] text-slate-400 font-medium">Perfect for large offices & venues</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <Zap className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">CUCKOO Plasma Ionizer</div>
              <div className="text-[10px] text-slate-400 font-medium">Extra-pure air sterilization</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <Sliders className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">10 Operating Modes</div>
              <div className="text-[10px] text-slate-400 font-medium">Including Smart, Baby & Fine Dust</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <ShieldAlert className="w-5 h-5 text-rose-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">8-Colour LED Air Display</div>
              <div className="text-[10px] text-slate-400 font-medium">Real-time air quality indicator</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <Layers className="w-5 h-5 text-purple-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Ultra-Deo HEPA+ H14</div>
              <div className="text-[10px] text-slate-400 font-medium">True HEPA+ H14 & Deodorization</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <CheckCircle2 className="w-5 h-5 text-teal-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">4-Stage Filtration</div>
              <div className="text-[10px] text-slate-400 font-medium">Comprehensive multi-barrier</div>
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
              <td className="py-3 px-4 font-bold text-slate-200">MODEL</td>
              <td className="py-3 px-4 text-white font-black text-sm">CUCKOO U MODEL</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">POWER CONSUMPTION</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">AC 220 - 240 / 50 Hz</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">RATED POWER CONSUMPTION</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">80W (1.5A)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">NOISE LEVEL</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">53.7 dBA</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">COVERAGE</td>
              <td className="py-3 px-4 text-blue-300 font-extrabold">107.9m² / 1161 sq.ft.</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">PRODUCT SIZE & WEIGHT</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">410 mm(W) x 410 mm(D) x 895mm(H) | 14kg</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">FILTRATION STAGES</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">4-Stage Filtration System</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">FILTERS</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="font-bold text-slate-100 mb-1">Pre-Filter | Allergen Filter | Ultra-Deo HEPA+ Filter</div>
                <div className="text-[11px] text-blue-300 bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <span className="font-bold">Ultra-Deo HEPA+ Filter System:</span> Includes True HEPA+ H14 Filter + Deodorization Filter (removes 99.995% airborne particles)
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">OPERATING MODE</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="font-bold text-slate-100 mb-1.5">10 Operating Modes Available:</div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-semibold">Smart Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-semibold">ECO Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-semibold">Repeat Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-semibold">Fine Dust Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-semibold">Sleep Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-semibold">Baby Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-semibold">Turbo Plus Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-semibold">Manual Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-semibold">Energy Eye Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-semibold">Refresh Mode</span>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">PRICE & PACKAGES</td>
              <td className="py-3.5 px-4 text-slate-200 space-y-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Purchase (Outright)</span>
                    <span className="text-base font-black text-emerald-400">RM 4,400.00</span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 1-year service & warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('U Model Outright RM4,400')}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Outright
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-blue-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Rent (Rental Plan)</span>
                    <span className="text-base font-black text-blue-300">RM 143.00 / month <span className="text-xs font-normal text-slate-400">(1st - 5th Year)</span></span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 5-year service & warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('U Model Rental RM143/mth')}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Rental
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">CUCKOO+ CARE SERVICE PACKAGE (CCSP)</span>
                    <span className="text-sm font-bold text-slate-200">RM 770.00 / year</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('U Model CCSP RM770/yr')}
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
