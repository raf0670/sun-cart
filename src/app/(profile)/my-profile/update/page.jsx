"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ImageIcon, Save, User } from 'lucide-react';

const UpdateProfile = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: session?.user?.name,
            image: session?.user?.image
        }
    });

    const onSubmit = async (data) => {
        console.log("Updating to:", data);
        const {data: UpdatedUser, error} = await authClient.updateUser({
            name: data.name,
            image: data.image
        });

        if (error) {
            console.log(error.message);
        }

        router.push('/my-profile');
        router.refresh();
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6 bg-white">
            <div className="w-full max-w-md animate__animated animate__fadeIn">
                <button
                    onClick={() => router.back()}
                    className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-indigo-600 transition-colors"
                >
                    <ArrowLeft size={16} /> Back
                </button>

                <div className="rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-2xl">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Update Information</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">New Display Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-indigo-500 transition-all"
                                />
                            </div>
                            {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase ml-1">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Photo URL</label>
                            <div className="relative group">
                                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                <input
                                    {...register("image", { required: "Image URL is required" })}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-indigo-500 transition-all"
                                />
                            </div>
                            {errors.image && <p className="text-[10px] text-red-500 font-bold uppercase ml-1">{errors.image.message}</p>}
                        </div>

                        <button className="w-full bg-[#0a0a0b] text-white rounded-2xl py-4 font-black flex items-center justify-center gap-2 hover:bg-linear-to-r hover:from-indigo-600 hover:to-orange-500 transition-all duration-500 mt-4 shadow-xl active:scale-95">
                            <Save size={18} />
                            Update Information
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;