import React from 'react';
import { Line } from 'react-chartjs-2';
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
import { water_quality } from '@prisma/client';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface TimeGraphProps {
    selectedDepthData: water_quality[];
    onReset: () => void;
}

const timeRanges = [
    { min: 9, max: 10, color: 'rgb(0 ,255, 0)', label: '09-10시' },
    { min: 10, max: 11, color: 'rgb(0, 180, 0)', label: '10-11시' },
    { min: 11, max: 12, color: 'rgb(0, 110, 0)', label: '11-12시' },
    { min: 12, max: 13, color: 'rgb(230, 230, 50)', label: '12-13시' },
    { min: 13, max: 14, color: 'rgb(220, 220, 0)', label: '13-14시' },
    { min: 14, max: 15, color: 'rgb(180, 180, 0)', label: '14-15시' },
    { min: 15, max: 16, color: 'rgb(255, 150, 150)', label: '15-16시' },
    { min: 16, max: 17, color: 'rgb(255, 100, 100)', label: '16-17시' },
    { min: 17, max: 18, color: 'rgb(255, 0, 0)', label: '17-18시' },
]

const depthRanges = [
    { min: 1, max: 3, depth: '1-3m' },
    { min: 3, max: 5, depth: '3-5m' },
    { min: 5, max: 7, depth: '5-7m' },
    { min: 7, max: 9, depth: '7-9m' },
    { min: 9, max: 11, depth: '9-11m' },
    { min: 11, max: 13, depth: '11-13m' },
    { min: 13, max: 15, depth: '13-15m' },
    { min: 15, max: 17, depth: '15-17m' },
    { min: 17, max: 19, depth: '17-19m' },
    { min: 19, max: 21, depth: '19-21m' },
]

const DepthGraph: React.FC<TimeGraphProps> = ({
    selectedDepthData,
    onReset
}) => {
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

    const renderWaterQualityGraph = (data: water_quality[], title: string, dataKey: keyof water_quality) => {
        // 데이터를 수심별로 그룹화하고 시간대별로 분리
        const depthData = depthRanges.map(range => {
            const minDepth = range.min;
            const maxDepth = range.max;
            
            // 각 시간대별로 데이터 필터링
            const timeRangeData = timeRanges.map(timeRange => {
                const filteredData = data.filter(d => {
                    const depth = (d.sample_depth ?? 0) / 100;
                    const hour = new Date(d.timestamp).getHours();
                    return depth >= minDepth && depth < maxDepth && 
                           hour >= timeRange.min && hour < timeRange.max;
                });
                
                if (filteredData.length === 0) return null;
                
                const average = filteredData.reduce((sum, d) => sum + Number(d[dataKey] ?? 0), 0) / filteredData.length;
                return {
                    timeRange: timeRange.label,
                    value: average
                };
            }).filter(item => item !== null);

            return {
                depth: range.depth,
                timeRangeData
            };
        }).filter(item => item.timeRangeData.length > 0);

        // 각 시간대별로 데이터셋 생성
        const datasets = timeRanges.map(timeRange => {
            const data = depthData.map(item => {
                const timeData = item.timeRangeData.find(t => t.timeRange === timeRange.label);
                return timeData ? timeData.value : null;
            });

            return {
                label: timeRange.label,
                data: data,
                borderColor: timeRange.color,
                backgroundColor: timeRange.color.replace('rgb', 'rgba').replace(')', ', 0.5)'),
                tension: 0.1
            };
        }).filter(dataset => dataset.data.some(value => value !== null));

        return (
            <div>
                <h3 className="text-black text-lg font-semibold mb-2">{title}</h3>
                <Line
                    data={{
                        labels: depthData.map(item => item.depth),
                        datasets: datasets
                    }}
                    options={{
                        responsive: true,
                        indexAxis: 'y',
                        plugins: {
                            legend: {
                                position: 'top' as const,
                            },
                            title: {
                                display: false
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: title
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: '수심 (m)'
                                }
                            }
                        }
                    }}
                />
            </div>
        );
    };

    return (
        <div className="space-y-4">
            {(
                <div className="space-y-4">
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        '클로로필 농도 (μg/L)',
                        'chl_ug_l'
                    )}
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        '남조류 농도 (ppb)',
                        'bg_ppb'
                    )}
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        'pH',
                        'ph_units'
                    )}
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        '용존산소 (mg/L)',
                        'hdo_mg_l'
                    )}
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        '탁도 (NTU)',
                        'turb_ntu'
                    )}
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        '수온 ( °C)',
                        'temp_deg_c'
                    )}
                </div>
            )}
        </div>
    );
};

export default DepthGraph;
