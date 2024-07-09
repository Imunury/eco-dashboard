"use client";

import React, { useRef, useEffect } from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const CCTV: React.FC<RobotInfoProps> = ({ robotData }) => {
    const loginuser = "admin"; // 사용자 이름 설정
    const loginpass = "ecopeace123"; // 비밀번호 설정
    const imgRef = useRef<HTMLDivElement>(null);

    const getBaseIp = () => {
        const myValue = robotData.robot_id;
        let baseIp = "http://223.171.146.46:28080";

        switch (myValue) {
            case "ecobot00001":
                baseIp = "http://223.171.80.116:28080";
                break;
            case "ecobot00002":
                baseIp = "http://223.171.81.142:28080";
                break;
            case "ecobot00003":
                baseIp = "http://223.171.67.203:28080";
                break;
            case "ecobot00004":
                baseIp = "http://223.171.146.46:28080";
                break;
            case "ecobot00005":
                baseIp = "http://223.171.157.70:28080";
                break;
            case "ecobot00006":
                baseIp = "http://223.171.158.175:28080";
                break;
            case "ecobot00007":
                baseIp = "http://223.171.81.151:28080";
                break;
            case "ecobot00008":
                baseIp = "http://223.171.81.138:28080";
                break;
            case "ecobot00014":
                baseIp = "http://223.171.157.68:28080";
                break;
        }
        return baseIp;
    };

    const getHttpHost = (cgiUrl: string) => {
        return `${getBaseIp()}/${cgiUrl}?loginuse=${loginuser}&loginpas=${encodeURIComponent(loginpass)}`;
    };

    const ptz_control = (command: string | number, onestep: string | number) => {
        const url = getHttpHost("decoder_control.cgi");
        fetch(`${url}&command=${command}&onestep=${onestep}&${new Date().getTime()}${Math.random()}`);
    };

    const loadVideoStream = () => {
        const imgsrc = getHttpHost("snapshot.cgi");
        PlayImg(imgsrc);
    };

    const PlayImg = (imgsrc: string) => {
        const append = `&${new Date().getTime()}${Math.random()}`;
        const img = new Image();
        img.onload = function () {
            if (imgRef.current) {
                imgRef.current.innerHTML = '';
                imgRef.current.appendChild(img);
            }
            setTimeout(() => PlayImg(imgsrc), 30);
        };
        img.onerror = function () {
            setTimeout(() => PlayImg(imgsrc), 30);
        };
        img.src = `${imgsrc}${append}`;
        img.style.width = '100%';
        img.style.height = 'auto';
    };

    useEffect(() => {
        loadVideoStream();
    }, []);

    return (
        <div>
            <input type="hidden" value={getBaseIp()} />
            <div>
                <button onClick={() => ptz_control(2, 1)} onMouseUp={() => ptz_control(0, 1)}>상</button>
                <button onClick={() => ptz_control(4, 1)} onMouseUp={() => ptz_control(0, 1)}>좌</button>
                <button onClick={() => ptz_control(6, 1)} onMouseUp={() => ptz_control(0, 1)}>우</button>
                <button onClick={() => ptz_control(8, 1)} onMouseUp={() => ptz_control(0, 1)}>하</button>
            </div>
            <div ref={imgRef}></div>
        </div>
    );
};

export default CCTV;
