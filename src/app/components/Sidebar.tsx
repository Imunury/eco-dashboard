'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';


const Sidebar: React.FC = () => {
    const pathname = usePathname() || '';
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: '/all_map', icon: '/icon_rm.png', label: 'Robot Map', match: '/all_map' },
        { href: '/tracking_map/ecobot00006', icon: '/icon_tm.png', label: 'Track Map', match: '/tracking_map' },
        { href: '/control/ecobot00006', icon: '/icon_control.png', label: 'Control', match: '/control' },
        { href: '/cctv', icon: '/icon_cctv.png', label: 'CCTV', match: '/cctv' },
        { href: '/water_quality', icon: '/icon_wq.png', label: 'Quality', match: '/water_quality' },
        { href: '/waterlevel/ecobot00006', icon: '/icon_wl.png', label: 'Water Level', match: '/waterlevel' },
        { href: '/han/ecobot00006', icon: '/icon_weather.png', label: 'Weather', match: '/han' },
        { href: '/waterdepth/ecobot00003', icon: '/icon_wd.png', label: 'Water Depth', match: '/waterdepth' },
    ];

    return (
        <>
            {/* ✅ 데스크탑 사이드바 */}
            <nav className="sidebar_box ">
                <nav className="sidebar">
                    <Image src="/ecopeace_logo.png" width={150} height={100} alt="Logo" className="pb-4" />
                    {menuItems.map(({ href, icon, label, match }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`pt-5 flex items-center gap-2 px-2 ${pathname.startsWith(match || href) ? 'bg-blue-600' : ''}`}
                        >
                            <Image src={icon} width={30} height={30} alt={label} />
                            <h5>{label}</h5>
                        </Link>
                    ))}
                </nav>
            </nav>

            {/* ✅ 모바일 메뉴 토글 버튼 */}
            <div className="xl:hidden p-2 flex justify-between items-center bg-gradient-radial from-blue-950 to-blue-900 text-white">
                <Image src="/ecopeace_logo.png" width={120} height={80} alt="Logo" />
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-xl px-2">
                    ☰
                </button>
            </div>

            {/* ✅ 모바일 드롭다운 메뉴 with Framer Motion */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="dropdown"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="xl:hidden bg-emerald-700 text-white flex flex-col px-4 py-2 space-y-3 absolute top-[75px] left-0 right-0 z-50 shadow-lg">
                        {menuItems.map(({ href, icon, label, match }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 ${pathname.startsWith(match || href) ? 'bg-blue-600' : ''} p-2 rounded`}
                            >
                                <Image src={icon} width={25} height={25} alt={label} />
                                <span>{label}</span>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
