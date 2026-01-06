const categories = [
    {
        id: 'cat_electronics',
        name: 'Electronics',
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=600',
        subcategories: ['Smartphones', 'Laptops', 'Audio', 'Wearables']
    },
    {
        id: 'cat_fashion',
        name: 'Fashion',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=300&h=300',
        subcategories: ['Men', 'Women', 'Kids', 'Accessories']
    },
    {
        id: 'cat_home',
        name: 'Home & Living',
        image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=300&h=300',
        subcategories: ['Decor', 'Kitchen', 'Bedding', 'Furniture']
    },
    {
        id: 'cat_beauty',
        name: 'Beauty',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600',
        subcategories: ['Skincare', 'Makeup', 'Fragrances']
    }
];

const sellers = [
    {
        id: 'sel_tech_heaven',
        name: 'Tech Heaven',
        rating: 4.9,
        reviews: 12050,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TechHeaven'
    },
    {
        id: 'sel_fashion_hub',
        name: 'Fashion Hub',
        rating: 4.7,
        reviews: 8500,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FashionHub'
    },
    {
        id: 'sel_urban_decor',
        name: 'Urban Decor',
        rating: 4.8,
        reviews: 3200,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=UrbanDecor'
    },
    {
        id: 'sel_glam_store',
        name: 'Glam Store',
        rating: 4.6,
        reviews: 5400,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GlamStore'
    }
];

const products = [
    {
        id: 'prod_1',
        title: 'Ultra-Slim Wireless Noise Cancelling Headphones',
        price: 299.99,
        originalPrice: 349.99,
        discount: 14,
        rating: 4.8,
        reviews: 450,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
        categoryId: 'cat_electronics',
        sellerId: 'sel_tech_heaven',
        isTrending: true,
        isDeal: false
    },
    {
        id: 'prod_2',
        title: 'Minimalist Analog Watch with Leather Strap',
        price: 129.50,
        originalPrice: 199.00,
        discount: 35,
        rating: 4.9,
        reviews: 890,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
        categoryId: 'cat_fashion',
        sellerId: 'sel_fashion_hub',
        isTrending: true,
        isDeal: true
    },
    {
        id: 'prod_3',
        title: 'Ergonomic Office Chair with Lumbar Support',
        price: 249.00,
        originalPrice: 249.00,
        discount: 0,
        rating: 4.5,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600',
        categoryId: 'cat_home',
        sellerId: 'sel_urban_decor',
        isTrending: false,
        isDeal: false
    },
    {
        id: 'prod_4',
        title: 'Organic Vitamin C Face Serum',
        price: 24.99,
        originalPrice: 35.00,
        discount: 28,
        rating: 4.7,
        reviews: 1200,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600',
        categoryId: 'cat_beauty',
        sellerId: 'sel_glam_store',
        isTrending: true,
        isDeal: true
    },
    {
        id: 'prod_5',
        title: '4K Smart DSLR Camera Professional Kit',
        price: 899.00,
        originalPrice: 1200.00,
        discount: 25,
        rating: 4.9,
        reviews: 340,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600',
        categoryId: 'cat_electronics',
        sellerId: 'sel_tech_heaven',
        isTrending: false,
        isDeal: true
    },
    {
        id: 'prod_6',
        title: 'Vintage Denim Jacket',
        price: 79.99,
        originalPrice: 79.99,
        discount: 0,
        rating: 4.3,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80&w=600',
        categoryId: 'cat_fashion',
        sellerId: 'sel_fashion_hub',
        isTrending: true,
        isDeal: false
    },
    {
        id: 'prod_7',
        title: 'Modern Geometric Table Lamp',
        price: 45.00,
        originalPrice: 60.00,
        discount: 25,
        rating: 4.6,
        reviews: 88,
        image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600',
        categoryId: 'cat_home',
        sellerId: 'sel_urban_decor',
        isTrending: false,
        isDeal: true
    },
    {
        id: 'prod_8',
        title: 'Mechanical Gaming Keyboard RGB',
        price: 110.00,
        originalPrice: 150.00,
        discount: 26,
        rating: 4.8,
        reviews: 2300,
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=600',
        categoryId: 'cat_electronics',
        sellerId: 'sel_tech_heaven',
        isTrending: true,
        isDeal: true
    }
];

const promotions = [
    {
        id: 'promo_1',
        title: 'Winter Sale',
        description: 'Up to 40% off on Winter Collection',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200',
        link: '/category/cat_fashion'
    },
    {
        id: 'promo_2',
        title: 'Tech Upgrade',
        description: 'Latest gadgets at unbeatable prices',
        image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1200',
        link: '/category/cat_electronics'
    }
];

module.exports = { categories, products, sellers, promotions };
