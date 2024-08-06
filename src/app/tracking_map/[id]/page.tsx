"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const TrackingMap = dynamic(() => import('../components/TrackingMap'), { ssr: false });

import type { RobotAll } from '../../index';

const RobotMap: React.FC = () => {

    const [robotAll, setRobotall] = useState<RobotAll[]>([]);
    const [isNaverMapLoaded, setIsNaverMapLoaded] = useState(false);

    const fetchData = async () => {
        try {
            const allResponse = await fetch('/api/robot_all');
            const robot_all = await allResponse.json();
            setRobotall(robot_all);
        } catch (error) {
            console.error('Failed to fetch data', error);
        }
    };

    useEffect(() => {
        fetchData(); // 처음 로딩 시 데이터 가져오기

        const interval = setInterval(() => {
            fetchData();
        }, 60000);

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    useEffect(() => {
        if (!isNaverMapLoaded) {
            const naverMapScript = document.createElement('script');
            naverMapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY}`;
            naverMapScript.onload = () => {
                if (window.naver && window.naver.maps) {
                    console.log('Naver Map API loaded');
                    setIsNaverMapLoaded(true);
                }
            };
            document.head.appendChild(naverMapScript);
        }
    }, [isNaverMapLoaded]);

    return (
        <section className='h-full w-full'>
            {/* {isNaverMapLoaded && <TrackingMap />} */}
        </section>
    )
}

export default RobotMap