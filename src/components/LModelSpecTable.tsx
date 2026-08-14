import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Wind, Zap, Volume2, Shield, Eye, Lock, Layers, Mic, CheckCircle2 } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface LModelSpecTableProps {
  onInquire?: (model: string) => void;
}

export const LModelSpecTable: React.FC<LModelSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO L Model Air Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO L Model Air Purifier (Ultra-Deo HEPA+ H13)${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM105/mth rental plan, RM3,200 outright purchase, and current promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>CUCKOO L Model</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
              Ultra-Deo HEPA+ H13
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-cyan-300 font-bold mt-1 uppercase tracking-wider">
            Ultra-Deo HEPA+ H13 Filter For Ultra Clean Air
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            More Freshness & comfort with CUCKOO L Model Air Purifier. Features CUCKOO Plasma Ioniser, 4-Stage Filtration with Copper Sulfide coating, and coverage up to 600 sq. ft.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('L Model Air Purifier Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire L Model</span>
          </button>
        </div>
      </div>

      {/* Unique Selling Points (USP Highlights Grid) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Unique Selling Points (USP)</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Wind className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">CUCKOO Plasma Ioniser</div>
              <div className="text-[10px] text-slate-400 font-medium">Reduces levels of airborne viruses</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Ultra-Deo HEPA+ H13</div>
              <div className="text-[10px] text-slate-400 font-medium">Coated with Copper Sulfide</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Layers className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">4 Stage Filtration</div>
              <div className="text-[10px] text-slate-400 font-medium">3 Filters System</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Eye className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Quality Indicator PM2.5</div>
              <div className="text-[10px] text-slate-400 font-medium">8 Colour LED Air Display</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Zap className="w-5 h-5 text-sky-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Coverage 600 sq. ft.</div>
              <div className="text-[10px] text-slate-400 font-medium">High area capacity</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Mic className="w-5 h-5 text-rose-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Voice Navigation</div>
              <div className="text-[10px] text-slate-400 font-medium">English, Malay, Chinese</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Shield className="w-5 h-5 text-purple-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Immune Support</div>
              <div className="text-[10px] text-slate-400 font-medium">Strengthens Health</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Lock className="w-5 h-5 text-teal-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">7 Operation Modes</div>
              <div className="text-[10px] text-slate-400 font-medium">Auto, Turbo, Sleep & Child Lock</div>
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
              <td className="py-3 px-4 text-white font-black text-sm">CUCKOO L Model</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Weight</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">7 kg</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Dimensions</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">384mm (W) x 218mm (D) x 576mm (H)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption (W)</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">60 W</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Rated Voltage (V)</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">220-240V / 50Hz</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Coverage (sq. ft.)</td>
              <td className="py-3 px-4 text-cyan-300 font-extrabold">600 sq. ft.</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Noise Level (dB)</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">55 dB</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Voice Navigation</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">English, Malay, Chinese</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Air Quality Indicator</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">PM 2.5</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Air Pollution Level Indicator</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">8 Colour LED Air Quality Indicator</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Sensor</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">Illumination Sensor & Dust Sensor</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Plasma Ioniser</td>
              <td className="py-3 px-4 text-emerald-400 font-extrabold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Yes (Improves air quality & reduces virus levels)</span>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Fan Speed Control</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">2 Speed + Turbo</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">HEPA Filter</td>
              <td className="py-3 px-4 text-cyan-300 font-extrabold">Ultra-Deo HEPA+ H13 Filter (coated with Copper Sulfide)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filters Stage</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="font-bold text-slate-100 mb-1">3 Filters with 4-Stage Filtration System:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-cyan-400">1. Pre Filter:</span> Catches large dust & pet hair
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-cyan-400">2. Allergen Filter:</span> Eliminates allergens & microbes
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-cyan-400">3. True HEPA+ H13:</span> Ultra-Deo + Copper Sulfide
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-cyan-400">4. Deodorisation Filter:</span> Removes odor & harmful gas
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Features & Modes</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="font-bold text-slate-100 mb-1">Up to 7 Operation Modes:</div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">1. Auto Mode (Eco Mode)</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">2. Turbo Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">3. Energy Conservation Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">4. Sleep Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">5. Manual Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">6. Timer Mode</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">7. Child Lock</span>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">Pricing & Rental Plans</td>
              <td className="py-3.5 px-4 text-slate-200 space-y-2">
                <div className="p-3 rounded-xl bg-slate-900 border border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Purchase (Outright)</span>
                    <span className="text-base font-black text-emerald-400">RM 3,200</span>
                    <span className="text-[10px] text-slate-400 block">FREE 1 Year of Scheduled Service & Warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('L Model Outright RM3,200')}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] self-start sm:self-center cursor-pointer transition-colors"
                  >
                    Select Outright
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-cyan-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">5 Years Rental Plan</span>
                    <span className="text-base font-black text-cyan-300">RM 105 / month <span className="text-xs font-normal text-slate-400">(1st – 5th Year)</span></span>
                    <span className="text-[10px] text-slate-400 block">FREE 5-year scheduled service & warranty every 4 months</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('L Model Rental RM105/mth')}
                    className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-[11px] self-start sm:self-center cursor-pointer transition-colors"
                  >
                    Select Rental
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
