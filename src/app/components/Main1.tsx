"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const NaverMap = dynamic(() => import('./NaverMap'), { ssr: false });
const RobotData = dynamic(() => import('../components/RobotData'), { ssr: false });

import { Location } from '../index';
import { RobotStatus } from '../index';

const Main1: React.FC = () => {

    const [locations, setLocations] = useState<Location[]>([]);

    const [robotStatus, setRobotStatus] = useState<RobotStatus[]>([]);

    const fetchData = async () => {
        const response = await fetch('/api/ecobot_status');
        const data = await response.json();
        setRobotStatus(data);
        setLocations(data);
    };

    useEffect(() => {
        fetchData(); // 처음 로딩 시 데이터 가져오기

        const interval = setInterval(() => {
            fetchData();
        }, 10000);

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    return (
        <section className='flex flex-row h-full w-full'>
            <div className='h-screen w-1/5 p-3 overflow-y-auto'>
                <RobotData robotStatus={robotStatus} />
            </div>
            <div className='h-full w-4/5'>
                <NaverMap locations={locations} />
            </div>
        </section>
    )
}

export default Main1