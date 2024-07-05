"use client"

import dynamic from 'next/dynamic';
import TrackingMap from './components/TrackingMap';
import { useEffect, useState } from 'react';
import { Location } from '../index';

const Home: React.FC = () => {

    const [locations, setLocations] = useState<Location[]>([]);

    const fetchData = async () => {
        const response = await fetch('/api/ecobot_status');
        const data = await response.json();
        setLocations(data);
    };

    useEffect(() => {
        fetchData(); // 처음 로딩 시 데이터 가져오기

        const interval = setInterval(() => {
            fetchData();
        }, 10000);

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    return (
        <main className='h-screen w-screen'>
            <TrackingMap locations={locations} />
        </main>
    );
};

export default Home;
