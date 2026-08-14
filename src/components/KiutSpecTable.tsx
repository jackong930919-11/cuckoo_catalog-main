import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Droplets, Zap, Lock, Palette, Gauge, Play } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface KiutSpecTableProps {
  onInquire?: (model: string) => void;
}

export const KiutSpecTable: React.FC<KiutSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO KIUT');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO KIUT Mild Alkaline Water Purifier${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM62/mth or RM72/mth rental plans and interchangeable panel offers. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/80 border border-pink-700/50 text-pink-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO KIUT</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40 font-semibold">Tankless Mild Alkaline</span>
          </h3>
          <p className="text-xs sm:text-sm text-pink-300 font-bold mt-1">
            Match Your Mood with KIUT’s Interchangeable Panels
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            The Cool Silver you is sophisticated, Calm Blue is pure, and Joyful Pink is warm — whenever you need it.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp()}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire KIUT Deal</span>
          </button>
        </div>
      </div>

      {/* Official YouTube Video Showcase */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-pink-900/50 shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-pink-950 border border-pink-800/60 text-pink-400">
              <Play className="w-4 h-4 fill-pink-400" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-wide">
                CUCKOO KIUT Video Showcase
              </h4>
              <p className="text-[11px] text-slate-400">See KIUT Tankless Mild Alkaline Water Purifier in action</p>
            </div>
          </div>
          <a
            href="https://youtu.be/xokm2KjKmxY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-pink-400 hover:text-pink-300 bg-pink-950/60 px-2.5 py-1 rounded-lg border border-pink-800/50 flex items-center gap-1.5 transition-colors"
          >
            <span>Open on YouTube</span>
          </a>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
          <iframe
            src="https://www.youtube.com/embed/xokm2KjKmxY"
            title="CUCKOO KIUT Video Showcase"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Highlights / USPs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Palette className="w-5 h-5 text-pink-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">3 Panel Colours</div>
            <div className="text-[10px] text-slate-400">Pink / Blue / Silver</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Droplets className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Faucet Electrolysis</div>
            <div className="text-[10px] text-slate-400">99.99% Sterilisation</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Gauge className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Multi Volume</div>
            <div className="text-[10px] text-slate-400">Dispensing Options</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Zap className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Slim Tankless</div>
            <div className="text-[10px] text-slate-400">Instant Purification</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Instant Freshness</div>
            <div className="text-[10px] text-slate-400">One-Button Dispense</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Lock className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Safety Lock</div>
            <div className="text-[10px] text-slate-400">Spill Prevention</div>
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
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO KIUT</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Product Colour (Panel Set)</td>
              <td className="py-3 px-4 text-slate-300">
                <span className="font-semibold text-white">Joyful Pink | Cool Silver | Calm Blue</span>
                <span className="block text-[11px] text-pink-300 mt-0.5">
                  *Joyful Pink & Calm Blue interchangeable panel sets sold separately
                </span>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Dimension & Gross Weight</td>
              <td className="py-3 px-4 text-slate-300">
                135mm (W) x 388mm (D) x 364mm (H) | <strong className="text-white">4 kg</strong> (Ultra Lightweight)
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Type</td>
              <td className="py-3 px-4 text-slate-300 font-medium">4-Stage Filtration System</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter & Replacement Period</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• <strong className="text-slate-200">Dual Sediment Carbon Composite Filter:</strong> Every 4 Months</div>
                <div>• <strong className="text-slate-200">Natural Plus 2.0 Filter:</strong> Every 8 Months</div>
                <div>• <strong className="text-slate-200">Nano Positive Filter:</strong> Every 12 Months</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Tank Capacity</td>
              <td className="py-3 px-4 text-cyan-300 font-extrabold">Tankless (Direct Instant Dispense)</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-300 font-bold">Room Temperature: 52W (Ultra Low Energy)</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key Selling Features (USP)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>1. <strong className="text-slate-100">Faucet Electrolysis Sterilisation:</strong> Keeps faucet hygienic, eliminating 99.99% of bacteria</div>
                <div>2. <strong className="text-slate-100">Multiple Volume Dispensing Options</strong></div>
                <div>3. <strong className="text-slate-100">Slim Tankless Design:</strong> Water purified and dispensed instantly</div>
                <div>4. <strong className="text-slate-100">Instant Freshness:</strong> Simple one-button operation for room temp water</div>
                <div>5. <strong className="text-slate-100">Safety Lock Function:</strong> Avoids spills and accidental dispensing</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-pink-950/20">
              <td className="py-3 px-4 font-bold text-pink-300 align-top">Rental Plan Options</td>
              <td className="py-3 px-4 text-slate-300 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-pink-800/50">
                  <span className="px-2 py-0.5 rounded bg-pink-600 text-white font-bold text-[10px] inline-block mb-1">Option A</span>
                  <p className="text-white font-extrabold text-xs">RM 72 / month <span className="font-normal text-slate-400">(1st – 5th year)</span></p>
                  <p className="text-[11px] text-pink-300 mt-0.5">✓ Includes FREE 5-year scheduled service & warranty</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/50">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] inline-block mb-1">Option B (Lowest Monthly)</span>
                  <p className="text-white font-extrabold text-xs">RM 62 / month <span className="font-normal text-slate-400">(1st – 7th year)</span></p>
                  <p className="text-[11px] text-emerald-300 mt-0.5">✓ Includes FREE 7-year scheduled service & warranty</p>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300 align-top">Outright Purchase</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <p className="text-amber-200 font-extrabold text-sm">RM 3,050</p>
                <p className="text-xs text-amber-300 font-semibold">
                  🎁 Enjoy RM100 Off + FREE 2-year service and warranty + FREE set of interchangeable colour panels!
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-900/60 to-slate-800/80 border border-pink-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Love the CUCKOO KIUT Slim Tankless Design?</p>
          <p className="text-slate-300 mt-0.5">Choose RM62/mth or RM72/mth with free installation & service by authorized agent <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong>.</p>
        </div>
        <button
          onClick={() => handleWhatsApp()}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire KIUT via WhatsApp
        </button>
      </div>
    </div>
  );
};
