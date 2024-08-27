// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <nav className="w-1/6 bg-emerald-600 text-white flex flex-col">
            <nav className="m-10 flex flex-col space-y-2">
                <h1 className=''>ECOBOT Dashboard</h1>
                <Link href="/" className='pt-10'>
                    <h2 className=''>🟡 Robot Map</h2>
                </Link>
                <Link href="/tracking_map/ecobot00001" className='pt-5'>
                    <h2 className=''>🟢 Tracking Map</h2>
                </Link>
                <Link href="/control/ecobot00001" className='pt-5'>
                    <h2 className=''>🔵 Robot Control</h2>
                </Link>
                <Link href="/cctv" className='pt-5'>
                    <h2 className=''>🟣 CCTV</h2>
                </Link>
                <Link href="/water_quality" className='pt-5'>
                    <h2 className=''>🟠 Water Quality</h2>
                </Link>
            </nav>
        </nav>
    );
};

export default Sidebar;
