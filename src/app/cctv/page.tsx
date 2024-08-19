"use client"

import React, { useState, useEffect } from 'react';
import CCTVSeg from "./CCTVSeg";

interface CCTVSegProps {
    baseIp: string;
}

const CCTVSegWithLoading: React.FC<CCTVSegProps> = ({ baseIp }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 5000); // Simulate loading time
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="spinner"></div>
            ) : (
                <CCTVSeg baseIp={baseIp} />
            )}
        </div>
    );
};

const CCTV: React.FC = () => {
    return (
        <section className="CCTV">
            <div>
                <div>
                    <h2>소양강댐</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00001/" />
                </div>
                <div>
                    <h2>광교저수지</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00002/" />
                </div>
                <div>
                    <h2>문의취수장</h2>
                    {/* <iframe src="https://ecobotdashboard1.co.kr/ecobot00003/" /> */}
                </div>
            </div>
            <div>
                <div>
                    <h2>강정고령보</h2>
                    {/* <iframe  src="https://ecobotdashboard1.co.kr/ecobot00004/" /> */}
                </div>
                <div>
                    <h2>안동댐</h2>
                    {/* <iframe  src="https://ecobotdashboard1.co.kr/ecobot00005/" /> */}
                </div>
                <div>
                    <h2>추소리</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00006/" />
                </div>
            </div>
            <div>
                <div>
                    <h2>서낙동강1</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00007/" />
                </div>
                <div>
                    <h2>서낙동강2</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00008/" />
                </div>
                <div>
                    <h2>물금매리</h2>
                    {/* <iframe  src="https://ecobotdashboard1.co.kr/ecobot00014/" /> */}
                </div>
            </div>
        </section>
    );
};

export default CCTV;
