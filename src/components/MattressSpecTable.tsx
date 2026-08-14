import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, Truck, Sparkles, Gift, CheckCircle2, Box } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface MattressSpecTableProps {
  productName?: string;
  onInquire?: (model: string) => void;
}

export const MattressSpecTable: React.FC<MattressSpecTableProps> = ({ productName = 'A-Luxe Mattress by Napure', onInquire }) => {
  const [selectedProduct, setSelectedProduct] = useState<string>(
    productName.includes('Hugz')
      ? 'hugz'
      : productName.includes('A-Lite')
      ? 'alite'
      : productName.includes('S-Lite')
      ? 'slite'
      : 'aluxe'
  );

  const handleWhatsApp = (model: string, detail?: string) => {
    if (onInquire) {
      onInquire(model);
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in ${model}${detail ? ` (${detail})` : ''}.\nPlease share more details on the rental plan & outright promotion. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Product Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-slate-800 mb-6 scrollbar-none">
        <button
          onClick={() => setSelectedProduct('aluxe')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
            selectedProduct === 'aluxe'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-950 font-black'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
          }`}
        >
          A-Luxe by Napure
        </button>
        <button
          onClick={() => setSelectedProduct('alite')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
            selectedProduct === 'alite'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-950 font-black'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
          }`}
        >
          A-Lite by Napure
        </button>
        <button
          onClick={() => setSelectedProduct('slite')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
            selectedProduct === 'slite'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-950 font-black'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
          }`}
        >
          S-Lite by Napure
        </button>
        <button
          onClick={() => setSelectedProduct('hugz')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
            selectedProduct === 'hugz'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-950 font-black'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
          }`}
        >
          CUCKOO Hugz (Bed-in-a-Box)
        </button>
      </div>

      {/* Product Header & Gift Highlights */}
      {selectedProduct !== 'hugz' ? (
        <div className="mb-6 bg-gradient-to-r from-amber-950/60 via-slate-900 to-slate-950 p-4 sm:p-5 rounded-2xl border border-amber-500/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/40">
                  <Gift className="w-3.5 h-3.5 text-amber-400" />
                  FREE GIFT INCLUDED
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black border border-emerald-500/40">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Available Outright Plan
                </div>
              </div>
              <h4 className="text-xl font-black text-white">
                {selectedProduct === 'aluxe' && 'A-Luxe Mattress by Napure'}
                {selectedProduct === 'alite' && 'A-Lite Mattress by Napure'}
                {selectedProduct === 'slite' && 'S-Lite Mattress by Napure'}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Rental Plan or Outright Purchase comes with <strong className="text-amber-300">2 x Waterproof Mattress Protector</strong> (Worth RM 300+).
              </p>
            </div>
            <button
              onClick={() =>
                handleWhatsApp(
                  selectedProduct === 'aluxe'
                    ? 'A-Luxe Mattress by Napure'
                    : selectedProduct === 'alite'
                    ? 'A-Lite Mattress by Napure'
                    : 'S-Lite Mattress by Napure'
                )
              }
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 self-start sm:self-center shrink-0 shadow-md shadow-emerald-950"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire Napure Plan</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 pt-3 border-t border-amber-900/40 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>FREE Delivery Fees</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>FREE Processing Fees</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>FREE Professional Installation</span>
            </div>
          </div>
        </div>
      ) : (
        /* CUCKOO Hugz Highlight Card */
        <div className="mb-6 bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-950 p-4 sm:p-5 rounded-2xl border border-indigo-500/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-black border border-indigo-500/40 mb-2">
                <Box className="w-3.5 h-3.5 text-indigo-400" />
                BED-IN-A-BOX CONCEPT
              </div>
              <h4 className="text-xl font-black text-white">CUCKOO Hugz Mattress</h4>
              <p className="text-xs text-slate-300 mt-1">
                Tilam di dalam kotak. Delivered via courier directly to your installation address.
              </p>
            </div>
            <button
              onClick={() => handleWhatsApp('CUCKOO Hugz Mattress', 'Outright Purchase RM2,499')}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 self-start sm:self-center shrink-0 shadow-md shadow-emerald-950"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order CUCKOO Hugz</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-3 border-t border-indigo-900/40 text-xs">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[11px] text-slate-400 font-bold">OUTRIGHT SPECIAL PROMO</div>
              <div className="text-lg font-black text-amber-400 mt-0.5">
                RM 2,499 <span className="text-xs line-through text-slate-500">RM 2,999</span>
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-1">SAVE RM 500 INSTANTLY 🔥</div>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Truck className="w-3.5 h-3.5" />
                <span>FREE Courier Delivery Fees</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FREE Processing Fees</span>
              </div>
              <div className="text-[10px] text-slate-400 italic">
                * Note: No Rental Plan or CCSP Service Plan available for Hugz model.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Matrix Table for A-Luxe */}
      {selectedProduct === 'aluxe' && (
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 font-extrabold text-[11px] uppercase tracking-wider">
                <th className="p-3 sm:p-4">Size & Option</th>
                <th className="p-3 sm:p-4 text-center">36 Months Rental</th>
                <th className="p-3 sm:p-4 text-center">60 Months Rental</th>
                <th className="p-3 sm:p-4 text-center">84 Months Rental</th>
                <th className="p-3 sm:p-4 text-right text-amber-400 font-black">Available Outright Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  Queen Size <span className="text-slate-400 font-normal">(Without Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-bold text-amber-400">RM 154 / mth</td>
                <td className="p-3 sm:p-4 text-center font-bold text-amber-400">RM 133 / mth</td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 108 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 5,350</td>
              </tr>
              <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  Queen Size <span className="text-indigo-300 font-semibold">(With Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-semibold text-slate-500">N/A</td>
                <td className="p-3 sm:p-4 text-center font-bold text-amber-400">RM 163 / mth</td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 139 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 6,600</td>
              </tr>
              <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  King Size <span className="text-slate-400 font-normal">(Without Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-bold text-amber-400">RM 185 / mth</td>
                <td className="p-3 sm:p-4 text-center font-bold text-amber-400">RM 153 / mth</td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 129 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 5,650</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  King Size <span className="text-indigo-300 font-semibold">(With Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-semibold text-slate-500">N/A</td>
                <td className="p-3 sm:p-4 text-center font-bold text-amber-400">RM 184 / mth</td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 159 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 6,900</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Matrix Table for A-Lite */}
      {selectedProduct === 'alite' && (
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 font-extrabold text-[11px] uppercase tracking-wider">
                <th className="p-3 sm:p-4">Size & Option</th>
                <th className="p-3 sm:p-4 text-center">60 Months Rental Plan</th>
                <th className="p-3 sm:p-4 text-right text-amber-400 font-black">Available Outright Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  Queen Size <span className="text-slate-400 font-normal">(Without Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 105 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 3,850</td>
              </tr>
              <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  Queen Size <span className="text-indigo-300 font-semibold">(With Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 136 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 5,100</td>
              </tr>
              <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  King Size <span className="text-slate-400 font-normal">(Without Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 125 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 4,150</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  King Size <span className="text-indigo-300 font-semibold">(With Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 156 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 5,400</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Matrix Table for S-Lite */}
      {selectedProduct === 'slite' && (
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 font-extrabold text-[11px] uppercase tracking-wider">
                <th className="p-3 sm:p-4">Size & Option</th>
                <th className="p-3 sm:p-4 text-center">60 Months Rental Plan</th>
                <th className="p-3 sm:p-4 text-right text-amber-400 font-black">Available Outright Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  Queen Size <span className="text-slate-400 font-normal">(Without Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 102 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 3,850</td>
              </tr>
              <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  Queen Size <span className="text-indigo-300 font-semibold">(With Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 133 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 5,100</td>
              </tr>
              <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  King Size <span className="text-slate-400 font-normal">(Without Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 122 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 4,150</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-3 sm:p-4 font-bold text-white">
                  King Size <span className="text-indigo-300 font-semibold">(With Bedframe)</span>
                </td>
                <td className="p-3 sm:p-4 text-center font-black text-emerald-400 bg-emerald-950/20">RM 153 / mth</td>
                <td className="p-3 sm:p-4 text-right font-black text-white">RM 5,400</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Footnote */}
      <div className="mt-4 flex items-center justify-between flex-wrap gap-2 text-[11px] text-slate-400 italic">
        <span>* Free Delivery, Installation & Processing Fees for all Mattress options. Terms & Conditions apply.</span>
      </div>
    </div>
  );
};
