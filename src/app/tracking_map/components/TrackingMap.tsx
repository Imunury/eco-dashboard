"use client"

import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import type { ecobot_status_temp } from '@prisma/client';
import type { RobotAll } from '../../../../pages/api/robot_all';

interface RobotTreackPorps {
    robotData: ecobot_status_temp;
}

const TrackingMap: React.FC<RobotTreackPorps> = ({ robotData }) => {
    const params = useParams();
    const ROBOT_ID = params?.id as string | undefined;
    const [trackData, setTrackData] = useState(robotData);
    const mapRef = useRef<any>(null);
    const markerRef = useRef<any>(null);

    useEffect(() => {
        setTrackData(robotData);

        const interval = setInterval(() => {
            setTrackData(robotData);;
        }, 10000); // 10초마다 데이터 가져오기

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, [ROBOT_ID]);

    useEffect(() => {
        if (window.naver && window.naver.maps && !mapRef.current) {
            const container = document.getElementById('map');
            const options = {
                center: new window.naver.maps.LatLng(robotData?.latitude, robotData?.longitude),
                zoom: 18,
                mapTypeId: 'satellite'
            };
            const map = new window.naver.maps.Map(container, options);
            mapRef.current = map;

            if (robotData) {
                markerRef.current = new window.naver.maps.Circle({
                    center: new window.naver.maps.LatLng(robotData.latitude, robotData.longitude),
                    map: map,
                    radius: 2,
                    fillColor: '#ffff00',
                    fillOpacity: 0.6,
                    strokeColor: '#ffff00',
                    strokeWeight: 1
                });
            }
        } else if (mapRef.current && robotData) {
            const newCenter = new window.naver.maps.LatLng(robotData.latitude, robotData.longitude);
            mapRef.current.setCenter(newCenter);
            if (markerRef.current) {
                markerRef.current.setCenter(newCenter);
            } else {
                markerRef.current = new window.naver.maps.Circle({
                    center: newCenter,
                    map: mapRef.current,
                    radius: 2,
                    fillColor: '#ffff00',
                    fillOpacity: 0.6,
                    strokeColor: '#ffff00',
                    strokeWeight: 1
                });
            }
        }
    }, [robotData]);

    return (
        <div className="w-full h-full relative">
            <div id="map" className="w-full h-full"></div>
        </div>
    );
};

export default TrackingMap;
