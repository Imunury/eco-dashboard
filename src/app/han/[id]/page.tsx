"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import stnMapping2 from "@/utils/stnMapping2"
import wlMapping from "@/utils/wlMapping"

ChartJS.register(Filler, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Weather: React.FC = () => {
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    const params = useParams();
    const id = params?.id as string | undefined;

    useEffect(() => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const formatDate = (date: Date) => date.toISOString().split('T')[0];

        const initialStartDate = formatDate(yesterday);
        const initialEndDate = formatDate(today);

        setStartDate(initialStartDate);
        setEndDate(initialEndDate);

        if (id && stnMapping2[id] !== undefined && wlMapping[id] !== undefined) {
            fetchData(initialStartDate.replace(/-/g, "") + "0000", initialEndDate.replace(/-/g, "") + "0000");
        }
    }, [id]);

    const [weatherData, setWeatherData] = useState<{ time: string; rn: string }[]>([]);
    const [wlData, setWlData] = useState<{ time: string; rn: string }[]>([]);
    const [stn, setStn] = useState<string>("")
    const [wl, setWl] = useState<string>("")
    const [mt, setMt] = useState<number>(0)
    const [weatherLabel, setWeatherLabel] = useState<string[]>([]);
    const [wlLabel, setWlLabel] = useState<string[]>([]);



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

    useEffect(() => {
        if (startDate && endDate && id && stnMapping2[id] !== undefined && wlMapping[id] !== undefined) {
            fetchData(
                startDate.replace(/-/g, "") + "0000",
                endDate.replace(/-/g, "") + "0000"
            );
        }
    }, [startDate, endDate, id]);

    // 차트 데이터 설정
    // time 기준 오름차순 정렬
    const sortedWeatherData = useMemo(() => {
        return [...weatherData].sort((a, b) => a.time.localeCompare(b.time));
    }, [weatherData]);

    useEffect(() => {
        if (sortedWeatherData.length === 0) return;

        setWeatherLabel(
            sortedWeatherData.map((item) => (mt <= 700 ? item.time.slice(4, 10) : item.time.slice(2, 8)))
        );
    }, [mt, sortedWeatherData]);

    const rainfallChartData = {
        labels: weatherLabel,
        datasets: [
            {
                label: '강수량 (mm)',
                data: sortedWeatherData.map((item) => item.rn),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                tension: 0.1,
                pointRadius: 3
            },
        ],
    };

    const sortedWlData = useMemo(() => {
        return [...wlData].sort((a, b) => a.time.localeCompare(b.time));
    }, [wlData]);

    useEffect(() => {
        if (sortedWlData.length === 0) return;

        setWlLabel(
            sortedWlData.map((item) => (mt <= 700 ? item.time.slice(4, 10) : item.time.slice(2, 8)))
        );
    }, [mt, sortedWlData]);

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
                pointRadius: 0,
            },
        ],

    };

    return (
        <section className="h-full w-full">
            <div className="flex pt-3 items-center">
                <div className="p-3">
                    <h1>시작 날짜</h1>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="p-3">
                    <h1>종료 날짜</h1>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                
            </div>

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
