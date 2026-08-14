import React, { useState, useEffect } from 'react';
import { Product, ProductCategory, ContactInfo, SeoSettings } from '../types';
import { CATEGORIES_LIST } from '../data/cuckooData';
import { UserRole, UserSession, logout, quickLogin } from '../lib/authStore';
import {
  getStoredProducts,
  upsertProduct,
  deleteProductById,
  toggleProductPopular,
  resetProductsToDefault,
  importProductsJSON,
  exportProductsJSON,
} from '../lib/productStore';
import { getStoredContactInfo, saveContactInfo } from '../lib/storeInfoStore';
import { getStoredSeoSettings, saveSeoSettings } from '../lib/seoStore';
import {
  getBackgroundInquiries,
  deleteBackgroundInquiry,
  clearAllBackgroundInquiries,
  markInquiryAsRead,
  BackgroundInquiry,
} from '../lib/inquiryStore';
import { ProductEditModal } from './ProductEditModal';

import {
  ShieldCheck,
  UserCheck,
  Package,
  Plus,
  Edit3,
  Trash2,
  Star,
  Search,
  Filter,
  RefreshCw,
  Download,
  Upload,
  Mail,
  Phone,
  Building2,
  Lock,
  LogOut,
  X,
  CheckCircle2,
  AlertCircle,
  Eye,
  Sparkles,
  Database,
  SlidersHorizontal,
  Key,
} from 'lucide-react';

interface CmsDashboardProps {
  isOpen: boolean;
  session: UserSession;
  onClose: () => void;
  onLogout: () => void;
  onProductsUpdated?: () => void;
}

