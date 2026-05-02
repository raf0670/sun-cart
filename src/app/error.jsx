"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, Home, RefreshCcw } from 'lucide-react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error("Critical UI Error:", error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6 bg-white">
            <div className="max-w-md w-full text-center animate__animated animate__fadeIn">

                <div className="relative mb-8 inline-flex items-center justify-center">
                    <div className="absolute inset-0 size-24 bg-orange-500/20 blur-3xl rounded-full animate-pulse" />
                    <div className="relative size-20 rounded-3xl bg-orange-50 flex items-center justify-center border-2 border-orange-100">
                        <AlertCircle className="size-10 text-orange-500" />
                    </div>
                </div>

                <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-3">
                    Something went <span className="text-orange-500">wrong</span>
                </h1>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 px-4">
                    The sun set a little too early on this page. Our team has been notified, but you can try refreshing or heading back home.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => reset()}
                        className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#0a0a0b] py-4 px-6 text-sm font-black text-white transition-all hover:bg-linear-to-r hover:from-indigo-600 hover:to-orange-500 shadow-xl active:scale-95"
                    >
                        <RefreshCcw className="size-4" />
                        Try Again
                    </button>

                    <Link href="/" className="flex-1">
                        <button className="w-full flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-100 py-4 px-6 text-sm font-black text-gray-700 transition-all hover:bg-gray-50 active:scale-95">
                            <Home className="size-4" />
                            Return Home
                        </button>
                    </Link>
                </div>

                {/* {process.env.NODE_ENV === 'development' && (
                    <div className="mt-12 p-4 rounded-xl bg-red-50 border border-red-100 text-left">
                        <p className="text-[10px] font-bold uppercase text-red-400 mb-2 tracking-widest">Developer Note:</p>
                        <p className="text-xs font-mono text-red-600 wrap-break-word">
                            {error?.message || "Unknown Error Occurred"}
                        </p>
                    </div>
                )} */}
            </div>
        </div>
    );
}