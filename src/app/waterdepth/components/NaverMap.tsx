"use client"

import React, { useEffect, useRef, useState } from 'react';
import { water_quality } from '@prisma/client';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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

interface TrackingMapProps {
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

const Navermap: React.FC<TrackingMapProps> = ({ robotData, robotDataGroup }) => {
    const mapRef = useRef<any>(null);
    const markerRef = useRef<any>(null);
    const clusterRef = useRef<any>(null);
    const [selectedCluster, setSelectedCluster] = useState<any>(null);
    const [depthStats, setDepthStats] = useState<any>(null);
    const [showGraph, setShowGraph] = useState(true);

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
            
            return distance < 0.0002; // 클러스터링 거리와 동일한 값 사용
        });

        setDepthStats({
            total: cluster.total_count
        });
        setSelectedDepthData(matchingMarkers);
        // 1-3m 범위의 데이터만 필터링
        const filteredData = matchingMarkers.filter((d) => {
            const depth = (d.sample_depth ?? 0) / 100;
            return depth >= 1.0 && depth < 3.0;
        });
        setSelectedDepthData(filteredData);
        setShowWaterQuality(true);
    };

    useEffect(() => {
        const dataArray = Array.isArray(robotData) ? robotData : [robotData];
        const dataArrayGroup = Array.isArray(robotDataGroup) ? robotDataGroup : [robotDataGroup];

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

            // 첫 번째 데이터의 좌표로 맵 초기화
            if (!mapRef.current) {
                const options = {
                    center: new window.naver.maps.LatLng(dataArray[0].latitude, dataArray[0].longitude),
                    zoom: 19,
                    mapTypeId: 'satellite'
                };
                const map = new window.naver.maps.Map(container, options);
                mapRef.current = map;
            }

            const map = mapRef.current;

            // 클러스터 생성
            const clusters = dataArrayGroup.map((group) => {
                const position = new window.naver.maps.LatLng(
                    parseFloat(group.median_latitude || '0'),
                    parseFloat(group.median_longitude || '0')
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
                const color = getMarkerColor((data.sample_depth ?? 0) / 100);
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
                            <b>채수수심</b> ${data.sample_depth ? (data.sample_depth / 100).toFixed(2) : '-'}m<br/> 
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

    const handleRangeClick = (range: DepthRange) => {
        const dataArray = Array.isArray(robotData) ? robotData : [robotData];
        const filtered = dataArray.filter((d) => {
            const depth = (d.sample_depth ?? 0) / 100;
            return depth >= range.min && depth < range.max;
        });
        setSelectedDepthData(filtered);
        setShowWaterQuality(true);
    };

    const chartData = {
        labels: showWaterQuality
            ? selectedDepthData.map(d => formatDate(d.timestamp))
            : [depthStats?.total ? `총 ${depthStats.total}개` : ''],
        datasets: [
            {
                label: showWaterQuality ? '클로로필 (μg/L)' : '총 마커 수',
                data: showWaterQuality
                    ? selectedDepthData.map(d => d.chl_ug_l ?? 0)
                    : [depthStats?.total || 0],
                backgroundColor: showWaterQuality
                    ? 'rgba(54, 162, 235, 0.5)'
                    : 'rgba(75, 192, 192, 0.5)',
            },
            ...(showWaterQuality ? [{
                label: '남조류 (ppb)',
                data: selectedDepthData.map(d => d.bg_ppb ?? 0),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }] : [])
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: showWaterQuality ? '수질 데이터' : '수심별 평균 통계',
            },
        },
    };

    return (
        <div className="w-full h-full relative">
            <div id="map" className="w-full h-full"></div>

            {selectedCluster && depthStats && showGraph &&(
                <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-10 max-h-[90vh] overflow-y-auto w-[500px]">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">클러스터 통계</h3>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => setShowGraph(!showGraph)}
                        >
                            {showGraph ? '그래프 닫기' : '그래프 보기'}
                        </button>
                    </div>

                    { (
                        <>
                            <div className="mt-4">
                                <ul className="grid grid-cols-5 gap-2 text-sm">
                                    {depthRanges.map((range, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-1 rounded"
                                            onClick={() => handleRangeClick(range)}
                                        >
                                            <span
                                                className="inline-block w-4 h-4 rounded-sm border"
                                                style={{ backgroundColor: range.color }}
                                            ></span>
                                            <span>{range.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {showWaterQuality ? (
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">클로로필 농도 (μg/L)</h3>
                                        <Bar
                                            data={{
                                                labels: selectedDepthData.map((d: any) => formatDate(d.timestamp)),
                                                datasets: [{
                                                    label: '클로로필',
                                                    data: selectedDepthData.map((d: any) => d.chl_ug_l ?? 0),
                                                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                                                }]
                                            }}
                                            options={{
                                                ...chartOptions,
                                                plugins: {
                                                    ...chartOptions.plugins,
                                                    title: {
                                                        display: false
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">남조류 농도 (ppb)</h3>
                                        <Bar
                                            data={{
                                                labels: selectedDepthData.map((d: any) => formatDate(d.timestamp)),
                                                datasets: [{
                                                    label: '남조류',
                                                    data: selectedDepthData.map((d: any) => d.bg_ppb ?? 0),
                                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                                }]
                                            }}
                                            options={{
                                                ...chartOptions,
                                                plugins: {
                                                    ...chartOptions.plugins,
                                                    title: {
                                                        display: false
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">pH</h3>
                                        <Bar
                                            data={{
                                                labels: selectedDepthData.map((d: any) => formatDate(d.timestamp)),
                                                datasets: [{
                                                    label: 'pH',
                                                    data: selectedDepthData.map((d: any) => d.ph_units ?? 0),
                                                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                                                }]
                                            }}
                                            options={{
                                                ...chartOptions,
                                                plugins: {
                                                    ...chartOptions.plugins,
                                                    title: {
                                                        display: false
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">용존산소 (mg/L)</h3>
                                        <Bar
                                            data={{
                                                labels: selectedDepthData.map((d: any) => formatDate(d.timestamp)),
                                                datasets: [{
                                                    label: 'DO',
                                                    data: selectedDepthData.map((d: any) => d.hdo_mg_l ?? 0),
                                                    backgroundColor: 'rgba(153, 102, 255, 0.5)',
                                                }]
                                            }}
                                            options={{
                                                ...chartOptions,
                                                plugins: {
                                                    ...chartOptions.plugins,
                                                    title: {
                                                        display: false
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">탁도 (NTU)</h3>
                                        <Bar
                                            data={{
                                                labels: selectedDepthData.map((d: any) => formatDate(d.timestamp)),
                                                datasets: [{
                                                    label: '탁도',
                                                    data: selectedDepthData.map((d: any) => d.turb_ntu ?? 0),
                                                    backgroundColor: 'rgba(255, 159, 64, 0.5)',
                                                }]
                                            }}
                                            options={{
                                                ...chartOptions,
                                                plugins: {
                                                    ...chartOptions.plugins,
                                                    title: {
                                                        display: false
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <Bar data={chartData} options={chartOptions} />
                            )}

                            {showWaterQuality && (
                                <button
                                    className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
                                    onClick={() => {
                                        setShowWaterQuality(false);
                                        setSelectedDepthData([]);
                                    }}
                                >
                                    수심 통계로 돌아가기
                                </button>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navermap;
