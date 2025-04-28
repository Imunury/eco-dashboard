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

interface DepthRange {
    min: number;
    max: number;
    color: string;
    label: string;
}

interface TimeGraphProps {
    selectedDepthData: water_quality[];
    onRangeClick: (range: DepthRange) => void;
    onReset: () => void;
}

const depthRanges: DepthRange[] = [
    { min: 1.0, max: 3.0, color: 'rgb(0 ,255, 0)', label: '2m' },
    { min: 3.0, max: 5.0, color: 'rgb(0, 180, 0)', label: '4m' },
    { min: 5.0, max: 7.0, color: 'rgb(0, 110, 0)', label: '6m' },
    { min: 7.0, max: 9.0, color: 'rgb(255, 255, 100)', label: '8m' },
    { min: 9.0, max: 11.0, color: 'rgb(220, 220, 0)', label: '10m' },
    { min: 11.0, max: 13.0, color: 'rgb(180, 180, 0)', label: '12m' },
    { min: 13.0, max: 15.0, color: 'rgb(255, 130, 130)', label: '14m' },
    { min: 15.0, max: 17.0, color: 'rgb(255, 50, 50)', label: '16m' },
    { min: 17.0, max: 19.0, color: 'rgb(255, 0, 0)', label: '18m' },
    { min: 19.0, max: 21.0, color: 'rgb(180, 0, 0)', label: '20m' }
];

const TimeGraph: React.FC<TimeGraphProps> = ({
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
        return (
            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <Line
                    data={{
                        labels: data.map((d: any) => formatDate(d.timestamp)),
                        datasets: [{
                            label: title,
                            data: data.map((d: any) => d[dataKey] ?? 0),
                            borderColor: color,
                            backgroundColor: color.replace('rgb', 'rgba').replace(')', ', 0.5)'),
                            tension: 0.1
                        }]
                    }}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top' as const,
                            },
                            title: {
                                display: false
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
                    {depthRanges.map((range, idx) => (
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
                    {renderWaterQualityGraph(
                        selectedDepthData,
                        '수온 (°C)',
                        'temp_deg_c',
                        'rgb(150, 100, 120)'
                    )}
                </div>
            )}

        </div>
    );
};

export default TimeGraph;
