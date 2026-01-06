'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { InfoPageLayout } from '@/components/InfoPageLayout';

const INFO_PAGES: Record<string, { title: string; content: React.ReactNode }> = {
    about: {
        title: 'About MarketPlus',
        content: (
            <>
                <p>MarketPlus is the world&apos;s most vibrant marketplace for unique and creative goods. We connect a community of sellers with buyers looking for something special.</p>
                <p>Founded in 2024, our mission is to empower independent creators and small businesses by providing them with a platform to reach global audiences.</p>
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Community First:</strong> We believe in the power of human connection and support our sellers every step of the way.</li>
                    <li><strong>Authenticity:</strong> We celebrate uniqueness and craftsmanship in every product.</li>
                    <li><strong>Impact:</strong> We strive to create a positive social and environmental impact through conscious commerce.</li>
                </ul>
            </>
        ),
    },
    careers: {
        title: 'Careers',
        content: (
            <>
                <p>Join a team that is redefining the future of commerce. At MarketPlus, we work together to build a marketplace that works for everyone.</p>
                <h2>Why Work With Us?</h2>
                <ul>
                    <li>Remote-friendly culture</li>
                    <li>Competitive compensation and benefits</li>
                    <li>Opportunities for growth and learning</li>
                    <li>Inclusive and diverse work environment</li>
                </ul>
                <p>Check out our open positions in Engineering, Design, Product, and Marketing.</p>
            </>
        ),
    },
    press: {
        title: 'Press',
        content: (
            <>
                <p>Get the latest news, announcements, and media assets from MarketPlus.</p>
                <h2>Media Contact</h2>
                <p>For press inquiries, please contact: <code>press@marketplus.com</code></p>
                <h2>Recent News</h2>
                <ul>
                    <li>MarketPlus hits 1 million active sellers milestone - Dec 2025</li>
                    <li>New sustainability initiative launched for eco-friendly packaging - Oct 2025</li>
                </ul>
            </>
        ),
    },
    impact: {
        title: 'Impact',
        content: (
            <>
                <p>We are committed to making a difference. Learn more about our social and environmental impact initiatives.</p>
                <ul>
                    <li><strong>Carbon Neutrality:</strong> We offset 100% of carbon emissions from shipping.</li>
                    <li><strong>Local Communities:</strong> We support local artisans through specialized training and tools.</li>
                    <li><strong>Diversity & Inclusion:</strong> We actively promote underrepresented sellers on our platform.</li>
                </ul>
            </>
        ),
    },
    help: {
        title: 'Help Center',
        content: (
            <>
                <p>Search for answers or browse our most popular topics.</p>
                <h2>Popular Topics</h2>
                <ul>
                    <li>Track your order</li>
                    <li>Returns & Exchanges</li>
                    <li>Buying on MarketPlus</li>
                    <li>Selling on MarketPlus</li>
                </ul>
                <p>Can&apos;t find what you&apos;re looking for? <a href="#" className="text-primary underline">Contact Support</a></p>
            </>
        ),
    },
    safety: {
        title: 'Safety',
        content: (
            <>
                <p>Your safety and security are our top priorities. Learn how we protect our community.</p>
                <ul>
                    <li><strong>Secure Payments:</strong> We use industry-standard encryption to protect your financial data.</li>
                    <li><strong>Buyer Protection:</strong> Shop with confidence knowing we have your back on every purchase.</li>
                    <li><strong>Scam Prevention:</strong> Learn how to spot and avoid common online marketplace scams.</li>
                </ul>
            </>
        ),
    },
    terms: {
        title: 'Terms of Service',
        content: (
            <>
                <p>Last Updated: January 2026</p>
                <p>By using MarketPlus, you agree to these terms. Please read them carefully.</p>
                <h2>1. Account Usage</h2>
                <p>You must be at least 18 years old to create an account and use our services.</p>
                <h2>2. Buying & Selling</h2>
                <p>Sellers are responsible for the accuracy of their listings. Buyers are responsible for reviewing product details before purchase.</p>
            </>
        ),
    },
    privacy: {
        title: 'Privacy Policy',
        content: (
            <>
                <p>We value your privacy. This policy explains how we collect, use, and protect your personal information.</p>
                <h2>Data Collection</h2>
                <p>We collect information you provide to us, such as your name, email, and shipping address, to process orders and improve your experience.</p>
            </>
        ),
    },
    cookies: {
        title: 'Cookie Settings',
        content: (
            <>
                <p>We use cookies to improve your browsing experience and analyze our traffic.</p>
                <ul>
                    <li><strong>Essential Cookies:</strong> Required for the site to function properly.</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
                    <li><strong>Marketing Cookies:</strong> Used to show you relevant advertisements.</li>
                </ul>
            </>
        ),
    },
    selling: {
        title: 'Selling on MarketPlus',
        content: (
            <>
                <p>Turn your passion into a business. Open your shop on MarketPlus today.</p>
                <h2>Why Sell Here?</h2>
                <ul>
                    <li>Low transaction fees</li>
                    <li>Access to millions of buyers</li>
                    <li>Easy-to-use seller tools</li>
                </ul>
            </>
        ),
    },
    buying: {
        title: 'Buying on MarketPlus',
        content: (
            <>
                <p>Discover unique items from sellers around the world. Here&apos;s how to shop safely.</p>
                <ul>
                    <li>Search and filter for the perfect find</li>
                    <li>Check seller ratings and reviews</li>
                    <li>Secure checkout with multiple payment options</li>
                </ul>
            </>
        ),
    },
};

export default function InfoPage() {
    const { slug } = useParams() as { slug: string };
    const pageData = INFO_PAGES[slug];

    if (!pageData) {
        notFound();
    }

    return (
        <InfoPageLayout title={pageData.title}>
            {pageData.content}
        </InfoPageLayout>
    );
}
