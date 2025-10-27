"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { ecobot_status_temp } from '@prisma/client';

import ONOFF from '../components/ONOFF'
import RobotInfo from '../components/RobotInfo'
import CCTV from '../components/CCTV'
import SolarCharge from '../components/SolarCharge';
import Pump from '../components/Pump';
import ModeComponent from '../components/ModeComponent';

const Control: React.FC = () => {

    const params = useParams();
    const id = params?.id as string | undefined
    const [robotData, setRobotData] = useState<ecobot_status_temp | null>(null);

    useEffect(() => {
        const fetchData = async () => {
                        if (id) {
                try {
                    const response = await fetch(`/api/robot_status/${id}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    // 데이터가 배열이고, 비어있지 않은지 확인합니다.
                    if (Array.isArray(data) && data.length > 0) {
                        setRobotData(data[0]);
                    } else {
                        // 로봇을 찾지 못한 경우 또는 데이터가 없는 경우
                        setRobotData(null);
                        console.warn("Robot data not found or empty for id:", id);
                    }
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

    return (
        <section className='control'>

            <div className='xl:h-48 h-full'>
                <div className='xl:w-1/6 w-full'>
                    <ONOFF robotData={robotData} />
                </div>
                <div className='xl:w-5/6 w-full'>
                    <RobotInfo robotData={robotData} />
                </div>
            </div>

            <div className='xl:h-48 h-full'>
                <div className='xl:w-2/5 w-full'>
                    <Pump robotData={robotData} />
                </div>

                <div className='xl:w-3/5 w-full'>
                    <SolarCharge robotData={robotData} />
                </div>
            </div>

            <div className='xl:h-96 h-full'>
                <div className='xl:w-2/5 w-full h-full'>
                    <CCTV robotData={robotData} />
                </div>
                <div className='xl:w-3/5 w-full h-full'>
                    <ModeComponent robotData={robotData} />
                </div>
            </div>

        </section>
    )
}

export default Control
