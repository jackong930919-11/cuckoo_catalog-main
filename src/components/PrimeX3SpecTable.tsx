import React, { useState } from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Droplets, Zap, Shield, AlertTriangle, CheckCircle2, XCircle, Award, RefreshCw, Home, Layers, Ruler, Wrench, Building2, FileCheck, RotateCcw, Info, ArrowRight } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface PrimeX3SpecTableProps {
  onInquire?: (model: string) => void;
}

export const PrimeX3SpecTable: React.FC<PrimeX3SpecTableProps> = ({ onInquire }) => {
  const [installTab, setInstallTab] = useState<'all' | 'landed' | 'condo'>('all');

  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO Prime X3 Outdoor Filter');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO Prime X3 Outdoor Water Filter${planDetails ? ` (${planDetails})` : ''}.\nPlease share details on the RM88/mth rental plan, free auto-flush timer gift, and installation options. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/50 text-blue-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Official Product & Technology Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO Prime X3</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold">Whole-Home Outdoor Filter</span>
          </h3>
          <p className="text-xs sm:text-sm text-blue-300 font-bold mt-1 uppercase tracking-wider">
            Filter The Water Before It Reaches Your Taps
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Outdoor "whole-home" filtration system installed at your main water pipeline. Uses Re-Engineered PVDF 2.0 Ultra-Filtration Membrane (0.05μm) to remove rust, sediment, silt, and bacteria before water enters your indoor taps.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('Prime X3 Promotion')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Prime X3</span>
          </button>
        </div>
      </div>

      {/* Highlights / Technology Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Layers className="w-5 h-5 text-blue-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">PVDF 2.0 Membrane</div>
            <div className="text-[10px] text-slate-400">0.05 μm Pore Size</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <RefreshCw className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Prime-X Flush</div>
            <div className="text-[10px] text-slate-400">Auto Flush System</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Droplets className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Royal Out-To-In</div>
            <div className="text-[10px] text-slate-400">Filtration System</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <ShieldCheck className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">SS304 Vessel</div>
            <div className="text-[10px] text-slate-400">Stainless Steel</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Zap className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Non-Electric</div>
            <div className="text-[10px] text-slate-400">Zero Power Cost</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Home className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Compact Design</div>
            <div className="text-[10px] text-slate-400">High Performance</div>
          </div>
        </div>
      </div>

      {/* Physical Dimensions & Product Showcase Card */}
      <div className="mb-8 p-4 sm:p-6 rounded-2xl bg-slate-950/90 border border-blue-900/60 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-blue-400" />
            <h4 className="text-sm sm:text-base font-black text-white tracking-wide uppercase">
              CUCKOO Prime X3 Physical Dimensions & Product Specs
            </h4>
          </div>
          <span className="text-[11px] font-bold text-blue-300 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800/50 self-start sm:self-auto">
            Ultra-Compact Space-Saving Outdoor Filter
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* True Product Image Display */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src="/images/product-placeholder.svg"
                alt="CUCKOO Prime X3 Outdoor Stainless Steel Water Filter"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute top-3 left-3 bg-blue-950/90 border border-blue-600/50 text-blue-200 text-[10px] font-extrabold px-2.5 py-1 rounded-full backdrop-blur-md">
                SS304 Stainless Steel Vessel
              </div>

              {/* Dimension Callout Badges on Top of Real Image */}
              <div className="absolute bottom-3 left-3 right-3 flex justify-between gap-2">
                <div className="bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-center flex-1">
                  <span className="text-[9px] text-slate-400 uppercase font-bold block">Front Width</span>
                  <span className="text-xs font-black text-blue-300">135 mm</span>
                </div>
                <div className="bg-slate-900/90 border border-blue-600/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-center flex-1 shadow-lg shadow-blue-950/50">
                  <span className="text-[9px] text-blue-300 uppercase font-bold block">Height</span>
                  <span className="text-xs font-black text-white">590 mm</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-center flex-1">
                  <span className="text-[9px] text-slate-400 uppercase font-bold block">Side Depth</span>
                  <span className="text-xs font-black text-blue-300">155 mm</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold mt-3 text-center">
              CUCKOO Prime X3 Whole-Home Outdoor Water Filter Assembly
            </p>
          </div>

          {/* Dimension Details & Installation Breakdown */}
          <div className="lg:col-span-6 space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Height</span>
              <div className="text-xl font-black text-blue-300 mt-0.5 flex items-baseline gap-2">
                <span>590 mm</span>
                <span className="text-xs text-slate-400 font-normal">(59.0 cm / ~23.2 inches)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Front Width</span>
                <div className="text-lg font-black text-white mt-0.5">135 mm</div>
                <span className="text-[10px] text-slate-400">(13.5 cm)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Side Depth</span>
                <div className="text-lg font-black text-white mt-0.5">155 mm</div>
                <span className="text-[10px] text-slate-400">(15.5 cm w/ mounting bracket)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs text-slate-300 space-y-2">
              <div className="font-extrabold text-blue-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Space-Saving Outdoor Installation Benefits:</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                • <strong>Ultra-Slim Profile:</strong> Easily mounts beside municipal water meters, outdoor pillars, or narrow wall spaces without blocking pathways.
              </p>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                • <strong>Weatherproof Casing:</strong> Durable SS304 stainless steel vessel resists harsh UV sunlight, intense rain, and corrosion.
              </p>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                • <strong>Non-Electric System:</strong> Operates on water pressure alone with zero power consumption and zero electric bills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Process & Property Requirements Section */}
      <div className="mb-8 p-4 sm:p-6 rounded-2xl bg-slate-950/90 border border-blue-800/60 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/90 border border-blue-700/50 text-blue-300 text-xs font-bold mb-2">
              <Wrench className="w-3.5 h-3.5 text-blue-400" />
              Installation Workflow & Guidelines
            </div>
            <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wide flex items-center gap-2">
              <span>Prime X3 Official Installation Process</span>
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Follow these simple steps based on your property type (Landed House vs. Condominium / High-Rise).
            </p>
          </div>

          {/* Property Type Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setInstallTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                installTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setInstallTab('landed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                installTab === 'landed'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              Landed House
            </button>
            <button
              onClick={() => setInstallTab('condo')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                installTab === 'condo'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              Condo / High-Rise
            </button>
          </div>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LANDED HOUSE INSTALLATION FLOW */}
          {(installTab === 'all' || installTab === 'landed') && (
            <div className={`rounded-2xl bg-slate-900/90 p-4 sm:p-5 border border-emerald-900/50 flex flex-col justify-between ${installTab === 'landed' ? 'lg:col-span-2' : ''}`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-emerald-950 border border-emerald-700/50 text-emerald-400">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-black text-white tracking-wide">Landed House Installation Flow</h5>
                      <p className="text-[11px] text-emerald-400 font-semibold">Terrace / Semi-D / Bungalow Properties</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-extrabold">
                    Standard Flow
                  </span>
                </div>

                <ol className="space-y-3.5 text-xs text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="font-bold text-white">Submit Document & Place Order</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Submit IC / NRIC copy and bank card details to process your CUCKOO application.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="font-bold text-white">CUCKOO Technical Team Site-Visit</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Technician visits your property to inspect main water meter & wall mounting spot.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <p className="font-bold text-white flex items-center gap-1.5">
                        <span>Site Confirmation & Approval</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
                      </p>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        • <strong>Confirmed can install:</strong> Proceed directly to order installation.<br />
                        <span className="text-amber-300">• <strong>If unable to install:</strong> Order is returned/cancelled, and payment will be <strong>100% fully refunded</strong> to customer bank card.</span>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <p className="font-bold text-white">Drain Hole & Water Source Requirement</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Make sure a drain hole is available near your main water source for auto-flushing wastewater.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <p className="font-bold text-emerald-400">Technician Installation</p>
                      <p className="text-[11px] text-slate-300 mt-0.5">Technician completes piping connection, mounts Prime X3, conducts pressure test, and activates warranty.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-4 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center gap-2 text-[11px] text-emerald-300 font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>100% Risk-Free: Full refund if site does not meet installation criteria.</span>
              </div>
            </div>
          )}

          {/* CONDOMINIUM / APARTMENTS / HIGH-RISE PROPERTY FLOW */}
          {(installTab === 'all' || installTab === 'condo') && (
            <div className={`rounded-2xl bg-slate-900/90 p-4 sm:p-5 border border-cyan-900/50 flex flex-col justify-between ${installTab === 'condo' ? 'lg:col-span-2' : ''}`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-700/50 text-cyan-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-black text-white tracking-wide">Condo / High-Rise Installation Flow</h5>
                      <p className="text-[11px] text-cyan-400 font-semibold">Condominiums, Apartments & Townhouses</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-extrabold">
                    High-Rise Flow
                  </span>
                </div>

                <ol className="space-y-3.5 text-xs text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="font-bold text-white">Submit Document & Place Order</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Submit IC / NRIC copy and bank card details to process your application.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="font-bold text-white">Main Water Piping Bypass Preparation</p>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Ensure you have completed piping bypass from the Main Water Source. <span className="text-cyan-300">(Tip: Request water piping map from your condo management office).</span>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <p className="font-bold text-white">Drain Hole Position Check</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Make sure a drain hole is located directly near or below where the Prime X3 will be placed.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <p className="font-bold text-white">CUCKOO Technical Team Site-Visit</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Technician visits site to inspect high-rise piping layout & management guidelines.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <p className="font-bold text-cyan-300">Water Pressure Test & Final Confirmation</p>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        • <strong>Water pressure checked & allowed:</strong> Technician proceeds immediately with installation.<br />
                        <span className="text-amber-300">• <strong>If water pressure is insufficient/unsuitable:</strong> Technician returns the order and <strong>100% full refund</strong> is issued.</span>
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-4 p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-center gap-2 text-[11px] text-cyan-300 font-semibold">
                <Info className="w-4 h-4 shrink-0 text-cyan-400" />
                <span>Condo Tip: Obtain water piping map from Management Office before technical visit.</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* COMPARISON OF ULTRA-FILTRATION SYSTEM WITH OTHER SYSTEMS */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-4 h-4 text-blue-400" />
          <h4 className="text-sm font-black text-white uppercase tracking-wider">
            Comparison of Ultra-Filtration System with Other Systems
          </h4>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
          <table className="w-full text-left text-xs text-slate-300 divide-y divide-slate-800">
            <thead className="bg-slate-900 text-slate-300 font-extrabold">
              <tr>
                <th className="py-3 px-4 w-1/4 text-slate-400">Feature / Metric</th>
                <th className="py-3 px-4 w-1/4 bg-blue-950/60 text-blue-200 border-x border-blue-800/50">
                  <div className="font-black text-sm text-blue-300">Ultra-Filtration CUCKOO PRIME X3</div>
                  <div className="text-[10px] text-blue-400 font-normal">Re-Engineered PVDF 2.0</div>
                </th>
                <th className="py-3 px-4 w-1/4 text-slate-400">
                  <div className="font-bold text-slate-300">Micro Filtration</div>
                  <div className="text-[10px] text-slate-500 font-normal">Standard Cartridge</div>
                </th>
                <th className="py-3 px-4 w-1/4 text-slate-400">
                  <div className="font-bold text-slate-300">Multi-Media Filtration</div>
                  <div className="text-[10px] text-slate-500 font-normal">Sand Vessel</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-bold text-slate-200">Membrane pore size</td>
                <td className="py-3 px-4 bg-blue-950/30 border-x border-blue-800/30 font-black text-blue-300 text-sm">
                  0.05 μm
                </td>
                <td className="py-3 px-4 text-slate-400">0.1 – 10 μm</td>
                <td className="py-3 px-4 text-slate-400">&gt; 1.0 μm</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-bold text-slate-200">Filtration ability</td>
                <td className="py-3 px-4 bg-blue-950/30 border-x border-blue-800/30 font-extrabold text-emerald-400">
                  Strong
                </td>
                <td className="py-3 px-4 text-amber-300/80">Moderate</td>
                <td className="py-3 px-4 text-rose-400/80">Weak</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-bold text-slate-200">Bacteria removal</td>
                <td className="py-3 px-4 bg-blue-950/30 border-x border-blue-800/30 font-extrabold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 inline-block" /> Yes
                </td>
                <td className="py-3 px-4 text-emerald-400/80">Yes</td>
                <td className="py-3 px-4 text-rose-400 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-400 inline-block" /> No
                </td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-bold text-slate-200">Flush speed</td>
                <td className="py-3 px-4 bg-blue-950/30 border-x border-blue-800/30 font-extrabold text-blue-300">
                  Fast
                </td>
                <td className="py-3 px-4 text-slate-400">Moderate</td>
                <td className="py-3 px-4 text-slate-400">Slow</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-bold text-slate-200">Cost of maintenance</td>
                <td className="py-3 px-4 bg-blue-950/30 border-x border-blue-800/30 font-extrabold text-emerald-400">
                  Low
                </td>
                <td className="py-3 px-4 text-slate-400">Moderate</td>
                <td className="py-3 px-4 text-rose-400 font-semibold">High</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-4 font-bold text-slate-200">Durability of casing</td>
                <td className="py-3 px-4 bg-blue-950/30 border-x border-blue-800/30 font-extrabold text-emerald-400">
                  Strong (SS304)
                </td>
                <td className="py-3 px-4 text-slate-400">Moderate</td>
                <td className="py-3 px-4 text-rose-400/80">Weak</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* IS TAP WATER SAFE & DIRTY WATER EFFECTS */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-950/30 border border-amber-800/50">
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-black text-amber-300 uppercase tracking-wide">
              Is Tap Water Safe?
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Although the water that enters your home is treated, most municipal pipes are <strong className="text-amber-200">old, rusty, and rarely cleaned</strong>, so the chances of water getting contaminated during transportation are extremely high.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-amber-800/40 mt-3">
          <p className="text-xs font-bold text-amber-200 uppercase tracking-wider mb-2.5">
            Features & Health/Household Effects of Dirty Water:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-amber-900/40 text-center">
              <span className="text-amber-400 font-extrabold block text-xs">Diarrhoea</span>
              <span className="text-[10px] text-slate-400">Bacterial Infection</span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-amber-900/40 text-center">
              <span className="text-amber-400 font-extrabold block text-xs">Cloudy Water</span>
              <span className="text-[10px] text-slate-400">Silt & Sediment</span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-amber-900/40 text-center">
              <span className="text-amber-400 font-extrabold block text-xs">Bad Breath</span>
              <span className="text-[10px] text-slate-400">Chlorine & Odor</span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-amber-900/40 text-center">
              <span className="text-amber-400 font-extrabold block text-xs">Kidney & Stomach</span>
              <span className="text-[10px] text-slate-400">Illness & Heavy Metals</span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-amber-900/40 text-center">
              <span className="text-amber-400 font-extrabold block text-xs">Yellow Stains</span>
              <span className="text-[10px] text-slate-400">On Washed Clothes</span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-amber-900/40 text-center">
              <span className="text-amber-400 font-extrabold block text-xs">Skin Problems</span>
              <span className="text-[10px] text-slate-400">& Irritation / Allergies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Official CUCKOO Specifications Table */}
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
              <td className="py-3 px-4 font-bold text-slate-200">Model Name</td>
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO Prime X3 Outdoor Water Filter</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">System Type</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">Whole-Home Main Pipeline Outdoor Filtration</td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-blue-950/30 border-y border-blue-900/40">
              <td className="py-3 px-4 font-bold text-blue-300">Dimensions (W × D × H)</td>
              <td className="py-3 px-4 text-white font-black text-xs">
                135 mm (Front Width) × 155 mm (Side Depth w/ Bracket) × 590 mm (Height)
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Membrane Technology</td>
              <td className="py-3 px-4 text-blue-300 font-bold">
                Re-Engineered PVDF 2.0 Ultra-Filtration Membrane (0.05 μm pore size)
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Vessel Material</td>
              <td className="py-3 px-4 text-slate-200 font-bold">
                SS304 Premium High-Grade Stainless Steel Casing
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Flushing Mechanism</td>
              <td className="py-3 px-4 text-slate-300">
                Prime-X Flush System + Automated Flushing System (Free Timer Worth RM100)
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Requirement</td>
              <td className="py-3 px-4 text-emerald-400 font-extrabold">
                Non-Electric System (0 Electricity Consumption)
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Core Technologies & USPs</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>1. <strong className="text-slate-100">PVDF 2.0 Membrane:</strong> Ultra-fine 0.05μm filtration removing bacteria, rust & impurities</div>
                <div>2. <strong className="text-slate-100">Prime-X Flush System:</strong> Fast automatic flushing prevents clogging & extends membrane lifespan</div>
                <div>3. <strong className="text-slate-100">Royal Out-To-In System:</strong> Optimized flow direction for maximum filtration efficiency</div>
                <div>4. <strong className="text-slate-100">SS304 Stainless Steel Vessel:</strong> Heavy-duty weatherproof casing resistant to corrosion</div>
                <div>5. <strong className="text-slate-100">Compact Design:</strong> High water flow rate with space-saving footprint</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-blue-950/20">
              <td className="py-3 px-4 font-bold text-blue-300 align-top">Rental Plan</td>
              <td className="py-3 px-4 text-slate-300 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-blue-800/50">
                  <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px] inline-block mb-1">Rental Plan (60 Months)</span>
                  <p className="text-white font-extrabold text-xs">RM 88.00 / month</p>
                  <p className="text-[11px] text-blue-300 mt-0.5">✓ Scheduled service every 6 months</p>
                  <p className="text-[11px] text-emerald-300">✓ FREE Filter Replacement on 36th Month</p>
                  <p className="text-[11px] text-amber-300">✓ FREE Auto-Flush Timer (worth RM100)</p>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300 align-top">Purchase (Outright)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <p className="text-amber-200 font-extrabold text-sm">RM 2,100.00 <span className="text-xs text-slate-400 line-through">RM 2,600</span></p>
                <p className="text-xs text-amber-300 font-semibold">
                  ✓ Includes FREE 1-year CCSP Service Package & Warranty
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/60 to-slate-800/80 border border-blue-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Protect your entire home's water supply with CUCKOO Prime X3!</p>
          <p className="text-slate-300 mt-0.5">Get it for RM88/mth with free 6-monthly servicing & free RM100 auto-flush timer by authorized agent <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong>.</p>
        </div>
        <button
          onClick={() => handleWhatsApp('Prime X3 Special Deal')}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire Prime X3 via WhatsApp
        </button>
      </div>
    </div>
  );
};
