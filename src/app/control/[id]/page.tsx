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
                <div className='xl:w-2/5 w-full'>
                    <CCTV robotData={robotData} />
                </div>
                <div className='xl:w-3/5 w-full'>
                    <ModeComponent robotData={robotData} />
                </div>
            </div>

        </section>
    )
}

export default Control
