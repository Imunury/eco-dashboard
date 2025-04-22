"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { water_quality } from '@prisma/client';
import { start } from 'repl';
import { GroupedWaterQuality } from '../components/NaverMap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Script from 'next/script';

const NaverMap = dynamic(() => import('../components/NaverMap'), { ssr: false });

const WaterDepth: React.FC = () => {
    const [isNaverMapLoaded, setIsNaverMapLoaded] = useState(false);
    const [robotData, setRobotData] = useState<water_quality | null>(null);
    const [robotDataGroup, setRobotDataGroup] = useState<GroupedWaterQuality[]>([]);
    const [startDate, setStartDate] = useState<string>("");

    const params = useParams();
    const id = params?.id as string | undefined;

    const [markedDates, setMarkedDates] = useState<Date[]>([]);

    useEffect(() => {
        const fetchMarkedDates = async () => {
            const res = await fetch(`/api/depth_date/${id}`);
            const data = await res.json();
            const converted = data.map((item: { date: string }) => new Date(item.date));
            setMarkedDates(converted);
        };
        fetchMarkedDates();
    }, [id]);

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

            const depthGroupResponse = await fetch(
                `/api/depth_array/${id}/${startDate}`
            );

            if (!depthResponse.ok) {
                throw new Error("데이터 요청 실패");
            }

            if (!depthGroupResponse.ok) {
                throw new Error("데이터 요청 실패");
            }

            const data = await depthResponse.json();
            const dataGroup = await depthGroupResponse.json();
            setRobotData(data);
            setRobotDataGroup(dataGroup);
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
            <div className='absolute z-10 my-1 mx-3 '>

                <DatePicker
                    placeholderText="날짜 선택"
                    selected={startDate ? new Date(startDate) : new Date("2024-12-04")}
                    onChange={(date: Date | null) => {
                        if (date) {
                            setStartDate(date.toISOString().split('T')[0])
                        }
                    }}
                    dateFormat="yyyy-MM-dd"
                    dayClassName={(date) =>
                        markedDates.some((d) => d.toDateString() === date.toDateString())
                            ? "marked-day"
                            : ""
                    }
                />


                <button onClick={handleSubmit}>Submit</button>
                <div className='w-16 h-24 text-black'>
                    <div style={{ backgroundColor: 'rgb(0, 255, 0)' }}>2m</div>
                    <div style={{ backgroundColor: 'rgb(0, 180, 0)' }}>4m</div>
                    <div style={{ backgroundColor: 'rgb(0, 110, 0)' }}>6m</div>
                    <div style={{ backgroundColor: 'rgb(255, 255, 84)' }}>8m</div>
                    <div style={{ backgroundColor: 'rgb(255, 255, 0)' }}>10m</div>
                    <div style={{ backgroundColor: 'rgb(200, 200, 0)' }}>12m</div>
                    <div style={{ backgroundColor: 'rgb(255, 130, 130)' }}>14m</div>
                    <div style={{ backgroundColor: 'rgb(255, 50, 50)' }}>16m</div>
                    <div style={{ backgroundColor: 'rgb(255, 0, 0)' }}>18m</div>
                    <div style={{ backgroundColor: 'rgb(180, 0, 0)' }}>20m</div>
                </div>
            </div>
            {/* <Script src='/marker-clustering.js' strategy="beforeInteractive"> */}
            {isNaverMapLoaded && robotData && robotDataGroup && <NaverMap robotData={robotData} robotDataGroup={robotDataGroup} />}
            {/* </Script> */}
        </section>
    );
}

export default WaterDepth;
