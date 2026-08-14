import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Flame, Snowflake, Zap, Lock, RefreshCw, Eye, RotateCw } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface AceUndersinkSpecTableProps {
  onInquire?: (model: string) => void;
}

export const AceUndersinkSpecTable: React.FC<AceUndersinkSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (promoDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO ACE Undersink Water Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO ACE Undersink Water Purifier${promoDetails ? ` (${promoDetails})` : ''}.\nPlease guide me on the RM6,350 Launching Promo deal (RM500 OFF + Free 2-Yr Service & Warranty). Thank you!`
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
            <span>CUCKOO ACE UNDERSINK</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold">100°C Steam Sterilisation</span>
          </h3>
          <p className="text-xs sm:text-sm text-amber-300 font-bold mt-1">
            1st Under Sink Water Purifier in Malaysia with 100°C Steam Sterilisation
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            100°C Steam Sterilisation thoroughly sanitisesthe faucet with high heat to eliminate bacteria.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('Launching Promo RM6,350')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire ACE Promo</span>
          </button>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Flame className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">100°C Steam</div>
            <div className="text-[10px] text-slate-400">Sterilises Faucet</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Snowflake className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">5°C to 100°C</div>
            <div className="text-[10px] text-slate-400">Cold & Hot Flow</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <RefreshCw className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">In & Out Auto</div>
            <div className="text-[10px] text-slate-400">Sterilisation</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Eye className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Human Sensor</div>
            <div className="text-[10px] text-slate-400">Detection System</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <RotateCw className="w-5 h-5 text-purple-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">180° Rotation</div>
            <div className="text-[10px] text-slate-400">Jog Dial & Touch</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Lock className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Secure Lock</div>
            <div className="text-[10px] text-slate-400">Multi Volume</div>
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
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO ACE (CP-AAS100ULDS)</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Type</td>
              <td className="py-3 px-4 text-amber-300 font-extrabold">Under Sink Water Purifier</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Colour</td>
              <td className="py-3 px-4 text-slate-300 font-medium">Lumi Dark Silver</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Rated Voltage</td>
              <td className="py-3 px-4 text-slate-300">200V / 60Hz</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Type</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">5-Stage Filtration System</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filters Included</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• Carbon Composite Filter</div>
                <div>• Nano Positive Filter</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Operation Pressure</td>
              <td className="py-3 px-4 text-slate-300">15 PSI – 40 PSI</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Dimension & Gross Weight</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• <strong className="text-white">Faucet:</strong> 61(W) x 187(D) x 306(H) mm | <strong>0.9 kg</strong></div>
                <div>• <strong className="text-white">Body (Under Sink):</strong> 166(W) x 390(D) x 418(H) mm | <strong>11 kg</strong></div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-300">
                2,600W | Cold Water: 0.6A | Hot Water: 2,500W
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Capacity</td>
              <td className="py-3 px-4 text-cyan-300 font-extrabold">Direct Water Flow</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key USPs & Features</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="text-amber-300 font-bold">1. 100°C Steam Sterilisation (Kills 99.9% Bacteria)</div>
                <div>2. In & Out Auto Sterilisation & Cleaning Water</div>
                <div>3. Space-Saving Minimalist Concealed Under-Sink Design</div>
                <div>4. Instantly dispenses 5°C Cold Water to 100°C Hot Water</div>
                <div>5. Human Detection Sensor for Smart Wake-up</div>
                <div>6. One Touch Panel & Jog Dial with 180° Rotation Faucet</div>
                <div>7. Secure Lock Features & Multiple Volume Dispensing</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-emerald-950/30 border-t-2 border-emerald-800/60">
              <td className="py-3.5 px-4 font-black text-emerald-400 text-sm">Launching Promo Price</td>
              <td className="py-3.5 px-4 text-white font-extrabold text-sm space-y-1">
                <div className="text-emerald-300 font-black text-base flex items-center gap-2">
                  <span>RM 6,350</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-600/80 text-white font-bold">SAVE RM500</span>
                </div>
                <p className="text-xs text-slate-300 font-normal">
                  🎁 Includes FREE 2-Year Schedule Service & Warranty + FOC Installation!
                </p>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-slate-900/80">
              <td className="py-3 px-4 font-bold text-slate-300">Normal Price</td>
              <td className="py-3 px-4 text-slate-300 font-bold">
                RM 6,850 <span className="font-normal text-slate-400 text-[11px]">(Includes Free 2-year service & warranty)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-900/60 to-slate-800/80 border border-amber-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Claim RM500 OFF Launching Promo for CUCKOO ACE Undersink?</p>
          <p className="text-slate-300 mt-0.5">Contact Authorized Agent <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong> for instant registration & free site check.</p>
        </div>
        <button
          onClick={() => handleWhatsApp('Launching Promo RM6,350')}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Book ACE Promo via WhatsApp
        </button>
      </div>
    </div>
  );
};
