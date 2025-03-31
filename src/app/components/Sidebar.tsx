import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'

const Sidebar: React.FC = () => {
    const pathname = usePathname() || '';  // 현재 URL을 가져오는 useRouter 훅

    return (
        <nav className="sidebar_box">
            <nav className="sidebar">
                <Image
                    src="/ecopeace_logo.png"
                    width={150}
                    height={100}
                    alt="Robot Map Icon"
                />
                <Link href="/" className={`pt-5 ${pathname.startsWith('/tracking_map') ? 'bg-blue-600' : ''}`}>
                <Image
                        src="/icon_rm.png"
                        width={30}
                        height={30}
                        alt="Robot Map Icon"
                    />
                    <h5>Robot Map</h5>
                </Link>
                <Link href="/tracking_map/ecobot00006" className={`pt-5 ${pathname.startsWith('/tracking_map') ? 'bg-blue-600' : ''}`}>
                    <Image
                        src="/icon_tm.png"
                        width={30}
                        height={30}
                        alt="Tracking Map Icon"
                    />
                    <h5>Track Map</h5>
                </Link>
                <Link href="/control/ecobot00006" className={`pt-5 ${pathname.startsWith('/control') ? 'bg-blue-600' : ''}`}>
                    <Image
                        src="/icon_control.png"
                        width={30}
                        height={30}
                        alt="Control Icon"
                    />
                    <h5>Control</h5>
                </Link>
                <Link href="/cctv" className={`pt-5 ${pathname === '/cctv' ? 'bg-blue-600' : ''}`}>
                    <Image
                        src="/icon_cctv.png"
                        width={30}
                        height={30}
                        alt="CCTV Icon"
                    />
                    <h5>CCTV</h5>
                </Link>
                <Link href="/water_quality" className={`pt-5 ${pathname === '/water_quality' ? 'bg-blue-600' : ''}`}>
                    <Image
                        src="/icon_wq.png"
                        width={30}
                        height={30}
                        alt="Water Quality Icon"
                    />
                    <h5>Quality</h5>
                </Link>
                <Link href="/waterlevel/ecobot00006" className={`pt-5 ${pathname.startsWith('/waterlevel') ? 'bg-blue-600' : ''}`}>
                    <Image
                        src="/icon_wl.png"
                        width={30}
                        height={30}
                        alt="Water Level Icon"
                    />
                    <h5>Water Level</h5>
                </Link>
                <Link href="/han/ecobot00006" className={`pt-5 ${pathname.startsWith('/han') ? 'bg-blue-600' : ''}`}>
                    <Image
                        src="/icon_weather.png"
                        width={30}
                        height={30}
                        alt="Weather Icon"
                    />
                    <h5>Weather</h5>
                </Link>

            </nav>
        </nav>
    );
};

export default Sidebar;
