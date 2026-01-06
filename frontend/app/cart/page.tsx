'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useAppContext } from '@/context/AppContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
    const { cart, removeFromCart, updateCartQuantity } = useAppContext();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 15;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="flex-1 container-custom py-8 md:py-12">
                <div className="flex items-center gap-2 mb-8">
                    <Link href="/" className="text-gray-500 hover:text-primary flex items-center gap-1">
                        <ArrowLeft className="h-4 w-4" /> Back to Shop
                    </Link>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

                {cart.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                        <div className="bg-gray-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="h-10 w-10 text-gray-300" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                        >
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-4 items-center">
                                    <div className="relative h-24 w-24 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold text-gray-900 truncate mb-1">{item.title}</h3>
                                        <p className="text-xs text-gray-500 mb-3">Item ID: {item.id}</p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center border rounded-lg">
                                                <button
                                                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                                    className="p-1.5 hover:bg-gray-50 transition-colors"
                                                >
                                                    <Minus className="h-4 w-4 text-gray-500" />
                                                </button>
                                                <span className="px-3 text-sm font-medium w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                                    className="p-1.5 hover:bg-gray-50 transition-colors"
                                                >
                                                    <Plus className="h-4 w-4 text-gray-500" />
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="text-right flex-shrink-0">
                                        <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                        <p className="text-xs text-gray-400">${item.price.toFixed(2)} each</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                    {shipping > 0 && (
                                        <p className="text-[10px] text-gray-400 italic">Add ${(100 - subtotal).toFixed(2)} more for free shipping!</p>
                                    )}
                                    <div className="border-t pt-4 flex justify-between text-lg font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button className="w-full py-4 px-6 border border-transparent rounded-full shadow-md text-white bg-primary hover:bg-primary/90 font-bold text-base transition-all hover:shadow-lg focus:outline-none mb-4">
                                    Checkout Now
                                </button>

                                <p className="text-center text-xs text-gray-400">Secure payments powered by MarketPlus</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
