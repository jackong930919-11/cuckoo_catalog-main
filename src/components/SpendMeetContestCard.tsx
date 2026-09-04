import React, { useEffect, useState } from 'react';
import { CalendarDays, Gift, Ticket, X } from 'lucide-react';

const contestImage = '/images/Profile/Spend%26Meet_LeeJunHo.jpg';
const madnessImage = '/images/Profile/cuckoomadness12_2026.jpg';

interface SpendMeetContestCardProps {
  placement?: 'card' | 'hero';
}

export const SpendMeetContestCard: React.FC<SpendMeetContestCardProps> = ({ placement = 'card' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [openedSlide, setOpenedSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 2);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          setOpenedSlide(activeSlide);
          setIsOpen(true);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpenedSlide(activeSlide);
            setIsOpen(true);
          }
        }}
        className={placement === 'hero'
          ? 'block w-full overflow-hidden rounded-2xl border border-amber-300/70 bg-slate-900 shadow-xl cursor-pointer group'
          : 'bg-slate-950 text-white rounded-2xl border-2 border-amber-400/80 shadow-xl overflow-hidden flex flex-col text-left group relative cursor-pointer hover:-translate-y-1 transition-transform duration-300'}
        aria-label="Open CUCKOO Spend and Meet LEE JUNHO Contest details"
      >
        <div className={placement === 'hero' ? 'relative aspect-[2048/780] bg-slate-800 overflow-hidden' : 'relative aspect-4/3 bg-slate-800 overflow-hidden'}>
          <img
            src={activeSlide === 0 ? contestImage : madnessImage}
            alt={activeSlide === 0 ? 'CUCKOO Spend and Meet LEE JUNHO Contest' : 'CUCKOO Madness 12 Promotion'}
            className={placement === 'hero' ? 'block w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-500' : 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'}
          />
          {placement === 'card' && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-lg">
                SPECIAL CONTEST
              </span>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest">
                  {activeSlide === 0 ? 'Spend & Meet' : 'Limited Time Offer'}
                </p>
                <h3 className="text-lg font-black text-white leading-tight">
                  {activeSlide === 0 ? 'LEE JUNHO Contest' : 'CUCKOO MADNESS 12'}
                </h3>
              </div>
            </>
          )}
        </div>
        {placement === 'card' && <div className="p-4 space-y-3">
          <p className="text-xs text-slate-300 leading-relaxed">
            Spend RM200 or more from 1 September to 10 October 2026 for a chance to win concert tickets and a photo moment with LEE JUNHO.
          </p>
          <span className="w-full py-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2">
            <Gift className="w-4 h-4" /> VIEW CONTEST DETAILS
          </span>
        </div>}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contest-title"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[70] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-950"
              aria-label="Close contest details"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={openedSlide === 0 ? contestImage : madnessImage} alt={openedSlide === 0 ? 'CUCKOO Spend and Meet LEE JUNHO Contest' : 'CUCKOO Madness 12 Promotion'} className="w-full h-auto block" />
            {openedSlide === 0 ? <div className="p-5 sm:p-7 text-slate-800 space-y-5">
              <div>
                <h2 id="contest-title" className="text-xl sm:text-2xl font-black text-slate-950">
                  CUCKOO&apos;s Spend &amp; Meet LEE JUNHO Contest
                </h2>
                <p className="mt-2 text-sm leading-relaxed">
                  Celebrate CUCKOO&apos;s 12th Anniversary with us! Spend a minimum of <strong>RM200</strong> on CUCKOO products or via the CUCKOO+ Care Service Package between <strong>1st September – 10th October 2026</strong> for a chance to win a photo moment with LEE JUNHO and concert tickets.
                </p>
              </div>

              <section className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <h3 className="font-black text-amber-900 flex items-center gap-2"><Ticket className="w-4 h-4" /> Grand Prize (20 Winners)</h3>
                  <p className="mt-2 text-sm leading-relaxed">1 pair of CUCKOOTOPIA 12th Anniversary Appreciation Concert Rock Zone Tickets on 24 October at Stadium Merdeka.</p>
                  <p className="mt-2 text-sm leading-relaxed"><strong>1-on-1 Precious Photo Moment with LEE JUNHO (1 pax)</strong> during CUCKOOTOPIA Pop-up on 25 October at Pavilion Bukit Jalil, Centre Court, Level 2.</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <h3 className="font-black text-emerald-900 flex items-center gap-2"><Gift className="w-4 h-4" /> Special Prize (300 Winners)</h3>
                  <p className="mt-2 text-sm leading-relaxed">1 pair of CUCKOOTOPIA 12th Anniversary Appreciation Concert Healthy Home Zone Concert Tickets on 24 October at Stadium Merdeka.</p>
                </div>
              </section>

              <section>
                <h3 className="font-black text-slate-950 flex items-center gap-2"><CalendarDays className="w-4 h-4 text-indigo-600" /> How to Submit Your Entry?</h3>
                <ol className="mt-2 list-decimal list-inside space-y-1.5 text-sm leading-relaxed">
                  <li>Download the CUCKOO+ App, register or log in to your account.</li>
                  <li>Click &apos;Me&apos;, head to &apos;Rewards Club&apos; and click the &apos;Spend &amp; Meet LEE JUNHO&apos; banner.</li>
                  <li>Click &apos;Redeem Now&apos; and fill in the form with your details and Sales Order ID.</li>
                  <li>Winners will be notified via the CUCKOO+ App and email on or before 19 October 2026.</li>
                </ol>
              </section>

              <p className="text-xs text-slate-500">*Terms and conditions apply.</p>
            </div> : <div className="p-5 sm:p-7 text-slate-800 space-y-5">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950">CUCKOO MADNESS 12 PROMOTION</h2>
              <p className="text-sm leading-relaxed">Celebrate CUCKOO&apos;s 12th Anniversary with a special <strong>RM12 per month</strong> promotion for selected CUCKOO household appliances.</p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <h3 className="font-black text-amber-900">Products under this promotion</h3>
                <p className="mt-2 text-sm leading-relaxed">Water Purifier, Air Purifier, Treadmill, Massage Chair and Mattress.</p>
                <p className="mt-2 text-sm font-bold text-amber-800">RM12/month anniversary rental rate</p>
              </div>
              <p className="text-sm leading-relaxed">Please contact us to confirm product eligibility, availability, rental terms and the latest promotion details before registration.</p>
              <p className="text-xs text-slate-500">*Terms and conditions apply.</p>
            </div>}
          </div>
        </div>
      )}
    </>
  );
};
