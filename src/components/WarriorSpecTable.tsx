import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Droplets, Flame, Gauge, Lock, Shield, HeartHandshake, Maximize2, Thermometer } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface WarriorSpecTableProps {
  onInquire?: (model: string) => void;
}

export const WarriorSpecTable: React.FC<WarriorSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO WARRIOR Water Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO WARRIOR Mild Alkaline Water Purifier${planDetails ? ` (${planDetails})` : ''}.\nPlease share details on the RM95/mth or RM105/mth rental plans and latest promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO WARRIOR</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold">Mild Alkaline Water Purifier</span>
          </h3>
          <p className="text-xs sm:text-sm text-amber-300 font-bold mt-1">
            The Health Protector Of Every Family
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            While you're outside fighting for your family, CUCKOO WARRIOR is at home protecting every family with pure, healthy water.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('WARRIOR Deal')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire WARRIOR</span>
          </button>
        </div>
      </div>

      {/* Highlights / USPs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Shield className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Health Protector</div>
            <div className="text-[10px] text-slate-400">Pure Mild Alkaline</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Droplets className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">6-Stage System</div>
            <div className="text-[10px] text-slate-400">4 Filters (12mth)</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Stainless Tank</div>
            <div className="text-[10px] text-slate-400">Antibacterial Storage</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Maximize2 className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">21cm Outlet Space</div>
            <div className="text-[10px] text-slate-400">Fits Tall Bottles</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Thermometer className="w-5 h-5 text-sky-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Temp Dial Knob</div>
            <div className="text-[10px] text-slate-400">Cold Water Control</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Lock className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Child Safety Lock</div>
            <div className="text-[10px] text-slate-400">Scald Protection</div>
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
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO WARRIOR</td>
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
                Hot: <strong className="text-amber-300 font-extrabold">350 W</strong> | Cold: <strong className="text-cyan-300 font-extrabold">100 W</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Tank Capacity (Total 5.2L)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="text-xs text-amber-300 font-bold mb-1">Suitable for 4–8 family members</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Room</span>
                    <span className="font-extrabold text-emerald-300 text-xs">1.0 L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Cold</span>
                    <span className="font-extrabold text-cyan-300 text-xs">2.8 L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Hot</span>
                    <span className="font-extrabold text-amber-300 text-xs">1.4 L</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Dimension & Gross Weight</td>
              <td className="py-3 px-4 text-slate-300">
                260mm (W) x 508mm (D) x 508mm (H) | <strong className="text-white">14.3 kg</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key Selling Features (USP)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>1. <strong className="text-slate-100">6-Stage Mild Alkaline Filtration:</strong> Pure, healthy mineral-rich alkaline water</div>
                <div>2. <strong className="text-slate-100">High-Capacity Antibacterial Tank:</strong> Premium stainless-steel water storage</div>
                <div>3. <strong className="text-slate-100">Instant Hot & Cold Water Output:</strong> Rapid dispensing for hot beverages & iced drinks</div>
                <div>4. <strong className="text-slate-100">Extra Comfortable 21cm Outlet Space:</strong> Wide height clearance for tall bottles, pots & jugs</div>
                <div>5. <strong className="text-slate-100">Cold Water Temperature Knob:</strong> Precise dial control for preferred coldness</div>
                <div>6. <strong className="text-slate-100">Child Safety Lock Feature:</strong> Essential safety protection against accidental hot water release</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300 align-top">Rental Plan Options</td>
              <td className="py-3 px-4 text-slate-300 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-amber-800/50">
                  <span className="px-2 py-0.5 rounded bg-amber-600 text-white font-bold text-[10px] inline-block mb-1">Option A</span>
                  <p className="text-white font-extrabold text-xs">RM 105.00 / month <span className="font-normal text-slate-400">(1st – 5th Year)</span></p>
                  <p className="text-[11px] text-amber-300 mt-0.5">✓ Includes FREE 5-year scheduled service & warranty</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/50">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] inline-block mb-1">Option B (Lowest Monthly)</span>
                  <p className="text-white font-extrabold text-xs">RM 95.00 / month <span className="font-normal text-slate-400">(1st – 7th Year)</span></p>
                  <p className="text-[11px] text-emerald-300 mt-0.5">✓ Includes FREE 7-year scheduled service & warranty</p>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300 align-top">Purchase (Outright)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <p className="text-amber-200 font-extrabold text-sm">RM 3,400.00</p>
                <p className="text-xs text-amber-300 font-semibold">
                  ✓ Includes FREE 1-year scheduled service & warranty
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-900/60 to-slate-800/80 border border-amber-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Interested in CUCKOO WARRIOR Water Purifier?</p>
          <p className="text-slate-300 mt-0.5">Get it for RM95/mth or RM105/mth with free installation & servicing by authorized agent <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong>.</p>
        </div>
        <button
          onClick={() => handleWhatsApp('WARRIOR Deal')}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire WARRIOR via WhatsApp
        </button>
      </div>
    </div>
  );
};
