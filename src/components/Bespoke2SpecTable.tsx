import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Ruler, ArrowRightLeft, Maximize, Truck, Flame, Gauge, Volume2, Award, Gift, Wind, Activity } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface Bespoke2SpecTableProps {
  onInquire?: (model: string) => void;
}

export const Bespoke2SpecTable: React.FC<Bespoke2SpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planType?: string) => {
    if (onInquire) {
      onInquire('Bespoke 2.0 Massage Chair');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO BESPOKE 2.0 Massage Chair (Co-Created with OGAWA).\nI would like to inquire about the ${planType || 'Rental / Outright'} promo plan. Please share details. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-700/60 text-rose-300 text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            CUCKOO × OGAWA CO-CREATED
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
            CUCKOO BESPOKE 2 MASSAGE CHAIR
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Charcoal Grey with Metallic Champagne Gold • 34 Airbags • 6 Programs & 11 Techniques
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('Bespoke 2.0 Promo')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Promo</span>
          </button>
        </div>
      </div>

      {/* Visual Dimension Diagram Card (Burgundy Aesthetic matching original brand image) */}
      <div className="rounded-2xl bg-gradient-to-br from-rose-950 via-slate-900 to-slate-950 border border-rose-800/40 p-4 sm:p-6 mb-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-rose-300 font-extrabold text-sm uppercase tracking-wider">
            <Ruler className="w-4 h-4 text-rose-400" />
            <span>Official Dimensions & Clearance</span>
          </div>
          <span className="text-[10px] text-rose-300/80 bg-rose-900/40 px-2.5 py-1 rounded-full border border-rose-700/30">
            Wall Clearance: 26cm
          </span>
        </div>

        {/* Diagrams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Regular Position */}
          <div className="bg-slate-900/80 rounded-xl p-4 border border-rose-800/30 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <span className="text-xs font-black text-rose-200 uppercase tracking-wide">
                Regular / Upright View
              </span>
              <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded font-bold">
                Standby Mode
              </span>
            </div>

            <div className="my-2 flex items-center justify-center relative py-3 bg-rose-950/20 rounded-lg border border-rose-900/20">
              <div className="text-center space-y-1">
                <div className="inline-block p-2.5 rounded-2xl bg-rose-900/30 border border-rose-600/40 text-rose-300">
                  <Maximize className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-xs font-bold text-slate-300">
                  W: <span className="text-rose-400 font-black">76 cm</span> | L: <span className="text-rose-400 font-black">151.5 cm</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-800/80">
              <div className="bg-slate-800/50 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400 font-bold">WIDTH</div>
                <div className="text-xs sm:text-sm font-black text-white">76 cm</div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400 font-bold">LENGTH</div>
                <div className="text-xs sm:text-sm font-black text-white">151.5 cm</div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400 font-bold">HEIGHT</div>
                <div className="text-xs sm:text-sm font-black text-rose-400">110.5 cm</div>
              </div>
            </div>
          </div>

          {/* Reclined Position */}
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
                  Reclined L: <span className="text-amber-400 font-black">181.0 cm</span> | Reclined H: <span className="text-amber-400 font-black">89.5 cm</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-slate-800/80">
              <div className="bg-slate-800/50 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400 font-bold">RECLINED LENGTH</div>
                <div className="text-xs sm:text-sm font-black text-amber-400">181.0 cm</div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded-lg">
                <div className="text-[10px] text-slate-400 font-bold">RECLINED HEIGHT</div>
                <div className="text-xs sm:text-sm font-black text-white">89.5 cm</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between flex-wrap gap-2 text-[11px] text-rose-300/80 italic pt-2 border-t border-rose-900/30">
          <span>* Approximate measurement with up to ±5% tolerance.</span>
          <div className="flex items-center gap-3 not-italic text-[10px] text-slate-300 font-semibold">
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">CE Certified</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">ISO Standard</span>
            <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700/60">Malaysia Tech Excellence Awards</span>
          </div>
        </div>
      </div>

      {/* Feature Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Wind className="w-4 h-4 text-cyan-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">34 Airbags Compression</div>
          <div className="text-[10px] text-slate-400">10x Hand, 4x Shoulder, 8x Upper Leg, 12x Lower Leg</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Activity className="w-4 h-4 text-indigo-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">6 Programs & 11 Techniques</div>
          <div className="text-[10px] text-slate-400">5 Adjustable Intensity Levels</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Gauge className="w-4 h-4 text-amber-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">Dual Zero Gravity</div>
          <div className="text-[10px] text-slate-400">Stage 1: 126° | Stage 2: 170°</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <Flame className="w-4 h-4 text-rose-400 mb-1" />
          <div className="text-[11px] font-extrabold text-white">Thermotherapy ~45°C</div>
          <div className="text-[10px] text-slate-400">Soothing Lumbar Back Heat</div>
        </div>
      </div>

      {/* Full 2-Column Technical Specification Chart */}
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
              <td className="p-3 sm:p-4 font-extrabold text-amber-400">
                CUCKOO Co-Created With OGAWA
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Product Name
              </td>
              <td className="p-3 sm:p-4 font-extrabold text-white">
                CUCKOO BESPOKE 2 Massage Chair
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Colours
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                Charcoal Grey with Metallic Champagne Gold
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Power Supply & Consumption
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                220-240 V | <span className="font-bold text-amber-400">85W Low Power</span>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Noise Level
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-300">
                Min <span className="font-bold text-white">48dB</span> ~ Max <span className="font-bold text-white">60dB</span>
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
                Gross Weight : <span className="font-bold text-white">Approx. 89.5kg</span> | Net Weight : <span className="font-bold text-white">Approx. 73.5kg</span>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Distance From Wall
              </td>
              <td className="p-3 sm:p-4 font-bold text-emerald-400">
                26cm
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Dimensions (L × W × H)
              </td>
              <td className="p-3 sm:p-4 space-y-1">
                <div><span className="font-semibold text-rose-400">Regular:</span> 151.5cm × 76cm × 110.5cm</div>
                <div><span className="font-semibold text-amber-400">Reclined:</span> 181.0cm × 76cm × 89.5cm</div>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Massage Programs & Techniques
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                <span className="font-bold text-white">6 Programs</span> | <span className="font-bold text-white">11 Techniques</span> | <span className="font-bold text-amber-400">5 Intensity Levels</span>
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
                Stage 1: <span className="font-bold text-amber-400">126°</span> | Stage 2: <span className="font-bold text-amber-400">170°</span>
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Thermotherapy Temperature
              </td>
              <td className="p-3 sm:p-4 font-medium text-rose-300">
                Lumbar Back Area (<span className="font-bold text-rose-400">~45°C</span>)
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Airbags Compression
              </td>
              <td className="p-3 sm:p-4 font-medium text-cyan-300">
                <span className="font-bold text-white">34 Airbags Total</span> (10x Hand, 4x Shoulder, 8x Upper Leg, 12x Lower Leg)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pricing & Rental Plans Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 font-extrabold text-[11px] uppercase tracking-wider">
              <th className="p-3 sm:p-4 w-1/3">Payment / Ownership Plan</th>
              <th className="p-3 sm:p-4">Package Details & Perks</th>
            </tr>
          </thead>
          <tbody>
            {/* Standard Rental Plan */}
            <tr className="border-b border-slate-800/80 bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-emerald-300 bg-emerald-950/30 border-r border-slate-800/80">
                Normal Rental Plan (5 Years)
              </td>
              <td className="p-3 sm:p-4">
                <div className="text-base sm:text-lg font-black text-emerald-400">
                  RM 148 <span className="text-xs font-normal text-slate-400">/ month (60 Months Contract)</span>
                </div>
                <div className="text-xs text-slate-300 mt-1 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE 5 Years of Scheduled Service & Warranty Included</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-indigo-300">
                    <Truck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE Delivery, Installation & Processing Fees</span>
                  </div>
                </div>
              </td>
            </tr>

            {/* Loyalty Rental Plan */}
            <tr className="border-b border-slate-800/80 bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-cyan-300 bg-cyan-950/30 border-r border-slate-800/80">
                Loyalty Rental Plan (5 Years)
                <span className="block text-[10px] text-cyan-400/80 font-normal mt-0.5">Existing CUCKOO Users</span>
              </td>
              <td className="p-3 sm:p-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base sm:text-lg font-black text-cyan-400">
                    RM 133 <span className="text-xs font-normal text-slate-400">/ month (60 Months)</span>
                  </span>
                  <span className="text-xs line-through text-slate-500 font-semibold">
                    RM 148/mth
                  </span>
                  <span className="px-2 py-0.5 text-[11px] font-extrabold bg-cyan-950 text-cyan-300 rounded-md border border-cyan-700/60 shadow-sm">
                    SAVE RM 15/mth 🔥
                  </span>
                </div>
                <div className="text-xs text-slate-300 mt-1.5 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE 5 Years of Scheduled Service & Warranty Included</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-300">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Special Loyalty Reward rate for active CUCKOO customers</span>
                  </div>
                </div>
              </td>
            </tr>

            {/* Outright Promo */}
            <tr className="bg-slate-900/60">
              <td className="p-3 sm:p-4 font-bold text-amber-300 bg-amber-950/30 border-r border-slate-800/80">
                Outright Promo Purchase
              </td>
              <td className="p-3 sm:p-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base sm:text-lg font-black text-amber-400">
                    RM 7,750
                  </span>
                  <span className="text-xs line-through text-slate-500 font-semibold">
                    RM 8,250
                  </span>
                  <span className="px-2 py-0.5 text-[11px] font-extrabold bg-amber-950 text-amber-300 rounded-md border border-amber-700/60 shadow-sm">
                    SAVE RM 500 🔥
                  </span>
                </div>
                <div className="text-xs text-slate-300 mt-1.5 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE 1+2 Years (3 Years Total) Scheduled Service & Warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-rose-300 font-bold bg-rose-950/40 p-1.5 rounded-lg border border-rose-800/40">
                    <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Early Bird Promotion: FREE OGAWA Comfy Eyemask worth RM 139.00</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-indigo-300">
                    <Truck className="w-3.5 h-3.5 shrink-0" />
                    <span>FREE Delivery, Installation & Processing Fees</span>
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
