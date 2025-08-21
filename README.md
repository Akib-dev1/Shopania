# Shopania

A simple e-commerce demo built with **Next.js 15 (App Router)** and **NextAuth.js**.  
The app features both public and protected pages with basic authentication.

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