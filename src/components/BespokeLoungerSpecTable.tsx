import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Ruler, ArrowRightLeft, Maximize, Truck, Flame, Gauge, Volume2, Shield, HeartPulse, Wind } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface BespokeLoungerSpecTableProps {
  onInquire?: (model: string) => void;
}

export const BespokeLoungerSpecTable: React.FC<BespokeLoungerSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = () => {
    if (onInquire) {
      onInquire('Bespoke Lounger');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO BESPOKE Massage Lounger.\nI would like to inquire about the RM99/mth rental plan or RM4,999 outright purchase (Save RM1,501). Please share details. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-700/60 text-rose-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            CUCKOO BESPOKE MASSAGE LOUNGER
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
            FULL TECHNICAL SPECIFICATIONS
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Cosy Caramel • Executive Ergonomic Design • Multi-Angle Zero Gravity
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

      {/* Visual Dimension Diagram Card (Rich Burgundy Aesthetic matching original brand specs) */}
      <div className="rounded-2xl bg-gradient-to-br from-rose-950 via-slate-900 to-slate-950 border border-rose-800/40 p-4 sm:p-6 mb-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-rose-300 font-extrabold text-sm uppercase tracking-wider">
            <Ruler className="w-4 h-4 text-rose-400" />
            <span>Dimensions & Space Clearance</span>
          </div>
          <span className="text-[10px] text-rose-300/80 bg-rose-900/40 px-2.5 py-1 rounded-full border border-rose-700/30">
            Wall Clearance: 6cm
          </span>
        </div>

        {/* Diagrams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 45-Degree View (Upright) */}
          <div className="bg-slate-900/80 rounded-xl p-4 border border-rose-800/30 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <span className="text-xs font-black text-rose-200 uppercase tracking-wide">
                Regular / Upright View
              </span>
              <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded font-bold">
                45-Degree View
              </span>
            </div>

            <div className="my-2 flex items-center justify-center relative py-3 bg-rose-950/20 rounded-lg border border-rose-900/20">
              <div className="text-center space-y-1">
                <div className="inline-block p-2.5 rounded-2xl bg-rose-900/30 border border-rose-600/40 text-rose-300">
                  <Maximize className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-xs font-bold text-slate-300">
                  W: <span className="text-rose-400 font-black">65 cm</span> | L: <span className="text-rose-400 font-black">120 cm</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-800/80">
              <div className="bg-slate-800/50 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400 font-bold">WIDTH</div>
                <div className="text-xs sm:text-sm font-black text-white">65 cm</div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400 font-bold">LENGTH</div>
                <div className="text-xs sm:text-sm font-black text-white">120 cm</div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400 font-bold">HEIGHT</div>
                <div className="text-xs sm:text-sm font-black text-rose-400">106 cm</div>
              </div>
            </div>
          </div>

          {/* Side View (Reclined) */}
          <div className="bg-slate-900/80 rounded-xl p-4 border border-rose-800/30 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <span className="text-xs font-black text-amber-200 uppercase tracking-wide">
                Reclined / Side View
              </span>
              <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded font-bold">
                Zero Gravity Mode
              </span>
            </div>

            <div className="my-2 flex items-center justify-center relative py-3 bg-amber-950/20 rounded-lg border border-amber-900/20">
              <div className="text-center space-y-1">
                <div className="inline-block p-2.5 rounded-2xl bg-amber-900/30 border border-amber-600/40 text-amber-300">
                  <ArrowRightLeft className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-xs font-bold text-slate-300">
                  Reclined L: <span className="text-amber-400 font-black">140 cm</span> | Reclined H: <span className="text-amber-400 font-black">84 cm</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-slate-800/80">
              <div className="bg-slate-800/50 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400 font-bold">RECLINED LENGTH</div>
                <div className="text-xs sm:text-sm font-black text-amber-400">140 cm</div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400 font-bold">RECLINED HEIGHT</div>
                <div className="text-xs sm:text-sm font-black text-white">84 cm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Flame className="w-4 h-4 text-rose-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">Thermotherapy 45°C</div>
          <div className="text-[10px] text-slate-400">Lumbar Area Heat</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Wind className="w-4 h-4 text-cyan-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">8 Airbags System</div>
          <div className="text-[10px] text-slate-400">2 Lumbar + 6 Calf</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Gauge className="w-4 h-4 text-amber-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">Zero Gravity</div>
          <div className="text-[10px] text-slate-400">125° & 136° Recline</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Volume2 className="w-4 h-4 text-indigo-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">Ultra Quiet Mode</div>
          <div className="text-[10px] text-slate-400">Noise Level 50 - 58dB</div>
        </div>
      </div>

      {/* Full 2-Column Specification Chart */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 mb-6">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 font-extrabold text-[11px] uppercase tracking-wider">
              <th className="p-3 sm:p-4 w-1/3">Specification Field</th>
              <th className="p-3 sm:p-4">Official Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Brand
              </td>
              <td className="p-3 sm:p-4 font-extrabold text-white">
                CUCKOO
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Product Name
              </td>
              <td className="p-3 sm:p-4 font-extrabold text-white">
                CUCKOO BESPOKE Massage Lounger
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Colours
              </td>
              <td className="p-3 sm:p-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/60 text-amber-200 text-xs font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                  Cosy Caramel
                </span>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Power Supply & Consumption
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                AC 220-240V~, 50-60Hz | <span className="font-bold text-amber-400">100W</span>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Noise Level
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-300">
                Min <span className="font-bold text-white">50dB</span> ~ Max <span className="font-bold text-white">58dB</span> (Ultra Quiet Operation)
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Materials
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-300">
                Frame : <span className="font-bold text-white">Metal</span> | Cover : <span className="font-bold text-white">Premium Leather</span>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Weight
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-300">
                Gross Weight : <span className="font-bold text-white">Approx. 61.5kg</span> | Net Weight : <span className="font-bold text-white">Approx. 51.5kg</span>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Distance From Wall
              </td>
              <td className="p-3 sm:p-4 font-bold text-emerald-400">
                6cm (Compact Zero Wall Clearance)
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Size (L × W × H)
              </td>
              <td className="p-3 sm:p-4 space-y-1">
                <div><span className="font-semibold text-rose-400">Regular (Upright):</span> 120cm × 65cm × 106cm</div>
                <div><span className="font-semibold text-amber-400">Reclined:</span> 140cm × 65cm × 84cm</div>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Massage Track
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                Length: <span className="font-bold text-white">119cm</span> | Width: <span className="font-bold text-white">31.5cm</span>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Recommended User Weight
              </td>
              <td className="p-3 sm:p-4 font-bold text-white">
                Up to 100kg
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Zero Gravity Angles
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                Stage 1: <span className="font-bold text-amber-400">125°</span> | Stage 2: <span className="font-bold text-amber-400">136°</span>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Thermotherapy (Soothing Heat)
              </td>
              <td className="p-3 sm:p-4 font-medium text-rose-300">
                Lumbar Area (At leather temperature around <span className="font-bold text-rose-400">45°C</span>)
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Airbags Compression
              </td>
              <td className="p-3 sm:p-4 font-medium text-cyan-300">
                <span className="font-bold text-white">8 Airbags</span> (2 Lumbar Airbags, 6 Calf Airbags)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pricing & Service Plans */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <tbody>
            {/* Rental Plan */}
            <tr className="border-b border-slate-800/80 bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-emerald-300 bg-emerald-950/30 border-r border-slate-800/80 w-1/3">
                Rental Plan (5 Years)
              </td>
              <td className="p-3 sm:p-4">
                <div className="text-base sm:text-lg font-black text-emerald-400">
                  RM 99 <span className="text-xs font-normal text-slate-400">/ month (60 Months Contract)</span>
                </div>
                <div className="text-xs text-slate-300 mt-1 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE Scheduled Service Every 6 Months</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-indigo-300">
                    <Truck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE Delivery, Installation & Processing Fees</span>
                  </div>
                </div>
              </td>
            </tr>

            {/* Outright Purchase */}
            <tr className="border-b border-slate-800/80 bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-amber-300 bg-amber-950/30 border-r border-slate-800/80">
                Outright Purchase
              </td>
              <td className="p-3 sm:p-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base sm:text-lg font-black text-amber-400">
                    RM 4,999
                  </span>
                  <span className="text-xs line-through text-slate-500 font-semibold">
                    RM 6,500
                  </span>
                  <span className="px-2 py-0.5 text-[11px] font-extrabold bg-rose-950 text-rose-300 rounded-md border border-rose-700/60 shadow-sm">
                    SAVE RM 1,501 🔥
                  </span>
                </div>
                <div className="text-xs text-slate-300 mt-1.5 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE 1 Year Of Scheduled Service & Warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-indigo-300">
                    <Truck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE Delivery, Installation & Processing Fees</span>
                  </div>
                </div>
              </td>
            </tr>

            {/* CUCKOO+ Care Service Package */}
            <tr className="bg-slate-900/60">
              <td className="p-3 sm:p-4 font-bold text-rose-300 bg-rose-950/30 border-r border-slate-800/80">
                CUCKOO+ Care Service Package
              </td>
              <td className="p-3 sm:p-4">
                <div className="text-base sm:text-lg font-black text-rose-400">
                  RM 480
                </div>
                <div className="text-xs text-slate-300 mt-1 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-rose-300 font-semibold">
                    <Shield className="w-3.5 h-3.5 shrink-0 text-rose-400" />
                    <span>FREE 1-Time Service & Leather Change Included</span>
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

