import React, { useState, useEffect } from 'react';
import { X, Calculator, ShieldCheck, CheckCircle2, MessageCircle, Info, Tag, Sparkles } from 'lucide-react';
import { CUCKOO_CONTACT, CATEGORIES_LIST } from '../data/cuckooData';
import { Product, ProductCategory } from '../types';
import { getStoredProducts } from '../lib/productStore';

interface RentalCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

// Function to resolve exact rental tenure options per product's rentalPlans or fallback rules
export function getRentalTenureOptions(product: Product): number[] {
  if (product.rentalPlans && product.rentalPlans.length > 0) {
    const tenures = Array.from(new Set(product.rentalPlans.map((p) => p.months))).sort((a, b) => a - b);
    if (tenures.length > 0) return tenures;
  }

  const name = (product.name + ' ' + product.subtitle).toLowerCase();
  const cat = product.category;

  // 1. Samsung Tablet -> 24 months only
  if (name.includes('tablet') || name.includes('tab')) {
    return [24];
  }

  // 2. Treadmill / DayBed / Samsung TV -> 36 months only
  if (
    cat === 'TREADMILL' ||
    cat === 'DAYBED' ||
    name.includes('treadmill') ||
    name.includes('daybed') ||
    name.includes('tv') ||
    name.includes('television')
  ) {
    return [36];
  }

  // 3. Airconditioner / Massage Chair / Outdoor filter / Samsung Refrigerator -> 60 months only
  if (
    cat === 'AIRCONDITIONER' ||
    cat === 'MASSAGE CHAIR' ||
    cat === 'OUTDOOR FILTER' ||
    name.includes('air conditioner') ||
    name.includes('aircon') ||
    name.includes('massage chair') ||
    name.includes('outdoor filter') ||
    name.includes('refrigerator') ||
    name.includes('fridge')
  ) {
    return [60];
  }

  // 4. Mattress -> 36 / 60 / 84 months
  if (cat === 'MATTRESS' || name.includes('mattress')) {
    return [36, 60, 84];
  }

  // 5. Samsung Washer Dryer, Water Purifier, Air Purifier -> 60 & 84 months
  if (
    cat === 'WATER PURIFIER' ||
    cat === 'AIR PURIFIER' ||
    name.includes('washer') ||
    name.includes('dryer') ||
    name.includes('laundry') ||
    name.includes('water purifier') ||
    name.includes('air purifier')
  ) {
    return [60, 84];
  }

  // Fallback default
  return [60];
}

