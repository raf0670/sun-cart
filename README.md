# 🌅 SunsetStore 

**Live URL:** [https://sun-cart-sandy.vercel.app/](https://sun-cart-sandy.vercel.app/)

## 📖 Purpose
**SunsetStore** is a premium e-commerce platform designed to deliver a seamless and high-end shopping experience. Built for the "Golden Hour," the project focuses on cinematic UI transitions, robust authentication, and high-performance state management. It serves as a full-stack showcase of modern web development using the latest Next.js and React ecosystems.

---

## ✨ Key Features

- 🏎️ **Bleeding Edge Performance**: Powered by **Next.js 16** and **React 19** for server-side excellence.
- 🔐 **Secure Identity**: Comprehensive authentication via **Better-Auth** with MongoDB integration.
- 🛡️ **Protected Ecosystem**: Intelligent **Middleware** that secures user profiles while keeping product browsing public.
- 🎨 **Deep Sunset UI**: A custom-designed aesthetic using **Tailwind 4** and **DaisyUI 5**, featuring a signature Indigo-to-Orange gradient system.
- ⚡ **Dynamic Commerce**: Fully dynamic product routing (`/products/[id]`) with total price calculation and stock management.
- 🌀 **Cinematic Transitions**: Entrance and interaction animations powered by **Animate.css**.
- 🛠️ **Refined Forms**: Lightweight, uncontrolled form handling with **React Hook Form**.

---

## 📦 Tech Stack & NPM Packages

### Core Framework
- `next@16.2.4`: React framework for the web.
- `react@19.2.4` & `react-dom@19.2.4`: The latest core library.

### Backend & Database
- `better-auth`: Modern authentication framework.
- `@better-auth/mongo-adapter`: Seamless MongoDB integration for auth.
- `mongodb`: Official driver for database connectivity.
- `json-server`: Mock API for product data management.

### Styling & UI
- `tailwindcss@4`: Next-generation utility-first CSS.
- `daisyui@5.5.19`: High-quality component library.
- `animate.css`: Cross-browser CSS animations.
- `lucide-react` & `react-icons`: Comprehensive icon sets.
- `react-toastify`: Elegant user notifications.

### Utilities
- `react-hook-form`: Performance-focused form validation.
- `@gravity-ui/uikit`: Additional UI components and layout helpers.

---

## 🛠️ Local Development

1. **Clone & Install**:<br>
    Clone the repository and install the necessary dependencies:
    ```bash
    git clone [https://github.com/raf0670/sun-cart.git](https://github.com/raf0670/sun-cart.git)
    npm install

2. **Environment Setup**:<br>
    Create a `.env.local` file in the root directory and add your credentials:
    ```bash
    MONGODB_URI=your_mongodb_connection_string
    BETTER_AUTH_SECRET=your_better_auth_secret
    BETTER_AUTH_URL=http://localhost:3000

3. **Running the Project**
    Launch the development server:
    ```bash
    npm run dev