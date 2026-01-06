'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingCart, User, Heart, Menu, LogOut, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/context/AppContext';
import { useState } from 'react';

export function Navbar() {
    const { user, setUser, cart, favorites, searchQuery, setSearchQuery } = useAppContext();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container-custom flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110">
                        M
                    </div>
                    <span className="text-xl font-bold tracking-tight text-primary hidden xs:inline">Market Plus</span>
                </Link>

                {/* Search Bar - Hidden on mobile, shown on md+ */}
                <form onSubmit={handleSearch} className="hidden md:flex flex-1 items-center justify-center px-8">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search for anything..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-4 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 hover:shadow-sm"
                        />
                        <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-primary p-1.5 text-white hover:bg-teal-800 transition-colors">
                            <Search className="h-4 w-4" />
                        </button>
                    </div>
                </form>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link href="/favorites" className="hidden sm:flex flex-col items-center justify-center gap-0.5 text-gray-600 hover:text-primary transition-colors relative">
                        <Heart className={cn("h-6 w-6", favorites.length > 0 && "fill-red-500 text-red-500")} />
                        {favorites.length > 0 && (
                            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                                {favorites.length}
                            </span>
                        )}
                        <span className="text-[10px] font-medium">Favorites</span>
                    </Link>

                    <Link href="/cart" className="flex flex-col items-center justify-center gap-0.5 text-gray-600 hover:text-primary transition-colors relative">
                        <ShoppingCart className="h-6 w-6" />
                        {cartCount > 0 && (
                            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                        <span className="hidden sm:inline text-[10px] font-medium">Cart</span>
                    </Link>

                    {user ? (
                        <div className="group relative">
                            <button className="flex flex-col items-center justify-center gap-0.5 text-gray-600 hover:text-primary transition-colors">
                                <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <span className="text-[10px] font-medium max-w-[50px] truncate">{user.name}</span>
                            </button>
                            <div className="absolute right-0 top-full mt-2 hidden group-hover:block w-48 bg-white border rounded-lg shadow-xl py-1 z-50">
                                <div className="px-4 py-2 border-b text-xs text-gray-500">{user.email}</div>
                                <button
                                    onClick={() => setUser(null)}
                                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                >
                                    <LogOut className="h-4 w-4" /> Sign Out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link href="/signin" className="flex flex-col items-center justify-center gap-0.5 text-gray-600 hover:text-primary transition-colors">
                            <User className="h-6 w-6" />
                            <span className="text-[10px] font-medium">Sign In</span>
                        </Link>
                    )}

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-600"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Search & Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 animate-in slide-in-from-top duration-300">
                    <form onSubmit={handleSearch} className="relative w-full mb-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-4 pr-10 text-sm focus:border-primary focus:outline-none"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Search className="h-4 w-4 text-gray-400" />
                        </button>
                    </form>
                    <div className="flex flex-col gap-3">
                        <Link href="/favorites" className="flex items-center gap-3 text-gray-600 p-2 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <Heart className="h-5 w-5" /> Favorites
                        </Link>
                        <Link href="/cart" className="flex items-center gap-3 text-gray-600 p-2 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <ShoppingCart className="h-5 w-5" /> Cart ({cartCount})
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