export const RentalCalculator: React.FC<RentalCalculatorProps> = ({ isOpen, onClose }) => {
  const [allProducts, setAllProducts] = useState<Product[]>(getStoredProducts());

  useEffect(() => {
    const handleUpdate = (e: any) => {
      setAllProducts(e.detail || getStoredProducts());
    };
    window.addEventListener('cuckoo_products_updated', handleUpdate);
    return () => window.removeEventListener('cuckoo_products_updated', handleUpdate);
  }, []);

  if (!isOpen) return null;

  const availableCategories = CATEGORIES_LIST.filter(c => {
    if (c.id === 'ALL') return true;
    return allProducts.some(p => p.category === c.id);
  });

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'ALL'>('ALL');
  const [selectedProductId, setSelectedProductId] = useState<string>(allProducts[0]?.id || '');

  // Products filtered by currently selected category
  const categoryProducts = selectedCategory === 'ALL'
    ? allProducts
    : allProducts.filter((p) => p.category === selectedCategory);

  const product = allProducts.find((p) => p.id === selectedProductId) || categoryProducts[0] || allProducts[0];
  
  const hasRental = Boolean(product.rentalPrice && product.rentalPrice !== 'Outright Only' && product.rentalPrice !== 'N/A');
  const hasOutright = Boolean(product.outrightPrice && product.outrightPrice !== 'N/A');

  const [paymentType, setPaymentType] = useState<'rental' | 'outright'>('rental');

  // Sync payment type if current selection has no rental
  useEffect(() => {
    if (!hasRental && hasOutright) {
      setPaymentType('outright');
    } else if (hasRental && paymentType === 'outright' && !hasOutright) {
      setPaymentType('rental');
    }
  }, [selectedProductId, hasRental, hasOutright, paymentType]);

  const validTenures = getRentalTenureOptions(product);

  const [contractMonths, setContractMonths] = useState<number>(validTenures[0] || 60);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(0);

  // Sync state when selected product changes or if contractMonths is invalid for product
  useEffect(() => {
    const tenures = getRentalTenureOptions(product);
    if (!tenures.includes(contractMonths)) {
      setContractMonths(tenures[0] || 60);
    }
    setSelectedPlanIndex(0);
  }, [selectedProductId]);

  const handleSelectTenure = (months: number) => {
    setContractMonths(months);
    setSelectedPlanIndex(0);
  };

  // Find matching rental plans for selected contract tenure
  const matchingPlans = product.rentalPlans ? product.rentalPlans.filter(p => p.months === contractMonths) : [];
  const activeRentalPlan = matchingPlans[selectedPlanIndex] || matchingPlans[0];

  // Calculate monthly rate
  let displayedMonthlyRate = 0;
  if (activeRentalPlan) {
    displayedMonthlyRate = activeRentalPlan.monthlyRate;
  } else {
    displayedMonthlyRate = parseInt(product.rentalPrice.replace(/[^0-9]/g, '')) || 60;
  }

  const handleWhatsApp = () => {
    const text = paymentType === 'outright'
      ? encodeURIComponent(
          `Hi ${CUCKOO_CONTACT.agentName},\nI used the CUCKOO Calculator and would like to buy Outright:\nCategory: ${product.category}\nProduct: ${product.name} (${product.subtitle})\nOutright Price: ${product.outrightPrice}\n\nPlease guide me with the order registration & free installation!`
        )
      : encodeURIComponent(
          `Hi ${CUCKOO_CONTACT.agentName},\nI used the CUCKOO Rental Calculator and would like to register:\nCategory: ${product.category}\nProduct: ${product.name} (${product.subtitle})\nContract Tenure: ${contractMonths} Months Plan${activeRentalPlan ? ` [${activeRentalPlan.planName}]` : ''}\nMonthly Rate: RM ${displayedMonthlyRate}/month\n\nPlease guide me on document requirements & free installation registration!`
        );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in cursor-pointer"
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full p-5 sm:p-7 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">Official CUCKOO Rental Calculator</h3>
              <p className="text-xs text-slate-500 font-medium">Select category & product model to view exact contract tenure plans</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Two-Column Form Body */}
        <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left-Hand Side: Product Image & Selected Model Summary */}
          <div className="md:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-4">
            {/* Image Box */}
            <div className="relative aspect-4/3 sm:aspect-square w-full rounded-xl overflow-hidden bg-white border border-slate-200/60 shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2.5 left-2.5 bg-indigo-600 text-white px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase shadow-md">
                {product.category}
              </div>
              {product.tag && (
                <div className="absolute top-2.5 right-2.5 bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-slate-950" />
                  <span>{product.tag}</span>
                </div>
              )}
            </div>

            {/* Product Title Info */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-wider block">
                Selected Product Preview
              </span>
              <h4 className="text-base font-black text-slate-900 leading-tight">
                {product.name}
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                {product.subtitle}
              </p>
            </div>

            {/* Base Rental Badge */}
            <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-500">Standard Base Rate:</span>
              <span className="font-black text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
                {product.rentalPrice}
              </span>
            </div>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-1.5 pt-1 border-t border-slate-200/60">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                  Key Specifications:
                </span>
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 3).map((f, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 text-slate-700 rounded-md"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right-Hand Side: Category & Product Selection + Plan Options */}
          <div className="md:col-span-7 space-y-4">
            
            {/* 1. Product Categories Selector */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                1. Select Product Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  const cat = e.target.value as ProductCategory | 'ALL';
                  setSelectedCategory(cat);
                  const filtered = cat === 'ALL' ? allProducts : allProducts.filter((p) => p.category === cat);
                  if (filtered.length > 0) {
                    setSelectedProductId(filtered[0].id);
                  }
                }}
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-slate-800 font-extrabold outline-none focus:ring-2 focus:ring-indigo-100 cursor-pointer"
              >
                {availableCategories.map((cat) => {
                  const count = cat.id === 'ALL'
                    ? allProducts.length
                    : allProducts.filter(p => p.category === cat.id).length;
                  return (
                    <option key={cat.id} value={cat.id}>
                      {cat.label} ({count} models)
                    </option>
                  );
                })}
              </select>
            </div>

            {/* 2. Product Name Selector */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                2. Select Product Name & Model
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-slate-800 font-extrabold outline-none focus:ring-2 focus:ring-indigo-100 cursor-pointer"
              >
                {categoryProducts.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} - {p.subtitle} ({p.rentalPrice !== 'N/A' ? p.rentalPrice : p.outrightPrice})
                  </option>
                ))}
              </select>
            </div>

            {/* Payment Mode Selector Tabs (Rental vs Outright) */}
            {hasRental && hasOutright && (
              <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button
                  onClick={() => setPaymentType('rental')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    paymentType === 'rental'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Monthly Rental Plan
                </button>
                <button
                  onClick={() => setPaymentType('outright')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    paymentType === 'outright'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Outright Purchase Plan
                </button>
              </div>
            )}

            {/* 3. Plan Configuration based on paymentType */}
            {paymentType === 'rental' && hasRental ? (
              <div className="space-y-3">
                {/* Tenure Selection */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                      3. Select Contract Tenure
                    </label>
                    <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                      {validTenures.length === 1
                        ? `${validTenures[0]} Months Contract Only`
                        : `${validTenures.join(' / ')} Months Options`}
                    </span>
                  </div>

                  <div className={`grid gap-2 ${validTenures.length === 1 ? 'grid-cols-1' : validTenures.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {validTenures.map((m) => (
                      <button
                        key={m}
                        onClick={() => handleSelectTenure(m)}
                        className={`py-2 px-3 rounded-xl text-center border font-extrabold text-xs transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                          contractMonths === m
                            ? 'border-indigo-600 bg-indigo-600 text-white shadow-xs'
                            : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-black">{m} Months</span>
                        <span className={`text-[10px] font-medium ${contractMonths === m ? 'text-indigo-100' : 'text-slate-500'}`}>
                          {m === 84 ? 'Longest Saver' : m === 60 ? 'Standard Plan' : m === 36 ? '3-Year Flexible' : '2-Year Plan'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sub-plan selection if multiple matching plans exist for this tenure */}
                {matchingPlans.length > 1 && (
                  <div>
                    <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                      Available Plan Options for {contractMonths} Months:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {matchingPlans.map((plan, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedPlanIndex(idx)}
                          className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                            selectedPlanIndex === idx
                              ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-500/20'
                              : 'border-slate-200 bg-white hover:bg-slate-50'
                          }`}
                        >
                          <div className="font-extrabold text-slate-900">{plan.planName}</div>
                          <div className="font-black text-indigo-600 text-sm mt-0.5">
                            RM {plan.monthlyRate} <span className="text-[10px] text-slate-500 font-medium">/ mth</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">[{plan.customerType}]</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rental Summary Box */}
                <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                      Official Monthly Rental Rate
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase">
                      RM0 Processing Fee
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-indigo-600">
                      RM {displayedMonthlyRate}
                    </span>
                    <span className="text-xs text-slate-600 font-bold">
                      / month ({contractMonths} Months Contract)
                    </span>
                  </div>

                  {activeRentalPlan && activeRentalPlan.customerType && (
                    <div className="text-xs font-bold text-indigo-900 bg-indigo-100/70 px-2.5 py-1 rounded-lg w-fit">
                      Eligibility: {activeRentalPlan.customerType}
                    </div>
                  )}

                  <div className="pt-2 border-t border-indigo-100 space-y-1 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Free Scheduled Servicing & Filter/Part Replacement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>100% Full CUCKOO Warranty Throughout Contract Period</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Outright Purchase Mode */
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-950 uppercase tracking-wider">
                      Outright Purchase Price
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 font-bold text-[10px] uppercase">
                      Outright Package
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-amber-700">
                      {product.outrightPrice}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">(One-time Outright Payment)</span>
                  </div>

                  <div className="pt-2 border-t border-amber-200/80 space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Includes Official CUCKOO Extended Exclusive Warranty & Servicing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Free Delivery & Professional On-site Installation</span>
                    </div>
                  </div>
                </div>

                {/* Outright Plan Options Breakdown if available */}
                {product.outrightPlans && product.outrightPlans.length > 0 && (
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-extrabold text-amber-950 uppercase tracking-wider">
                      Available Outright Plan Options:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.outrightPlans.map((plan, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl border border-amber-200 bg-white text-xs space-y-1">
                          <div className="font-extrabold text-slate-900">{plan.optionName}</div>
                          <div className="font-black text-amber-700 text-sm">
                            {typeof plan.outrightPrice === 'number' ? `RM ${plan.outrightPrice.toLocaleString()}` : plan.outrightPrice}
                          </div>
                          {plan.perks && (
                            <div className="text-[10px] font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                              🎁 {plan.perks}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 5. Action CTA */}
            <button
              onClick={handleWhatsApp}
              className={`w-full py-3 px-4 rounded-2xl text-white font-extrabold text-xs sm:text-sm shadow-md transition-all transform active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                paymentType === 'outright'
                  ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-200'
                  : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200'
              }`}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>
                {paymentType === 'outright'
                  ? `Inquire Outright Purchase (${product.outrightPrice}) via ${CUCKOO_CONTACT.agentName}`
                  : `Apply ${contractMonths}-Month Rental Plan (RM ${displayedMonthlyRate}/mth) via ${CUCKOO_CONTACT.agentName}`}
              </span>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};



