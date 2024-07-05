// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="h-screen w-96 bg-gray-800 text-white flex flex-col">
            <div className="p-4">
                <h1 className="text-2xl font-bold">My App</h1>
            </div>
            <nav className="mt-10 flex flex-col space-y-2">
                <Link href="/">
                    Home
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
