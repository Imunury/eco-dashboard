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

    useEffect(() => {
        const robot_mode = robotData.current_state
        switch (robot_mode) {
            case 0: setMode("정지")
                break;
            case 1: setMode("수동")
                break;
            case 2: setMode("코스주행")
                break;
            case 3: setMode("위치사수")
                break;
        }
    }, [robotData.current_state])

    return (
        <div className='text-center h-full'>
            <h1>Mode Info : {mode}</h1>
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