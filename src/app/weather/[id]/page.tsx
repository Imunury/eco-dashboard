"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ecobot_status_temp } from "@prisma/client";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import stnMapping1 from "@/utils/stnMapping1"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Weather: React.FC = () => {
    const [robotData, setRobotData] = useState<ecobot_status_temp | null>(null);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [weatherData, setWeatherData] = useState<{ time: string; rn: string }[]>([]);
    const [stn, setStn] = useState<string>("")

    const params = useParams();
    const id = params?.id as string | undefined;

    useEffect(() => {
        if (id && stnMapping1[id] !== undefined) {
            setStn(stnMapping1[id]); // ✅ 매핑된 값 설정
        }
    }, [id]);

    const fetchData = async (tm1: string, tm2: string) => {
        try {
            const response = await fetch(
                `/api/weather_proxy?tm1=${tm1}0000&tm2=${tm2}0000&stn=${stn}&help=0&authKey=vtgXY7UzRtOYF2O1M4bT-Q`
            );
            const data = await response.json();

            const filteredData = data.map((item: any) => ({
                time: item.YYMMDDHHMI_KST,
                rn: item.RN_mm === '-9.0' ? '0' : item.RN_mm,
                stn: item.STN_ID
            }));

            console.log(filteredData)

            setWeatherData(filteredData);

        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleSubmit = () => {
        if (startDate && endDate) {
            fetchData(startDate.replace(/-/g, ""), endDate.replace(/-/g, ""));
        }
    };

    // 차트 데이터 설정
    const chartData = {
        labels: weatherData.map((item) => {
            // item.time에서 시간(YYMMDDHH)만 추출
            const time = item.time.slice(2, 10); // YYYYMMDDHH 형식으로 잘라냄
            return time;
        }),  // x축: 시간 (YYMMDDHH)
        datasets: [
            {
                label: '강수량 (mm)',       // y축: 강수량
                data: weatherData.map((item) => item.rn), // y축 데이터
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            },
        ],
    };

    return (
        <section className="h-full w-full">
            <h1>{id}</h1>
            <h1>시작 날짜</h1>
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <h1>종료 날짜</h1>
            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <div>
                <Line data={chartData} />
            </div>
        </section>
    );
};

export default Weather;
