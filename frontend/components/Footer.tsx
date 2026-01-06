import Link from 'next/link';

export function Footer() {
    return (
        <footer className="mt-20 border-t bg-gray-50 pt-16 pb-8 text-sm text-gray-600">
            <div className="container-custom grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                <div>
                    <h4 className="mb-4 font-bold text-gray-900">About MarketPlus</h4>
                    <ul className="space-y-2">
                        <li><Link href="/info/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                        <li><Link href="/info/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link href="/info/press" className="hover:text-primary transition-colors">Press</Link></li>
                        <li><Link href="/info/impact" className="hover:text-primary transition-colors">Impact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 font-bold text-gray-900">Support</h4>
                    <ul className="space-y-2">
                        <li><Link href="/info/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                        <li><Link href="/info/safety" className="hover:text-primary transition-colors">Safety</Link></li>
                        <li><Link href="/info/selling" className="hover:text-primary transition-colors">Selling</Link></li>
                        <li><Link href="/info/buying" className="hover:text-primary transition-colors">Buying</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 font-bold text-gray-900">Legal</h4>
                    <ul className="space-y-2">
                        <li><Link href="/info/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        <li><Link href="/info/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/info/cookies" className="hover:text-primary transition-colors">Cookie Settings</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 font-bold text-gray-900">Subscribe</h4>
                    <p className="mb-4 text-xs">Get the latest deals and updates.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button className="rounded-md bg-primary px-4 py-2 text-white font-bold hover:bg-teal-800 transition-colors">Go</button>
                    </div>
                </div>
            </div>
            <div className="container-custom mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
                <p>© 2026 MarketPlus, Inc.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                    <a href="#" className="hover:text-primary transition-colors">Facebook</a>
                </div>
            </div>
        </footer>
    );
}
