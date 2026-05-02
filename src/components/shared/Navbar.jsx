"use client";
import Image from 'next/image';
import React from 'react';
import sunsetLogo from "@/assets/tropicalsunset.png";
import Link from 'next/link';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <header className="shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="flex gap-3 items-center justify-center w-full" href={"/"}>
                            <Image src={sunsetLogo} alt='' width={10} height={10} className='w-full h-full rounded-full'></Image>
                            <h1 className='text-3xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 bg-clip-text text-transparent'>SunCart</h1>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-md font-semibold">
                                <li><NavLink href={"/"}>Home</NavLink></li>
                                <li><NavLink href={"/products"}>Products</NavLink></li>
                                <li><NavLink href={"/my-profile"}>My Profile</NavLink></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        {
                            isPending ?
                                <div className='flex gap-2 justify-end'>
                                    <span className="loading loading-ring loading-xl"></span>
                                    <span className="loading loading-ring loading-xl"></span>
                                    <span className="loading loading-ring loading-xl"></span>
                                    <span className="loading loading-ring loading-xl"></span>
                                    <span className="loading loading-ring loading-xl"></span>
                                </div> :
                                user ?
                                    <div className='flex gap-4 items-center justify-end'>
                                        <Link href={"/my-profile"} className='flex gap-4 items-center justify-end'>
                                            <h2 className='font-semibold hidden sm:block'>{user.name}</h2>
                                            <Image src={user.image} width={30} height={500} alt="" className='w-10 h-12 rounded-full'></Image>
                                        </Link>
                                        <Link
                                            onClick={async () => await authClient.signOut()}
                                            className="group relative hidden sm:inline-block p-0.5 rounded-md bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400"
                                            href={"/login"}
                                        >
                                            <span className="block rounded-md bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition group-hover:bg-transparent group-hover:text-white">
                                                Sign Out
                                            </span>
                                        </Link>
                                    </div> :
                                    <div className="sm:flex sm:gap-4">
                                        <Link
                                            className="rounded-md bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:brightness-110 hover:shadow-purple-500/25"
                                            href={"/login"}
                                        >
                                            Login
                                        </Link>

                                        <div className="hidden sm:flex">
                                            <Link
                                                className="group relative inline-block p-0.5 rounded-md bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400"
                                                href={"/register"}
                                            >
                                                <span className="block rounded-md bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition group-hover:bg-transparent group-hover:text-white">
                                                    Register
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                        }

                        <div className="dropdown dropdown-end block md:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><NavLink href={"/"}>Home</NavLink></li>
                                <li><NavLink href={"/products"}>Products</NavLink></li>
                                <li><NavLink href={"/my-profile"}>My Profile</NavLink></li>
                                {
                                    session? 
                                    <li><Link
                                        onClick={async () => await authClient.signOut()}
                                        className=""
                                        href={"/login"}
                                    >
                                        <span className="">
                                            Sign Out
                                        </span>
                                    </Link></li> : <li></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;