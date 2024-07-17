"use client";

import { useEffect, useRef } from "react";

interface CCTVProps {
    baseIp: string;
}

const CCTVSeg: React.FC<CCTVProps> = ({ baseIp }) => {

    const imgRef = useRef<HTMLDivElement>(null);

    const getProxiedUrl = (cgiUrl: string) => {
        const timestamp = `${new Date().getTime()}${Math.random()}`;
        return `/api/proxy?baseIp=${baseIp}&fullUrl=${cgiUrl}&${timestamp}`;
    };

    const ptz_control = (command: string | number, onestep: string | number) => {
        const url = getProxiedUrl(`decoder_control.cgi?command=${command}&onestep=${onestep}`);
        fetch(url);
    };

    const loadVideoStream = () => {
        const imgsrc = getProxiedUrl('snapshot.cgi?loginuse=admin&loginpas=ecopeace123');
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
    }, [baseIp]);

    return (
        <div>
            <div>
                <button onClick={() => ptz_control(2, 1)} onMouseUp={() => ptz_control(0, 1)}>상</button>
                <button onClick={() => ptz_control(4, 1)} onMouseUp={() => ptz_control(0, 1)}>좌</button>
                <button onClick={() => ptz_control(6, 1)} onMouseUp={() => ptz_control(0, 1)}>우</button>
                <button onClick={() => ptz_control(8, 1)} onMouseUp={() => ptz_control(0, 1)}>하</button>
            </div>
            <div ref={imgRef}></div>
        </div>
    )
}

export default CCTVSeg;
