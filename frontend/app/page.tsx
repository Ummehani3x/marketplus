import { fetchCategories, fetchProducts, fetchPromotions, fetchSellers } from '@/lib/api';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { CategoryList } from '@/components/CategoryList';
import { ProductCard } from '@/components/ProductCard';
import { ArrowRight, TrendingUp, Zap, Store } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every minute

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>;
}) {
  const { search, category: categoryFilter } = await searchParams;

  // Parallel data fetching
  const categoriesData = fetchCategories();
  const promotionsData = fetchPromotions();
  const sellersData = fetchSellers();

  // Base products fetch - we'll filter locally for complexity/simplicity balance
  const allProductsData = fetchProducts();

  const [categories, allProducts, promotions, sellers] = await Promise.all([
    categoriesData,
    allProductsData,
    promotionsData,
    sellersData,
  ]);

  // Filtering logic
  let filteredProducts = allProducts;
  if (search) {
    const query = search.toLowerCase();
    filteredProducts = allProducts.filter((p: any) =>
      p.title.toLowerCase().includes(query) ||
      p.categoryId.toLowerCase().includes(query)
    );
  }

  const trending = filteredProducts.filter((p: any) => p.isTrending);
  const deals = filteredProducts.filter((p: any) => p.isDeal);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <main className="container-custom py-8 space-y-16">
        {search ? (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 border-b pb-4">
              <h1 className="text-3xl font-bold text-gray-900">
                Search Results for &quot;{search}&quot;
              </h1>
              <p className="text-gray-500 mt-2">{filteredProducts.length} items found</p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {filteredProducts.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-gray-300">
                <div className="text-5xl mb-4">🔍</div>
                <h2 className="text-xl font-bold text-gray-900">No results found</h2>
                <p className="text-gray-500 mt-2">Try different keywords or browse our categories.</p>
                <Link href="/" className="mt-6 inline-block text-primary font-bold hover:underline">
                  Clear search
                </Link>
              </div>
            )}
          </section>
        ) : (
          <>
            {/* Hero Section */}
            <section>
              <Hero mainPromo={promotions[0]} />
            </section>

            {/* Categories */}
            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
                <Link href="/categories" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <CategoryList categories={categories} />
            </section>

            {/* Trending Products */}
            <section>
              <div className="mb-6 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {trending.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* Deals */}
            <section className="rounded-2xl bg-gradient-to-br from-indigo-900 to-purple-800 p-8 text-white">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  <h2 className="text-2xl font-bold">Flash Deals</h2>
                </div>
                <Link href="/deals" className="text-sm font-medium text-indigo-100 hover:text-white hover:underline">
                  See all deals
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {deals.slice(0, 5).map((product: any) => (
                  <ProductCard key={product.id} product={{ ...product, isDeal: true }} />
                ))}
              </div>
            </section>

            {/* Featured Sellers */}
            <section>
              <div className="mb-6 flex items-center gap-2">
                <Store className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Featured Sellers</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {sellers.map((seller: any) => (
                  <div key={seller.id} className="flex flex-col items-center justify-center rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-3 h-16 w-16 overflow-hidden rounded-full border border-gray-100">
                      <img src={seller.avatar} alt={seller.name} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="font-bold text-gray-900">{seller.name}</h3>
                    <p className="text-xs text-gray-500">{seller.reviews} reviews · {seller.rating} ★</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
