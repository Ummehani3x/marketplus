import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Promotion {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

export function Hero({ mainPromo }: { mainPromo: Promotion }) {
    if (!mainPromo) return null;

    return (
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
            <Image
                src={mainPromo.image}
                alt={mainPromo.title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 flex h-full flex-col justify-center p-8 sm:p-16 text-white max-w-xl">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                    {mainPromo.title}
                </h1>
                <p className="mb-8 text-lg font-medium text-gray-200">
                    {mainPromo.description}
                </p>
                <Link
                    href={mainPromo.link}
                    className="group flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-gray-100 hover:gap-3"
                >
                    Shop Now
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
