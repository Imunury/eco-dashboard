"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import stnMapping2 from "@/utils/stnMapping2"
import wlMapping from "@/utils/wlMapping"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Weather: React.FC = () => {
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [weatherData, setWeatherData] = useState<{ time: string; rn: string }[]>([]);
    const [wlData, setWlData] = useState<{ time: string; rn: string }[]>([]);
    const [stn, setStn] = useState<string>("")
    const [wl, setWl] = useState<string>("")
    const [mt, setMt] = useState<number>(0)
    const [weatherLabel, setWeatherLabel] = useState<string[]>([]);
    const [wlLabel, setWlLabel] = useState<string[]>([]);

    const params = useParams();
    const id = params?.id as string | undefined;

    useEffect(() => {
        if (id && stnMapping2[id] !== undefined) {
            setStn(stnMapping2[id]);
        }
    }, [id]);

    useEffect(() => {
        if (id && wlMapping[id] !== undefined) {
            setWl(wlMapping[id]);
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
                stn: item.rfobscd,
            }));

            setWeatherData(filteredData);

        } catch (error) {
            console.error("Error fetching weather data:", error);
        }

        try {
            const wlResponse = await fetch(
                `https://api.hrfco.go.kr/966803A1-1446-4FCC-A18D-3998A76E082E/waterlevel/list/1H/${wl}/${sdt}/${edt}.json`
            );
            const content = await wlResponse.json();
            const data = content.content

            setMt(data[0].ymdhm - data[data.length - 1].ymdhm)

            const filteredData = data.map((item: any) => ({
                time: item.ymdhm,
                rn: item.wl,
                level: item.wlobscd,
            }));

            setWlData(filteredData);

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
    // time 기준 오름차순 정렬
    const sortedWeatherData = useMemo(() => {
        return [...weatherData].sort((a, b) => a.time.localeCompare(b.time)); // ✅ 원본 유지하면서 정렬
    }, [weatherData]); // ✅ weatherData가 변경될 때만 정렬 실행

    useEffect(() => {
        if (sortedWeatherData.length === 0) return; // ✅ 데이터 없을 때 실행 X

        setWeatherLabel(
            sortedWeatherData.map((item) => (mt <= 700 ? item.time.slice(4, 10) : item.time.slice(2, 8)))
        );
    }, [mt, sortedWeatherData]); // ✅ 의존성 배열을 올바르게 설정

    const rainfallChartData = {
        // labels: sortedWeatherData.map((item) => item.time.slice(4, 10)), 
        labels: weatherLabel,
        datasets: [
            {
                label: '강수량 (mm)',
                data: sortedWeatherData.map((item) => item.rn), // y축 데이터
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.1,
            }
        ]
    };

    const sortedWlData = useMemo(() => {
        return [...wlData].sort((a, b) => a.time.localeCompare(b.time)); // ✅ 원본 유지하면서 정렬
    }, [wlData]); // ✅ weatherData가 변경될 때만 정렬 실행

    useEffect(() => {
        if (sortedWlData.length === 0) return; // ✅ 데이터 없을 때 실행 X

        setWlLabel(
            sortedWlData.map((item) => (mt <= 700 ? item.time.slice(4, 10) : item.time.slice(2, 8)))
        );
    }, [mt, sortedWlData]); // ✅ 의존성 배열을 올바르게 설정

    const wlChartData = {
        labels: wlLabel,
        datasets: [
            {
                label: "수위 (m)",
                data: sortedWlData.map((item) => item.rn),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 1)",
                tension: 0.1,
                fill: true,
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
                <Line data={wlChartData} />
            </div>
        </section>
    );
};

export default Weather;
