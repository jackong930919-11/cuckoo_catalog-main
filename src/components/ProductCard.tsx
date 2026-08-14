import React from 'react';
import { Product } from '../types';
import { MessageCircle, Phone, Info, Check, Sparkles, Tag, Shield, Calendar } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName}, I am interested in CUCKOO ${product.name} (${product.category}). Could you please share the latest promotion, rental plan (${product.rentalPrice}), and outright package details?`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div 
      onClick={() => onSelectProduct(product)}
      className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      <div>
        {/* Product Image Header */}
        <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Category Pill Overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[70%]">
            <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase">
              {product.category}
            </span>
            {product.tag && (
              <span className={`px-2.5 py-1 rounded-full text-white text-[10px] font-bold tracking-wider uppercase shadow-xs ${
                product.tag.includes('🔥') || product.tag.includes('NEW')
                  ? 'bg-rose-600 font-extrabold shadow-rose-900/30'
                  : product.tag.toLowerCase().includes('office')
                  ? 'bg-teal-700 font-bold'
                  : 'bg-indigo-600'
              }`}>
                {product.tag}
              </span>
            )}
          </div>

          {/* Popular Badge */}
          {product.popular && (
            <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-white" /> Popular
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4">
          <div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct(product);
              }}
              className="text-left text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 hover:underline underline-offset-2 cursor-pointer"
              aria-label={`View details for ${product.name}`}
            >
              {product.name}
            </button>
            <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-2">
              {product.subtitle}
            </p>
          </div>

          {/* PRICING BREAKDOWN (Rental / Outright / CCSP) */}
          <div className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-100 space-y-2">
            {product.rentalPrice === 'Outright Only' ? (
              <div key="outright-price-block" className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-amber-600" />
                    Outright Purchase
                  </span>
                  <span className="text-base sm:text-lg font-black text-amber-600">
                    {product.outrightPrice}
                  </span>
                </div>

                <div className="h-px bg-slate-200/60 w-full" />

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block font-medium">Rental Plan</span>
                    <span className="font-semibold text-slate-500">Not Available</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">CCSP Service</span>
                    <span className="font-semibold text-slate-500">N/A</span>
                  </div>
                </div>
              </div>
            ) : (
              <div key="rental-price-block" className="space-y-2">
                {/* Primary Rental Price */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-indigo-600" />
                    Rental Plan
                  </span>
                  <span className="text-base sm:text-lg font-black text-indigo-600">
                    {product.rentalPrice}
                  </span>
                </div>

                <div className="h-px bg-slate-200/60 w-full" />

                {/* Secondary Outright & CCSP Price */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block font-medium">Outright Purchase</span>
                    <span className="font-bold text-slate-800">{product.outrightPrice}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">CCSP Service</span>
                    <span className="font-semibold text-slate-700">{product.ccspPrice}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Features Bullets */}
          <div className="space-y-1.5 pt-1">
            {product.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-5 pt-0 mt-2 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleWhatsApp}
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => onSelectProduct(product)}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};
