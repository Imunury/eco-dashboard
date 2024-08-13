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
                    {/* <CCTVSegWithLoading baseIp="http://223.171.80.116:28080" /> */}
                </div>
                <div>
                    <h2>광교저수지</h2>
                    {/* <CCTVSegWithLoading baseIp="http://223.171.81.142:28080" /> */}
                </div>
                <div>
                    <h2>문의취수장</h2>
                    {/* <CCTVSegWithLoading baseIp="http://223.171.67.203:28080" /> */}
                </div>
            </div>
            <div>
                <div>
                    <h2>강정고령보</h2>
                    {/* <CCTVSegWithLoading baseIp="http://223.171.146.46:28080" /> */}
                </div>
                <div>
                    <h2>안동댐</h2>
                    {/* <CCTVSegWithLoading baseIp="http://223.171.157.70:28080" /> */}
                </div>
                <div>
                    <h2>추소리</h2>
                    {/* <CCTVSegWithLoading baseIp="http://223.171.158.175:28080" /> */}
                </div>
            </div>
            <div>
                <div>
                    <h2>서낙동강1</h2>
                    <iframe className='w-full h-full' src="https://ecobotdashboard1.co.kr/cctv/" />
                </div>
                <div>
                    <h2>서낙동강2</h2>
                    {/* <CCTVSegWithLoading baseIp="http://223.171.81.138:28080" /> */}
                </div>
                <div>
                    <h2>신창지</h2>
                    {/* <CCTVSegWithLoading baseIp="http://223.171.157.68:28080" /> */}
                </div>
            </div>
        </section>
    );
};

export default CCTV;
