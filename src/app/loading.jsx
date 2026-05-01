import React from 'react';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
            <div className="relative flex items-center justify-center">
                <div className="absolute size-24 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 opacity-20 blur-2xl animate-pulse" />

                <div className="relative size-16 rounded-full border-4 border-gray-100 border-t-purple-600 animate-spin" />

                <div className="absolute size-4 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
            </div>

            <div className="mt-8 flex flex-col items-center gap-2">
                <h2 className="text-xl font-black tracking-tighter text-gray-900 animate__animated animate__fadeIn animate__infinite">
                    SUNSET<span className="text-orange-500">STORE</span>
                </h2>

                <div className="h-1 w-32 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-full origin-left animate-[loading-bar_1.5s_infinite_ease-in-out] bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-2">
                    Preparing your collection...
                </p>
            </div>
        </div>
    );
}