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
    const [startDate, setStartDate] = useState<string>('');

    const params = useParams();
    const id = params?.id as string | undefined;

    const [markedDates, setMarkedDates] = useState<Date[]>([]);

    useEffect(() => {
        const fetchMarkedDates = async () => {
            const res = await fetch(`/api/depth_date/${id}`);
            const data = await res.json();
            const converted = data.map((item: { date: string }) => new Date(item.date));
            setMarkedDates(converted);

            // Set startDate to the latest marked date if available
            if (converted.length > 0) {
                const latestDate = new Date(Math.max(...converted.map((date: Date) => date.getTime())));
                const formattedDate = latestDate.toISOString().split('T')[0];
                setStartDate(formattedDate);
                fetchData(formattedDate); // Fetch data for the latest date
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
    
    const fetchData = async (startDate: string) => {
        setRobotData(null);
        setRobotDataGroup([]);
        try {
            const [depthResponse, depthGroupResponse] = await Promise.all([
                fetch(`/api/robot_depth/${id}/${startDate}`),
                fetch(`/api/depth_array/${id}/${startDate}`)
            ]);

            if (!depthResponse.ok || !depthGroupResponse.ok) {
                alert('해당 날짜에 대한 수심 데이터가 없습니다.');
                return;
            }

            const data = await depthResponse.json();
            const dataGroup = await depthGroupResponse.json();

            if (!data || (Array.isArray(dataGroup) && dataGroup.length === 0)) {
                alert('해당 날짜에 대한 수심 데이터가 없습니다.');
                return;
            }

            setRobotData(data);
            setRobotDataGroup(dataGroup);
        } catch (error) {
            console.error("Error fetching water depth data:", error);
            alert('데이터를 불러오는 중 오류가 발생했습니다.');
        }
    };

    const handleSubmit = () => {
        if (startDate) {
            fetchData(startDate)
        }
    };

    return (
        <section className='h-full w-full'>
            <div className='absolute z-10 my-3 mx-5 '>

                <DatePicker
                    placeholderText="날짜 선택"
                    selected={startDate ? new Date(startDate) : null}
                    onChange={(date: Date | null) => {
                        if (date) {
                            const newDate = date.toISOString().split('T')[0];
                            setStartDate(newDate);
                            fetchData(newDate); // Automatically fetch data on date change
                        }
                    }}
                    dateFormat="yyyy-MM-dd"
                    dayClassName={(date) =>
                        markedDates.some((d) => d.toDateString() === date.toDateString())
                            ? "marked-day"
                            : ""
                    }
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    wrapperClassName="w-full"
                />
                <div className='mt-4 p-4 bg-white rounded-lg shadow-md'>
                    <h3 className="text-gray-800 text-lg font-semibold mb-3 text-center">수심 범위</h3>
                    <ul className="grid grid-cols-2 gap-3 text-sm">
                        {[{ min: 1.0, max: 3.0, color: 'rgb(0 ,255, 0)', label: '2m' },
                        { min: 3.0, max: 5.0, color: 'rgb(0, 180, 0)', label: '4m' },
                        { min: 5.0, max: 7.0, color: 'rgb(0, 110, 0)', label: '6m' },
                        { min: 7.0, max: 9.0, color: 'rgb(255, 255, 100)', label: '8m' },
                        { min: 9.0, max: 11.0, color: 'rgb(220, 220, 0)', label: '10m' },
                        { min: 11.0, max: 13.0, color: 'rgb(180, 180, 0)', label: '12m' },
                        { min: 13.0, max: 15.0, color: 'rgb(255, 130, 130)', label: '14m' },
                        { min: 15.0, max: 17.0, color: 'rgb(255, 50, 50)', label: '16m' },
                        { min: 17.0, max: 19.0, color: 'rgb(255, 0, 0)', label: '18m' },
                        { min: 19.0, max: 21.0, color: 'rgb(180, 0, 0)', label: '20m' }].map((range, idx) => (
                            <li
                                key={idx}
                                className="flex items-center space-x-2 p-2 rounded-md transition-colors duration-200"
                            >
                                <span
                                    className="inline-block w-5 h-5 rounded-md"
                                    style={{ backgroundColor: range.color }}
                                ></span>
                                <span className="text-gray-700 font-medium">{range.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* <Script src='/marker-clustering.js' strategy="beforeInteractive"> */}
            {isNaverMapLoaded && robotData && robotDataGroup && <NaverMap robotData={robotData} robotDataGroup={robotDataGroup} />}
            {/* </Script> */}
        </section>
    );
}

export default WaterDepth;
