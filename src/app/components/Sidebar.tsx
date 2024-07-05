// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="h-screen w-1/6 bg-gray-800 text-white flex flex-col">
            <nav className="m-10 flex flex-col space-y-2">
                <Link href="/">
                    Robot Map
                </Link>
                <Link href="/water_quality">
                    Water Quality
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
