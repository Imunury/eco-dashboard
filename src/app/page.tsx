"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const NaverMap = dynamic(() => import('./component/NaverMap'), { ssr: false });

interface Location {
  robot_id: string;
  latitude: number;
  longitude: number;
  timestamp: string;
}

const Home: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  const fetchData = async () => {
    const response = await fetch('/api/location');
    const data = await response.json();
    setLocations(data);
  };


  useEffect(() => {
    fetchData(); // 처음 로딩 시 데이터 가져오기

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return (
    <main className='h-screen w-screen overflow-x-hidden'>
      <section className='flex flex-row h-full w-full'>
        <div className='h-full w-2/5 p-24 bg-red-500'>
        </div>
        <div className='h-full w-3/5'>
          <NaverMap />
        </div>
      </section>
      <h1>Location</h1>
      {locations.length > 0 ? (
        <ul>
          {locations.map((location, index) => (
            <li key={index}>
              <p>설치위치: {location.robot_id}</p>
              <p>Latitude: {location.latitude.toFixed(4)}</p>
              <p>Longitude: {location.longitude.toFixed(4)}</p>
              <p>Timestamp: {new Date(location.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Home;
