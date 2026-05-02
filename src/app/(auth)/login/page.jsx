"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginSubmit = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        });
    };

    return (
        <div className="min-h-screen bg-amber-0 flex items-center justify-center p-4 sm:p-8">
            <div className="bg-white rounded-4xl overflow-hidden shadow-2xl w-full max-w-5xl flex flex-col md:flex-row animate__animated animate__zoomIn">

                <div className="hidden md:flex md:w-1/2 bg-[#0a0a0b] relative p-12 flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 right-0 size-64 bg-purple-600/20 blur-[100px]" />
                    <div className="absolute bottom-0 left-0 size-64 bg-orange-600/20 blur-[100px]" />

                    <div className="relative z-10">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                            SUN <span className="text-orange-500">CART</span>
                        </Link>
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-4xl font-black text-white leading-tight mb-4">
                            Welcome back <br />
                            to the <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">Golden Hour.</span>
                        </h1>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Access your personalized summer collection and track your recent orders.
                        </p>
                    </div>

                    <div className="relative z-10 flex gap-4 text-xs text-gray-500 font-medium">
                        <span>© 2026 SunsetStore</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>

                <div className="flex-1 p-8 sm:p-12 lg:p-16 bg-white">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-2xl font-black text-gray-900 mb-2">Login</h2>
                        <p className="text-gray-500 text-sm mb-8">Enter your credentials to access your account.</p>

                        <form className="space-y-5" onSubmit={handleSubmit(handleLoginSubmit)}>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    <input
                                        {...register("email", { required: "Please input your email to log in!" })}
                                        type="email"
                                        placeholder="user@domain.com"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                                    />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Password</label>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    <input
                                        {...register("password", { required: "Password is Required!" })}
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                                    />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>
                            </div>

                            <button className="w-full bg-[#0a0a0b] text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 group hover:bg-linear-to-r hover:from-indigo-600 hover:to-orange-500 transition-all duration-500 shadow-xl shadow-black/10 active:scale-[0.98]">
                                Sign In
                                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-gray-400 font-medium">Or continue with</span></div>
                        </div>

                        <div className="">
                            <button onClick={handleGoogleSignIn} className="flex items-center w-full justify-center gap-2 border border-gray-100 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm font-bold text-gray-700">
                                <FaGoogle className="size-4 text-blue-500" /> Google
                            </button>
                        </div>

                        <p className="mt-8 text-center text-sm text-gray-500">
                            Don&apos;t have an account? {' '}
                            <Link href="/register" className="font-bold text-indigo-600 hover:text-orange-500 transition-colors">
                                Create one now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;