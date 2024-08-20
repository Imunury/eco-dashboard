// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

interface SidebarProps {
    toggleTheme: () => void;
    theme: 'light' | 'dark';
}

const Sidebar: React.FC<SidebarProps> = ({ toggleTheme, theme }) => {
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
            <button
                onClick={toggleTheme}
                className='w-1/5 border-none bg-white rounded-md self-center'
            >
                {theme === 'light' ? (
                    <img
                        src="/dark-mode.png"
                        alt="Dark Mode"
                        width={40}
                        height={40}
                    />
                ) : (
                    <img
                        src="/light-mode.png"
                        alt="Light Mode"
                        width={40}
                        height={40}
                    />
                )}
            </button>
        </nav>
    );
};

export default Sidebar;
