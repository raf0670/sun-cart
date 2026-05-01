import Link from 'next/link';
import { ArrowLeft, Home, ShoppingBag, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="grid min-h-screen place-items-center bg-[#0a0a0b] px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center animate__animated animate__tada">
                <p className="text-9xl font-black text-white/5 select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter">
                    404
                </p>

                <div className="relative z-10">
                    <p className="text-base font-semibold bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 bg-clip-text text-transparent uppercase tracking-widest">
                        Oops! Page not found
                    </p>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Lost in the sunset?
                    </h1>

                    <p className="mt-6 text-base leading-7 text-gray-400 max-w-md mx-auto">
                        The page you are looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back to the shop so you can find what you need.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 hover:scale-105"
                        >
                            <Home className="size-4" />
                            Back to Home
                        </Link>

                        <Link
                            href="/products"
                            className="flex items-center gap-2 rounded-full bg-gray-900 border border-gray-800 px-8 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-800 hover:text-white"
                        >
                            <ShoppingBag className="size-4" />
                            Browse Shop
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6 border-t border-gray-900 pt-8">
                        <Link href="/search" className="text-xs text-gray-500 hover:text-purple-400 flex items-center gap-1">
                            <Search className="size-3" /> Search Site
                        </Link>
                        <Link href="/contact" className="text-xs text-gray-500 hover:text-orange-400">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}