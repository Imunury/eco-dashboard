import type { ecobot_status_temp } from '@prisma/client';
import React from 'react';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const ModeControl: React.FC<RobotInfoProps> = ({ robotData }) => {

    const robotId = robotData.robot_id

    const clickMode = async (payload: string) => {
        try {
            const response = await fetch('/api/send-mqtt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: robotId, topic: "drv_mode", payload }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <div>
            <button className="bg-red-400" onClick={() => clickMode("00")}>정지</button>
            <button className="bg-green-400" onClick={() => clickMode("01")}>수동</button>
            <button className="bg-orange-400" onClick={() => clickMode("02")}>코스주행</button>
            <button className="bg-cyan-400" onClick={() => clickMode("03")}>위치사수</button>
        </div>
    );
};

export default ModeControl;
