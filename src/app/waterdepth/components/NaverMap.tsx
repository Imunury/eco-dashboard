"use client"

import React, { useEffect, useRef, useState } from 'react';
import { water_quality } from '@prisma/client';
import TimeGraph from './timeGraph';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import DepthGraph from './depthGraph';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export interface GroupedWaterQuality {
    median_latitude: string | null;
    median_longitude: string | null;
    group_id: number | null;
    total_count: number | null;
}

interface DepthRange {
    min: number;
    max: number;
    color: string;
    label: string;
}

interface NaverMapProps {
    robotData: water_quality | water_quality[];
    robotDataGroup: GroupedWaterQuality[];
}

const depthRanges: DepthRange[] = [
    { min: 1.0, max: 3.0, color: 'rgb(0 ,255, 0)', label: '1-3m' },
    { min: 3.0, max: 5.0, color: 'rgb(0, 180, 0)', label: '3-5m' },
    { min: 5.0, max: 7.0, color: 'rgb(0, 110, 0)', label: '5-7m' },
    { min: 7.0, max: 9.0, color: 'rgb(255, 255, 100)', label: '7-9m' },
    { min: 9.0, max: 11.0, color: 'rgb(220, 220, 0)', label: '9-11m' },
    { min: 11.0, max: 13.0, color: 'rgb(180, 180, 0)', label: '11-13m' },
    { min: 13.0, max: 15.0, color: 'rgb(255, 130, 130)', label: '13-15m' },
    { min: 15.0, max: 17.0, color: 'rgb(255, 50, 50)', label: '15-17m' },
    { min: 17.0, max: 19.0, color: 'rgb(255, 0, 0)', label: '17-19m' },
    { min: 19.0, max: 21.0, color: 'rgb(180, 0, 0)', label: '19-21sm' }
];

