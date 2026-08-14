import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ShieldCheck, Building2, ExternalLink, MessageCircle, Eye, X, ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon, Compass, Car, Train, Map as MapIcon } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { CUCKOO_CONTACT } from '../data/cuckooData';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

// Sunway Putra Mall coordinates
const BRANCH_COORDINATES = { lat: 3.1691, lng: 101.6924 };

interface BranchPhoto {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  src: string;
}

const BRANCH_PHOTOS: BranchPhoto[] = [
  {
    id: 1,
    title: 'CUCKOO Experience Booth Overview',
    subtitle: `Sunway Putra Mall (${CUCKOO_CONTACT.unitNo})`,
    description: 'Modern open-concept booth with illuminated CUCKOO neon sign, red slatted enclosure, indoor greenery, luxury massage chair display, and consultation area.',
    tag: 'Booth Overview',
    src: '/images/branchimage2.png'
  },
  {
    id: 2,
    title: 'Frontal Entrance & Fitness Zone',
    subtitle: 'Illuminated Blue CUCKOO Neon Sign',
    description: 'Sleek entrance featuring CUCKOO Bespoke air conditioners, smart treadmill, water dispensers, and comfortable red customer consultation seats.',
    tag: 'Front Entrance',
    src: '/images/branchimage1.png'
  },
  {
    id: 3,
    title: 'Home Refined Feature Showcase Wall',
    subtitle: 'Complete Healthy Home Product Lineup',
    description: 'High-contrast feature wall with "CUCKOO Home refined, simply healthier" tagline, showcasing water purifiers, outdoor filters, induction cookers, and air care.',
    tag: 'Product Wall',
    src: '/images/branchimage3.png'
  },
  {
    id: 4,
    title: 'Top Trending Products Display Zone',
    subtitle: 'Air Purifiers & Water Dispensers',
    description: 'Wide perspective view of our interactive product zone, surrounded by warm spotlighting and red slatted enclosure.',
    tag: 'Trending Zone',
    src: '/images/branchimage4.png'
  }
];

