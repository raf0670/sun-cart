"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Edit3, Mail, User } from 'lucide-react';

const Profile = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user);

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6 bg-white">
            <div className="w-full max-w-md animate__animated animate__fadeInUp">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-2xl shadow-indigo-100/50">
                    <div className="absolute -right-10 -top-10 size-40 rounded-full bg-orange-500/10 blur-3xl" />
                    <div className="absolute -left-10 -bottom-10 size-40 rounded-full bg-indigo-500/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-6">
                            <div className="size-32 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-100">
                                {user?.image ? (
                                    <Image src={user.image} alt={user.name} width={1000} height={1000} className="h-full w-full object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-indigo-50 text-indigo-300">
                                        <User size={48} />
                                    </div>
                                )}
                            </div>
                            <div className="absolute -bottom-2 -right-2 rounded-xl bg-[#0a0a0b] p-2 text-white shadow-lg">
                                <Camera size={16} />
                            </div>
                        </div>

                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">{user?.name || "Guest User"}</h2>
                        <div className="mt-2 flex items-center gap-2 text-gray-400">
                            <Mail size={14} />
                            <span className="text-sm font-medium">{user?.email}</span>
                        </div>

                        <div className="mt-8 grid w-full grid-cols-2 gap-4 rounded-2xl bg-gray-50 p-4">
                            <div className="text-center">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</p>
                                <p className="text-sm font-bold text-emerald-600">Verified</p>
                            </div>
                            <div className="text-center border-l border-gray-200">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Member Since</p>
                                <p className="text-sm font-bold text-gray-700">2026</p>
                            </div>
                        </div>

                        <Link href="/my-profile/update" className="mt-8 w-full">
                            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0a0a0b] py-4 text-sm font-black text-white transition-all hover:bg-linear-to-r hover:from-indigo-600 hover:to-orange-500 shadow-xl active:scale-95">
                                <Edit3 size={18} />
                                Update Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;