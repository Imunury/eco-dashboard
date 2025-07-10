"use client"

import React, { useState, useEffect } from 'react';

const CCTV: React.FC = () => {
    return (
        <section className="CCTV">
            <div>
                <div>
                    <h1>임하댐 1호기</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00003/" />
                </div>
                <div>
                    <h1>임하댐 2호기</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00004/" />
                </div>
                <div>
                    <h1>임하댐 3호기</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00005/" />
                </div>

            </div>
            <div>
                <div>
                    <h1>임하댐 4호기</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00018/" />
                </div>
                <div>
                    <h1>진천 1호기</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00012/" />
                </div>
                <div>
                    <h1>진천 2호기</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00013/" />
                </div>
            </div>
            <div>
                <div>
                    <h1>추소리</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00006/" />
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
                    <h1>광교저수지</h1>
                    <iframe src="https://ecobotdashboard1.co.kr/ecobot00002/" />
                </div>
ㅌ
            </div>

        </section>
    );
};

export default CCTV;
