'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useAppContext } from '@/context/AppContext';
import { ProductCard } from '@/components/ProductCard';
import { Heart, ArrowLeft, Loader2 } from 'lucide-react';
import { fetchProducts } from '@/lib/api';

export default function FavoritesPage() {
    const { favorites } = useAppContext();
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getFavorites() {
            if (favorites.length === 0) {
                setProducts([]);
                setLoading(false);
                return;
            }

            try {
                // In a real app, we'd have a specific endpoint for multiple IDs
                // Here we fetch all products and filter locally for simplicity
                const allProducts = await fetchProducts();
                const favoriteProducts = allProducts.filter((p: any) => favorites.includes(p.id));
                setProducts(favoriteProducts);
            } catch (error) {
                console.error('Error fetching favorites:', error);
            } finally {
                setLoading(false);
            }
        }

        getFavorites();
    }, [favorites]);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="flex-1 container-custom py-8 md:py-12">
                <div className="flex items-center gap-2 mb-8">
                    <Link href="/" className="text-gray-500 hover:text-primary flex items-center gap-1">
                        <ArrowLeft className="h-4 w-4" /> Back to Shop
                    </Link>
                </div>

                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-red-50 p-2 rounded-lg">
                        <Heart className="h-6 w-6 text-red-500 fill-red-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Your Favorites</h1>
                    <span className="text-gray-400 text-lg font-medium ml-2">({favorites.length})</span>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="h-8 w-8 text-primary animate-spin mb-4" />
                        <p className="text-gray-500">Loading your favorites...</p>
                    </div>
                ) : products.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                        <div className="bg-gray-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="h-10 w-10 text-gray-300" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">No favorites yet</h2>
                        <p className="text-gray-500 mb-8">Click the heart icon on any product to save it here for later.</p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                        >
                            Discover Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
