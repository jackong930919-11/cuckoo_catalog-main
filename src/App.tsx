import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BranchLocation } from './components/BranchLocation';
import { RentalCalculator } from './components/RentalCalculator';
import { RentalPage } from './components/RentalPage';
import { OutrightPage } from './components/OutrightPage';
import { CcspPage } from './components/CcspPage';
import { PromoCard } from './components/NewLaunchPromoCard';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomeVideoShowcase } from './components/HomeVideoShowcase';
import { ContactForm } from './components/ContactForm';
import { SmartSearchBar } from './components/SmartSearchBar';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { SeoHead } from './components/SeoHead';
import { CmsLoginModal } from './components/CmsLoginModal';
import { CmsDashboard } from './components/CmsDashboard';
import { CATEGORIES_LIST, CUCKOO_CONTACT } from './data/cuckooData';
import { Product, ProductCategory } from './types';
import { getStoredProducts } from './lib/productStore';
import { getCurrentSession, logout, UserSession } from './lib/authStore';
import { Search, Filter, ShieldCheck, Phone, MessageCircle, Sparkles, AlertCircle, ChevronDown, RefreshCw } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<'all' | 'rental' | 'outright' | 'ccsp'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(6); // 3 promo cards + 6 products = 9 items (3 rows x 3 columns)

  // Dynamic products state synced with CMS
  const [allProducts, setAllProducts] = useState<Product[]>(getStoredProducts());

  // User Auth Session State
  const [userSession, setUserSession] = useState<UserSession>(getCurrentSession());
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCmsOpen, setIsCmsOpen] = useState(false);

  // Sync products and auth session on window events + Background Shortcuts & Hash listeners
  useEffect(() => {
    const handleProductsUpdated = (e: any) => {
      setAllProducts(e.detail || getStoredProducts());
    };

    const handleAuthChanged = (e: any) => {
      setUserSession(e.detail || getCurrentSession());
    };

    // Hash change handler for background access (#cms, #admin, #inbox, #messages)
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#cms' || hash === '#admin' || hash === '#login') {
        const session = getCurrentSession();
        if (session.role === 'admin' || session.role === 'editor') {
          setIsCmsOpen(true);
        } else {
          setIsLoginModalOpen(true);
        }
      }
    };

    // Keyboard shortcut handler (Ctrl+Shift+A or Alt+A for CMS)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.altKey && e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        const session = getCurrentSession();
        if (session.role === 'admin' || session.role === 'editor') {
          setIsCmsOpen(true);
        } else {
          setIsLoginModalOpen(true);
        }
      }
    };

    checkHash();

    window.addEventListener('cuckoo_products_updated', handleProductsUpdated);
    window.addEventListener('cuckoo_auth_changed', handleAuthChanged);
    window.addEventListener('hashchange', checkHash);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('cuckoo_products_updated', handleProductsUpdated);
      window.removeEventListener('cuckoo_auth_changed', handleAuthChanged);
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenCms = () => {
    if (userSession.role === 'admin' || userSession.role === 'editor') {
      setIsCmsOpen(true);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = (session: UserSession) => {
    setUserSession(session);
    setIsCmsOpen(true);
  };

  const handleLogout = () => {
    const fresh = logout();
    setUserSession(fresh);
    setIsCmsOpen(false);
  };

  const showPromoCards = selectedCategory === 'ALL' && searchQuery.trim() === '';

  // Filter products based on Category and Search Query with Smart Aliases
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim() && selectedCategory === 'ALL') {
      return allProducts;
    }

    const query = searchQuery.toLowerCase().trim();

    // Category aliases mapping for intelligent searching
    const categoryAliases: Record<string, ProductCategory[]> = {
      water: ['WATER PURIFIER', 'OUTDOOR FILTER'],
      purifier: ['WATER PURIFIER', 'AIR PURIFIER'],
      air: ['AIR PURIFIER', 'AIRCONDITIONER'],
      aircond: ['AIRCONDITIONER'],
      ac: ['AIRCONDITIONER'],
      sejuk: ['AIRCONDITIONER', 'WATER PURIFIER'],
      panas: ['WATER PURIFIER'],
      alkaline: ['WATER PURIFIER'],
      alkali: ['WATER PURIFIER'],
      tilam: ['MATTRESS', 'DAYBED'],
      bed: ['MATTRESS', 'DAYBED'],
      mattress: ['MATTRESS'],
      samsung: ['SAMSUNG PRODUCT'],
      tv: ['SAMSUNG PRODUCT'],
      fridge: ['SAMSUNG PRODUCT'],
      peti: ['SAMSUNG PRODUCT'],
      washer: ['SAMSUNG PRODUCT'],
      dryer: ['SAMSUNG PRODUCT'],
      cooker: ['RICE COOKER'],
      periuk: ['RICE COOKER'],
      nasi: ['RICE COOKER'],
      outdoor: ['OUTDOOR FILTER'],
      massage: ['MASSAGE CHAIR'],
      urut: ['MASSAGE CHAIR'],
      ice: ['WATER PURIFIER'],
      ais: ['WATER PURIFIER'],
      filter: ['WATER PURIFIER', 'OUTDOOR FILTER', 'AIR PURIFIER']
    };

    let aliasCategories: ProductCategory[] = [];
    if (query) {
      Object.keys(categoryAliases).forEach((alias) => {
        if (query.includes(alias) || alias.includes(query)) {
          aliasCategories.push(...categoryAliases[alias]);
        }
      });
    }

    return allProducts.filter((p) => {
      const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;

      if (!query) return matchesCat;

      const nameMatch = p.name.toLowerCase().includes(query);
      const catMatch = p.category.toLowerCase().includes(query);
      const subMatch = p.subtitle.toLowerCase().includes(query);
      const descMatch = p.description.toLowerCase().includes(query);
      const tagMatch = p.tag?.toLowerCase().includes(query);
      const featMatch = p.features.some((f) => f.toLowerCase().includes(query));
      const aliasMatch = aliasCategories.includes(p.category);

      return matchesCat && (nameMatch || catMatch || subMatch || descMatch || tagMatch || featMatch || aliasMatch);
    });
  }, [selectedCategory, searchQuery, allProducts]);

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const hasMoreProducts = visibleCount < filteredProducts.length;

  const scrollToContact = () => {
    const el = document.getElementById('customer-contact-form') || document.getElementById('branch-contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalog = () => {
    const categoryBar = document.getElementById('category-filter-bar');
    const header = document.querySelector('header');
    if (categoryBar && header) {
      const headerHeight = header.getBoundingClientRect().height;
      const barRect = categoryBar.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = scrollTop + barRect.top - headerHeight;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
      });
    } else {
      const el = document.getElementById('product-catalog');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCategorySelect = (catId: ProductCategory | 'ALL') => {
    setSelectedCategory(catId);
    setVisibleCount(catId === 'ALL' && searchQuery.trim() === '' ? 6 : 9);

    setTimeout(() => {
      const targetSection = document.getElementById('category-filter-container') || document.getElementById('product-catalog');
      const header = document.querySelector('header');
      if (targetSection) {
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const rect = targetSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = scrollTop + rect.top - headerHeight - 12;

        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        });
      }
    }, 60);
  };

  return (
    <>
      <SeoHead />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
        
        {/* Top Navbar with Navigation Links */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        searchQuery={searchQuery}
        setSearchQuery={(q) => {
          setSearchQuery(q);
          setVisibleCount(9);
        }}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        session={userSession}
        onScrollToContact={scrollToContact}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onScrollToCatalog={scrollToCatalog}
        onGoHome={() => {
          setSelectedCategory('ALL');
          setSearchQuery('');
          setVisibleCount(6);
        }}
      />

      {/* Main Hero Banner */}
      <HeroBanner
        onScrollToCatalog={scrollToCatalog}
        onScrollToContact={scrollToContact}
        onNavigatePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 300, behavior: 'smooth' });
        }}
      />

      {/* Page Content Renderer */}
      <main id="product-catalog" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Render Dedicated Page Views */}
        {activePage === 'rental' && (
          <RentalPage
            onSelectProduct={(p) => setSelectedProduct(p)}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
          />
        )}

        {activePage === 'outright' && (
          <OutrightPage
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {activePage === 'ccsp' && (
          <CcspPage
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {/* Default 'all' Products Showcase View */}
        {activePage === 'all' && (
          <div id="category-filter-container" className="space-y-8">
            {/* Category Header & Filters (locked at top under navbar) */}
            <div id="category-filter-bar" className="relative z-30 bg-slate-50/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-slate-200/80 shadow-xs transition-all space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" /> Product Categories & Rental Showcase
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    CUCKOO Products
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Showing <strong className="text-slate-800">{displayedProducts.length}</strong> of <strong className="text-slate-800">{filteredProducts.length}</strong> models
                    {searchQuery.trim() && (
                      <span className="ml-1 text-indigo-600 font-bold">
                        (Searching: "{searchQuery}")
                      </span>
                    )}
                  </p>
                </div>
                {/* Sales Agent quick CTA (no search here) */}
                <div className="hidden lg:flex items-center gap-3 p-2 px-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs shrink-0">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    SA
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-500 block text-[10px]">Fast Consultation</span>
                    <span className="font-extrabold text-slate-900">{CUCKOO_CONTACT.agentName} ({CUCKOO_CONTACT.phone})</span>
                  </div>
                </div>
              </div>

              {/* Category Tabs (Scrollable) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {CATEGORIES_LIST.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`px-3.5 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all flex items-center gap-2 shrink-0 border cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100/80 hover:text-slate-900'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Search Banner Notice */}
            {searchQuery.trim() !== '' && (
              <div className="bg-indigo-50/80 border border-indigo-100 rounded-2xl p-3 px-4 flex items-center justify-between text-xs animate-fadeIn">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Smart Search results for: <strong className="text-indigo-700 font-extrabold">"{searchQuery}"</strong> ({filteredProducts.length} models match)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-3 py-1 rounded-xl bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-100 font-bold text-[11px] transition-colors cursor-pointer shrink-0"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* Product Grid - 3 Columns (3 x 3 = 9 items total in first view) */}
            {filteredProducts.length > 0 ? (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Dedicated Columns for Promotions: 1st New Launch, 2nd Hot Selling, 3rd Top Pick (Only shown on ALL Products view) */}
                  {showPromoCards && (
                    <>
                      <PromoCard key="promo-new-launch" variant="NEW_LAUNCH" onOpenCalculator={() => setIsCalculatorOpen(true)} />
                      <PromoCard key="promo-hot-selling" variant="HOT_SELLING" onOpenCalculator={() => setIsCalculatorOpen(true)} />
                      <PromoCard key="promo-top-pick" variant="TOP_PICK" onOpenCalculator={() => setIsCalculatorOpen(true)} />
                    </>
                  )}

                  {displayedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelectProduct={(p) => setSelectedProduct(p)}
                    />
                  ))}
                </div>

                {/* end of promo/products block */}

                {/* See More Button */}
                {hasMoreProducts && (
                  <div className="text-center pt-2">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 9)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md shadow-indigo-200 transition-all transform active:scale-95"
                    >
                      <span>See More Products ({filteredProducts.length - visibleCount} Remaining)</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">No products found</h3>
                <p className="text-xs text-slate-500">
                  No product models matched your current search "{searchQuery}". Try clearing filters or searching for terms like "Water Purifier", "Aircon", or "Mattress".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('ALL');
                    setVisibleCount(9);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                >
                  Reset Search & Category Filters
                </button>
              </div>
            )}
          </div>
        )}

      </main>

      {/* Main Page Bottom YouTube Video Showcase (3 Videos: Left, Middle, Right) */}
      <HomeVideoShowcase />

      {/* Official Branch Store Section */}
      <BranchLocation />

      {/* Customer Contact Form */}
      <ContactForm />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActivePage('all');
          handleCategorySelect(cat);
        }}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenCms={handleOpenCms}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Rental Calculator Modal */}
      <RentalCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* CMS Login Modal */}
      <CmsLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />

      {/* CMS Dashboard */}
      <CmsDashboard
        isOpen={isCmsOpen}
        session={userSession}
        onClose={() => setIsCmsOpen(false)}
        onLogout={handleLogout}
        onProductsUpdated={() => setAllProducts(getStoredProducts())}
      />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

    </div>
    </>
  );
}
