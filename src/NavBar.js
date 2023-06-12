import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
            <div>
            <nav class="bg-blue-500">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex-shrink-0">
                        <Link class="text-white font-bold text-xl" to="/">SmoothieDaddi</Link>
                    </div>
                    <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                    <Link class="text-white hover:text-gray-200" to="/">Home</Link>
                    <Link class="text-white hover:text-gray-200" to="/about">About</Link>
                    <Link class="text-white hover:text-gray-200" to="/contact">Contact</Link>
                    </div>
                    </div>
                    </div>
                    </div>
            </nav>
            </div>
    )
}

export default Nav;