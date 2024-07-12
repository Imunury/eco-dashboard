"use client"

import React, { useEffect, useState } from 'react';
import { ecobot_status_temp } from '@prisma/client';
import ToggleSwitch from '@/app/components/ToggleSwitch';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const ONOFF: React.FC<RobotInfoProps> = ({ robotData }) => {
    const robotId = robotData.robot_id;
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        setIsOn(robotData.motor_values[0] !== 0);
    }, [robotData.motor_values]);

    const clickSwitch = (isOn: boolean) => {
        const mode = isOn ? '1' : '0';
        const dataSend = {
            topics: [
                {
                    topic: 'cmd_plc',
                    payload: mode,
                },
                // {
                //     topic: "mtr_ctrl",
                //     payload: "stop"
                // },
                // {
                //     topic: "drv_mode",
                //     palyload: "00"
                // }
            ],
        };

        fetch(`http://112.164.105.160:4001/send-mqtt/${robotId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSend),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });
    };

    return (
        <div className='text-center'>
            <h1>ON / OFF</h1>
            <ToggleSwitch isOn={isOn} onChange={clickSwitch} />
        </div>
    );
};

export default ONOFF;