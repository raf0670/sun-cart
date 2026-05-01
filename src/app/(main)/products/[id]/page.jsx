import React from 'react';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getProduct } from '@/data/data';

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = await getProduct(id);

    return (
        <div className="min-h-screen">
            <nav className="p-6">
                <Link href={"/products"} className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors">
                    <ArrowLeft className="size-4" /> Back to Collection
                </Link>
            </nav>

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    <div className="flex-1 animate__animated animate__fadeInLeft">
                        <div className="group relative aspect-square overflow-hidden rounded-[2.5rem] bg-gray-100 border border-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={10000}
                                height={10000}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-6 right-6 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-black uppercase tracking-widest text-gray-900 shadow-xl">
                                {product.category}
                            </div>
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="flex-1 flex flex-col animate__animated animate__fadeInRight">
                        <div className="mb-6">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">{product.brand}</span>
                            <h1 className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                                {product.name}
                            </h1>

                            <div className="mt-4 flex items-center gap-4">
                                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
                                    <Star className="size-4 fill-amber-400 text-amber-400" />
                                    <span className="text-sm font-black text-amber-700">{product.rating}</span>
                                </div>
                                <span className="text-sm text-gray-400">|</span>
                                <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                    {product.stock} units in stock
                                </span>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-gray-600 mb-8">
                            {product.description}
                        </p>

                        <div className="mb-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Price</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black text-gray-900">${product.price}</span>
                                <span className="text-lg font-medium text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            {/* <div className="flex items-center justify-between border-2 border-gray-100 rounded-2xl p-2 min-w-35">
                                <button className="size-10 rounded-xl hover:bg-gray-50 flex items-center justify-center font-bold text-xl">-</button>
                                <span className="font-black text-lg">0</span>
                                <button className="size-10 rounded-xl hover:bg-gray-50 flex items-center justify-center font-bold text-xl">+</button>
                            </div> */}

                            <button className="flex-1 flex items-center justify-center gap-3 rounded-2xl bg-[#0a0a0b] text-white px-8 py-4 font-black transition-all hover:bg-linear-to-r hover:from-indigo-600 hover:to-orange-500 hover:shadow-2xl hover:shadow-indigo-500/20 active:scale-95">
                                <ShoppingCart className="size-5" />
                                Add to Cart
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600"><Truck className="size-5" /></div>
                                <span className="text-[10px] font-bold uppercase text-gray-500">Fast Shipping</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-50 rounded-xl text-purple-600"><RefreshCcw className="size-5" /></div>
                                <span className="text-[10px] font-bold uppercase text-gray-500">Easy Returns</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-50 rounded-xl text-orange-600"><ShieldCheck className="size-5" /></div>
                                <span className="text-[10px] font-bold uppercase text-gray-500">Secure Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProductDetails;