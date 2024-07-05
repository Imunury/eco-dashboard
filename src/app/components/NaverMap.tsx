"use client"

import React, { useEffect } from 'react';

interface Location {
    robot_id: string;
    latitude: number;
    longitude: number;
    timestamp: string;
}

interface NaverMapProps {
    locations: Location[];
    onMarkerClick: (location: Location) => void;
}

const NaverMap: React.FC<NaverMapProps> = ({ locations, onMarkerClick }) => {
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
                        onMarkerClick(location);
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
            }, 100);
        }
    }, [locations, onMarkerClick]);

    return <div id="map" className='w-full h-full'></div>;
};

export default NaverMap;
