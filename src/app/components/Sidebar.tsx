// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <nav className="w-1/6 bg-gray-800 text-white flex flex-col">
            <nav className="m-10 flex flex-col space-y-2">
                <h1 className='text-emerald-500'>ECOBOT Dashboard</h1>
                <Link href="/">
                    Robot Map
                </Link>
                <Link href="/tracking_map/ecobot00001">
                    Tracking Map
                </Link>
                <Link href="/control/ecobot00001">
                    Robot Control
                </Link>
                <Link href="/cctv">
                    CCTV
                </Link>
                <Link href="/water_quality">
                    Water Quality
                </Link>
            </nav>
        </nav>
    );
};

export default Sidebar;
