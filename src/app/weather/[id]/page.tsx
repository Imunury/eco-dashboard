"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ecobot_status_temp } from '@prisma/client';

const Weather: React.FC = () => {

    const [robotData, setRobotData] = useState<ecobot_status_temp | null>(null);

    const params = useParams();
    const id = params?.id as string | undefined;

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

    return (

        <section className='h-full w-full'>
            <h1>{id}</h1>
        </section>
    )
}

export default Weather;