const Navermap: React.FC<NaverMapProps> = ({ robotData, robotDataGroup }) => {
    const mapRef = useRef<any>(null);
    const markerRef = useRef<any>(null);
    const clusterRef = useRef<any>(null);
    const [selectedCluster, setSelectedCluster] = useState<any>(null);
    const [depthStats, setDepthStats] = useState<any>(null);
    const [showGraph, setShowGraph] = useState(true);
    const [showDepthGraph, setShowDepthGraph] = useState(false);

    const [selectedDepthData, setSelectedDepthData] = useState<water_quality[]>([]);
    const [showWaterQuality, setShowWaterQuality] = useState(false);

    const getMarkerColor = (depth: number) => {
        const normalizedDepth = depth;
        for (const range of depthRanges) {
            if (normalizedDepth >= range.min && normalizedDepth < range.max) {
                return range.color;
            }
        }
        return 'bg-green-500';
    };

    const formatDate = (timestamp: Date) => {
        const date = new Date(timestamp);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const mi = String(date.getMinutes()).padStart(2, '0');
        const ss = String(date.getSeconds()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
    };

    const handleClusterClick = (cluster: any) => {
        setSelectedCluster(cluster);
        // 해당 클러스터의 total_count와 같은 마커들을 찾아서 그래프 데이터로 설정
        const dataArray = Array.isArray(robotData) ? robotData : [robotData];
        const matchingMarkers = dataArray.filter((marker: any) => {
            const markerLat = marker.latitude;
            const markerLng = marker.longitude;
            const clusterLat = parseFloat(cluster.median_latitude || '0');
            const clusterLng = parseFloat(cluster.median_longitude || '0');

            // 좌표가 클러스터 중심점 근처에 있는지 확인
            const distance = Math.sqrt(
                Math.pow(markerLat - clusterLat, 2) +
                Math.pow(markerLng - clusterLng, 2)
            );

            return distance < 0.00005; // 클러스터링 거리와 동일한 값 사용
        });

        setDepthStats({
            total: cluster.total_count
        });
        setSelectedDepthData(matchingMarkers);
        setShowWaterQuality(true);
    };

    const handleRangeClick = (range: DepthRange) => {
        if (!selectedCluster) return;

        const dataArray = Array.isArray(robotData) ? robotData : [robotData];
        const matchingMarkers = dataArray.filter((marker: any) => {
            const markerLat = marker.latitude;
            const markerLng = marker.longitude;
            const clusterLat = parseFloat(selectedCluster.median_latitude || '0');
            const clusterLng = parseFloat(selectedCluster.median_longitude || '0');

            const distance = Math.sqrt(
                Math.pow(markerLat - clusterLat, 2) +
                Math.pow(markerLng - clusterLng, 2)
            );

            return distance < 0.00005;
        });

        const filtered = matchingMarkers.filter((d) => {
            const depth = (d.sample_depth ?? 0);
            return depth >= range.min && depth < range.max;
        });

        setSelectedDepthData(filtered);
        setShowWaterQuality(true);
    };

    const handleReset = () => {
        setShowWaterQuality(false);
        setSelectedDepthData([]);
    };

    useEffect(() => {
        const dataArray = (Array.isArray(robotData) ? robotData : [robotData]).filter(d => d && d.latitude && d.longitude);
        const dataArrayGroup = (Array.isArray(robotDataGroup) ? robotDataGroup : [robotDataGroup]).filter(g => g && g.median_latitude && g.median_longitude);

        // 기존 마커 제거
        if (markerRef.current) {
            markerRef.current.forEach((marker: any) => marker.setMap(null));
            markerRef.current = null;
        }
        if (clusterRef.current) {
            clusterRef.current.forEach((cluster: any) => cluster.setMap(null));
            clusterRef.current = null;
        }

        if (window.naver && window.naver.maps) {
            const container = document.getElementById('map');
            if (!container) return;

            // 데이터가 없을 경우 기본 지도를 표시
            if (dataArray.length === 0 && dataArrayGroup.length === 0) {
                if (!mapRef.current) {
                    const options = {
                        center: new window.naver.maps.LatLng(37.5665, 126.9780), // 기본 위치: 서울 시청
                        zoom: 14,
                        mapTypeId: 'satellite'
                    };
                    mapRef.current = new window.naver.maps.Map(container, options);
                }
                return;
            }

            // 첫 번째 데이터의 좌표로 맵 초기화
            if (!mapRef.current) {
                const firstCoord = dataArray.length > 0
                    ? { latitude: dataArray[0].latitude, longitude: dataArray[0].longitude }
                    : { latitude: parseFloat(dataArrayGroup[0].median_latitude!), longitude: parseFloat(dataArrayGroup[0].median_longitude!) };

                const options = {
                    center: new window.naver.maps.LatLng(firstCoord.latitude, firstCoord.longitude),
                    zoom: 18,
                    mapTypeId: 'satellite'
                };
                const map = new window.naver.maps.Map(container, options);
                mapRef.current = map;
            }

            const map = mapRef.current;

            // 클러스터 생성
            const clusters = dataArrayGroup.map((group) => {
                const position = new window.naver.maps.LatLng(
                    parseFloat(group.median_latitude!),
                    parseFloat(group.median_longitude!)
                );

                const cluster = new window.naver.maps.Marker({
                    position,
                    map: map,
                    icon: {
                        content: `
                            <div 
                                style="
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                    background : black;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    color: white;
                                    font-size: 12px;
                                    font-weight: bold;
                                    opacity : 0.8;
                                    z-index : 100;
                                    position : absolute;
                                ">
                                ${group.total_count}
                            </div>
                        `,
                        anchor: new window.naver.maps.Point(10, 10)
                    }
                });

                window.naver.maps.Event.addListener(cluster, 'click', () => {
                    setShowGraph(true)
                    handleClusterClick(group);
                });

                return cluster;
            });

            clusterRef.current = clusters;

            // 개별 마커 표시
            const markers = dataArray.map((data) => {
                const color = getMarkerColor((data.sample_depth ?? 0));
                const position = new window.naver.maps.LatLng(data.latitude, data.longitude);
                const marker = new window.naver.maps.Marker({
                    position,
                    map: map,
                    icon: {
                        content: `
                            <div 
                                style="
                                    width: 10px;
                                    height: 10px;
                                    border-radius: 50%;
                                    border: 1px solid white;
                                    background : ${color};
                                    z-index : 20;
                                ">
                            </div>
                        `,
                        anchor: new window.naver.maps.Point(5, 5)
                    }
                });

                const infoWindow = new window.naver.maps.InfoWindow({
                    content: `
                        <div style="padding:5px; font-size:12px;">
                            <b>시간:</b> ${formatDate(data.timestamp)}<br/> 
                            <b>채수수심</b> ${data.sample_depth ? (data.sample_depth).toFixed(2) : '-'}m<br/> 
                            <b>남조류</b> ${data.bg_ppb ?? '-'}<br/> 
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
        }
    }, [robotData, robotDataGroup]);

    return (
        <div className="w-full h-full relative">
            <div id="map" className="w-full h-full"></div>

            {selectedCluster && depthStats && showGraph && (
                <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-10 max-h-[70vh] wl:max-h-[90vh] overflow-y-auto w-[400px] xl:w-[500px]">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => {
                                setShowGraph(!showGraph);
                                setShowDepthGraph(false);

                            }}
                        >
                            {showGraph ? '그래프 닫기' : '그래프 보기'}
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => {
                                setShowDepthGraph(!showDepthGraph);
                            }}
                        >
                            {showDepthGraph ? '시계열 그래프' : '수심 그래프'}
                        </button>
                    </div>

                    {!showDepthGraph && (
                        <TimeGraph
                            selectedDepthData={selectedDepthData}
                            onRangeClick={handleRangeClick}
                            onReset={handleReset}
                        />
                    )}

                    {showDepthGraph && (
                        <DepthGraph
                            selectedDepthData={selectedDepthData}
                            onReset={handleReset}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Navermap;