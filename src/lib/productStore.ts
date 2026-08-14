import { Product } from '../types';
import { PRODUCTS as INITIAL_PRODUCTS } from '../data/cuckooData';
import { UserRole } from './authStore';

const PRODUCT_STORAGE_KEY = 'cuckoo_products_v1';

export function getStoredProducts(): Product[] {
  try {
    const raw = localStorage.getItem(PRODUCT_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to load products from localStorage:', err);
  }
  // Fallback to initial products if empty or corrupted
  return INITIAL_PRODUCTS;
}

export function saveProductsToStorage(products: Product[]): void {
  try {
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
    window.dispatchEvent(new CustomEvent('cuckoo_products_updated', { detail: products }));
  } catch (err) {
    console.error('Failed to save products to localStorage:', err);
  }
}

export function upsertProduct(product: Product, role: UserRole): { success: boolean; message: string; products: Product[] } {
  if (role !== 'admin' && role !== 'editor') {
    return { success: false, message: '权限不足！仅 Admin 或 Editor 可编辑产品。', products: getStoredProducts() };
  }

  const existing = getStoredProducts();
  const index = existing.findIndex((p) => p.id === product.id);

  let updated: Product[];
  if (index >= 0) {
    // Update existing product
    updated = [...existing];
    updated[index] = { ...product };
  } else {
    // Add new product at top
    updated = [product, ...existing];
  }

  saveProductsToStorage(updated);
  return { success: true, message: index >= 0 ? '产品更新成功！' : '新产品创建成功！', products: updated };
}

export function deleteProductById(id: string, role: UserRole): { success: boolean; message: string; products: Product[] } {
  // Only Admin can delete products according to requirement!
  if (role !== 'admin') {
    return { 
      success: false, 
      message: '权限受限！仅 Admin (全权管理员) 允许删除产品。Editor (内容编辑员) 无权删除。', 
      products: getStoredProducts() 
    };
  }

  const existing = getStoredProducts();
  const updated = existing.filter((p) => p.id !== id);
  saveProductsToStorage(updated);
  return { success: true, message: '产品已成功删除！', products: updated };
}

export function toggleProductPopular(id: string, role: UserRole): { success: boolean; products: Product[] } {
  if (role !== 'admin' && role !== 'editor') {
    return { success: false, products: getStoredProducts() };
  }

  const existing = getStoredProducts();
  const updated = existing.map((p) => (p.id === id ? { ...p, popular: !p.popular } : p));
  saveProductsToStorage(updated);
  return { success: true, products: updated };
}

export function resetProductsToDefault(role: UserRole): { success: boolean; message: string; products: Product[] } {
  if (role !== 'admin') {
    return { 
      success: false, 
      message: '权限受限！仅 Admin (全权管理员) 允许重置产品数据库。', 
      products: getStoredProducts() 
    };
  }

  saveProductsToStorage(INITIAL_PRODUCTS);
  return { success: true, message: '已成功恢复初始 CUCKOO 官方产品数据目录！', products: INITIAL_PRODUCTS };
}

export function importProductsJSON(jsonString: string, role: UserRole): { success: boolean; message: string; products: Product[] } {
  if (role !== 'admin') {
    return { 
      success: false, 
      message: '权限受限！仅 Admin (全权管理员) 允许批量导入 JSON 数据。', 
      products: getStoredProducts() 
    };
  }

  try {
    const parsed = JSON.parse(jsonString);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return { success: false, message: '无效的 JSON 数据格式！必须包含产品数组。', products: getStoredProducts() };
    }

    // Validate product structure basics
    const valid = parsed.every((item) => item.id && item.name && item.category);
    if (!valid) {
      return { success: false, message: 'JSON 中的某些产品缺少必需字段 (id, name, category)。', products: getStoredProducts() };
    }

    saveProductsToStorage(parsed);
    return { success: true, message: `成功导入 ${parsed.length} 项产品数据！`, products: parsed };
  } catch (err: any) {
    return { success: false, message: 'JSON 解析失败: ' + err.message, products: getStoredProducts() };
  }
}

export function exportProductsJSON(): string {
  const products = getStoredProducts();
  return JSON.stringify(products, null, 2);
}
