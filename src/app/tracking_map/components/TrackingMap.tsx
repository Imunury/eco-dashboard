"use client"

import React, { useEffect, useRef } from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface TrackingMapProps {
    robotData: ecobot_status_temp;
}

const TrackingMap: React.FC<TrackingMapProps> = ({ robotData }) => {
    const mapRef = useRef<any>(null);
    const markerRef = useRef<any>(null);

    useEffect(() => {
        // robotData나 위경도 값이 유효하지 않으면 아무것도 하지 않음
        if (!robotData || typeof robotData.latitude !== 'number' || typeof robotData.longitude !== 'number') {
            console.warn("TrackingMap: robotData or its coordinates are invalid.", robotData);
            return;
        }

        try {
            if (window.naver && window.naver.maps && !mapRef.current) {
                const container = document.getElementById('map');
                if (!container) return; // map div가 없을 경우를 대비

                const options = {
                    center: new window.naver.maps.LatLng(robotData.latitude, robotData.longitude),
                    zoom: 18,
                    mapTypeId: 'satellite'
                };
                const map = new window.naver.maps.Map(container, options);
                mapRef.current = map;

                // Create a marker with an arrow that can rotate
                const markerContent = `
                    <div style="transform: rotate(${robotData.yaw ?? 0}deg);">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L6 10L12 8L18 10L12 2Z" fill="#ffff00" stroke="#000" stroke-width="1"/>
                            <path d="M12 8L6 22L12 18L18 22L12 8Z" fill="#ffff00" stroke="#000" stroke-width="1"/>
                        </svg>
                    </div>
                `;

                markerRef.current = new window.naver.maps.Marker({
                    position: new window.naver.maps.LatLng(robotData.latitude, robotData.longitude),
                    map: map,
                    icon: {
                        content: markerContent,
                        anchor: new window.naver.maps.Point(12, 12)
                    }
                });
            } else if (mapRef.current) {
                const newCenter = new window.naver.maps.LatLng(robotData.latitude, robotData.longitude);
                mapRef.current.setCenter(newCenter);

                if (markerRef.current) {
                    // Update marker position
                    markerRef.current.setPosition(newCenter);

                    // Update marker rotation based on yaw
                    const markerContent = `
                        <div style="transform: rotate(${robotData.yaw ?? 0}deg);">
                            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8L6 22L12 18L18 22L12 8Z" fill="#ffff00" stroke="#000" stroke-width="1"/>
                            </svg>
                        </div>
                    `;

                    markerRef.current.setIcon({
                        content: markerContent,
                        anchor: new window.naver.maps.Point(12, 12)
                    });
                } else {
                    // Create a new marker if it doesn't exist
                    const markerContent = `
                        <div style="transform: rotate(${robotData.yaw ?? 0}deg);">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L6 10L12 8L18 10L12 2Z" fill="#ffff00" stroke="#000" stroke-width="1"/>
                                <path d="M12 8L6 22L12 18L18 22L12 8Z" fill="#ffff00" stroke="#000" stroke-width="1"/>
                            </svg>
                        </div>
                    `;

                    markerRef.current = new window.naver.maps.Marker({
                        position: newCenter,
                        map: mapRef.current,
                        icon: {
                            content: markerContent,
                            anchor: new window.naver.maps.Point(12, 12)
                        }
                    });
                }
            }
        } catch (error) {
            console.error("An error occurred with Naver Map:", error);
        }
    }, [robotData]);

    return (
        <div className="w-full h-full relative">
            <div id="map" className="w-full h-full"></div>
        </div>
    );
};

export default TrackingMap;
