import React from 'react';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

const TopBrands = () => {
    const brands = [
        {
            name: "SunShade",
            tagline: "Premium Eyewear",
            icon: <Zap className="size-5 text-orange-500" />,
            description: "Defining the standard for UV protection and summer style."
        },
        {
            name: "GlowGuard",
            tagline: "Eco-Friendly Skincare",
            icon: <ShieldCheck className="size-5 text-purple-500" />,
            description: "Dermatologist-tested formulas that protect you and the ocean."
        },
        {
            name: "IslandVibe",
            tagline: "Artisan Apparel",
            icon: <Globe className="size-5 text-indigo-500" />,
            description: "Sustainable fabrics inspired by tropical landscapes."
        }
    ];

    return (
        <section className="bg-white py-20 border-t border-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Curated Selection</span>
                        <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
                            Meet Our <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">Top Brands</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-xs text-sm">
                        We partner with brands that prioritize quality, sustainability, and your summer comfort.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center text-center p-10 rounded-2xl border border-gray-100 transition-all duration-500 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/5"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-gray-50 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                                    {brand.icon}
                                </div>

                                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                                    {brand.name}
                                </h3>
                                <p className="mt-1 text-sm font-bold text-orange-500 uppercase tracking-widest">
                                    {brand.tagline}
                                </p>

                                <div className="my-6 h-px w-12 bg-gray-100 mx-auto group-hover:w-24 transition-all duration-500" />

                                <p className="text-sm leading-relaxed text-gray-500 italic">
                                    {brand.description}
                                </p>
                            </div>

                            <button className="relative z-10 mt-8 text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-indigo-600 transition-colors">
                                Explore Items
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopBrands;