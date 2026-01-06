'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface InfoPageLayoutProps {
    title: string;
    children: React.ReactNode;
}

export function InfoPageLayout({ title, children }: InfoPageLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1 container-custom py-12 md:py-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">{title}</h1>
                    <div className="prose prose-teal max-w-none text-gray-600 leading-relaxed space-y-6">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
