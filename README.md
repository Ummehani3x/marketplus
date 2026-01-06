MarketPlus – Full Stack Marketplace App

A modern, responsive e-commerce marketplace application built with Next.js 14 (Frontend) and Express.js (Backend), inspired by platforms like Etsy and Daraz.
The project focuses on premium UI/UX, real-world frontend–backend integration, and dynamic data rendering.

✨ Features

🎨 Modern Design: Premium UI/UX with Tailwind CSS, custom fonts, and smooth transitions.

📱 Mobile Responsive: Fully adaptive layout for all screen sizes.

⚡ Performance: Static and Server-Side Rendering with Next.js App Router.

🛍️ Data Driven: Dynamic content (Categories, Trending Products, Deals, Sellers) served from a backend API.

🔍 Discovery: Category browsing, search bar (UI), and promotional banners.

🧩 Interactive Components: Product cards, hero banners, flash deals, featured sellers, and footer links.

🛠 Tech Stack

Frontend

Framework: Next.js 14 (App Router)

Styling: Tailwind CSS

Icons: Lucide React

Language: TypeScript

Backend

Server: Node.js + Express

Data: In-memory mock database (seeded data)

API: RESTful endpoints

📁 Project Structure

marketplus/
├── backend/          # Express backend
│   ├── data/         # Seeded mock data
│   └── server.js     # Server entry point
├── frontend/         # Next.js frontend
│   ├── app/          # App Router pages
│   ├── components/   # Reusable UI components
│   ├── lib/          # Utilities and API client
│   └── public/       # Static assets
├── screenshots/      # Screenshots of the UI
├── README.md         # Project documentation

🚀 Getting Started

Prerequisites

Node.js (v18+)

npm

1️⃣ Setup Backend
cd backend
npm install
npm run dev


Server runs on: http://localhost:4000

2️⃣ Setup Frontend
cd frontend
npm install
npm run dev


App runs on: http://localhost:3000

🔗 API Endpoints

GET /api/categories → List of product categories

GET /api/products → List of all products (supports trending, deal, category, seller filters)

GET /api/sellers → List of featured sellers

GET /api/promotions → Banner and promotional content

📸 Screenshots

Hero Banner

Categories

Trending Products

Flash Deals

Featured Sellers

Footer

🎯 Purpose & Goals

Simulates real-world remote-job tasks

Focuses on UI/UX excellence, API integration, and responsive design

Demonstrates frontend–backend connectivity and dynamic data handling

Serves as a portfolio-ready project for remote frontend/full-stack positions

👩‍💻 Author

Umme Hani
Frontend / Full-Stack Developer
GitHub: ummehani3x