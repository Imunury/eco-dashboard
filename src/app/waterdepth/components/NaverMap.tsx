"use client"

import React, { useEffect, useRef } from 'react';
import { water_quality } from '@prisma/client';

interface TrackingMapProps {
    robotData: water_quality | water_quality[];
}

const Navermap: React.FC<TrackingMapProps> = ({ robotData }) => {
    const mapRef = useRef<any>(null);
    const markerRef = useRef<any>(null);

    const getMarkerColor = (depth: number) => {
        if (depth >= 1.8 && depth <= 2.2) return '#FF0000';   // 빨강
        if (depth >= 3.8 && depth <= 4.2) return '#FFA500';   // 주황
        if (depth >= 5.8 && depth <= 6.2) return '#FF5000';   // 짙은 주황
        if (depth >= 7.8 && depth <= 8.2) return '#FF2200';   // 빨강+주황
        return '#00FF00';                                     // 초록
    };

    useEffect(() => {
        const dataArray = Array.isArray(robotData) ? robotData : [robotData];

        if (window.naver && window.naver.maps && !mapRef.current) {
            const container = document.getElementById('map');
            const options = {
                center: new window.naver.maps.LatLng(dataArray[0].latitude, dataArray[0].longitude),
                zoom: 18,
                mapTypeId: 'satellite'
            };
            const map = new window.naver.maps.Map(container, options);
            mapRef.current = map;
        }

        if (mapRef.current) {
            const map = mapRef.current;

            // 기존 마커 제거
            if (markerRef.current) {
                markerRef.current.forEach((marker: any) => marker.setMap(null));
            }

            // 새 마커 그리기
            const markers = dataArray.map((data) => {
                const color = getMarkerColor((data.sample_depth ?? 0) / 100);
                const position = new window.naver.maps.LatLng(data.latitude, data.longitude);

                const marker = new window.naver.maps.Marker({
                    position,
                    map: map,
                    icon: {
                        content: `
                            <div style="
                                width: 10px;
                                height: 10px;
                                background-color: ${color};
                                border-radius: 50%;
                                border: 1px solid white;
                            "></div>
                        `,
                        anchor: new window.naver.maps.Point(5, 5)
                    }
                });

                const infoWindow = new window.naver.maps.InfoWindow({
                    content: `
                        <div style="padding:5px; font-size:12px;">
                            <b>남조류:</b> ${data.bg_ppb ?? '-'}<br/> 
                            <b>클로로필</b> ${data.chl_ug_l ?? '-'}<br/>
                            <b>탁도</b> ${data.turb_ntu ?? '-'}<br/>
                            <b>산성도</b> ${data.hdo_mg_l ?? '-'}<br/>
                        </div>
                    `
                });

                window.naver.maps.Event.addListener(marker, 'mouseover', () => {
                    infoWindow.open(map, marker);
                });
                window.naver.maps.Event.addListener(marker, 'mouseout', () => {
                    infoWindow.close();
                });

                return marker;
            });

            markerRef.current = markers;

            const newCenter = new window.naver.maps.LatLng(dataArray[0].latitude, dataArray[0].longitude);
            map.setCenter(newCenter);
        }
    }, [robotData]);

    return (
        <div className="w-full h-full">
            <div id="map" className="w-full h-full"></div>
        </div>
    );
};

export default Navermap;
