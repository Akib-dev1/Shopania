# Shopania

A simple e-commerce demo built with **Next.js 15 (App Router)** and **NextAuth.js**.  
The app features both public and protected pages with basic authentication, allowing users to browse products publicly while restricting product management actions to authenticated users only.  

Visitors can explore the **Landing Page** with a modern layout, view the **Product List** with key details like name, description, and price, and click into **Product Details** pages without needing to sign in. For returning or registered users, the app supports authentication via **Google OAuth** or simple credentials using **NextAuth**, redirecting them to the product area after login.  

Once signed in, users gain access to a **protected dashboard** where they can add new products through a clean form. Newly added products are stored in the database, while mock products remain available for public browsing. This setup demonstrates how to combine **Next.js App Router**, **NextAuth**, and **Prisma with SQLite** to create a realistic small-scale e-commerce experience that balances public content and secure management features.  

The project serves as a starter template or learning resource for developers who want to understand the fundamentals of authentication, route protection, API routes, and database integration in a modern **Next.js 15** application.

🔗 **Live Demo**: [https://shopania.vercel.app](https://shopania.vercel.app)

---

## ✨ Features

- **Landing Page (/)**  
  Includes Navbar, Hero, Product Highlights, and Footer.  
  Publicly accessible.

- **Login Page (/login)**  
  Authentication using **NextAuth** (Google OAuth or credentials).  
  Redirects to `/products` after login.

- **Products List (/products)**  
  Publicly accessible list of products (mock data + database).  

- **Product Details (/products/[id])**  
  Publicly accessible details for each product.

- **Add Product (/dashboard/add-product)**  
  **Protected page** — only accessible when logged in.  
  Provides a form to add new products to the database.

---

## 🚀 Setup & Installation

1. **Clone repository**

```bash
git clone <your-repo-url> shopania
cd shopania