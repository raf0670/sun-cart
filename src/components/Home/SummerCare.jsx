import React from 'react';
import { Droplets, Sun, Wind, ArrowRight } from 'lucide-react';

const SummerCare = () => {
    const tips = [
        {
            title: "Hydration is Key",
            description: "Drink at least 3 liters of water daily to maintain skin elasticity and energy levels during high heat.",
            icon: <Droplets className="size-6 text-blue-500" />,
            gradient: "from-blue-50 to-indigo-50",
            tag: "Vital"
        },
        {
            title: "SPF is Non-Negotiable",
            description: "Apply broad-spectrum SPF 50+ every 2 hours, even if you are under the shade or it's slightly cloudy.",
            icon: <Sun className="size-6 text-orange-500" />,
            gradient: "from-orange-50 to-rose-50",
            tag: "Protection"
        },
        {
            title: "Wear Breathable Fabrics",
            description: "Opt for light-colored linen or organic cotton to allow your skin to breathe and reduce heat rashes.",
            icon: <Wind className="size-6 text-teal-500" />,
            gradient: "from-teal-50 to-emerald-50",
            tag: "Comfort"
        }
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
                        ☀️ Summer <span className="bg-linear-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Care Tips</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Stay glowing and healthy all season long with our expert-approved summer wellness guide.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {tips.map((tip, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-3xl p-8 bg-linear-to-br ${tip.gradient} border border-white shadow-sm transition hover:shadow-md hover:-translate-y-1 duration-300`}
                        >
                            {/* Icon & Tag */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="rounded-2xl bg-white p-3 shadow-sm">
                                    {tip.icon}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-white/50 px-3 py-1 rounded-full border border-white">
                                    {tip.tag}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {tip.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 mb-6">
                                {tip.description}
                            </p>

                            <button className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:gap-3 transition-all">
                                Learn More <ArrowRight className="size-4 text-orange-500" />
                            </button>

                            <div className="absolute -right-4 -bottom-4 size-24 bg-white/20 rounded-full blur-2xl" />
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-3xl bg-[#0a0a0b] p-8 md:p-12 overflow-hidden relative">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Want personalized advice?</h3>
                            <p className="text-gray-400">Join our newsletter for weekly summer wellness routines.</p>
                        </div>
                        <button className="whitespace-nowrap rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 px-8 py-4 text-sm font-bold text-white shadow-xl hover:brightness-110 transition">
                            Subscribe Now
                        </button>
                    </div>

                    <div className="absolute top-0 right-0 size-64 bg-purple-600/20 blur-[100px]" />
                    <div className="absolute bottom-0 left-0 size-64 bg-orange-600/10 blur-[100px]" />
                </div>
            </div>
        </section>
    );
};

export default SummerCare;