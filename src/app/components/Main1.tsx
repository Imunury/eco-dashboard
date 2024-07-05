"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const NaverMap = dynamic(() => import('./NaverMap'), { ssr: false });
const RobotData = dynamic(() => import('../components/RobotData'), { ssr: false });

interface Location {
    robot_id: string;
    latitude: number;
    longitude: number;
    timestamp: string;
}

const Main1: React.FC = () => {

    const [locations, setLocations] = useState<Location[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    const fetchData = async () => {
        const response = await fetch('/api/location');
        const data = await response.json();
        setLocations(data);
    };

    const handleMarkerClick = (location: Location) => {
        setSelectedLocation(location);
    };

    useEffect(() => {
        fetchData(); // 처음 로딩 시 데이터 가져오기

        const interval = setInterval(() => {
            fetchData();
        }, 1000);

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    return (
        <div>
            <section className='flex flex-row h-full w-full'>
                <div className='h-full w-2/5 p-24'>
                    <RobotData locations={selectedLocation ? [selectedLocation] : []} />
                </div>
                <div className='h-screen w-3/5'>
                    <NaverMap locations={locations} onMarkerClick={handleMarkerClick} />
                </div>
            </section>
        </div>
    )
}

export default Main1