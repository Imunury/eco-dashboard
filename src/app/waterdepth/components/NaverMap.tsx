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

interface TrackingMapProps {
    robotData: water_quality | water_quality[];
}

interface DepthRange {
    min: number;
    max: number;
    color: string;
    label: string;
}

const depthRanges: DepthRange[] = [
    { min: 1.8, max: 2.2, color: 'bg-red-600', label: '1.8-2.2m' },
    { min: 3.8, max: 4.2, color: 'bg-red-700', label: '3.8-4.2m' },
    { min: 5.8, max: 6.2, color: 'bg-red-800', label: '5.8-6.2m' },
    { min: 7.8, max: 8.2, color: 'bg-red-900', label: '7.8-8.2m' }
];

const Navermap: React.FC<TrackingMapProps> = ({ robotData }) => {
    const mapRef = useRef<any>(null);
    const markerRef = useRef<any>(null);
    const clusterRef = useRef<any>(null);
    const [selectedCluster, setSelectedCluster] = useState<any>(null);
    const [depthStats, setDepthStats] = useState<any>(null);

    const getMarkerColor = (depth: number) => {
        const normalizedDepth = depth;
        for (const range of depthRanges) {
            if (normalizedDepth >= range.min && normalizedDepth <= range.max) {
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

    const calculateDepthStats = (markers: any[]) => {
        const stats = depthRanges.map(range => {
            const depths = markers
                .map(marker => marker.getPosition())
                .map(pos => {
                    const data = Array.isArray(robotData) ? robotData : [robotData];
                    return data.find(d =>
                        d.latitude === pos.lat() &&
                        d.longitude === pos.lng()
                    )?.sample_depth;
                })
                .filter(depth => depth !== undefined)
                .map(depth => (depth ?? 0) / 100)
                .filter(depth => depth >= range.min && depth <= range.max);

            return {
                range: range.label,
                count: depths.length,
                average: depths.length > 0
                    ? depths.reduce((a, b) => a + b, 0) / depths.length
                    : 0
            };
        });

        return stats;
    };

    useEffect(() => {
        const dataArray = Array.isArray(robotData) ? robotData : [robotData];

        if (window.naver && window.naver.maps && !mapRef.current) {
            const container = document.getElementById('map');
            const options = {
                center: new window.naver.maps.LatLng(dataArray[0].latitude, dataArray[0].longitude),
                zoom: 19,
                mapTypeId: 'satellite'
            };
            const map = new window.naver.maps.Map(container, options);
            mapRef.current = map;

            // Add zoom change listener
            window.naver.maps.Event.addListener(map, 'zoom_changed', () => {
                const zoom = map.getZoom();
                if (zoom <= 18) {
                    // Create cluster
                    if (markerRef.current) {
                        markerRef.current.forEach((marker: any) => marker.setMap(null));
                    }

                    const markers = dataArray.map((data) => {
                        const color = getMarkerColor((data.sample_depth ?? 0) / 100);
                        const position = new window.naver.maps.LatLng(data.latitude, data.longitude);
                        return new window.naver.maps.Marker({
                            position,
                            map: null,
                            icon: {
                                content: `
                                    <div class="${color}" 
                                        style="
                                            width: 10px;
                                            height: 10px;
                                            border-radius: 50%;
                                            border: 1px solid white;
                                    "></div>
                                `,
                                anchor: new window.naver.maps.Point(5, 5)
                            }
                        });
                    });

                    const cluster = new window.naver.maps.Marker({
                        position: new window.naver.maps.LatLng(
                            dataArray[0].latitude,
                            dataArray[0].longitude
                        ),
                        map: map,
                        icon: {
                            content: `
                                <div class="bg-blue-500 text-white rounded-full p-2">
                                    ${markers.length}
                                </div>
                            `,
                            anchor: new window.naver.maps.Point(10, 10)
                        }
                    });

                    window.naver.maps.Event.addListener(cluster, 'click', () => {
                        setSelectedCluster(cluster);
                        const stats = calculateDepthStats(markers);
                        setDepthStats(stats);
                    });

                    clusterRef.current = cluster;
                } else {
                    // Show individual markers
                    if (clusterRef.current) {
                        clusterRef.current.setMap(null);
                    }

                    const markers = dataArray.map((data) => {
                        const color = getMarkerColor((data.sample_depth ?? 0) / 100);
                        const position = new window.naver.maps.LatLng(data.latitude, data.longitude);
                        const marker = new window.naver.maps.Marker({
                            position,
                            map: map,
                            icon: {
                                content: `
                                    <div class="${color}" 
                                        style="
                                            width: 10px;
                                            height: 10px;
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
                                    <b>시간:</b> ${formatDate(data.timestamp)}<br/> 
                                    <b>깊이</b> ${data.sample_depth ? (data.sample_depth / 100).toFixed(2) : '-'}m<br/> 
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
            });
        }
    }, [robotData]);

    const chartData = {
        labels: depthStats?.map((stat: any) => stat.range) || [],
        datasets: [
            {
                label: '평균 수심 (m)',
                data: depthStats?.map((stat: any) => stat.average) || [],
                backgroundColor: depthRanges.map(range => range.color),
            }
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
                text: '수심별 평균 통계',
            },
        },
    };

    return (
        <div className="w-full h-full relative">
            <div id="map" className="w-full h-full"></div>
            {selectedCluster && depthStats && (
                <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-10">
                    <Bar data={chartData} options={chartOptions} />
                    <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => {
                            setSelectedCluster(null);
                            setDepthStats(null);
                        }}
                    >
                        닫기
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navermap;
