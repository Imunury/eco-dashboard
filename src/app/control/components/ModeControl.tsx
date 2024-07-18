import type { ecobot_status_temp } from '@prisma/client';
import React from 'react';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const SendMQTT: React.FC<RobotInfoProps> = ({ robotData }) => {

    const robotId = robotData.robot_id
    const clickSwitch = async (mode: string) => {
        try {
            const response = await fetch('/api/send-mqtt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: robotId, mode }),
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
            <button onClick={() => clickSwitch('00')}>수동</button>
            <button onClick={() => clickSwitch('01')}>코스주행</button>
            <button onClick={() => clickSwitch('02')}>위치사수</button>
            <button onClick={() => clickSwitch('03')}>정지</button>
        </div>
    );
};

export default SendMQTT;
