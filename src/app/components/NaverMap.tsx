"use client"

import React, { useEffect, useState } from 'react';
import { Location } from '../index';

interface NaverMapProps {
    locations: Location[];
}

const NaverMap: React.FC<NaverMapProps> = ({ locations }) => {

    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);


    useEffect(() => {
        const initializeMap = () => {
            if (window.naver && window.naver.maps) {
                const container = document.getElementById('map');
                const options = {
                    center: new window.naver.maps.LatLng(36.5324, 127.6120),
                    zoom: 8,
                };
                const map = new window.naver.maps.Map(container, options);

                locations.forEach(location => {
                    const marker = new window.naver.maps.Marker({
                        position: new window.naver.maps.LatLng(location.latitude, location.longitude),
                        map: map,
                    });

                    window.naver.maps.Event.addListener(marker, 'click', () => {
                        setSelectedLocation(location);
                    });
                });
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
            }, 10000);
        }
    }, [locations]);

    return (
        <div className="w-full h-full relative">
            <div id="map" className="w-full h-full"></div>
            {selectedLocation && (
                <div className="absolute top-0 left-0 bg-white p-4 border z-10 text-red-500">
                    <h1>Location</h1>
                    <ul>
                        <li>설치위치: {selectedLocation.robot_id}</li>
                        <li>Latitude: {selectedLocation.latitude.toFixed(4)}</li>
                        <li>Longitude: {selectedLocation.longitude.toFixed(4)}</li>
                        <li>Timestamp: {new Date(selectedLocation.timestamp).toLocaleString()}</li>
                    </ul>
                </div>
            )}
        </div>
    )
};

export default NaverMap;
