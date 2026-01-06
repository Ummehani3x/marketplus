# MarketPlus - Full Stack Marketplace App

A modern, responsive e-commerce marketplace application built with **Next.js 14** (Frontend) and **Express.js** (Backend).

## Features

- 🎨 **Modern Design**: Premium UI/UX with Tailwind CSS, custom fonts, and smooth transitions.
- 📱 **Mobile Responsive**: Fully adaptive layout for all screen sizes.
- ⚡ **Performance**: Static and Server-Side Rendering with Next.js App Router.
- 🛍️ **Data Driven**: Dynamic content (Categories, Trending Products, Deals, Sellers) served from a backend API.
- 🔍 **Discovery**: Category browsing, search bar (UI), and promotional banners.

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

### Backend
- **Server**: Node.js + Express
- **Data**: In-memory mock database (seeded data)
- **API**: RESTful endpoints

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### 1. Setup Backend
The backend serves the product and category data.

```bash
cd backend
npm install
npm run dev
```
*Server runs on `http://localhost:4000`*

### 2. Setup Frontend
The frontend consumes the backend API.

```bash
cd frontend
npm install
npm run dev
```
*App runs on `http://localhost:3000`*

## API Endpoints

- `GET /api/categories`: List of product categories.
- `GET /api/products`: List of all products (supports filtering by `trending`, `deal`, `category`, `seller`).
- `GET /api/sellers`: List of featured sellers.
- `GET /api/promotions`: Banner and promotional content.

## Project Structure

```
├── backend/
│   ├── data/           # Seeded mock data
│   └── server.js       # Express server entry point
└── frontend/
    ├── app/            # Next.js App Router pages
    ├── components/     # Reusable UI components
    ├── lib/            # Utilities and API client
    └── public/         # Static assets
```
