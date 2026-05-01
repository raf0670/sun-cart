import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0b] text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                    <div className='flex flex-col justify-center items-center'>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                            Contact Us
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center gap-3 text-gray-300">
                                <MapPin className="size-5 text-purple-500" />
                                <span className="text-sm">Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="size-5 text-pink-500" />
                                <span className="text-sm">+880 1234 567 890</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail className="size-5 text-orange-500" />
                                <span className="text-sm">suncart@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-center md:items-center">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                            Follow Our Journey
                        </h3>
                        <div className="mt-4 flex gap-5">
                            <a href="#" className="p-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 hover:bg-linear-to-br hover:from-indigo-500 hover:via-purple-500 hover:to-orange-400 hover:text-white transition-all duration-300">
                                <FaFacebook className="size-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 hover:bg-linear-to-br hover:from-indigo-500 hover:via-purple-500 hover:to-orange-400 hover:text-white transition-all duration-300">
                                <FaInstagram className="size-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 hover:bg-linear-to-br hover:from-indigo-500 hover:via-purple-500 hover:to-orange-400 hover:text-white transition-all duration-300">
                                <FaTwitter className="size-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 hover:bg-linear-to-br hover:from-indigo-500 hover:via-purple-500 hover:to-orange-400 hover:text-white transition-all duration-300">
                                <FaGithub className="size-5" />
                            </a>
                        </div>
                    </div>

                    <div className="md:text-right flex flex-col justify-center items-center">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                            Legal
                        </h3>
                        <nav className="mt-4 flex flex-col gap-2 text-center">
                            <a href="#" className="text-sm text-gray-300 hover:text-purple-600 transition">Privacy Policy</a>
                            <a href="#" className="text-sm text-gray-300 hover:text-purple-600 transition">Terms of Service</a>
                            <a href="#" className="text-sm text-gray-300 hover:text-purple-600 transition">Cookie Policy</a>
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} YourStore. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-400">Powered by</span>
                        <span className="text-xs font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
                            Sun Cart
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;