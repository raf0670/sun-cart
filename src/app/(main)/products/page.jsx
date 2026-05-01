import ProductIntroCard from '@/components/shared/ProductIntroCard';
import { getPosts } from '@/data/data';
import React from 'react';

const AllProducts = async () => {
    const products = await getPosts();

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

export default AllProducts;