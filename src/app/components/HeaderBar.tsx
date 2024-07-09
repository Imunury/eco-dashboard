// src/components/HeaderBar.tsx
import React from 'react';
import Link from 'next/link';

const HeaderBar = () => {
    return (
        <header className="h-16 bg-gray-900 text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
                <Link href="/">
                    ECOBOT dashboard
                </Link>
            </div>
        </header>
    );
};

export default HeaderBar;
