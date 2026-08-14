import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Droplets, Flame, Snowflake, Gauge, Lock, Zap } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface FloStandSpecTableProps {
  onInquire?: (model: string) => void;
}

export const FloStandSpecTable: React.FC<FloStandSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO FLO (Flo Stand)');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO FLO (Flo Stand) Floor Standing Mild Alkaline Water Purifier${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM92/mth or RM121/mth rental plans and free service package. Thank you!`
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
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO FLO</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">16.0L Big Tank</span>
          </h3>
          <p className="text-xs sm:text-sm text-cyan-300 font-bold mt-1">
            Big Tank Sleek Style — Mild Alkaline Water Purifier
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            Experience unmatched capacity and cutting-edge design in every drop. Sleek, efficient, and perfect for any space.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('Floor Stand Special')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Flo Stand</span>
          </button>
        </div>
      </div>

      {/* Highlights / USPs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Gauge className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">16.0L Huge Tank</div>
            <div className="text-[10px] text-slate-400">7L Room, 5L Cold, 4L Hot</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Droplets className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">6-Stage System</div>
            <div className="text-[10px] text-slate-400">4 High Quality Filters</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Lock className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Child Lock Safety</div>
            <div className="text-[10px] text-slate-400">Burn Protection</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Zap className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Indicator Lights</div>
            <div className="text-[10px] text-slate-400">Hot & Cold Status</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between col-span-2 sm:col-span-1">
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Instant 3 Temps</div>
            <div className="text-[10px] text-slate-400">Hot, Cold & Room</div>
          </div>
        </div>
      </div>

      {/* Specification Chart Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 mb-6">
        <table className="w-full text-left text-xs text-slate-300 divide-y divide-slate-800/80">
          <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider font-extrabold">
            <tr>
              <th className="py-3 px-4 w-2/5">Specification Field</th>
              <th className="py-3 px-4 w-3/5">Details / Specifications</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50 text-xs">
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Name</td>
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO FLO (Flo Stand)</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Colour</td>
              <td className="py-3 px-4 text-slate-300 font-medium">Matte White</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Type</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">6-Stage Filtration System</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter & Replacement Period</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• <strong className="text-slate-200">Sediment Filter:</strong> Every 4 Months</div>
                <div>• <strong className="text-slate-200">Pre-Carbon Block 2.0 Filter:</strong> Every 8 Months</div>
                <div>• <strong className="text-slate-200">Natural 2.0 Filter:</strong> Every 12 Months</div>
                <div>• <strong className="text-slate-200">Nano Positive Filter:</strong> Every 12 Months</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-300">
                Cold: <strong className="text-white">0.8A</strong> | Hot: <strong className="text-white">500W</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Tank Capacity (Total 16.0L)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Room</span>
                    <span className="font-extrabold text-emerald-300 text-xs">7.0L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Cold</span>
                    <span className="font-extrabold text-cyan-300 text-xs">5.0L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Hot</span>
                    <span className="font-extrabold text-amber-300 text-xs">4.0L</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Dimension & Net Weight</td>
              <td className="py-3 px-4 text-slate-300">
                360(W) x 465(D) x 1305(H) mm | <strong className="text-white">27.6 kg</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key Selling Points (USP)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>1. <strong className="text-slate-100">16.0L Massive Tank Capacity:</strong> Unmatched capacity for families, offices, and commercial spaces</div>
                <div>2. <strong className="text-slate-100">6-Stage Mild Alkaline System:</strong> Pure, mineral-rich drinking water continuously</div>
                <div>3. <strong className="text-slate-100">Child Lock Safety Features:</strong> Prevents accidental scalding</div>
                <div>4. <strong className="text-slate-100">Hot/Cold Temperature Indicator Lights:</strong> Intuitive status displays</div>
                <div>5. <strong className="text-slate-100">Instant 3-Temp Dispense:</strong> Instant Hot, Cold and Room temperature water at all times</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-indigo-950/20">
              <td className="py-3 px-4 font-bold text-indigo-300 align-top">Rental Plan Options</td>
              <td className="py-3 px-4 text-slate-300 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-indigo-800/50">
                  <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px] inline-block mb-1">Option A</span>
                  <p className="text-white font-extrabold text-xs">RM 121.00 / month <span className="font-normal text-slate-400">(1st – 5th year)</span></p>
                  <p className="text-[11px] text-indigo-300 mt-0.5">✓ Includes FREE 5-year scheduled service & warranty</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/50">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] inline-block mb-1">Option B (Lowest Monthly)</span>
                  <p className="text-white font-extrabold text-xs">RM 92.00 / month <span className="font-normal text-slate-400">(1st – 7th year)</span></p>
                  <p className="text-[11px] text-emerald-300 mt-0.5">✓ Includes FREE 7-year scheduled service & warranty</p>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300 align-top">Outright Purchase</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <p className="text-amber-200 font-extrabold text-sm">RM 4,450.00</p>
                <p className="text-xs text-amber-300 font-semibold">
                  ✓ Includes FREE 1-year scheduled service & full warranty!
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-900/60 to-slate-800/80 border border-cyan-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Need High Capacity 16.0L Water Purifier CUCKOO FLO?</p>
          <p className="text-slate-300 mt-0.5">Choose RM92/mth or RM121/mth options with free nationwide delivery & service by authorized agent <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong>.</p>
        </div>
        <button
          onClick={() => handleWhatsApp('Floor Stand Special')}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire CUCKOO FLO via WhatsApp
        </button>
      </div>
    </div>
  );
};
