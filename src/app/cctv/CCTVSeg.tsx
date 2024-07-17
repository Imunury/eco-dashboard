"use client"

import { useEffect, useRef } from "react";

interface CCTVProps {
    baseIp: string
}

const CCTVSeg: React.FC<CCTVProps> = ({ baseIp }) => {

    const loginuser = "admin"; // 사용자 이름 설정
    const loginpass = "ecopeace123"; // 비밀번호 설정
    const imgRef = useRef<HTMLDivElement>(null);

    const getHttpHost = (cgiUrl: string) => {
        return `${baseIp}/${cgiUrl}?loginuse=${loginuser}&loginpas=${encodeURIComponent(loginpass)}`;
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
    };

    useEffect(() => {
        loadVideoStream();
    }, []);

    return (
        <div>
            <input type="hidden" value={baseIp} />
            <div>
                <button onClick={() => ptz_control(2, 1)} onMouseUp={() => ptz_control(0, 1)}>상</button>
                <button onClick={() => ptz_control(4, 1)} onMouseUp={() => ptz_control(0, 1)}>좌</button>
                <button onClick={() => ptz_control(6, 1)} onMouseUp={() => ptz_control(0, 1)}>우</button>
                <button onClick={() => ptz_control(8, 1)} onMouseUp={() => ptz_control(0, 1)}>하</button>
            </div>
            <div className="w-full h-full" ref={imgRef}></div>
        </div>
    )
}

export default CCTVSeg