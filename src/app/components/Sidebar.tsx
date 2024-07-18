// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <nav className="w-1/6 bg-gray-800 text-white flex flex-col">
            <nav className="m-10 flex flex-col space-y-2">
                <Link href="/">
                    Robot Map
                </Link>
                <Link href="/tracking_map/ecobot00001">
                    Tracking Map
                </Link>
                <Link href="/control/ecobot00001">
                    ECOBOT control
                </Link>
                <Link href="/cctv">
                    CCTV
                </Link>
            </nav>
        </nav>
    );
};

export default Sidebar;