export const BranchLocation: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [showInfoWindow, setShowInfoWindow] = useState<boolean>(true);

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Sunway Putra Mall Jalan Putra Chow Kit Kuala Lumpur')}`;
  const googleMapsDirUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Sunway Putra Mall Jalan Putra Chow Kit Kuala Lumpur')}`;
  const wazeDirUrl = `https://waze.com/ul?q=${encodeURIComponent('Sunway Putra Mall Kuala Lumpur')}&navigate=yes`;
  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=3.1691,101.6924`;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi ${CUCKOO_CONTACT.agentName}, I am planning to visit the Sunway Putra Mall branch. Could you confirm your availability?`);
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  const activePhoto = selectedPhotoIndex !== null ? BRANCH_PHOTOS[selectedPhotoIndex] : null;

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % BRANCH_PHOTOS.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + BRANCH_PHOTOS.length) % BRANCH_PHOTOS.length);
    }
  };

  return (
    <section id="branch-contact" className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Branch Container */}
        <div className="bg-slate-900 rounded-3xl text-white p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          
          {/* Background Decorative Accent */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800/80 text-red-200 text-xs font-bold uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5 text-red-400" /> Official CUCKOO Brand Store
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Visit Our Store & Experience Products Live
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Located at {CUCKOO_CONTACT.mallName} ({CUCKOO_CONTACT.unitNo}). Explore real models, consult on rental packages, and test out CUCKOO water & air purifiers on site with <strong className="text-white">{CUCKOO_CONTACT.agentName}</strong>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={googleMapsDirUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs flex items-center gap-2 transition-colors shadow-md"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>Get Directions</span>
              </a>

              <a
                href={wazeDirUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs flex items-center gap-2 transition-colors shadow-md"
              >
                <Car className="w-4 h-4 text-white" />
                <span>Waze</span>
              </a>

              <button
                onClick={handleWhatsApp}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center gap-2 transition-colors shadow-md shadow-emerald-950/50 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

          {/* Interactive Google Map & Location Data Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            
            {/* Interactive Map Box */}
            <div className="lg:col-span-7 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-inner flex flex-col relative min-h-[340px] sm:min-h-[380px]">
              
              <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-bold text-slate-300">
                <div className="flex items-center gap-2">
                  <MapIcon className="w-4 h-4 text-red-400" />
                  <span>Google Maps Live Store Data — Sunway Putra Mall</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] border border-emerald-500/30 font-mono">
                  Live View
                </span>
              </div>

              <div className="relative w-full h-80 sm:h-96 grow">
                {hasValidKey ? (
                  <APIProvider apiKey={API_KEY} version="weekly">
                    <Map
                      defaultCenter={BRANCH_COORDINATES}
                      defaultZoom={16}
                      mapId="CUCKOO_BRANCH_MAP"
                      internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <AdvancedMarker
                        position={BRANCH_COORDINATES}
                        onClick={() => setShowInfoWindow(true)}
                        title="CUCKOO Brand Store - Sunway Putra Mall"
                      >
                        <Pin background="#dc2626" glyphColor="#ffffff" borderColor="#991b1b" />
                      </AdvancedMarker>

                      {showInfoWindow && (
                        <InfoWindow
                          position={BRANCH_COORDINATES}
                          onCloseClick={() => setShowInfoWindow(false)}
                        >
                          <div className="p-1 text-slate-900 max-w-xs">
                            <h4 className="font-black text-sm text-red-600">
                              CUCKOO Brand Store
                            </h4>
                            <p className="text-xs font-bold text-slate-800 mt-0.5">
                              Sunway Putra Mall ({CUCKOO_CONTACT.unitNo})
                            </p>
                            <p className="text-[11px] text-slate-600 mt-1">
                              {CUCKOO_CONTACT.branchAddress}
                            </p>
                            <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between">
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                                Open 10AM - 10PM
                              </span>
                              <a
                                href={googleMapsDirUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-extrabold text-indigo-600 hover:underline"
                              >
                                Directions →
                              </a>
                            </div>
                          </div>
                        </InfoWindow>
                      )}
                    </Map>
                  </APIProvider>
                ) : (
                  <iframe
                    title="CUCKOO Sunway Putra Mall Google Maps Branch Location"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent('Sunway Putra Mall, Jalan Putra, 50350 Kuala Lumpur')}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Quick Bar below Map */}
              <div className="p-3 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="truncate max-w-xs sm:max-w-md">
                    {CUCKOO_CONTACT.branchAddress}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-slate-700">|</span>
                  <a
                    href={streetViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1"
                  >
                    <span>Street View</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Store Information & Direct Travel Guide */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4" /> Store Location Details
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-800 text-[10px] font-extrabold">
                    Lower Ground Floor
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-white">
                    {CUCKOO_CONTACT.mallName}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    <strong>Unit:</strong> {CUCKOO_CONTACT.unitNo}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {CUCKOO_CONTACT.branchAddress}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-700/80 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Operating Hours: <strong className="text-white">10:00 AM – 10:00 PM (Mon–Sun)</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Branch Agent: <strong className="text-white">{CUCKOO_CONTACT.agentName} ({CUCKOO_CONTACT.phone})</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <a href={`mailto:${CUCKOO_CONTACT.email}`} className="text-indigo-300 hover:underline truncate">
                      {CUCKOO_CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Transit & Public Transport Guide */}
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                  <Train className="w-4 h-4" /> Transport & Mall Access
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold shrink-0 mt-0.5">LRT</span>
                    <p><strong>PWTC LRT Station</strong> (Sri Petaling Line) — Direct connected link bridge to Sunway Putra Mall.</p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-bold shrink-0 mt-0.5">KTM</span>
                    <p><strong>Putra KTM Komuter Station</strong> — 3 minutes walk directly opposite the mall entrance.</p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold shrink-0 mt-0.5">PARKING</span>
                    <p>Multi-storey basement mall parking available directly under Sunway Putra Mall.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* 4 Branch Photos Grid */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                <ImageIcon className="w-4 h-4 text-red-400" />
                <span>Store Gallery (4 Real Branch Views)</span>
              </div>
              <span className="text-[11px] text-slate-400">Click any photo for full view</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BRANCH_PHOTOS.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/80 cursor-pointer transition-all duration-300 hover:border-red-500/80 hover:shadow-xl hover:shadow-red-950/30 transform hover:-translate-y-1"
                >
                  <div className="aspect-4/3 overflow-hidden relative">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-extrabold text-white">
                      Photo {photo.id} • {photo.tag}
                    </div>

                    {/* Expand Icon Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                      <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 space-y-1 bg-slate-800/95">
                    <h3 className="text-xs font-bold text-white group-hover:text-red-300 transition-colors line-clamp-1">
                      {photo.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Documents Notice */}
          <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Official On-Site Application Documents</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              For fast rental approval on site, bring IC copy (Malaysian citizens) or Passport (Expatriates) + Bank card for instant payment authorization.
            </p>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Full Image View */}
      {activePhoto && selectedPhotoIndex !== null && (
        <div 
          onClick={() => setSelectedPhotoIndex(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl cursor-default"
          >
            
            {/* Header controls */}
            <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-red-950 text-red-200 border border-red-800 text-xs font-bold">
                  Photo {activePhoto.id} of {BRANCH_PHOTOS.length}
                </span>
                <span className="text-xs font-bold text-slate-300 hidden sm:inline">
                  {activePhoto.tag}
                </span>
              </div>

              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Photo View Area */}
            <div className="relative bg-black aspect-16/10 max-h-[60vh] flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />

              {/* Prev/Next Navigation Buttons */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-slate-700 transition-transform active:scale-90 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-slate-700 transition-transform active:scale-90 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer Photo Details & Quick WhatsApp CTA */}
            <div className="p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-extrabold text-white">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 max-w-xl">
                  {activePhoto.description}
                </p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shrink-0 transition-colors shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire Branch Visit</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};


