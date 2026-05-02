"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, Mail, ShieldCheck, User, UserPlus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegisterSubmit = async (data) => {
        const { name, photo, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        },
            {
                onSuccess: () => {
                    router.push("/");
                }
            }
        );

        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
            <div className="bg-white rounded-4xl overflow-hidden shadow-2xl w-full max-w-6xl flex flex-col md:flex-row-reverse animate__animated animate__fadeInUp">

                <div className="hidden md:flex md:w-5/12 bg-[#0a0a0b] relative p-12 flex-col justify-center overflow-hidden">
                    <div className="absolute top-1/4 right-0 size-80 bg-indigo-600/20 blur-[120px]" />
                    <div className="absolute bottom-1/4 left-0 size-80 bg-orange-600/20 blur-[120px]" />

                    <div className="relative z-10 text-center">
                        <div className="inline-flex p-4 rounded-3xl bg-white/5 backdrop-blur-xl mb-8 border border-white/10 animate__animated animate__pulse animate__infinite">
                            <UserPlus className="size-10 text-orange-500" />
                        </div>
                        <h1 className="text-4xl font-black text-white leading-tight mb-6">
                            Join the <br />
                            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">Sun Cart Cult.</span>
                        </h1>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                            Create an account to unlock exclusive summer deals, faster checkout, and personalized recommendations.
                        </p>
                    </div>
                </div>

                <div className="flex-1 p-8 sm:p-12 lg:p-16 bg-white">
                    <div className="max-w-md mx-auto">
                        <Link href="/" className="md:hidden block mb-8 text-xl font-black tracking-tighter text-gray-900">
                            SUNSET<span className="text-orange-500">STORE</span>
                        </Link>

                        <h2 className="text-3xl font-black text-gray-900 mb-2">Create Account</h2>
                        <p className="text-gray-500 text-sm mb-8">Start your journey with us today.</p>

                        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterSubmit)}>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    <input
                                        {...register("name", { required: "Name is Required!" })}
                                        type="text"
                                        placeholder="Your Full Name"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                                    />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Photo URL</label>
                                <div className="relative group">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    <input
                                        {...register("photo", { required: "Photo URL is Required!" })}
                                        type="text"
                                        placeholder="Photo URL"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                                    />
                                    {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    <input
                                        {...register("email", { required: "Email is Required!" })}
                                        type="email"
                                        placeholder="user@domain.com"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                                    />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    <input
                                        {...register("password", { required: "Password is Required!" })}
                                        type="password"
                                        placeholder="Create a strong password"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                                    />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>
                            </div>

                            <button className="w-full bg-[#0a0a0b] text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 group hover:bg-linear-to-r hover:from-indigo-600 hover:to-orange-500 transition-all duration-500 shadow-xl shadow-black/10 active:scale-[0.98] mt-8">
                                Create Account
                                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-sm text-gray-500">
                                Already have an account? {' '}
                                <Link href="/login" className="font-bold text-indigo-600 hover:text-orange-500 transition-colors">
                                    Login here
                                </Link>
                            </p>

                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                <ShieldCheck className="size-3 text-emerald-500" />
                                Secure Signup
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;