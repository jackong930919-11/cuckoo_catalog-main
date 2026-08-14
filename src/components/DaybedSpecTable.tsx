import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Armchair, Layers, Maximize2, Truck } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface DaybedSpecTableProps {
  onInquire?: (model: string) => void;
}

export const DaybedSpecTable: React.FC<DaybedSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = () => {
    if (onInquire) {
      onInquire('Flex DayBed by Napure');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO FLEX DayBed by Napure.\nI would like to inquire about the RM102/mth rental plan or RM3,900 outright purchase. Please share details. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
            CUCKOO FLEX DAYBED SPECIFICATIONS
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Co-Created with Napure • Premium Ergonomic Luxury Lounger & Sofa Bed
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleWhatsApp}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Promo</span>
          </button>
        </div>
      </div>

      {/* Product Highlights Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Layers className="w-4 h-4 text-amber-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">100% Full Latex</div>
          <div className="text-[10px] text-slate-400">On Top Layer</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Armchair className="w-4 h-4 text-indigo-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">8-Angle Comfort</div>
          <div className="text-[10px] text-slate-400">Supremely Versatile</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Maximize2 className="w-4 h-4 text-cyan-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">Sofa & Bed Switch</div>
          <div className="text-[10px] text-slate-400">Easy Transformation</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Truck className="w-4 h-4 text-emerald-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">Free Delivery</div>
          <div className="text-[10px] text-slate-400">& Free Installation</div>
        </div>
      </div>

      {/* Specification Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <tbody>
            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 w-1/3 sm:w-1/4 border-r border-slate-800/80">
                Brand
              </td>
              <td className="p-3 sm:p-4 font-extrabold text-white">
                CUCKOO Co-Created with Napure
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Product Name
              </td>
              <td className="p-3 sm:p-4 font-extrabold text-white">
                CUCKOO FLEX Daybed
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Colour Options
              </td>
              <td className="p-3 sm:p-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    Meta Grey (Default)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-200 text-xs font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    Yale Blue
                  </span>
                </div>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Capacity
              </td>
              <td className="p-3 sm:p-4 font-bold text-slate-200">
                3-Seater
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Product Dimension (L × W × H)
              </td>
              <td className="p-3 sm:p-4 space-y-1">
                <div><span className="font-semibold text-indigo-400">Folded:</span> 198cm × 97cm × 40cm</div>
                <div><span className="font-semibold text-emerald-400">Unfolded:</span> 198cm × 49cm × 77cm</div>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Carton Box Measurement (L × W × H)
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-300">
                208cm × 101cm × 22.5cm
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Product Weight
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-300">
                Gross Weight: <span className="font-bold text-white">45.2kg</span> | Net Weight: <span className="font-bold text-white">43kg</span>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Weight Supported
              </td>
              <td className="p-3 sm:p-4 font-bold text-amber-400">
                Up to 100kg
              </td>
            </tr>

            {/* Outright Purchase Price Row */}
            <tr className="border-b border-slate-800 bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-amber-300 bg-amber-950/30 border-r border-slate-800/80">
                Outright Purchase
              </td>
              <td className="p-3 sm:p-4">
                <div className="text-base sm:text-lg font-black text-amber-400">
                  RM 3,900
                </div>
                <div className="text-xs text-slate-300 mt-1 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE 1 Year Of Scheduled Service Every 4 Months & Warranty</span>
                  </div>
                  <div className="text-indigo-300">
                    🎁 FREE 1 Extra Yale Blue Daybed Cover Included
                  </div>
                </div>
              </td>
            </tr>

            {/* Rental Plan Price Row */}
            <tr className="bg-slate-900/60">
              <td className="p-3 sm:p-4 font-bold text-indigo-300 bg-indigo-950/40 border-r border-slate-800/80">
                Rental Plan (3 Years)
              </td>
              <td className="p-3 sm:p-4">
                <div className="text-base sm:text-lg font-black text-indigo-400">
                  RM 102 <span className="text-xs font-normal text-slate-400">/ month (36 Months Contract)</span>
                </div>
                <div className="text-xs text-slate-300 mt-1 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE 3 Years Scheduled Service Every 4 Months & Warranty</span>
                  </div>
                  <div className="text-amber-300 font-semibold">
                    🎁 FREE 1 Extra Yale Blue Daybed Cover at 24th Month
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
