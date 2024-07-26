"use client"

import dynamic from 'next/dynamic';
import TrackingMap from '../components/TrackingMap';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import type { ecobot_status_temp } from '@prisma/client';

const Home: React.FC = () => {

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

        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId);
    }, [id]);

    if (!robotData) {
        return <p>Loading...</p>;
    }

    return (
        <section className='h-full w-full'>
            <TrackingMap robotData={robotData} />
        </section>
    );
};

export default Home;
