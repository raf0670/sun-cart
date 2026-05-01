import React from 'react';
import { Star, Eye } from 'lucide-react';
import Image from 'next/image';
import ProductIntroCard from '../shared/ProductIntroCard';

const products = [
    {
        "id": 1,
        "name": "Polarized Aviator Sunglasses",
        "brand": "SunShade",
        "price": 25,
        "rating": 4.8,
        "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
    },
    {
        "id": 10,
        "name": "Floral Summer Dress",
        "brand": "Bloom",
        "price": 55,
        "rating": 4.8,
        "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800",
    },
    {
        "id": 8,
        "name": "Insulated Water Bottle",
        "brand": "HydroPeak",
        "price": 28,
        "rating": 4.9,
        "image": "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

const PopularProducts = () => {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                        🔥 <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Popular Products</span>
                    </h2>
                    <a href="/products" className="text-sm font-bold text-indigo-600 hover:text-orange-500 transition">
                        View All Products &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductIntroCard product={product} key={product.id}></ProductIntroCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;