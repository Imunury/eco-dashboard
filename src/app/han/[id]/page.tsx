"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ecobot_status_temp } from "@prisma/client";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { start } from "repl";
import stnMapping2 from "@/utils/stnMapping2"
import boMapping from "@/utils/boMapping"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Weather: React.FC = () => {
    const [robotData, setRobotData] = useState<ecobot_status_temp | null>(null);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [weatherData, setWeatherData] = useState<{ time: string; rn: string }[]>([]);
    const [boData, setBoData] = useState<{ time: string; rn: string }[]>([]);
    const [stn, setStn] = useState<string>("")
    const [bo, setBo] = useState<string>("")

    const params = useParams();
    const id = params?.id as string | undefined;

    useEffect(() => {
        if (id && stnMapping2[id] !== undefined) {
            setStn(stnMapping2[id]); // ✅ 매핑된 값 설정
        }
    }, [id]);

    useEffect(() => {
        if (id && boMapping[id] !== undefined) {
            setBo(boMapping[id]); // ✅ 매핑된 값 설정
        }
    }, [id]);

    const fetchData = async (sdt: string, edt: string) => {
        try {
            const rianfallResponse = await fetch(
                `https://api.hrfco.go.kr/966803A1-1446-4FCC-A18D-3998A76E082E/rainfall/list/1H/${stn}/${sdt}/${edt}.json`
            );
            const content = await rianfallResponse.json();
            const data = content.content

            const filteredData = data.map((item: any) => ({
                time: item.ymdhm,
                rn: item.rf,
                stn: item.rfobscd
            }));

            setWeatherData(filteredData);

        } catch (error) {
            console.error("Error fetching weather data:", error);
        }

        try {
            const boResponse = await fetch(
                `https://api.hrfco.go.kr/966803A1-1446-4FCC-A18D-3998A76E082E/bo/list/1H/${bo}/${sdt}/${edt}.json`
            );
            const content = await boResponse.json();
            const data = content.content

            const filteredData = data.map((item: any) => ({
                time: item.ymdhm,
                rn: item.sfw,
                bo: item.rfobscd
            }));

            setBoData(filteredData);

        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleSubmit = () => {
        if (startDate && endDate) {
            fetchData(
                startDate.replace(/-/g, "") + "0000",
                endDate.replace(/-/g, "") + "0000"
            );
        }
    };

    // 차트 데이터 설정
    const rainfallChartData = {
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

    const boChartData = {
        labels: boData.map((item) => {
            // item.time에서 시간(YYMMDDHH)만 추출
            const time = item.time.slice(2, 10); // YYYYMMDDHH 형식으로 잘라냄
            return time;
        }),  // x축: 시간 (YYMMDDHH)
        datasets: [
            {
                label: '강수량 (mm)',       // y축: 강수량
                data: boData.map((item) => item.rn), // y축 데이터
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            },
        ],
    };

    return (
        <section className="h-full w-full">
            <h1>{id}</h1>
            <h2>시작 날짜</h2>
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <h2>종료 날짜</h2>
            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <div>
                <Line data={rainfallChartData} />
            </div>
            <div>
                <Line data={boChartData} />
            </div>
        </section>
    );
};

export default Weather;
