"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const NaverMap = dynamic(() => import('../components/NaverMap'), { ssr: false });

import type { RobotAll } from '../index';

const RobotMap: React.FC = () => {

  const [robotAll, setRobotall] = useState<RobotAll[]>([]);

  const fetchData = async () => {
    try {
      const [allResponse] = await Promise.all([
        // fetch('/api/ecobot_list'),
        // fetch('/api/water_quality'),
        fetch('/api/robot_all')
      ]);
      const robot_all = await allResponse.json();
      setRobotall(robot_all);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  };

  useEffect(() => {
    fetchData(); // 처음 로딩 시 데이터 가져오기

    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  useEffect(() => {
    const naverMapScript = document.createElement('script');
    naverMapScript.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY}`;
    naverMapScript.onload = () => {
      if (window.naver && window.naver.maps) {
        console.log('Naver Map API loaded');
      }
    };
    document.head.appendChild(naverMapScript);
  }, [])

  return (
    <section className='h-full w-full'>
      <NaverMap robotAll={robotAll} />
    </section>
  )
}

export default RobotMap