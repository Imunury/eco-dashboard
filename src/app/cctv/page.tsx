"use client"

import React, { useState, useEffect } from 'react';

const CCTV: React.FC = () => {
    return (
        <section className="CCTV">
            <div>
                <div>
                    <h1>광교저수지</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00002/" />
                </div>
                <div>
                    <h1>보령호</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00003/" />
                </div>
                <div>
                    <h1>추소리</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00006/" />
                </div>
            </div>
            <div>
                <div>
                    <h1>창녕보</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00018/" />
                </div>
                <div>
                    <h1>서낙동강1</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00007/" />
                </div>
                <div>
                    <h1>서낙동강2</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00008/" />
                </div>
            </div>
            <div>
                <div>
                    <h1>거품제거봇</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00020/" />
                </div>
                <div>
                    <h1>진천1</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00012/" />
                </div>
                <div>
                    <h1>진천2</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00013/" />
                </div>
            </div>
            <div>
                <div>
                    <h1>죽산보</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00017/" />
                </div>
                <div>
                    <h1>강정고령보</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00004/" />
                </div>
                <div>
                    <h1>안동댐</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00005/" />
                </div>
            </div>

        </section>
    );
};

export default CCTV;
