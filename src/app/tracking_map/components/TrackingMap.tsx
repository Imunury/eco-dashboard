"use client"

import React, { useEffect, useRef, useState } from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface TrackingMapProps {
    robotData: ecobot_status_temp;
}

const TrackingMap: React.FC<TrackingMapProps> = ({ robotData }) => {
    const mapRef = useRef<any>(null);
    const markerRef = useRef<any>(null);
    const [isMapReady, setMapReady] = useState(false);

    // Naver Map API 스크립트가 로드되었는지 확인하는 useEffect
    useEffect(() => {
        if (window.naver && window.naver.maps) {
            setMapReady(true);
            return;
        }

        const intervalId = setInterval(() => {
            if (window.naver && window.naver.maps) {
                clearInterval(intervalId);
                setMapReady(true);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    // 지도와 마커를 업데이트하는 useEffect
    useEffect(() => {
        // 지도 API가 준비되지 않았거나, robotData 또는 좌표가 유효하지 않으면 아무 작업도 수행하지 않음
        if (!isMapReady || !robotData || typeof robotData.latitude !== 'number' || typeof robotData.longitude !== 'number') {
            if (isMapReady && !robotData) {
                console.warn("TrackingMap: robotData is invalid.", robotData);
            }
            return;
        }

        try {
            const newCenter = new window.naver.maps.LatLng(robotData.latitude, robotData.longitude);

            // 지도가 초기화되지 않았다면 새로 생성
            if (!mapRef.current) {
                const container = document.getElementById('map');
                if (!container) {
                    console.error("Map container 'map' not found.");
                    return;
                }

                const options = {
                    center: newCenter,
                    zoom: 18,
                    mapTypeId: 'satellite'
                };
                const map = new window.naver.maps.Map(container, options);
                mapRef.current = map;
            } else {
                // 이미 지도가 있다면 중앙 위치만 이동
                mapRef.current.setCenter(newCenter);
            }

            // 마커 생성 또는 업데이트
            const markerContent = `
                <div style="transform: rotate(${robotData.yaw ?? 0}deg);">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L6 10L12 8L18 10L12 2Z" fill="#ffff00" stroke="#000" stroke-width="1"/>
                        <path d="M12 8L6 22L12 18L18 22L12 8Z" fill="#ffff00" stroke="#000" stroke-width="1"/>
                    </svg>
                </div>
            `;

            if (!markerRef.current) {
                markerRef.current = new window.naver.maps.Marker({
                    position: newCenter,
                    map: mapRef.current,
                    icon: {
                        content: markerContent,
                        anchor: new window.naver.maps.Point(12, 12)
                    }
                });
            } else {
                markerRef.current.setPosition(newCenter);
                markerRef.current.setIcon({
                    content: markerContent,
                    anchor: new window.naver.maps.Point(12, 12)
                });
            }
        } catch (error) {
            console.error("An error occurred with Naver Map:", error);
        }
    }, [robotData, isMapReady]);

    return (
        <div className="w-full h-full relative">
            <div id="map" className="w-full h-full"></div>
        </div>
    );
};

export default TrackingMap;
