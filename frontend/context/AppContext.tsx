'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
    id: string;
    email: string;
    name: string;
}

export interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface AppContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: string) => void;
    updateCartQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    favorites: string[];
    toggleFavorite: (id: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUserState] = useState<User | null>(null);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Load state from localStorage on mount
    useEffect(() => {
        const savedUser = localStorage.getItem('marketPlus_user');
        if (savedUser) setUserState(JSON.parse(savedUser));

        const savedCart = localStorage.getItem('marketPlus_cart');
        if (savedCart) setCart(JSON.parse(savedCart));

        const savedFavorites = localStorage.getItem('marketPlus_favorites');
        if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    }, []);

    // Persistence
    const setUser = (user: User | null) => {
        setUserState(user);
        if (user) localStorage.setItem('marketPlus_user', JSON.stringify(user));
        else localStorage.removeItem('marketPlus_user');
    };

    const addToCart = (product: Omit<CartItem, 'quantity'>) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            let updated;
            if (existing) {
                updated = prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updated = [...prev, { ...product, quantity: 1 }];
            }
            localStorage.setItem('marketPlus_cart', JSON.stringify(updated));
            return updated;
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prev => {
            const updated = prev.filter(item => item.id !== id);
            localStorage.setItem('marketPlus_cart', JSON.stringify(updated));
            return updated;
        });
    };

    const updateCartQuantity = (id: string, quantity: number) => {
        setCart(prev => {
            const updated = prev.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            );
            localStorage.setItem('marketPlus_cart', JSON.stringify(updated));
            return updated;
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('marketPlus_cart');
    };

    const toggleFavorite = (id: string) => {
        setFavorites(prev => {
            const updated = prev.includes(id)
                ? prev.filter(favId => favId !== id)
                : [...prev, id];
            localStorage.setItem('marketPlus_favorites', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                cart,
                addToCart,
                removeFromCart,
                updateCartQuantity,
                clearCart,
                favorites,
                toggleFavorite,
                searchQuery,
                setSearchQuery,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
}
