"use client"

import React, { useEffect, useState } from 'react';
import type { RobotAll } from '..';

interface NaverMapProps {
    robotAll: RobotAll[];
}

const NaverMap: React.FC<NaverMapProps> = ({ robotAll }) => {

    useEffect(() => {
        const initializeMap = () => {
            if (window.naver && window.naver.maps) {
                const container = document.getElementById('map');
                const options = {
                    center: new window.naver.maps.LatLng(36.5325, 127.6120),
                    zoom: 8,
                    mapTypeId: 'satellite'
                };
                const map = new window.naver.maps.Map(container, options);

                robotAll.forEach(data => {

                    let textChl = 'textBlue'
                    if (data.chl_ug_l > 60) {
                        textChl = 'textRed'
                    } else if (data.chl_ug_l > 30) {
                        textChl = 'textOrange'
                    }

                    let textBg = 'textBlue'
                    if (data.bg_ppb > 60) {
                        textBg = 'textRed'
                    } else if (data.bg_ppb > 30) {
                        textBg = 'textOrange'
                    }

                    let region = "";
                    switch (data.robot_id) {
                        case 'ecobot00002': region = "수원광교"; break;
                        case 'ecobot00003': region = "임하댐1"; break;
                        case 'ecobot00004': region = "임하댐2"; break;
                        case 'ecobot00005': region = "임하댐3"; break;
                        case 'ecobot00006': region = "추소리"; break;
                        case 'ecobot00007': region = "서낙동강1"; break;
                        case 'ecobot00008': region = "서낙동강2"; break;
                        case 'ecobot00009': region = "인천"; break;
                        case 'ecobot00012': region = "진천1"; break;
                        case 'ecobot00013': region = "진천2"; break;
                        case 'ecobot00014': region = "북서울"; break;
                        case 'ecobot00018': region = "임하댐4"; break;
                        case 'ecobot00020': region = "거품제거봇"; break;
                        case 'ecobot00023': region = "송도"; break;
                        case 'ecobot00024': region = "금강"; break;
                        case 'ecobot00025': region = "달성보"; break;
                    }

                    let latitude = data.latitude
                    let longitude = data.longitude
                    let timestamp = data.timestamp
                    let formattedTimestamp = timestamp?.replace(/[T:.]/g, "").slice(0, -10) || "";

                    if (data.robot_id === 'ecobot00008' || data.robot_id === 'ecobot00012') {
                        latitude = data.latitude + 0.1
                    }

                    if (data.robot_id === 'ecobot00016') {
                        longitude = data.longitude - 0.2
                    }

                    // let marker1 = new window.naver.maps.Marker({
                    //     position: new window.naver.maps.LatLng(latitude, longitude),
                    //     map: map,
                    //     icon: {
                    //         content:
                    //             `<div class="markerInfo">
                    //             <p>${data.robot_id}</p>
                    //             <p><span>클로로필 : </span><span class="${textChl}">${data.chl_ug_l}</span></p>
                    //             <p><span>남조류 : </span><span class="${textBg}">${data.bg_ppb}</span></p>
                    //             <p><span>모드 : </span><span>${robot_mode}</span></p>
                    //             <p><span></span><span>${formattedTimestamp}</span></p>
                    //         </div>`
                    //     },
                    // });

                    let marker1 = new window.naver.maps.Marker({
                        position: new window.naver.maps.LatLng(latitude, longitude),
                        map: map,
                        icon: {
                            content:
                                `<a href="/tracking_map/${data.robot_id}">
                                    <div class="markerInfo">
                                        <p>${region}</p>
                                    </div>
                                </a>
                                `
                        },
                    });

                    window.naver.maps.Event.addListener(map, 'zoom_changed', () => {
                        if (data.robot_id === 'ecobot00008' || data.robot_id === 'ecobot00012') {
                            marker1.setMap(null)
                            let zoomMulti = 1;
                            let zoom = (map.getZoom() - 5)
                            for (let i = 0; i < zoom; i++) {
                                zoomMulti = zoomMulti * 2
                            }
                            // latitude = data.latitude + 2.4 / zoomMulti

                            latitude = data.latitude + 1.0 / zoomMulti

                            if (region) {
                                // marker1 = new window.naver.maps.Marker({
                                //     position: new window.naver.maps.LatLng(latitude, longitude),
                                //     map: map,
                                //     icon: {
                                //         content:
                                //             `<div class="markerInfo">
                                //     <p>${data.robot_id}</p>
                                //     <p><span>클로로필 : </span><span class="${textChl}">${data.chl_ug_l}</span></p>
                                //     <p><span>남조류 : </span><span class="${textBg}">${data.bg_ppb}</span></p>
                                //     <p><span>모드 : </span><span>${robot_mode}</span></p>
                                //     <p><span></span><span>${formattedTimestamp}</span></p>
                                // </div>`
                                //     },
                                // });

                                marker1 = new window.naver.maps.Marker({
                                    position: new window.naver.maps.LatLng(latitude, longitude),
                                    map: map,
                                    icon: {
                                        content:
                                            `<a href="/tracking_map/${data.robot_id}">
                                                <div class="markerInfo">
                                                   <p>${region}</p>
                                                </div>
                                            </a>
                                            `
                                    },
                                });
                            }
                        } else if (data.robot_id === 'ecobot00016') {
                            marker1.setMap(null)
                            let zoomMulti = 1;
                            let zoom = (map.getZoom() - 5)
                            for (let i = 0; i < zoom; i++) {
                                zoomMulti = zoomMulti * 2
                            }
                            // latitude = data.latitude + 2.4 / zoomMulti

                            longitude = data.longitude - 0.1 / zoomMulti

                            if (region) {
                                marker1 = new window.naver.maps.Marker({
                                    position: new window.naver.maps.LatLng(latitude, longitude),
                                    map: map,
                                    icon: {
                                        content:
                                            `<a href="/tracking_map/${data.robot_id}">
                                                <div class="markerInfo">
                                                   <p>${region}</p>
                                                </div>
                                            </a>
                                            `
                                    },
                                });
                            }
                        }

                    })

                    if (region) {
                        const marker2 = new window.naver.maps.Marker({
                            position: new window.naver.maps.LatLng(data.latitude, data.longitude),
                            map: map,
                            icon: {
                                content: `
                              <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" fill="yellow" stroke="yellowgreen" stroke-width="2" />
                              </svg>
                            `,
                                anchor: new window.naver.maps.Point(12, 12) // 마커 중심 위치 조정
                            }
                        });
                    }
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
        </div>
    );
};

export default NaverMap;
