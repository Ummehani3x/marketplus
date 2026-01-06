const API_BASE = 'http://localhost:4000';

export async function fetchCategories() {
    const res = await fetch(`${API_BASE}/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
}

export async function fetchProducts(params?: { trending?: boolean; deal?: boolean; category?: string; seller?: string }) {
    const url = new URL(`${API_BASE}/products`);
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                url.searchParams.append(key, String(value));
            }
        });
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

export async function fetchSellers() {
    const res = await fetch(`${API_BASE}/sellers`);
    if (!res.ok) throw new Error('Failed to fetch sellers');
    return res.json();
}

export async function fetchPromotions() {
    const res = await fetch(`${API_BASE}/promotions`);
    if (!res.ok) throw new Error('Failed to fetch promotions');
    return res.json();
}
