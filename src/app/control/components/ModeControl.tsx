import React from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const ModeControl: React.FC<RobotInfoProps> = ({ robotData }) => {

    const robotId = robotData.robot_id

    const clickMode = (mode: string) => {
        const dataSend = {
            topics: [
                {
                    topic: 'drv_mode',
                    payload: mode,
                }
            ]
        }

        fetch(`http://112.164.105.160:4001/send-mqtt/${robotId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSend),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    };


    return (
        <div className='text-center'>
            <h1>Mode Control</h1>
            <div className='flex justify-evenly'>
                <button className="bg-red-400" onClick={() => clickMode("00")}>정지</button>
                <button className="bg-green-400" onClick={() => clickMode("01")}>수동</button>
                <button className="bg-orange-400" onClick={() => clickMode("02")}>코스주행</button>
                <button className="bg-cyan-400" onClick={() => clickMode("03")}>위치사수</button>
            </div>
        </div>

    )
}

export default ModeControl