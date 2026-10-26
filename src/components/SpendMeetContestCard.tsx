import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CalendarDays, ChevronLeft, ChevronRight, Gift, Ticket, X } from 'lucide-react';

const contestImage = '/images/Profile/spend&meet_leejunho_image1.png';
const promotionImage = '/images/Profile/OctPromotion_image2.png';
const heroImages = [promotionImage, contestImage];

interface SpendMeetContestCardProps {
  placement?: 'card' | 'hero';
}

export const SpendMeetContestCard: React.FC<SpendMeetContestCardProps> = ({ placement = 'card' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [openedSlide, setOpenedSlide] = useState(0);

  useEffect(() => {
    if (placement !== 'hero') return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [placement]);

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
        aria-label={placement === 'hero' && activeSlide === 0
          ? 'Open CUCKOO Special Promotion details'
          : 'Open CUCKOO Spend and Meet LEE JUNHO Contest details'}
      >
        <div className={placement === 'hero' ? 'relative aspect-[2048/780] bg-slate-800 overflow-hidden' : 'relative aspect-4/3 bg-slate-800 overflow-hidden'}>
          <img
            src={placement === 'hero' ? heroImages[activeSlide] : contestImage}
            alt={activeSlide === 0 && placement === 'hero' ? 'CUCKOO International special promotions' : 'CUCKOO Spend and Meet LEE JUNHO Contest'}
            className={placement === 'hero' ? 'block w-full h-full object-contain object-center group-hover:scale-[1.01] transition-transform duration-500' : 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'}
          />
          {placement === 'hero' && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveSlide((currentSlide) => (currentSlide - 1 + heroImages.length) % heroImages.length);
                }}
                onKeyDown={(event) => event.stopPropagation()}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-slate-950/70 text-white shadow-lg transition hover:bg-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Previous promotion"
                title="Previous promotion"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveSlide((currentSlide) => (currentSlide + 1) % heroImages.length);
                }}
                onKeyDown={(event) => event.stopPropagation()}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-slate-950/70 text-white shadow-lg transition hover:bg-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Next promotion"
                title="Next promotion"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          {placement === 'card' && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-lg">
                SPECIAL CONTEST
              </span>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest">
                  Spend &amp; Meet
                </p>
                <h3 className="text-lg font-black text-white leading-tight">
                  LEE JUNHO Contest
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

      {isOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={openedSlide === 0 ? 'promotion-title' : 'contest-title'}
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
            <img
              src={openedSlide === 0 ? promotionImage : contestImage}
              alt={openedSlide === 0 ? 'CUCKOO October 2026 Special Promotion' : 'CUCKOO Spend and Meet LEE JUNHO Contest'}
              className="w-full h-auto block"
            />
            {openedSlide === 0 ? (
              <div className="p-5 sm:p-7 text-slate-800 space-y-5">
                <header className="space-y-3">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
                    Special Promotion | 1 October – 31 October 2026
                  </p>
                  <h2 id="promotion-title" className="text-xl sm:text-2xl font-black text-slate-950">
                    CUCKOO October 2026 Promotion
                  </h2>
                  <h3 className="text-lg font-black text-rose-800">Just RM1 to Get Started!</h3>
                  <h3 className="text-lg font-black text-rose-800">50% OFF Your First 3 Months</h3>
                  <p className="text-sm leading-relaxed">
                    Enjoy Your Favourite CUCKOO Water Purifier with Just RM1 Advance Payment!
                  </p>
                  <p className="text-sm leading-relaxed">
                    Make your home a better place with CUCKOO! Enjoy our exclusive October promotion when you sign up for an eligible CUCKOO Water Purifier rental plan.
                  </p>
                </header>

                <section>
                  <h3 className="font-black text-slate-950 flex items-center gap-2">
                    <Gift className="w-4 h-4 text-rose-700" /> Exclusive October Offers
                  </h3>
                  <ul className="mt-2 list-disc list-inside space-y-1.5 text-sm leading-relaxed">
                    <li><strong>RM1 Advance Payment</strong> — Get started with just RM1 advance payment.</li>
                    <li><strong>50% OFF for the First 3 Months</strong> — Enjoy 50% off your monthly rental fee for the first three months.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-black text-slate-950">Who Can Enjoy This Promotion?</h3>
                  <p className="mt-2 text-sm leading-relaxed">This promotion is available to eligible applicants, including:</p>
                  <ul className="mt-2 list-disc list-inside space-y-1.5 text-sm leading-relaxed">
                    <li>Malaysian citizens with a valid Malaysian Identity Card (MyKad).</li>
                    <li>Foreign nationals with a valid passport and visa, subject to eligibility requirements.</li>
                    <li>Corporate customers.</li>
                    <li>Government-sector customers.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-black text-slate-950 flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-rose-700" /> Promotion Period
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">1 October 2026 – 31 October 2026.</p>
                  <p className="mt-2 text-sm leading-relaxed">Place your order within the promotion period to enjoy these exclusive savings!</p>
                </section>

                <p className="text-sm leading-relaxed">
                  <strong>Applicable Products:</strong> Eligible CUCKOO Water Purifier models, excluding GRANITE.
                </p>
                <p className="text-sm leading-relaxed">Don&apos;t miss this limited-time offer! Upgrade your home with CUCKOO today and enjoy greater savings.</p>
                <p className="text-xs text-slate-500">
                  Terms &amp; Conditions Apply. Eligibility, rental plan requirements, and promotional benefits are subject to CUCKOO&apos;s applicable terms and conditions.
                </p>
              </div>
            ) : (
              <div className="p-5 sm:p-7 text-slate-800 space-y-5">
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

                <p className="text-xs text-slate-500">Terms and conditions apply.</p>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
