"use client"

import dynamic from 'next/dynamic';
import TrackingMap from '../components/TrackingMap';
import { useEffect, useState } from 'react';
import { Location } from '../../index';
import { useParams } from 'next/navigation';
import type { ecobot_status_temp } from '@prisma/client';

const Home: React.FC = () => {

    const [locations, setLocations] = useState<Location[]>([]);

    const params = useParams();
    const id = params?.id as string | undefined
    const [robotData, setRobotData] = useState<ecobot_status_temp | null>(null);

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

    useEffect(() => {
        const naverMapScript = document.createElement('script');
        naverMapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY}`;
        naverMapScript.onload = () => {
            if (window.naver && window.naver.maps) {
                console.log('Naver Map API loaded');
            }
        };
        document.head.appendChild(naverMapScript);
    })

    return (
        <section className='h-full w-full'>
            <TrackingMap locations={locations} />
        </section>
    );
};

export default Home;
