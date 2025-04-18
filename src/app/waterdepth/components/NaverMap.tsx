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

const Navermap: React.FC<TrackingMapProps> = ({ robotData }) => {
    const mapRef = useRef<any>(null);
    const markerRef = useRef<any>(null);
    const clusterRef = useRef<any>(null);
    const [selectedCluster, setSelectedCluster] = useState<any>(null);
    const [depthStats, setDepthStats] = useState<any>(null);

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

        // 기존 마커 제거
        if (markerRef.current) {
            markerRef.current.forEach((marker: any) => marker.setMap(null));
            markerRef.current = null;
        }
        if (clusterRef.current) {
            clusterRef.current.setMap(null);
            clusterRef.current = null;
        }

        if (window.naver && window.naver.maps) {
            const container = document.getElementById('map');

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
            const zoom = map.getZoom();

            // 클러스터 표시
            const clusterMarkers = dataArray.map((data) => {
                const color = getMarkerColor((data.sample_depth ?? 0) / 100);
                const position = new window.naver.maps.LatLng(data.latitude, data.longitude);
                return new window.naver.maps.Marker({
                    position,
                    map: null,
                    icon: {
                        content: `
                                <div 
                                    style="
                                        width: 10px;
                                        height: 10px;
                                        border-radius: 50%;
                                        border: 1px solid white;
                                        background : ${color};
                                    ">
                                </div>
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
                                ${clusterMarkers.length}
                            </div>
                        `,
                    anchor: new window.naver.maps.Point(10, 10)
                }
            });

            window.naver.maps.Event.addListener(cluster, 'click', () => {
                setSelectedCluster(cluster);
                const stats = calculateDepthStats(clusterMarkers);
                setDepthStats(stats);
            });

            clusterRef.current = cluster;
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
    }, [robotData]);

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
            : depthStats?.map((stat: any) => stat.range) || [],
        datasets: [
            {
                label: showWaterQuality ? '클로로필 (μg/L)' : '평균 수심 (m)',
                data: showWaterQuality
                    ? selectedDepthData.map(d => d.chl_ug_l ?? 0)
                    : depthStats?.map((stat: any) => stat.average) || [],
                backgroundColor: showWaterQuality
                    ? 'rgba(54, 162, 235, 0.5)'
                    : depthRanges.map(range => range.color),
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

            {selectedCluster && depthStats && (
                <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-10 max-h-[90vh] overflow-y-auto w-[500px]">

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
                                        labels: selectedDepthData.map(d => formatDate(d.timestamp)),
                                        datasets: [{
                                            label: '클로로필',
                                            data: selectedDepthData.map(d => d.chl_ug_l ?? 0),
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
                                        labels: selectedDepthData.map(d => formatDate(d.timestamp)),
                                        datasets: [{
                                            label: '남조류',
                                            data: selectedDepthData.map(d => d.bg_ppb ?? 0),
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
                                        labels: selectedDepthData.map(d => formatDate(d.timestamp)),
                                        datasets: [{
                                            label: 'pH',
                                            data: selectedDepthData.map(d => d.ph_units ?? 0),
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
                                        labels: selectedDepthData.map(d => formatDate(d.timestamp)),
                                        datasets: [{
                                            label: 'DO',
                                            data: selectedDepthData.map(d => d.hdo_mg_l ?? 0),
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
                                        labels: selectedDepthData.map(d => formatDate(d.timestamp)),
                                        datasets: [{
                                            label: '탁도',
                                            data: selectedDepthData.map(d => d.turb_ntu ?? 0),
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

                            <div>
                                <h3 className="text-lg font-semibold mb-2">전도도</h3>
                                <Bar
                                    data={{
                                        labels: selectedDepthData.map(d => formatDate(d.timestamp)),
                                        datasets: [{
                                            label: '전도도',
                                            data: selectedDepthData.map(d => d.spcond_us_cm ?? 0),
                                            backgroundColor: 'rgba(80, 20, 64, 0.5)',
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
                                <h3 className="text-lg font-semibold mb-2">수온</h3>
                                <Bar
                                    data={{
                                        labels: selectedDepthData.map(d => formatDate(d.timestamp)),
                                        datasets: [{
                                            label: '수온',
                                            data: selectedDepthData.map(d => d.temp_deg_c ?? 0),
                                            backgroundColor: 'rgba(160, 180, 140, 0.5)',
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
                </div>
            )}
        </div>
    );

};

export default Navermap;
