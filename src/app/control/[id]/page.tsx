"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { ecobot_status_temp } from '@prisma/client';

import ONOFF from '../components/ONOFF'
import RobotInfo from '../components/RobotInfo'
import CCTV from '../components/CCTV'
import ModeControl from '../components/ModeControl'
import SolarCharge from '../components/SolarCharge';
import ModeInfo from '../components/ModeInfo';
import Motor from '../components/Motor';

const Control: React.FC = () => {

    const params = useParams();
    const id = params?.id as string | undefined
    const [robotData, setRobotData] = useState<ecobot_status_temp | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                try {
                    const response = await fetch(`/api/robot_status/${id}`);
                    const data = await response.json();
                    setRobotData(data);
                } catch (error) {
                    console.error("Failed to fetch data:", error);
                }
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 5000);

        return () => clearInterval(intervalId);
    }, [id]);

    if (!robotData) {
        return <p>Loading...</p>;
    }

    return (
        <section className='flex flex-col'>

            <div className='flex flex-row w-full h-24 my-3'>
                <div className='w-1/6 h-full bg-yellow-200 mx-3'>
                    <ONOFF robotData={robotData} />
                </div>
                <div className='w-5/6 h-full bg-yellow-200 mx-3'>
                    <RobotInfo robotData={robotData} />
                </div>
            </div>

            <div className='flex flex-row w-full h-24 my-3'>
                <div className='w-2/6 h-full bg-yellow-200 mx-3'>
                    <ModeControl robotData={robotData} />
                </div>
                <div className='w-4/6 h-full bg-yellow-200 mx-3'>
                    <SolarCharge robotData={robotData} />
                </div>
            </div>

            <div className='flex flex-row w-full h-64 my-3'>
                <div className='w-1/3 h-full bg-yellow-200 mx-3'>
                    <CCTV robotData={robotData} />
                </div>
                <div className='w-2/3 h-full bg-yellow-200 mx-3'>
                    <ModeInfo robotData={robotData} />
                </div>
            </div>

            <div className='flex flex-row w-full h-60 my-3'>
                <div className='w-1/3 h-full bg-yellow-200 mx-3'>
                    <Motor robotData={robotData} />
                </div>
                <div>

                </div>
            </div>

        </section>
    )
}

export default Control
