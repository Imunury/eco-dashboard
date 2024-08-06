"use client"

import React, { useEffect, useState, useRef } from 'react';
import type { RobotAll } from '../../index';
import { useParams } from 'next/navigation';
import type { ecobot_status_temp } from '@prisma/client';


const TrackingMap: React.FC = () => {
    const params = useParams();
    const ROBOT_ID = params?.id as string | undefined;
    const [robotData, setRobotData] = useState<ecobot_status_temp | null>(null);
    const mapRef = useRef<any>(null);
    const markerRef = useRef<any>(null);

    useEffect(() => {
        const ws = new WebSocket(`ws://112.164.105.160:4101`);

        ws.onopen = function () {
            console.log('Connected to the server');
            // 서버에 특정 로봇 ID 구독 요청 보내기
            ws.send(JSON.stringify({ type: 'subscribe', robotId: ROBOT_ID }));
        };

        ws.onmessage = function (event) {
            const data = JSON.parse(event.data);
            // 서버로부터 받은 데이터가 로봇 ID와 일치하는 경우에만 처리
            if (data.robot_id === ROBOT_ID) {
                setRobotData(data);
            }
        };

        ws.onerror = function (error) {
            console.error('WebSocket Error:', error);
        };

        ws.onclose = function (event) {
            console.log('WebSocket closed:', event);
        };

        // Clean up WebSocket connection on component unmount
        return () => {
            ws.close();
        };
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
