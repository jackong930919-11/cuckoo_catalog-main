import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Droplets, Flame, Lock, FlameKindling, Zap, Award } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface VividSpecTableProps {
  onInquire?: (model: string) => void;
}

export const VividSpecTable: React.FC<VividSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO VIVID Water Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO VIVID Water Purifier (Biggest 5.3L Hot Tank in Town)${planDetails ? ` (${planDetails})` : ''}.\nPlease share details on the RM66/mth or RM77/mth rental options and latest promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-700/50 text-orange-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO VIVID</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40 font-semibold">Biggest Hot Water Tank in Town</span>
          </h3>
          <p className="text-xs sm:text-sm text-orange-300 font-bold mt-1">
            THE BIGGEST HOT WATER TANK IN TOWN
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            A lightweight powerhouse (7.9kg) providing mild alkaline water free from harmful bacteria & viruses with a massive 5.3L hot water tank.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('VIVID Deal')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire VIVID</span>
          </button>
        </div>
      </div>

      {/* Highlights / USPs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <FlameKindling className="w-5 h-5 text-orange-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Biggest Hot Tank</div>
            <div className="text-[10px] text-slate-400">5.3 Litres Hot Water</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Stainless Tank</div>
            <div className="text-[10px] text-slate-400">Antibacterial Protection</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Flame className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">3 Hot Temp Levels</div>
            <div className="text-[10px] text-slate-400">Level Light Indicator</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Droplets className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">6-Stage System</div>
            <div className="text-[10px] text-slate-400">Mild Alkaline Water</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between col-span-2 sm:col-span-1">
          <Lock className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Child Safety Lock</div>
            <div className="text-[10px] text-slate-400">7.9kg Lightweight</div>
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
              <td className="py-3 px-4 font-bold text-slate-200">Model</td>
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO VIVID</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Weight (kg)</td>
              <td className="py-3 px-4 text-white font-extrabold">7.9 kg</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Type</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">6-Stage Filtration System</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter Replacement Period</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• <strong className="text-slate-200">Sediment Filter:</strong> Every 4 Months</div>
                <div>• <strong className="text-slate-200">Pre-Carbon Block 2.0 Filter:</strong> Every 8 Months</div>
                <div>• <strong className="text-slate-200">Natural 2.0 Filter:</strong> Every 12 Months</div>
                <div>• <strong className="text-slate-200">Nano Positive Filter:</strong> Every 12 Months</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Tank Capacity (Total 6.6L)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="text-xs text-orange-300 font-bold mb-1">Suitable for 4–8 family members</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Warm Water</span>
                    <span className="font-extrabold text-emerald-300 text-xs">1.3 L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-orange-800/60 bg-orange-950/20 text-center">
                    <span className="block text-[10px] text-orange-300 font-bold">Hot Water (Largest Tank!)</span>
                    <span className="font-black text-orange-400 text-sm">5.3 L</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Material</td>
              <td className="py-3 px-4 text-slate-200 font-bold">
                Antibacterial Stainless-Steel Water Tank
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-300">
                Warm Water: <strong className="text-white">100 W</strong> | Hot Water: <strong className="text-orange-300 font-extrabold">800 W</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key Selling Features (USP)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>1. <strong className="text-slate-100">THE BIGGEST HOT WATER TANK IN TOWN:</strong> Massive 5.3 Litres hot water storage</div>
                <div>2. <strong className="text-slate-100">Antibacterial Stainless-Steel Water Tank:</strong> Hygienic, durable, and bacteria-free</div>
                <div>3. <strong className="text-slate-100">3 Hot Water Level Indicator:</strong> Visual feedback for hot water temperatures</div>
                <div>4. <strong className="text-slate-100">Child Lock Safety Feature:</strong> Safety lock prevents accidental hot water scalding</div>
                <div>5. <strong className="text-slate-100">6-Stage Mild Alkaline System:</strong> Delivers pure, mineral-rich alkaline drinking water</div>
                <div>6. <strong className="text-slate-100">Lightweight Powerhouse:</strong> Ultra-easy placement at only 7.9kg</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-orange-950/20">
              <td className="py-3 px-4 font-bold text-orange-300 align-top">Rental Plan Options</td>
              <td className="py-3 px-4 text-slate-300 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-orange-800/50">
                  <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-bold text-[10px] inline-block mb-1">Option A</span>
                  <p className="text-white font-extrabold text-xs">RM 77.00 / month <span className="font-normal text-slate-400">(1st – 5th Year)</span></p>
                  <p className="text-[11px] text-orange-300 mt-0.5">✓ Includes FREE 5-year scheduled service & warranty</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/50">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] inline-block mb-1">Option B (Lowest Monthly)</span>
                  <p className="text-white font-extrabold text-xs">RM 66.00 / month <span className="font-normal text-slate-400">(1st – 7th Year)</span></p>
                  <p className="text-[11px] text-emerald-300 mt-0.5">✓ Includes FREE 7-year scheduled service & warranty</p>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300 align-top">Purchase (Outright)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <p className="text-amber-200 font-extrabold text-sm">RM 3,360.00</p>
                <p className="text-xs text-amber-300 font-semibold">
                  ✓ Includes FREE 1-year scheduled service & warranty
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-900/60 to-slate-800/80 border border-orange-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Interested in CUCKOO VIVID (Biggest Hot Tank in Town)?</p>
          <p className="text-slate-300 mt-0.5">Get it for RM66/mth or RM77/mth with free installation & servicing by authorized agent <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong>.</p>
        </div>
        <button
          onClick={() => handleWhatsApp('VIVID Deal')}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire VIVID via WhatsApp
        </button>
      </div>
    </div>
  );
};
