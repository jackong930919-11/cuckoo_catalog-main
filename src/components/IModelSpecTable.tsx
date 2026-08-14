import React from 'react';
import { Sparkles, MessageCircle, Wind, Zap, Volume2, Shield, Eye, Layers, CheckCircle2, Tag } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface IModelSpecTableProps {
  onInquire?: (model: string) => void;
}

export const IModelSpecTable: React.FC<IModelSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO i Model Air Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO i Model Air Purifier (Outright Promo RM1,400 - Discount RM600)${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on purchasing and delivery. Thank you!`
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
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>CUCKOO i Model Air Purifier</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-500/20 text-rose-300 border border-rose-500/40 font-bold">
              RM600 Off Promotion!
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-amber-300 font-bold mt-1 uppercase tracking-wider">
            Compact Design • LED Air Quality Indicator • 3-Stage Filtration
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Clean air in a compact footprint with Dust Sensor auto operation, Ioniser mode, and 3-layer Ultra-Deo HEPA H13 filtration. Includes 3 Sets of Ultra-Deo HEPA Filters!
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('i Model Promo RM1,400')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire i Model Promo</span>
          </button>
        </div>
      </div>

      {/* Promotional Discount Callout Banner */}
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-red-950/80 via-slate-900 to-amber-950/80 border border-red-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-red-600 text-white shrink-0 shadow-md">
            <Tag className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-extrabold uppercase text-red-400 tracking-wider">Limited Time Outright Discount</div>
            <div className="text-sm sm:text-base font-black text-white flex items-center gap-2 flex-wrap">
              <span className="line-through text-slate-400 text-xs sm:text-sm">RM 2,000</span>
              <span className="text-amber-400 text-lg sm:text-xl">RM 1,400</span>
              <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase">SAVE RM 600</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-0.5">Includes <strong className="text-amber-300">3 Sets of Ultra-Deo HEPA Filters</strong> with 1-Year Service & Warranty</p>
          </div>
        </div>
        <button
          onClick={() => handleWhatsApp('Claim RM600 Discount i Model')}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shrink-0 self-start sm:self-center transition-colors shadow-lg cursor-pointer"
        >
          Claim RM1,400 Deal
        </button>
      </div>

      {/* Key USP Cards Grid */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-amber-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Unique Selling Points (USP)</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <Wind className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Compact Design</div>
              <div className="text-[10px] text-slate-400 font-medium">Ultra space-saving 3.45kg body</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <Eye className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">LED Air Quality Indicator</div>
              <div className="text-[10px] text-slate-400 font-medium">Real-time air pollution status</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <Zap className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Auto Operation (Dust Sensor)</div>
              <div className="text-[10px] text-slate-400 font-medium">Smart automatic speed adjustment</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <Layers className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">3-Layer Filtration</div>
              <div className="text-[10px] text-slate-400 font-medium">Ultra-Deo HEPA H13 Filter System</div>
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
              <td className="py-3 px-4 font-bold text-slate-200">Product Name</td>
              <td className="py-3 px-4 text-white font-black text-sm">CUCKOO i Model Air Purifier</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Coverage Area</td>
              <td className="py-3 px-4 text-amber-300 font-extrabold">32.9m² / 354ft²</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">CADR (Clean Air Delivery Rate)</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">219 m³/h</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Noise Level</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">&lt;55 dB</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">45 W</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Supply</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">Input: 100–240V, 50Hz / 60Hz | Output: 24V / 2.0A</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Modes</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">
                <span className="inline-flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-bold">Timer Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-bold">Auto Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-bold">Manual Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-bold">Ioniser Mode</span>
                </span>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Stages</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">3-Stage Filtration System</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filters Included</td>
              <td className="py-3 px-4 text-slate-300 space-y-1.5">
                <div className="font-bold text-amber-300">Ultra-Deo HEPA Filter System:</div>
                <div className="space-y-1 text-[11px]">
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
                    <span className="font-bold text-cyan-400">1. Pre-Filter:</span> Catches large dust particles, hair & fur
                  </div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
                    <span className="font-bold text-cyan-400">2. Deodorisation Filter:</span> Eliminates unpleasant odors & harmful VOC gases
                  </div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
                    <span className="font-bold text-cyan-400">3. True HEPA H13 Filter:</span> Traps 99.97% fine PM2.5 dust & airborne allergens
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">DIY Filter Replacement Period</td>
              <td className="py-3 px-4 text-emerald-400 font-bold">Every 4 Months (Includes 3 Sets of Ultra-Deo HEPA Filters)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Dimensions & Weight</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">244mm (W) × 244mm (D) × 544mm (H) | Weight: 3.45kg</td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">Outright Purchase Price</td>
              <td className="py-3.5 px-4 text-slate-200">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Special Outright Discounted Price</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-amber-400">RM 1,400</span>
                      <span className="line-through text-slate-500 text-xs">RM 2,000</span>
                      <span className="text-[10px] font-bold text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">Save RM 600!</span>
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Includes 3 Sets of Ultra-Deo HEPA Filters & Official Warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('i Model Promo Outright RM1,400')}
                    className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Buy at RM1,400 Now
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
