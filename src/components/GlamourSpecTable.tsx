import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Droplets, Flame, Snowflake, Gauge, Zap, Bookmark, BatteryCharging, HeartHandshake, Play } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface GlamourSpecTableProps {
  onInquire?: (model: string) => void;
}

export const GlamourSpecTable: React.FC<GlamourSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO GLAMOUR Water Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO GLAMOUR Water Purifier in Champagne Pink & Matte Black${planDetails ? ` (${planDetails})` : ''}.\nPlease share details on the RM100/mth or RM110/mth rental options and latest promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-700/50 text-rose-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO GLAMOUR</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold">Champagne Pink & Matte Black</span>
          </h3>
          <p className="text-xs sm:text-sm text-rose-300 font-bold mt-1">
            Don't Judge Its Abilities By Its Looks — Two-Toned Beauty
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            Powered by a host of smart features: extra-large 7.6L tank, instant hot water, memory function & energy-saving mode.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('Champagne Pink Deal')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire GLAMOUR</span>
          </button>
        </div>
      </div>

      {/* Official YouTube Video Showcase */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-rose-900/50 shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-rose-950 border border-rose-800/60 text-rose-400">
              <Play className="w-4 h-4 fill-rose-400" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-wide">
                CUCKOO GLAMOUR Video Showcase
              </h4>
              <p className="text-[11px] text-slate-400">See GLAMOUR Water Purifier introduction video</p>
            </div>
          </div>
          <a
            href="https://youtu.be/NKZUuaguHtM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-rose-400 hover:text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-800/50 flex items-center gap-1.5 transition-colors"
          >
            <span>Open on YouTube</span>
          </a>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
          <iframe
            src="https://www.youtube.com/embed/NKZUuaguHtM"
            title="CUCKOO GLAMOUR Video Showcase"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Highlights / USPs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Gauge className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Extra Large 7.6L</div>
            <div className="text-[10px] text-slate-400">4-8 Family Members</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Flame className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Instant Hot Water</div>
            <div className="text-[10px] text-slate-400">Continuous Flow</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Droplets className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">6-Stage System</div>
            <div className="text-[10px] text-slate-400">Nano Positive Filter</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Bookmark className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Memory Function</div>
            <div className="text-[10px] text-slate-400">Custom Presets</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <BatteryCharging className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Energy Saving</div>
            <div className="text-[10px] text-slate-400">Smart Eco Mode</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <ShieldCheck className="w-5 h-5 text-purple-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Safety Features</div>
            <div className="text-[10px] text-slate-400">Child & Spill Lock</div>
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
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO GLAMOUR</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Colour</td>
              <td className="py-3 px-4 text-rose-300 font-extrabold">Champagne Pink with Matte Black</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Type</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">6-Stage Filtration System</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter & Replacement Period</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• <strong className="text-slate-200">Sediment Filter:</strong> Every 4 Months</div>
                <div>• <strong className="text-slate-200">Carbon Composite Filter:</strong> Every 4 Months</div>
                <div>• <strong className="text-slate-200">Nano Positive Filter:</strong> Every 8 Months</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-300">
                Cold: <strong className="text-white">0.6A</strong> | Hot: <strong className="text-white">450W</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Tank Capacity (Total 7.6L)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="text-xs text-rose-300 font-bold mb-1">Suitable for 4–8 family members</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Cold</span>
                    <span className="font-extrabold text-cyan-300 text-xs">2.5L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Room</span>
                    <span className="font-extrabold text-emerald-300 text-xs">2.7L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Hot</span>
                    <span className="font-extrabold text-amber-300 text-xs">2.4L</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Dimensions & Gross Weight</td>
              <td className="py-3 px-4 text-slate-300">
                260mm (W) x 527mm (D) x 506mm (H) | <strong className="text-white">16.5 kg</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key Selling Features (USP)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>1. <strong className="text-slate-100">Extra Large 7.6L Tank:</strong> Designed for medium-to-large households (4-8 people)</div>
                <div>2. <strong className="text-slate-100">Multiple Volume Dispensing Options:</strong> Precision volume controls</div>
                <div>3. <strong className="text-slate-100">Smart Memory Function:</strong> Remembers your preferred water settings</div>
                <div>4. <strong className="text-slate-100">Energy-Saving Eco Mode:</strong> Reduces power consumption during low-use hours</div>
                <div>5. <strong className="text-slate-100">Instant Hot Water Dispensing:</strong> Quick, convenient hot water at all times</div>
                <div>6. <strong className="text-slate-100">Enhanced Child Safety Lock Features:</strong> Full safety protection</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-rose-950/20">
              <td className="py-3 px-4 font-bold text-rose-300 align-top">Rental Plan Options</td>
              <td className="py-3 px-4 text-slate-300 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-rose-800/50">
                  <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] inline-block mb-1">Option A</span>
                  <p className="text-white font-extrabold text-xs">RM 110.00 / month <span className="font-normal text-slate-400">(1st – 5th year)</span></p>
                  <p className="text-[11px] text-rose-300 mt-0.5">✓ Includes FREE 5-year scheduled service & warranty</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/50">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] inline-block mb-1">Option B (Lowest Monthly)</span>
                  <p className="text-white font-extrabold text-xs">RM 100.00 / month <span className="font-normal text-slate-400">(1st – 7th year)</span></p>
                  <p className="text-[11px] text-emerald-300 mt-0.5">✓ Includes FREE 7-year scheduled service & warranty</p>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300 align-top">Outright Purchase</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <p className="text-amber-200 font-extrabold text-sm">RM 4,350.00</p>
                <p className="text-xs text-amber-300 font-semibold">
                  ✓ Includes FREE 1-year scheduled service & full warranty!
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-900/60 to-slate-800/80 border border-rose-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Interested in CUCKOO GLAMOUR Champagne Pink & Matte Black?</p>
          <p className="text-slate-300 mt-0.5">Enjoy RM100/mth or RM110/mth rental plans with free nationwide installation & service by <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong>.</p>
        </div>
        <button
          onClick={() => handleWhatsApp('Champagne Pink Deal')}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire GLAMOUR via WhatsApp
        </button>
      </div>
    </div>
  );
};
