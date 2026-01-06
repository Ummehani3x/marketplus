const express = require('express');
const cors = require('cors');
const { categories, products, sellers, promotions } = require('./data/seed');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// User Requested & Required Routes (Non-API prefixed)
app.get("/categories", (req, res) => {
    res.json(categories);
});

app.get("/products", (req, res) => {
    const { trending, deal, category, seller } = req.query;
    let filtered = [...products];

    if (trending === 'true') {
        filtered = filtered.filter(p => p.isTrending);
    }
    if (deal === 'true') {
        filtered = filtered.filter(p => p.isDeal);
    }
    if (category) {
        filtered = filtered.filter(p => p.categoryId === category);
    }
    if (seller) {
        filtered = filtered.filter(p => p.sellerId === seller);
    }

    res.json(filtered);
});

app.get("/sellers", (req, res) => {
    res.json(sellers);
});

app.get("/promotions", (req, res) => {
    res.json(promotions);
});

app.get("/deals", (req, res) => {
    // Return products that are deals
    const flashDeals = products.filter(p => p.isDeal);
    res.json(flashDeals);
});

// Original Routes (API prefixed) - kept for backward compatibility if any
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

app.get('/api/products', (req, res) => {
    const { trending, deal, category, seller } = req.query;
    let filtered = [...products];

    if (trending === 'true') {
        filtered = filtered.filter(p => p.isTrending);
    }
    if (deal === 'true') {
        filtered = filtered.filter(p => p.isDeal);
    }
    if (category) {
        filtered = filtered.filter(p => p.categoryId === category);
    }
    if (seller) {
        filtered = filtered.filter(p => p.sellerId === seller);
    }

    res.json(filtered);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
});

app.get('/api/sellers', (req, res) => {
    res.json(sellers);
});

app.get('/api/promotions', (req, res) => {
    res.json(promotions);
});

app.get('/sellers', (req, res) => {
    res.json(sellers);
});

app.get('/promotions', (req, res) => {
    res.json(promotions);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
