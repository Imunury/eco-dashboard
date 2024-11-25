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
        if (window.naver && window.naver.maps && !mapRef.current) {
            const container = document.getElementById('map');
            const options = {
                center: new window.naver.maps.LatLng(robotData.latitude, robotData.longitude),
                zoom: 18,
                mapTypeId: 'satellite'
            };
            const map = new window.naver.maps.Map(container, options);
            mapRef.current = map;

            markerRef.current = new window.naver.maps.Circle({
                center: new window.naver.maps.LatLng(robotData.latitude, robotData.longitude),
                map: map,
                radius: 2,
                fillColor: '#ffff00',
                fillOpacity: 0.6,
                strokeColor: '#ffff00',
                strokeWeight: 1
            });
        } else if (mapRef.current) {
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
