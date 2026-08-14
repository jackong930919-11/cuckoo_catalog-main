import React from 'react';
import { Sparkles, MessageCircle, Wind, Zap, ShieldCheck, Layers, CheckCircle2, Sliders, Volume2, ShieldAlert } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface DModelSpecTableProps {
  onInquire?: (model: string) => void;
}

export const DModelSpecTable: React.FC<DModelSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO D Model Air Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO D Model Air Purifier (Massive 710.42 sq.ft. Coverage & 360° Absorption)${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM127/mth rental plan, RM3,550 outright purchase, and current promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            360° Absorption • Massive Coverage
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>CUCKOO D MODEL</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold">
              Ultra-Deo HEPA14 • 710.42 sq.ft.
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-amber-300 font-bold mt-1 uppercase tracking-wider">
            BREATHE BIG — Work & Breathe Pure, Fresh Air In Huge Spaces
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Intelligently built to offer 360° purified air with HUGE coverage. Now, you can work and breathe pure, fresh air even in the biggest offices and spacious homes.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('D Model Air Purifier Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire D Model</span>
          </button>
        </div>
      </div>

      {/* Unique Selling Points (USP Highlights Grid) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-amber-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Unique Selling Points (USP)</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <Wind className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">360° Absorption</div>
              <div className="text-[10px] text-slate-400 font-medium">Massive intake from all directions</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">710.42 Sqft Coverage</div>
              <div className="text-[10px] text-slate-400 font-medium">66m² ideal for large offices & halls</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <Layers className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Ultra-Deo HEPA14 Filter</div>
              <div className="text-[10px] text-slate-400 font-medium">True HEPA H14 + Deodorization</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <Zap className="w-5 h-5 text-blue-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Plasma Ioniser</div>
              <div className="text-[10px] text-slate-400 font-medium">Sterilizes airborne pollutants</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <ShieldAlert className="w-5 h-5 text-rose-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">6-Colour LED Indicator</div>
              <div className="text-[10px] text-slate-400 font-medium">Real-time air cleanliness monitor</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <Sliders className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">10 Operating Modes</div>
              <div className="text-[10px] text-slate-400 font-medium">Sterilisation, Yellow Dust & Baby</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <Volume2 className="w-5 h-5 text-purple-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">4-Language Voice Guide</div>
              <div className="text-[10px] text-slate-400 font-medium">ENG, BM, CN, Korean voice navigation</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <Zap className="w-5 h-5 text-teal-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">65W Power Efficiency</div>
              <div className="text-[10px] text-slate-400 font-medium">Heavy performance, smart power</div>
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
              <td className="py-3 px-4 text-white font-black text-sm">CUCKOO D MODEL</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Weight & Dimensions</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">11 kg | 396mm (W) x 396mm (D) x 755mm (H)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Recommended Coverage Area</td>
              <td className="py-3 px-4 text-amber-300 font-extrabold">66 m² / 710.42 ft²</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">65W</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Sensor</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">Fine Dust Sensor</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Operating Modes (10 Modes)</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">1. Auto Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">2. Baby Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">3. Lock Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">4. Repeat Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">5. Energy Eye Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">6. Turbo Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">7. Filter Replacement Indicator</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">8. Sterilisation Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">9. Room Care Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">10. Yellow Dust Mode</span>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filtration System</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="font-bold text-slate-100 mb-1">4-Stage Filtration System with 3 Filters:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[11px]">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-amber-400">1. Pre-Filter:</span> Traps dust, hair & large particles
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-amber-400">2. Allergen Filter:</span> Eliminates common allergens
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-amber-400">3. Ultra-Deo HEPA14 Filter*:</span> True HEPA H14 + Deodorisation Filter
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 italic mt-1">
                  *The Ultra-Deo HEPA Filter combines the functions of both the Deodorisation Filter and True HEPA Filter.
                </p>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter Replacement Schedule</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block font-medium">Pre Filter (Clean)</span>
                    <span className="text-emerald-400 font-bold">Every 2 Weeks</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block font-medium">Allergen Filter</span>
                    <span className="text-amber-300 font-bold">Every 4 Months</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block font-medium">Ultra-Deo HEPA14 Filter</span>
                    <span className="text-amber-300 font-bold">Every 12 Months</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Voice Navigation</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">English, Malay, Chinese, Korean (4 Languages)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Air Quality Detection & Indicator</td>
              <td className="py-3 px-4 text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Yes (6-Colour Air Cleanliness Indicator)</span>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Special Feature(s)</td>
              <td className="py-3 px-4 text-amber-300 font-extrabold">360° Absorption (Massive Coverage) + CUCKOO Plasma Ioniser</td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">Price & Packages</td>
              <td className="py-3.5 px-4 text-slate-200 space-y-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Purchase (Outright)</span>
                    <span className="text-base font-black text-emerald-400">RM 3,550.00</span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 1-year service & warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('D Model Outright RM3,550')}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Outright
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Rent (Rental Plan)</span>
                    <span className="text-base font-black text-amber-300">RM 127.00 / month <span className="text-xs font-normal text-slate-400">(1st - 5th Year)</span></span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 5-year periodic service & warranty every 4 months</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('D Model Rental RM127/mth')}
                    className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
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
                    onClick={() => handleWhatsApp('D Model CCSP RM605/yr')}
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
