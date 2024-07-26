"use client"

import React, { useEffect, useState } from 'react';
import type { RobotAll } from '..';

interface NaverMapProps {
    robotAll: RobotAll[];
}

const NaverMap: React.FC<NaverMapProps> = ({ robotAll }) => {
    const [selectedRobot, setSelectedRobot] = useState<RobotAll | null>(null);

    useEffect(() => {
        const initializeMap = () => {
            if (window.naver && window.naver.maps) {
                const container = document.getElementById('map');
                const options = {
                    center: new window.naver.maps.LatLng(36.5324, 127.6120),
                    zoom: 8,
                    mapTypeId: 'satellite'
                };
                const map = new window.naver.maps.Map(container, options);

                robotAll.forEach(data => {

                    let textClass = 'text-white'
                    if (data.chl_ug_l > 60) {
                        textClass = 'textRed'
                    } else if (data.chl_ug_l > 30) {
                        textClass = 'textOrange'
                    }

                    const marker1 = new window.naver.maps.Marker({
                        position: new window.naver.maps.LatLng(data.latitude, data.longitude),
                        map: map,
                        icon: {
                            content: `<div class="markerInfo">
                                <p>${data.robot_id}</p>
                                <p><span>클로로필 : </span><span class="${textClass}">${data.chl_ug_l}</span></p>
                                <p><span>남조류 : </span><span class="${textClass}">${data.bg_ppb}</span></p>
                            </div>`
                        },

                    });

                    const marker2 = new window.naver.maps.Marker({
                        position: new window.naver.maps.LatLng(data.latitude, data.longitude),
                        map: map,
                    });

                    // marker.addListener('click', () => {
                    //     setSelectedRobot(data);
                    // });
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
    }, [robotAll]);

    return (
        <div className="w-full h-full relative">
            <div id="map" className="w-full h-full"></div>
            {selectedRobot && (
                <div className="absolute top-0 left-0 bg-white p-4 border z-10 text-red-500">
                    <ul>
                        <li>로봇 아이디: {selectedRobot.robot_id}</li>
                        <li>Timestamp: {new Date(selectedRobot.timestamp).toLocaleString()}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NaverMap;
