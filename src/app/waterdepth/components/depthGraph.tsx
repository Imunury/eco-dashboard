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

interface TimeRange {
    min: number;
    max: number;
    color: string;
    label: string;
}

interface TimeGraphProps {
    selectedDepthData: water_quality[];
    onRangeClick: (range: TimeRange) => void;
    onReset: () => void;
}

const timeRanges = [
    { min: 9, max: 10, color: 'rgb(0 ,255, 0)', label: '09-10시' },
    { min: 10, max: 11, color: 'rgb(0, 180, 0)', label: '10-11시' },
    { min: 11, max: 12, color: 'rgb(0, 110, 0)', label: '11-12시' },
    { min: 12, max: 13, color: 'rgb(255, 255, 100)', label: '12-13시' },
    { min: 13, max: 14, color: 'rgb(220, 220, 0)', label: '13-14시' },
    { min: 14, max: 15, color: 'rgb(180, 180, 0)', label: '14-15시' },
    { min: 15, max: 16, color: 'rgb(255, 130, 130)', label: '15-16시' },
    { min: 16, max: 17, color: 'rgb(255, 50, 50)', label: '16-17시' },
    { min: 17, max: 18, color: 'rgb(255, 0, 0)', label: '17-18시' },
]

const depthRanges = [
    { min:1, max:3, depth : '1-3m'},
    { min:3, max:5, depth : '3-5m'},
    { min:5, max:7, depth : '5-7m'},
    { min:7, max:9, depth : '7-9m'},
    { min:9, max:11, depth : '9-11m'},
    { min:11, max:13, depth : '11-13m'},
    { min:13, max:15, depth : '13-15m'},
    { min:15, max:17, depth : '15-17m'},
    { min:17, max:19, depth : '17-19m'},
    { min:19, max:21, depth : '19-21m'},
]

const DepthGraph: React.FC<TimeGraphProps> = ({
    selectedDepthData,
    onRangeClick,
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

    const renderWaterQualityGraph = (data: water_quality[], title: string, dataKey: keyof water_quality, color: string) => {
        // 데이터를 수심별로 그룹화
        const depthData = depthRanges.map(range => {
            const minDepth = range.min;
            const maxDepth = range.max;
            
            const filteredData = data.filter(d => {
                const depth = (d.sample_depth ?? 0) / 100;
                return depth >= minDepth && depth < maxDepth;
            });
            
            if (filteredData.length === 0) return null;
            
            const average = filteredData.reduce((sum, d) => sum + Number(d[dataKey] ?? 0), 0) / filteredData.length;
            return {
                depth: range.depth,
                value: average
            };
        }).filter(item => item !== null);

        return (
            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <Line
                    data={{
                        labels: depthData.map(item => item.depth),
                        datasets: [{
                            label: title,
                            data: depthData.map(item => item.value),
                            borderColor: color,
                            backgroundColor: color.replace('rgb', 'rgba').replace(')', ', 0.5)'),
                            tension: 0.1
                        }]
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
            <div className="mt-4">
                <ul className="grid grid-cols-5 gap-2 text-sm">
                    {timeRanges.map((range, idx) => (
                        <li
                            key={idx}
                            className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-1 rounded"
                            onClick={() => onRangeClick(range)}
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

            {(
                <div className="space-y-4">
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        '클로로필 농도 (μg/L)',
                        'chl_ug_l',
                        'rgb(54, 162, 235)'
                    )}
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        '남조류 농도 (ppb)',
                        'bg_ppb',
                        'rgb(255, 99, 132)'
                    )}
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        'pH',
                        'ph_units',
                        'rgb(75, 192, 192)'
                    )}
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        '용존산소 (mg/L)',
                        'hdo_mg_l',
                        'rgb(153, 102, 255)'
                    )}
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        '탁도 (NTU)',
                        'turb_ntu',
                        'rgb(255, 159, 64)'
                    )}
                </div>
            )}

        </div>
    );
};

export default DepthGraph;
