import React from 'react';
import { Sparkles, MessageCircle, Tablet, Zap, ShieldCheck, CheckCircle2, Wifi, Cpu, Camera, Battery, HardDrive, Smartphone } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface SamsungTabSpecTableProps {
  onInquire?: (model: string) => void;
}

export const SamsungTabSpecTable: React.FC<SamsungTabSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('Galaxy Tab S10 FE+ (Wi-Fi) [12GB + 256GB]');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in Samsung Galaxy Tab S10 FE+ (Wi-Fi) 12GB+256GB [SM-X620NZAEXME]${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM160/mth 2-year rental plan, RM2,999 outright purchase, and eligibility for existing CUCKOO customers. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-600/50 text-cyan-300 text-xs font-bold mb-2">
            <Tablet className="w-3.5 h-3.5 text-cyan-400" />
            Galaxy Tab S10 FE+ • Wi-Fi • Existing Customer Special
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>GALAXY TAB S10 FE+ (Wi-Fi)</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
              SM-X620NZAEXME • 12GB + 256GB
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-cyan-300 font-bold mt-1 uppercase tracking-wider">
            Big Screen, Big Possibilities — Massive 13.1″ WQXGA+ Display & S Pen Included
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Powered by Exynos 1580 Octa-Core processor, Circle to Search with Google, Homework Help AI, 10,090 mAh battery (21 hrs video playback), S Pen, and MicroSD expansion up to 2TB.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('Samsung Galaxy Tab S10 FE+ Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Galaxy Tab</span>
          </button>
        </div>
      </div>

      {/* Unique Selling Points (USP Highlights Grid) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Features & Technology USPs</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Tablet className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Massive 13.1″ Screen</div>
              <div className="text-[10px] text-slate-400 font-medium">2880 x 1800 WQXGA+ TFT Display</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Sparkles className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Circle to Search & AI</div>
              <div className="text-[10px] text-slate-400 font-medium">Google Homework Help & S Pen Support</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Cpu className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Exynos 1580 Processor</div>
              <div className="text-[10px] text-slate-400 font-medium">Octa-Core (2.9GHz / 2.6GHz / 1.9GHz)</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <HardDrive className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">12GB RAM + 256GB Storage</div>
              <div className="text-[10px] text-slate-400 font-medium">Expandable up to 2TB MicroSD</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Battery className="w-5 h-5 text-rose-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">10,090 mAh Battery</div>
              <div className="text-[10px] text-slate-400 font-medium">Up to 21 Hours Video Playback</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Camera className="w-5 h-5 text-purple-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">13MP Rear / 12MP Front</div>
              <div className="text-[10px] text-slate-400 font-medium">UHD 4K Video Recording @30fps</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Wifi className="w-5 h-5 text-sky-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Wi-Fi 6 & Bluetooth 5.3</div>
              <div className="text-[10px] text-slate-400 font-medium">GPS, Glonass, Smart Switch</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-teal-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Security Updates</div>
              <div className="text-[10px] text-slate-400 font-medium">Valid until 30 April 2032</div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Specification Chart Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 mb-6">
        <table className="w-full text-left text-xs text-slate-300 divide-y divide-slate-800/80">
          <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider font-extrabold">
            <tr>
              <th className="py-3.5 px-4 w-2/5 sm:w-1/3">Specification Field</th>
              <th className="py-3.5 px-4 w-3/5 sm:w-2/3">Details / Specifications</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50 text-xs">
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Name / Model</td>
              <td className="py-3 px-4 text-white font-black text-sm">Galaxy Tab S10 FE+ (Wi-Fi)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Model Code & Color</td>
              <td className="py-3 px-4 text-cyan-300 font-bold">SM-X620NZAEXME <span className="text-slate-400 font-normal">(Color: Gray)</span></td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Memory & Storage</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Memory (RAM)</span>
                    <span className="text-cyan-300 font-bold text-xs">12 GB</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Storage (GB)</span>
                    <span className="text-emerald-400 font-bold text-xs">256 GB <span className="text-[9px] text-slate-400 font-normal">(Avail: 233.7 GB)</span></span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 sm:col-span-1">
                    <span className="text-slate-400 block text-[10px]">External Storage</span>
                    <span className="text-white font-bold text-xs">MicroSD (Up to 2TB)</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Display & Stylus</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Screen Size</span>
                    <span className="text-white font-bold">13.1″ (332.8mm)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Resolution</span>
                    <span className="text-cyan-300 font-bold">2880 x 1800 (WQXGA+)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Display Tech & Colors</span>
                    <span className="text-white font-bold">TFT / 16M Color Depth</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 sm:col-span-3">
                    <span className="text-slate-400 block text-[10px]">S Pen Support</span>
                    <span className="text-emerald-400 font-bold">Yes (S Pen Included in Box)</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Processor & System</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">CPU Type & Speed</span>
                    <span className="text-indigo-300 font-bold">Octa-Core (2.9GHz, 2.6GHz, 1.9GHz)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Operating System</span>
                    <span className="text-white font-bold">Android OS</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Camera System</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Rear Camera</span>
                    <span className="text-white font-bold">13.0 MP (Auto Focus, No Flash)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Front Camera</span>
                    <span className="text-white font-bold">12.0 MP</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 sm:col-span-1">
                    <span className="text-slate-400 block text-[10px]">Video Recording</span>
                    <span className="text-cyan-300 font-bold">UHD 4K (3840 x 2160) @30fps</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Connectivity & Sensors</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Wi-Fi Standard</span>
                    <span className="text-cyan-300 font-bold">802.11a/b/g/n/ac/ax 2.4+5GHz MIMO</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Bluetooth Version</span>
                    <span className="text-white font-bold">Bluetooth v5.3</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">USB Interface & Earjack</span>
                    <span className="text-white font-bold">USB 2.0 / USB Type-C</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 sm:col-span-3">
                    <span className="text-slate-400 block text-[10px]">Location Tech & PC Sync</span>
                    <span className="text-slate-200 font-medium">GPS, Glonass, Beidou, Galileo, QZSS | Smart Switch Sync</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 sm:col-span-3">
                    <span className="text-slate-400 block text-[10px]">Sensors</span>
                    <span className="text-slate-200 font-medium">Accelerometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic, Hall, Light Sensor</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Battery & Physical Specs</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Battery Capacity</span>
                    <span className="text-emerald-400 font-bold">10,090 mAh (Typical)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Video Playback Time</span>
                    <span className="text-cyan-300 font-bold">Up to 21 Hours</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Dimensions (HxWxD)</span>
                    <span className="text-white font-bold">194.7 x 300.6 x 6.0 mm</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 sm:col-span-3">
                    <span className="text-slate-400 block text-[10px]">Weight</span>
                    <span className="text-white font-bold">664 grams</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Software & Security Support</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">
                Security Update Period Valid until <span className="text-amber-300 font-bold">30 April 2032</span> | SmartThings & Galaxy Gear Support
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">Price & Eligibility (*Existing CUCKOO Customers)</td>
              <td className="py-3.5 px-4 text-slate-200 space-y-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400 font-medium">Purchase (Outright)</span>
                      <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">Existing Customers Only</span>
                    </div>
                    <span className="text-base font-black text-emerald-400">RM 2,999.00</span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 2-Year standard + 1-Year CUCKOO Extended Exclusive Warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('Galaxy Tab Outright RM2,999')}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Outright
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-cyan-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400 font-medium">Rent (Rental Plan)</span>
                      <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">Existing Customers Only</span>
                    </div>
                    <span className="text-base font-black text-cyan-300">RM 160.00 / month <span className="text-xs font-normal text-slate-400">(2 years)</span></span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 2-Year standard + 1-Year CUCKOO Extended Exclusive Warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('Galaxy Tab Rental RM160/mth')}
                    className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Rental
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
