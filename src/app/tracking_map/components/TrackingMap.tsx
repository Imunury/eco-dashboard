"use client"

import React, { useEffect, useState } from 'react';
import type { RobotAll } from '../../index';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import type { ecobot_status_temp } from '@prisma/client';

interface NaverMapProps {
    robotAll: RobotAll[];
}

const TrackingMap: React.FC<NaverMapProps> = ({ robotAll }) => {
    // const [selectedRobot, setSelectedRobot] = useState<RobotAll | null>(null);

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

    useEffect(() => {
        const initializeMap = () => {
            if (window.naver && window.naver.maps) {
                const container = document.getElementById('map');
                const options = {
                    center: new window.naver.maps.LatLng(robotData?.latitude, robotData?.longitude),
                    zoom: 15,
                    mapTypeId: 'satellite'
                };
                const map = new window.naver.maps.Map(container, options);

                let marker = new window.naver.maps.Marker({
                    position: new window.naver.maps.LatLng(robotData?.latitude, robotData?.longitude),
                    map: map
                })

            }
        };

        if (window.naver && window.naver.maps) {
            initializeMap();
        } else {
            const checkNaverMap = setInterval(() => {
                if (window.naver && window.naver.maps) {
                    clearInterval(checkNaverMap);
                    initializeMap();
                }
            }, 100);
        }
    }, [robotAll]);

    return (
        <div className="w-full h-full relative">
            <div id="map" className="w-full h-full"></div>
            {/* {selectedRobot && (
                <div className="absolute top-0 left-0 bg-white p-4 border z-10 text-red-500">
                    <ul>
                        <li>로봇 아이디: {selectedRobot.robot_id}</li>
                        <li>Timestamp: {new Date(selectedRobot.timestamp).toLocaleString()}</li>
                    </ul>
                </div>
            )} */}
        </div>
    );
};

export default TrackingMap;
