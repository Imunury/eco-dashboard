"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import stnMapping2 from "@/utils/stnMapping2"
import wlMapping from "@/utils/wlMapping"
import { motion } from "framer-motion";

import "@/styles/water_level.css"

const WaterLevel: React.FC = () => {

    const [startDate, setStartDate] = useState<string>("");
    const [weatherData, setWeatherData] = useState<{ time: string; rn: number }[]>([]);
    const [wlData, setWlData] = useState<{ time: string; rn: number }[]>([]);
    const [stn, setStn] = useState<string>("")
    const [wl, setWl] = useState<string>("")
    const [currentLevel, setCurrentLevel] = useState<number>(0);
    const [rainIntensity, setRainIntensity] = useState<number>(0); // 비 강도 상태
    const rainContainerRef = useRef<HTMLDivElement>(null);

    const params = useParams();
    const id = params?.id as string | undefined;


    useEffect(() => {
        if (id && stnMapping2[id] !== undefined) {
            setStn(stnMapping2[id]); // ✅ 매핑된 값 설정
        }
    }, [id]);

    useEffect(() => {
        if (id && wlMapping[id] !== undefined) {
            setWl(wlMapping[id]); // ✅ 매핑된 값 설정
        }
    }, [id]);

    useEffect(() => {
        if (wlData.length > 0) {
            if (wlData[0].rn > 100) {
                setCurrentLevel((wlData[0].rn)/10); // 최신 수위 값 바로 반영
            } else {
                setCurrentLevel((wlData[0].rn)); 
            }
        }
    }, [wlData]);

    useEffect(() => {
        if (weatherData.length > 0) {
            setRainIntensity(weatherData[0].rn); // 최신 강수량 반영
        }
    }, [weatherData]);

    const fetchData = async (sdt: string) => {
        try {
            const rianfallResponse = await fetch(
                `https://api.hrfco.go.kr/966803A1-1446-4FCC-A18D-3998A76E082E/rainfall/list/10M/${stn}/${sdt}/${sdt}.json`
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
            const wlResponse = await fetch(
                `https://api.hrfco.go.kr/966803A1-1446-4FCC-A18D-3998A76E082E/waterlevel/list/10M/${wl}/${sdt}/${sdt}.json`
            );
            const content = await wlResponse.json();
            const data = content.content

            const filteredData = data.map((item: any) => ({
                time: item.ymdhm,
                rn: item.wl,
                level: item.wlobscd
            }));

            setWlData(filteredData);

        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleSubmit = () => {
        if (startDate) {
            let formattedDate = startDate.replace(/[-T:]/g, ""); // "-" "T" ":" 제거
            formattedDate = formattedDate.slice(0, -1) + "0"; // 분을 10분 단위로 조정

            fetchData(formattedDate);
        }
    };

    const getRainIntensityClass = (intensity: number) => {
        if (intensity <= 1) return 'rain_none';
        if (intensity <= 10) return 'rain_light';
        if (intensity <= 30) return 'rain_moderate';
        if (intensity <= 60) return 'rain_heavy';
        return 'rain_very_heavy';
    };

    const createRainDrops = () => {
        if (!rainContainerRef.current) return;

        const container = rainContainerRef.current;
        container.innerHTML = '';

        const rainClass = getRainIntensityClass(rainIntensity);
        container.className = `rain_container ${rainClass}`;

        const dropCount = Math.min(100, Math.max(20, rainIntensity * 2));

        for (let i = 0; i < dropCount; i++) {
            const drop = document.createElement('div');
            drop.className = 'rain_drop';
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(drop);
        }
    };

    useEffect(() => {
        createRainDrops();
    }, [rainIntensity]);

    return (
        <section className="h-full w-full relative">
            <div ref={rainContainerRef} className="rain_container"></div>

            <input
                className="m-3"
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <h1>
                수위 : {currentLevel}m
            </h1>
            <h1>
                강수량 : {rainIntensity}
            </h1>
            <motion.div
                className="water_container"
                animate={{ height: `${currentLevel * 50}px` }}
                style={{
                    transform: `rotateX(30deg) translateZ(0)`,
                    transformOrigin: 'bottom'
                }}
            >
                <div className="water_surface"></div>
                <div className="water_ripples"></div>
            </motion.div>
        </section>
    );

};


export default WaterLevel;
