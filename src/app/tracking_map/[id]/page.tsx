"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import type { ecobot_status_temp } from '../../../../generated/client';
const TrackingMap = dynamic(() => import('../components/TrackingMap'), { ssr: false });

const RobotMap: React.FC = () => {

    const [isNaverMapLoaded, setIsNaverMapLoaded] = useState(false);

    const params = useParams();
    const id = params?.id as string | undefined
    const [robotData, setRobotData] = useState<ecobot_status_temp | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                try {
                    const response = await fetch(`/api/robot_status/${id}`);
                    const data = await response.json();
                    setRobotData(data[0]);
                } catch (error) {
                    console.error("Failed to fetch data:", error);
                }
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId);
    }, [id]);

    if (!robotData) {
        return <p>Loading...</p>;
    }

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
            {isNaverMapLoaded && <TrackingMap robotData={robotData} />}
        </section>
    )
}

export default RobotMap;
