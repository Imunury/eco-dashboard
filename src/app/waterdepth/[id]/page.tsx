"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { water_quality } from '@prisma/client';
import { GroupedWaterQuality } from '../components/NaverMap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NaverMap = dynamic(() => import('../components/NaverMap'), { ssr: false });

const WaterDepth: React.FC = () => {
    const [isNaverMapLoaded, setIsNaverMapLoaded] = useState(false);
    const [robotData, setRobotData] = useState<water_quality | null>(null);
    const [robotDataGroup, setRobotDataGroup] = useState<GroupedWaterQuality[]>([]);
    const [startDate, setStartDate] = useState<string | null>(null);

    const params = useParams();
    const id = params?.id as string | undefined;

    const [markedDates, setMarkedDates] = useState<Date[]>([]);

    useEffect(() => {
        const fetchMarkedDates = async () => {
            if (id) {
                try {
                    const res = await fetch(`/api/depth_date/${id}`);
                    const data = await res.json();
                    const sortedDates = data
                        .map((item: { date: string }) => new Date(item.date))
                        .sort((a: Date, b: Date) => b.getTime() - a.getTime());
                    
                    setMarkedDates(sortedDates);

                    if (sortedDates.length > 0) {
                        setStartDate(sortedDates[0].toISOString().split('T')[0]);
                    }
                } catch (error) {
                    console.error("Failed to fetch marked dates:", error);
                }
            }
        };
        fetchMarkedDates();
    }, [id]);

    useEffect(() => {
        if (!isNaverMapLoaded) {
            const naverMapScript = document.createElement('script');
            naverMapScript.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY}`;
            naverMapScript.onload = () => {
                if (window.naver && window.naver.maps) {
                    console.log('Naver Map API loaded');
                    setIsNaverMapLoaded(true);
                }
            };
            document.head.appendChild(naverMapScript);
        }
    }, [isNaverMapLoaded]);

    const fetchData = async (date: string) => {
        setRobotData(null);
        setRobotDataGroup([]);
        try {
            const [depthResponse, depthGroupResponse] = await Promise.all([
                fetch(`/api/robot_depth/${id}/${date}`),
                fetch(`/api/depth_array/${id}/${date}`)
            ]);

            if (!depthResponse.ok || !depthGroupResponse.ok) {
                setRobotData(null);
                setRobotDataGroup([]);
                console.log('해당 날짜에 대한 수심 데이터가 없습니다.');
                return;
            }

            const data = await depthResponse.json();
            const dataGroup = await depthGroupResponse.json();

            if (!data || (Array.isArray(dataGroup) && dataGroup.length === 0)) {
                setRobotData(null);
                setRobotDataGroup([]);
                console.log('해당 날짜에 대한 수심 데이터가 없습니다.');
                return;
            }

            setRobotData(data);
            setRobotDataGroup(dataGroup);
        } catch (error) {
            console.error("Error fetching water depth data:", error);
            alert('데이터를 불러오는 중 오류가 발생했습니다.');
        }
    };

    useEffect(() => {
        if (startDate) {
            fetchData(startDate);
        }
    }, [startDate]);

    return (
        <section className='h-full w-full'>
            <div className='absolute z-10 my-3 mx-3 flex-col items-center space-x-4'>
                <DatePicker
                    placeholderText="날짜 선택"
                    selected={startDate ? new Date(startDate) : null}
                    onChange={(date: Date | null) => {
                        if (date) {
                            setStartDate(date.toISOString().split('T')[0]);
                        }
                    }}
                    dateFormat="yyyy-MM-dd"
                    dayClassName={(date) =>
                        markedDates.some((d) => d.toDateString() === date.toDateString())
                            ? "marked-day"
                            : ""
                    }
                />
                <div className='mt-5 w-16 h-24 text-black'>
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
            {isNaverMapLoaded && robotData && robotDataGroup.length > 0 && <NaverMap robotData={robotData} robotDataGroup={robotDataGroup} />}
        </section>
    );
}

export default WaterDepth;
