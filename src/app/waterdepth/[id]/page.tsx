"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { water_quality } from '@prisma/client';
import { start } from 'repl';

const NaverMap = dynamic(() => import('../components/NaverMap'), { ssr: false });

const WaterDepth: React.FC = () => {
    const [isNaverMapLoaded, setIsNaverMapLoaded] = useState(false);
    const [robotData, setRobotData] = useState<water_quality | null>(null);
    const [startDate, setStartDate] = useState<string>("");

    const params = useParams();
    const id = params?.id as string | undefined;

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

    const fetchData = async (startDate: string) => {
        try {
            const depthResponse = await fetch(
                `/api/robot_depth/${id}/${startDate}`
            );

            if (!depthResponse.ok) {
                throw new Error("데이터 요청 실패");
            }

            const data = await depthResponse.json();
            console.log(data)
            setRobotData(data); // Wrap single object in array
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleSubmit = () => {
        if (startDate) {
            fetchData(startDate)
        }
    };

    return (
        <section className='h-full w-full'>
            <div className='absolute z-10'>
                <input
                    className="m-3 relative"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {isNaverMapLoaded && robotData && <NaverMap robotData={robotData} />}
        </section>
    );
}

export default WaterDepth;
