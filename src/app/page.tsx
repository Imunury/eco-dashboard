"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const NaverMap = dynamic(() => import('./components/NaverMap'), { ssr: false });

import { Location } from './index';

const RobotMap: React.FC = () => {

  const [locations, setLocations] = useState<Location[]>([]);

  const fetchData = async () => {
    const response = await fetch('/api/ecobot_status');
    const data = await response.json();
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
    <section className='h-full w-full'>
      <NaverMap locations={locations} />
    </section>
  )
}

export default RobotMap