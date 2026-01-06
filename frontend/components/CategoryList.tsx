import Link from 'next/link';
import Image from 'next/image';

interface Category {
    id: string;
    name: string;
    image: string;
    subcategories: string[];
}

export function CategoryList({ categories }: { categories: Category[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
                <Link
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className="group relative overflow-hidden rounded-xl aspect-[4/3] w-full"
                >
                    <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-lg font-bold text-white group-hover:underline decoration-2 underline-offset-4">
                            {cat.name}
                        </h3>
                        <p className="text-xs text-gray-300 line-clamp-1">
                            {cat.subcategories.join(', ')}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
