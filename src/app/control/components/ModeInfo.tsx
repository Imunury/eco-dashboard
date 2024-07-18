"use client"

import React, { useEffect, useState } from 'react';
import { ecobot_status_temp } from '@prisma/client';
import ModeManual from './ModeManual';
import ModeCourse from './ModeCourse';
import ModePosition from './ModePosition';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const ModeInfo: React.FC<RobotInfoProps> = ({ robotData }) => {

    const [mode, setMode] = useState("");
    const [bg, setBg] = useState("");

    useEffect(() => {
        const robot_mode = robotData.current_state
        switch (robot_mode) {
            case 0: setMode("정지"), setBg("bg-red-400")
                break;
            case 1: setMode("수동"), setBg("bg-green-400")
                break;
            case 2: setMode("코스주행"), setBg("bg-orange-400")
                break;
            case 3: setMode("위치사수"), setBg("bg-cyan-400")
                break;
        }
    }, [robotData.current_state])

    return (
        <div className={`text-center h-full ${bg} transition-colors duration-300 ease-in-out`}>
            <h1>Mode Info : {mode}</h1>
            {mode === "정지" && (
                <div></div>
            )}
            {mode === "수동" && (
                <ModeManual robotData={robotData} />
            )}
            {mode === "코스주행" && (
                <ModeCourse robotData={robotData} />
            )}
            {mode === "위치사수" && (
                <ModePosition robotData={robotData} />
            )}
        </div>
    )
}

export default ModeInfo