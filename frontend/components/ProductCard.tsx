'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/context/AppContext';

interface ProductProps {
    id: string;
    title: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    category: string;
    isDeal?: boolean;
}

export function ProductCard({ product }: { product: ProductProps }) {
    const { toggleFavorite, favorites, addToCart } = useAppContext();
    const isFavorite = favorites.includes(product.id);

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const handleFavorite = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(product.id);
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
        });
    };

    return (
        <div
            className="group relative flex flex-col rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block h-full overflow-hidden"
        >
            <Link href={`/product/${product.id}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Badges */}
                    <div className="absolute left-2 top-2 flex flex-col gap-1">
                        {product.isDeal && (
                            <span className="rounded-md bg-red-500 px-2 py-1 text-[10px] font-bold text-white shadow-sm">
                                DEAL
                            </span>
                        )}
                        {discount > 0 && (
                            <span className="rounded-md bg-green-500 px-2 py-1 text-[10px] font-bold text-white shadow-sm">
                                -{discount}%
                            </span>
                        )}
                    </div>

                    {/* Favorite Button */}
                    <button
                        onClick={handleFavorite}
                        className={cn(
                            "absolute right-2 top-2 rounded-full p-1.5 shadow-sm transition-all duration-300 hover:scale-110",
                            isFavorite
                                ? "bg-red-50 text-red-500 opacity-100"
                                : "bg-white/90 text-gray-500 opacity-0 group-hover:opacity-100 hover:text-red-500"
                        )}
                    >
                        <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-center gap-1 mb-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-500">{product.rating}</span>
                    </div>

                    <h3 className="line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-primary min-h-[40px]">
                        {product.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-gray-900">
                                ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                                <span className="text-xs text-gray-400 line-through">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            )}
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                            title="Add to cart"
                        >
                            <Plus className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
