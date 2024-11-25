"use client"

import React, { useState, useEffect } from 'react';

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
                    <h2>보령호</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00003/" />
                </div>
            </div>
            <div>
                <div>
                    <h2>강정고령보</h2>
                    <iframe  src="https://ecobotdashboard1.co.kr/ecobot00004/" />
                </div>
                <div>
                    <h2>안동댐</h2>
                    <iframe  src="https://ecobotdashboard1.co.kr/ecobot00005/" />
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
                    <h2>EDC</h2>
                    <iframe  src="https://ecobotdashboard1.co.kr/ecobot00016/" />
                </div>
            </div>
            <div>
                <div>
                    <h2>진천1</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00012/" />
                </div>
                <div>
                    <h2>진천2</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00013/" />
                </div>
                <div>
                    <h2>죽산보</h2>
                    <iframe  src="https://ecobotdashboard1.co.kr/ecobot00017/" />
                </div>
            </div>
            <div>
                <div>
                    <h2>창녕보</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00018/" />
                </div>
                <div>
                    <h2>거품제거봇</h2>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00020/" />
                </div>
                <div>
                    <h2></h2>
                    {/* <iframe  src="https://ecobotdashboard1.co.kr/ecobot00017/" /> */}
                </div>
            </div>

        </section>
    );
};

export default CCTV;