export const CmsDashboard: React.FC<CmsDashboardProps> = ({
  isOpen,
  session,
  onClose,
  onLogout,
  onProductsUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<'products' | 'inquiries' | 'store' | 'security' | 'backup' | 'seo'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Product Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Inquiries State
  const [inquiries, setInquiries] = useState<BackgroundInquiry[]>([]);

  // Store Info State
  const [contactInfo, setContactInfo] = useState<ContactInfo>(getStoredContactInfo());

  // SEO / AEO State
  const [seoSettings, setSeoSettings] = useState<SeoSettings>(getStoredSeoSettings());

  // JSON Import State
  const [jsonInput, setJsonInput] = useState('');

  // Notification Banner
  const [toastMsg, setToastMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    setToastMsg({ text, type });
    setTimeout(() => setToastMsg(null), 4000);
  };

  const reloadData = () => {
    setProducts(getStoredProducts());
    setInquiries(getBackgroundInquiries());
    setContactInfo(getStoredContactInfo());
    setSeoSettings(getStoredSeoSettings());
    if (onProductsUpdated) onProductsUpdated();
  };

  useEffect(() => {
    if (isOpen) {
      reloadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Filtered products list
  const filteredProducts = products.filter((p) => {
    const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Handlers
  const handleSaveProduct = (updatedProd: Product) => {
    const res = upsertProduct(updatedProd, session.role);
    if (res.success) {
      showToast(res.message, 'success');
      reloadData();
    } else {
      showToast(res.message, 'error');
    }
  };

  const handleDeleteProduct = (id: string, name: string) => {
    if (session.role !== 'admin') {
      showToast('权限限制：仅 Admin (全权管理员) 允许删除产品！Editor 角色无法执行删除。', 'error');
      return;
    }

    if (window.confirm(`确定要彻底删除产品 "${name}" 吗？此操作无法撤销。`)) {
      const res = deleteProductById(id, session.role);
      if (res.success) {
        showToast(res.message, 'success');
        reloadData();
      } else {
        showToast(res.message, 'error');
      }
    }
  };

  const handleTogglePopular = (id: string) => {
    const res = toggleProductPopular(id, session.role);
    if (res.success) {
      showToast('热销推荐状态已更新！', 'success');
      reloadData();
    } else {
      showToast('更新失败，请确认编辑权限。', 'error');
    }
  };

  const handleResetCatalog = () => {
    if (session.role !== 'admin') {
      showToast('仅 Admin 具有恢复数据库初始状态的权限。', 'error');
      return;
    }

    if (window.confirm('警告：确定要把产品列表恢复到 CUCKOO 官方初始目录吗？所有自定义添加或修改的产品都将被覆盖。')) {
      const res = resetProductsToDefault(session.role);
      if (res.success) {
        showToast(res.message, 'success');
        reloadData();
      } else {
        showToast(res.message, 'error');
      }
    }
  };

  const handleImportJSON = () => {
    if (!jsonInput.trim()) {
      showToast('请输入 JSON 数据后再导入', 'error');
      return;
    }
    const res = importProductsJSON(jsonInput, session.role);
    if (res.success) {
      showToast(res.message, 'success');
      setJsonInput('');
      reloadData();
    } else {
      showToast(res.message, 'error');
    }
  };

  const handleExportJSON = () => {
    const jsonStr = exportProductsJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cuckoo_products_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('产品数据 JSON 已生成并下载！', 'success');
  };

  const handleSaveStoreInfo = (e: React.FormEvent) => {
    e.preventDefault();
    const res = saveContactInfo(contactInfo, session.role);
    if (res.success) {
      showToast(res.message, 'success');
      reloadData();
    } else {
      showToast(res.message, 'error');
    }
  };

  const updateSeoSimpleField = (field: 'siteTitle' | 'metaDescription' | 'keywords' | 'ogImage' | 'jsonLd', value: string) => {
    setSeoSettings((prev) => {
      const next = { ...prev, [field]: value };

      if (field === 'siteTitle') {
        next.metaTitle = value;
        next.ogTitle = value;
        next.twitterTitle = value;
      }

      if (field === 'metaDescription') {
        next.ogDescription = value;
        next.twitterDescription = value;
      }

      if (field === 'ogImage') {
        next.twitterImage = value;
      }

      return next;
    });
  };

  const handleSaveSeo = (e: React.FormEvent) => {
    e.preventDefault();
    const res = saveSeoSettings(seoSettings, session.role);
    if (res.success) {
      showToast(res.message, 'success');
      reloadData();
    } else {
      showToast(res.message, 'error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-hidden">
      <div className="relative w-full max-w-6xl h-[92vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col">
        
        {/* Toast Notification Banner */}
        {toastMsg && (
          <div
            className={`absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl border shadow-xl flex items-center gap-2 text-xs font-bold animate-bounce-short ${
              toastMsg.type === 'success'
                ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200'
                : 'bg-red-950/90 border-red-500 text-red-200'
            }`}
          >
            {toastMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-red-400" />}
            <span>{toastMsg.text}</span>
          </div>
        )}

        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-black text-white">CUCKOO 产品与内容管理系统</h2>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  CMS v2.0
                </span>
              </div>
              <p className="text-xs text-slate-400">
                实时控制产品上架、月租方案、客户询盘与分行资料
              </p>
            </div>
          </div>

          {/* User Session Badge & Actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs">
              {session.role === 'admin' ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span className="font-extrabold text-amber-300">Admin 全权管理员</span>
                </>
              ) : (
                <>
                  <UserCheck className="w-4 h-4 text-sky-400" />
                  <span className="font-extrabold text-sky-300">Editor 内容编辑员</span>
                </>
              )}
            </div>

            {/* Quick Switch Role or Logout */}
            <button
              onClick={() => {
                if (session.role === 'admin') {
                  quickLogin('editor');
                  showToast('已快速切换为 Editor (内容编辑员) 视角');
                } else {
                  quickLogin('admin');
                  showToast('已快速切换为 Admin (全权管理员) 视角');
                }
              }}
              title="一键切换角色用于对比测试权限"
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-[11px] font-bold transition-colors cursor-pointer"
            >
              切至 {session.role === 'admin' ? 'Editor' : 'Admin'}
            </button>

            <button
              onClick={onLogout}
              className="p-2 rounded-xl bg-red-950/60 hover:bg-red-900 border border-red-800 text-red-300 hover:text-white transition-colors cursor-pointer"
              title="退出登录"
            >
              <LogOut className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Navigation Tabs */}
        <div className="px-6 bg-slate-950/60 border-b border-slate-800 flex flex-wrap gap-2 pt-2 shrink-0">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2.5 font-bold text-xs rounded-t-xl transition-colors flex items-center gap-2 border-t border-x ${
              activeTab === 'products'
                ? 'bg-slate-900 text-white border-slate-700 font-black'
                : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Package className="w-4 h-4 text-indigo-400" />
            <span>产品管理 ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2.5 font-bold text-xs rounded-t-xl transition-colors flex items-center gap-2 border-t border-x ${
              activeTab === 'inquiries'
                ? 'bg-slate-900 text-white border-slate-700 font-black'
                : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>客户询盘 inbox ({inquiries.filter((i) => !i.read).length}未读)</span>
          </button>

          <button
            onClick={() => setActiveTab('store')}
            className={`px-4 py-2.5 font-bold text-xs rounded-t-xl transition-colors flex items-center gap-2 border-t border-x ${
              activeTab === 'store'
                ? 'bg-slate-900 text-white border-slate-700 font-black'
                : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>店铺与分行设置 {session.role !== 'admin' && '🔒'}</span>
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2.5 font-bold text-xs rounded-t-xl transition-colors flex items-center gap-2 border-t border-x ${
              activeTab === 'seo'
                ? 'bg-slate-900 text-white border-slate-700 font-black'
                : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>SEO / AEO</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2.5 font-bold text-xs rounded-t-xl transition-colors flex items-center gap-2 border-t border-x ${
              activeTab === 'security'
                ? 'bg-slate-900 text-white border-slate-700 font-black'
                : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Lock className="w-4 h-4 text-sky-400" />
            <span>角色与权限说明</span>
          </button>

          <button
            onClick={() => setActiveTab('backup')}
            className={`px-4 py-2.5 font-bold text-xs rounded-t-xl transition-colors flex items-center gap-2 border-t border-x ${
              activeTab === 'backup'
                ? 'bg-slate-900 text-white border-slate-700 font-black'
                : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4 text-purple-400" />
            <span>数据备份与重置</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto grow bg-slate-900 space-y-6">
          
          {/* TAB 1: PRODUCTS CMS */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              
              {/* Controls Header */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                
                {/* Search & Category */}
                <div className="flex flex-wrap items-center gap-2 grow">
                  <div className="relative grow max-w-xs">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="搜索产品名称/分类..."
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                  </div>

                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value as ProductCategory | 'ALL')}
                    className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-bold"
                  >
                    {CATEGORIES_LIST.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label} ({cat.id})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Add Product Button */}
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setIsEditModalOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-lg transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>添加新产品 (Add Product)</span>
                </button>

              </div>

              {/* Product Table */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 uppercase font-mono text-[11px]">
                      <tr>
                        <th className="py-3 px-4">产品图片</th>
                        <th className="py-3 px-4">产品名称</th>
                        <th className="py-3 px-4">分类 Category</th>
                        <th className="py-3 px-4">月租价格 (Rental)</th>
                        <th className="py-3 px-4">买断价格 (Outright)</th>
                        <th className="py-3 px-4 text-center">热销推荐</th>
                        <th className="py-3 px-4 text-right">管理操作 Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {filteredProducts.map((p) => (
                        <tr key={p.id} className="hover:bg-slate-900/80 transition-colors">
                          <td className="py-3 px-4">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-16 h-16 rounded-xl object-cover bg-slate-800 border border-slate-700 shadow-sm"
                            />
                          </td>

                          <td className="py-3 px-4">
                            <div className="font-extrabold text-white flex items-center gap-1.5">
                              <span>{p.name}</span>
                              {p.tag && (
                                <span className="px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 text-[9px] border border-indigo-500/30 font-mono">
                                  {p.tag}
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono truncate max-w-xs mt-1">
                              ID: {p.id}
                            </div>
                          </td>

                          <td className="py-3 px-4 font-bold text-slate-300">
                            {p.category}
                          </td>

                          <td className="py-3 px-4 font-extrabold text-emerald-400">
                            {p.rentalPrice}
                          </td>

                          <td className="py-3 px-4 font-bold text-amber-300">
                            {p.outrightPrice}
                          </td>

                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => handleTogglePopular(p.id)}
                              className={`p-1.5 rounded-lg transition-colors ${
                                p.popular
                                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                                  : 'bg-slate-900 text-slate-600 border border-slate-800 hover:text-slate-400'
                              }`}
                              title="点击切换热销状态"
                            >
                              <Star className={`w-4 h-4 ${p.popular ? 'fill-amber-400' : ''}`} />
                            </button>
                          </td>

                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => {
                                  setEditingProduct(p);
                                  setIsEditModalOpen(true);
                                }}
                                className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 transition-colors font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                                <span>编辑</span>
                              </button>

                              <button
                                onClick={() => handleDeleteProduct(p.id, p.name)}
                                className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                                  session.role === 'admin'
                                    ? 'bg-red-950/60 hover:bg-red-900 text-red-300 border-red-800'
                                    : 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed opacity-60'
                                }`}
                                title={session.role === 'admin' ? '删除产品' : '仅 Admin 可删除产品'}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>删除</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}

                      {filteredProducts.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-slate-500 italic">
                            未找到符合条件的产品。
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: INQUIRIES LEADS */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-white">官网客户询盘线索 (Inbound Customer Leads)</h3>
                  <p className="text-xs text-slate-400">客户提交的背景需求与联系方式</p>
                </div>
                {inquiries.length > 0 && (
                  <button
                    onClick={() => {
                      if (window.confirm('确定清空所有询盘记录吗？')) {
                        clearAllBackgroundInquiries();
                        reloadData();
                      }
                    }}
                    className="px-3 py-1.5 rounded-xl bg-red-950 border border-red-800 text-red-300 text-xs font-bold hover:bg-red-900 transition-colors cursor-pointer"
                  >
                    清空询盘线索
                  </button>
                )}
              </div>

              {inquiries.length > 0 ? (
                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        inq.read
                          ? 'bg-slate-950/80 border-slate-800 text-slate-400'
                          : 'bg-slate-800/90 border-indigo-500/50 text-slate-100 shadow-md'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-white text-sm">{inq.name}</span>
                          {!inq.read && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                              NEW 未读线索
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          {new Date(inq.timestamp).toLocaleString()}
                        </div>
                      </div>

                      <div className="py-2 space-y-1 text-xs">
                        <div><strong>电话/WhatsApp:</strong> <span className="text-indigo-300 font-mono">{inq.contact}</span></div>
                        {inq.email && <div><strong>邮箱:</strong> <span className="text-slate-300">{inq.email}</span></div>}
                        <div className="pt-1 text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 mt-1">
                          "{inq.inquiries}"
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-end gap-2 text-xs">
                        {!inq.read && (
                          <button
                            onClick={() => {
                              markInquiryAsRead(inq.id);
                              reloadData();
                            }}
                            className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px]"
                          >
                            标为已读
                          </button>
                        )}
                        <button
                          onClick={() => {
                            deleteBackgroundInquiry(inq.id);
                            reloadData();
                          }}
                          className="px-2.5 py-1 rounded-lg bg-red-950 text-red-300 hover:bg-red-900 text-[11px] font-bold"
                        >
                          删除
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center text-slate-500 italic bg-slate-950 rounded-2xl border border-slate-800">
                  目前暂无收到客户询盘留言。
                </div>
              )}
            </div>
          )}

          {/* TAB 3: STORE & BRANCH SETTINGS (ADMIN ONLY) */}
          {activeTab === 'store' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div>
                  <h3 className="text-sm font-extrabold text-white">店铺与分行信息管理</h3>
                  <p className="text-xs text-slate-400">设置 CUCKOO 代理姓名、联系电话、WhatsApp 与 Sunway Putra Mall 分行地址</p>
                </div>
                {session.role !== 'admin' && (
                  <span className="px-3 py-1 rounded-xl bg-red-950/80 text-red-300 text-xs font-bold border border-red-800">
                    🔒 仅 Admin 可修改
                  </span>
                )}
              </div>

              <form onSubmit={handleSaveStoreInfo} className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">代理姓名 (Agent Name)</label>
                    <input
                      type="text"
                      value={contactInfo.agentName}
                      onChange={(e) => setContactInfo({ ...contactInfo, agentName: e.target.value })}
                      disabled={session.role !== 'admin'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">公司全称 (Company Name)</label>
                    <input
                      type="text"
                      value={contactInfo.companyName}
                      onChange={(e) => setContactInfo({ ...contactInfo, companyName: e.target.value })}
                      disabled={session.role !== 'admin'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">联系电话 (Phone)</label>
                    <input
                      type="text"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      disabled={session.role !== 'admin'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">WhatsApp 号码 (含国家代码)</label>
                    <input
                      type="text"
                      value={contactInfo.whatsappNumber}
                      onChange={(e) => setContactInfo({ ...contactInfo, whatsappNumber: e.target.value })}
                      disabled={session.role !== 'admin'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono disabled:opacity-50"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-300 mb-1">客服 Email</label>
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      disabled={session.role !== 'admin'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs disabled:opacity-50"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-300 mb-1">分行详细地址 (Branch Address)</label>
                    <textarea
                      value={contactInfo.branchAddress}
                      onChange={(e) => setContactInfo({ ...contactInfo, branchAddress: e.target.value })}
                      disabled={session.role !== 'admin'}
                      rows={2}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs disabled:opacity-50"
                    />
                  </div>
                </div>

                {session.role === 'admin' && (
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-lg transition-all cursor-pointer"
                  >
                    保存店铺信息
                  </button>
                )}
              </form>
            </div>
          )}

          {/* TAB 4: SEO / AEO SETTINGS */}
          {activeTab === 'seo' && (
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div>
                  <h3 className="text-sm font-extrabold text-white">SEO / AEO 后台设置</h3>
                  <p className="text-xs text-slate-400">仅写入页面头部 metadata 和 JSON-LD，不会显示在 main page</p>
                </div>
                <span className="px-3 py-1 rounded-xl bg-pink-950/80 text-pink-300 text-xs font-bold border border-pink-800">
                  {session.role === 'admin' || session.role === 'editor' ? '可编辑' : '只读'}
                </span>
              </div>

              <form onSubmit={handleSaveSeo} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
                    <input
                      type="text"
                      value={seoSettings.siteTitle}
                      onChange={(e) => updateSeoSimpleField('siteTitle', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
                    <textarea
                      value={seoSettings.metaDescription}
                      onChange={(e) => updateSeoSimpleField('metaDescription', e.target.value)}
                      rows={3}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Keywords</label>
                    <textarea
                      value={seoSettings.keywords}
                      onChange={(e) => updateSeoSimpleField('keywords', e.target.value)}
                      rows={2}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">OG Image</label>
                    <input
                      type="text"
                      value={seoSettings.ogImage}
                      onChange={(e) => updateSeoSimpleField('ogImage', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">JSON-LD</label>
                    <textarea
                      value={seoSettings.jsonLd}
                      onChange={(e) => updateSeoSimpleField('jsonLd', e.target.value)}
                      rows={8}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-[11px] font-mono"
                    />
                  </div>
                </div>

                {(session.role === 'admin' || session.role === 'editor') && (
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-extrabold shadow-lg transition-all cursor-pointer"
                  >
                    保存 SEO / AEO 设置
                  </button>
                )}
              </form>
            </div>
          )}

          {/* TAB 5: ROLES & PERMISSIONS */}
          {activeTab === 'security' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h3 className="text-sm font-extrabold text-white">角色与权限说明 (Roles & Permissions Matrix)</h3>
                <p className="text-xs text-slate-400">系统支持 Admin 与 Editor 细分权限划分</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Admin Role Card */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/40 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-black text-sm">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Admin (全权管理员)</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                    <li>增加、编辑、查看产品信息</li>
                    <li><strong className="text-amber-300">删除产品</strong> (专属权限)</li>
                    <li><strong className="text-amber-300">修改店铺与分行信息</strong> (专属权限)</li>
                    <li>查看与管理客户询盘 Lead Inbox</li>
                    <li><strong className="text-amber-300">重置数据库目录 / 导入导出 JSON</strong> (专属权限)</li>
                  </ul>
                  <div className="pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800">
                    默认密码: <code className="text-amber-300">admin123</code>
                  </div>
                </div>

                {/* Editor Role Card */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-sky-500/40 space-y-3">
                  <div className="flex items-center gap-2 text-sky-400 font-black text-sm">
                    <UserCheck className="w-5 h-5" />
                    <span>Editor (内容编辑员)</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                    <li>增加新产品、修改产品价格与方案</li>
                    <li>更新产品照片、视频、卖点与规格</li>
                    <li>切换“热销推荐 Popular”与促销 Tag</li>
                    <li><span className="text-red-400">不可删除产品</span></li>
                    <li><span className="text-red-400">不可重置数据或更改店铺地址</span></li>
                  </ul>
                  <div className="pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800">
                    默认密码: <code className="text-sky-300">editor123</code>
                  </div>
                </div>

              </div>

              {/* Password change info */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-2">
                <div className="font-bold text-white flex items-center gap-2">
                  <Key className="w-4 h-4 text-indigo-400" />
                  <span>快捷测试提醒</span>
                </div>
                <p>
                  您可以随时在顶栏点击 “切至 Editor / Admin” 按钮来实时切换身份，即刻验证删除按钮权限阻挡以及编辑器字段保护功能！
                </p>
              </div>

            </div>
          )}

          {/* TAB 5: BACKUP & RESET */}
          {activeTab === 'backup' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h3 className="text-sm font-extrabold text-white">数据导出备份与重置 (Data Backup & Import)</h3>
                <p className="text-xs text-slate-400">导出的 JSON 包含了全部 CUCKOO 产品方案，随时用于备份与迁移</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Download className="w-4 h-4" /> 导出产品 JSON 文件
                  </h4>
                  <p className="text-xs text-slate-400">
                    将当前的全部产品目录导出为备份 JSON 格式文件。
                  </p>
                  <button
                    onClick={handleExportJSON}
                    className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>导出 JSON 配置文件</span>
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-3">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4" /> 恢复 CUCKOO 官方默认数据
                  </h4>
                  <p className="text-xs text-slate-400">
                    若数据不慎错乱，可一键将产品列表恢复为官方初始化目录（需 Admin 权限）。
                  </p>
                  <button
                    onClick={handleResetCatalog}
                    disabled={session.role !== 'admin'}
                    className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>重置为初始 CUCKOO 产品数据</span>
                  </button>
                </div>

              </div>

              {/* JSON Import Section */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Upload className="w-4 h-4" /> 导入产品 JSON 数据 (Import JSON Data)
                </h4>
                <textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder="在此粘贴包含产品数组的 JSON 字符串..."
                  rows={4}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-xs"
                />
                <button
                  onClick={handleImportJSON}
                  disabled={session.role !== 'admin'}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Upload className="w-4 h-4" />
                  <span>导入 JSON 并保存</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Nested Product Edit Modal */}
      <ProductEditModal
        isOpen={isEditModalOpen}
        product={editingProduct}
        role={session.role}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveProduct}
      />

    </div>
  );
};
