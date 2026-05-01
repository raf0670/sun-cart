import { Eye, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductIntroCard = ({ product }) => {
    return (
        <div key={product.id} className="group animate__animated animate__backInLeft relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-xl">

            <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-gray-900 shadow-sm">
                    Trending
                </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{product.brand}</span>
                    <div className="flex items-center gap-1">
                        <Star className="size-3 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                    </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-1">
                    {product.name}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                    <p className="text-2xl font-black text-gray-900">
                        ${product.price}
                    </p>

                    <Link href={`http://localhost:3000/products/${product.id}`} className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-linear-to-r hover:from-indigo-500 hover:to-orange-400 active:scale-95 shadow-md">
                        <Eye className="size-4" />
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductIntroCard;