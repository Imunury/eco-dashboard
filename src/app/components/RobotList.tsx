'use client'

import { ecobot_status_temp } from '@prisma/client';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const RobotList: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname() || '';

    const params = useParams();
    const id = params?.id as string | undefined

    const [robotList, setRobotList] = useState<ecobot_status_temp[]>([]);
    const [selectedRobotId, setSelectedRobotId] = useState<string | undefined>(id);

    useEffect(() => {

        setSelectedRobotId(id)

        const fetchData = async () => {
            try {
                const response = await fetch('/api/ecobot_list');
                const data = await response.json();
                setRobotList(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 10000);

        return () => clearInterval(intervalId);
    }, [params]);

    const handleRobotClick = (robotId: string) => {
        setSelectedRobotId(robotId);
        if (pathname.startsWith('/control')) {
            router.push(`/control/${robotId}`);
        } else if (pathname.startsWith('/tracking_map')) {
            router.push(`/tracking_map/${robotId}`);
        } else if (pathname.startsWith('/cctv')) {
            router.push(`/cctv/${robotId}`);
        } else if (pathname.startsWith('/han')) {
            router.push(`/han/${robotId}`);
        } else if (pathname.startsWith('/waterlevel')) {
            router.push(`/waterlevel/${robotId}`);
        }
    };

    return (
        <section className='xl:w-1/6 w-full xl:overflow-y-scroll overflow-y-hidden xl:overflow-x-hidden overflow-x-scroll bg-gradient-radial from-blue-800 to-blue-700'>
            {robotList.length > 0 ? (
                <ul className='flex flex-row xl:flex-col'>
                    {robotList.map((data, index) => {
                        const firstValue = data.motor_values && data.motor_values.length > 0 ? data.motor_values[0] : null;
                        const isMotorOn = firstValue === 1;
                        const batteryPercentage = data.ctr_bat_soc;

                        return (
                            <li
                                key={data.robot_id}
                                onClick={() => handleRobotClick(data.robot_id)}
                                className={`xl:p-3 p-4 cursor-pointer border-solid border-slate-500 border-b transition-colors duration-500 ${selectedRobotId === data.robot_id ? 'bg-blue-950' : ''}`}>
                                <h2>로봇 아이디 : {data.robot_id}</h2>
                                <p className={`${isMotorOn ? "text-blue-500" : "text-red-500"} xl:block hidden`}>
                                    ON / OFF : {firstValue !== null ? (isMotorOn ? "ON" : "OFF") : "NO DATA"}
                                </p>
                                <p className={`xl:block hidden ${batteryPercentage !== null && batteryPercentage > 80 ? "text-blue-500" : batteryPercentage !== null ? "text-red-500" : "text-gray-500"}`}>
                                    배터리(%) : {batteryPercentage !== null ? batteryPercentage : "NO DATA"}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
};

export default RobotList;
