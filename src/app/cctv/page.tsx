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
                    <iframe src="https://ecobotdashboard1.co.kr/cctv1/" />
                </div>
                <div>
                    <h2>광교저수지</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/cctv2/" />
                </div>
                <div>
                    <h2>문의취수장</h2>
                    {/* <iframe src="https://ecobotdashboard1.co.kr/cctv3/" /> */}
                </div>
            </div>
            <div>
                <div>
                    <h2>강정고령보</h2>
                    {/* <iframe  src="https://ecobotdashboard1.co.kr/cctv4/" /> */}
                </div>
                <div>
                    <h2>안동댐</h2>
                    {/* <iframe  src="https://ecobotdashboard1.co.kr/cctv5/" /> */}
                </div>
                <div>
                    <h2>추소리</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/cctv6/" />
                </div>
            </div>
            <div>
                <div>
                    <h2>서낙동강1</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/cctv7/" />
                </div>
                <div>
                    <h2>서낙동강2</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/cctv8/" />
                </div>
                <div>
                    <h2>물금매리</h2>
                    {/* <iframe  src="https://ecobotdashboard1.co.kr/cctv14/" /> */}
                </div>
            </div>
        </section>
    );
};

export default CCTV;
