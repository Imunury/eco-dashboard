"use client"

import React, { useEffect, useState } from 'react';
import type { RobotAll } from '..';

interface NaverMapProps {
    robotAll: RobotAll[];
}

const NaverMap: React.FC<NaverMapProps> = ({ robotAll }) => {
    // const [selectedRobot, setSelectedRobot] = useState<RobotAll | null>(null);

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

                    let robot_mode = ""
                    const current_state = data.current_state
                    switch (current_state) {
                        case 0: robot_mode = "정지"
                            break;
                        case 1: robot_mode = "정지"
                            break;
                        case 2: robot_mode = "코스주행"
                            break;
                        case 3: robot_mode = "위치사수"
                            break;
                    }

                    let textChl = 'textBlack'
                    if (data.chl_ug_l > 60) {
                        textChl = 'textRed'
                    } else if (data.chl_ug_l > 30) {
                        textChl = 'textOrange'
                    }

                    let textBg = 'textBlack'
                    if (data.bg_ppb > 60) {
                        textBg = 'textRed'
                    } else if (data.bg_ppb > 30) {
                        textBg = 'textOrange'
                    }

                    let latitude = data.latitude
                    let longitude = data.longitude

                    if (data.robot_id === 'ecobot00003' || data.robot_id === 'ecobot00008') {
                        latitude = data.latitude + 0.4
                    }

                    let marker1 = new window.naver.maps.Marker({
                        position: new window.naver.maps.LatLng(latitude, longitude),
                        map: map,
                        icon: {
                            content: `<div class="markerInfo">
                                <p>${data.robot_id}</p>
                                <p><span>클로로필 : </span><span class="${textChl}">${data.chl_ug_l}</span></p>
                                <p><span>남조류 : </span><span class="${textBg}">${data.bg_ppb}</span></p>
                                <p><span>모드 : </span><span>${robot_mode}</span></p>
                            </div>`
                        },
                    });

                    window.naver.maps.Event.addListener(map, 'zoom_changed', () => {
                        if (data.robot_id === 'ecobot00003' || data.robot_id === 'ecobot00008') {
                            marker1.setMap(null)
                            let zoomMulti = 1;
                            let zoom = (map.getZoom() - 5)
                            for (let i = 0; i < zoom; i++) {
                                zoomMulti = zoomMulti * 2
                            }
                            latitude = data.latitude + 3.2 / zoomMulti

                            marker1 = new window.naver.maps.Marker({
                                position: new window.naver.maps.LatLng(latitude, longitude),
                                map: map,
                                icon: {
                                    content: `<div class="markerInfo">
                                    <p>${data.robot_id}</p>
                                    <p><span>클로로필 : </span><span class="${textChl}">${data.chl_ug_l}</span></p>
                                    <p><span>남조류 : </span><span class="${textBg}">${data.bg_ppb}</span></p>
                                    <p><span>모드 : </span><span>${robot_mode}</span></p>
                                </div>`
                                },
                            });
                        }

                    })


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

export default NaverMap;
