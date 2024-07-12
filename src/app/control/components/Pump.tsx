import React, { useEffect, useState } from 'react';
import { ecobot_status_temp } from '@prisma/client';
import ToggleSwitch from '@/app/components/ToggleSwitch';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const Pump: React.FC<RobotInfoProps> = ({ robotData }) => {

    const robotId = robotData.robot_id;
    const [pumpStatus, setPumpStatus] = useState([false, false, false, false]);

    useEffect(() => {
        setPumpStatus([
            robotData.pump_values[0] !== 0,
            robotData.pump_values[1] !== 0,
            robotData.pump_values[2] !== 0,
            robotData.pump_values[3] !== 0
        ]);
    }, [robotData.pump_values]);

    const clickSwitch = async (index: number, isOn: boolean) => {
        const newPumpStatus = [...pumpStatus];
        newPumpStatus[index] = isOn;

        const pump = isOn ? '1' : '0'; // Set the payload based on the new state

        const dataSend = {
            topics: [
                {
                    topic: `pmp_ctrl`,
                    payload: pump
                }
            ]
        }

        try {
            const response = await fetch(`http://112.164.105.160:4001/send-mqtt/${robotId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataSend)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Success:', data);

            // Only update state if the request was successful
            setPumpStatus(newPumpStatus);

        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const [scheduleOn, setScheduleOn] = useState(false);

    const clickSchedule = async (scheduleOn: boolean) => {

    }

    return (
        <div className='text-center h-full'>
            <h1>PUMP</h1>
            <div className='pump'>
                <div>
                    <h3>PUMP1</h3>
                    <h3>PUMP2</h3>
                    <h3>PUMP3</h3>
                    <h3>PUMP4</h3>
                </div>
                <div>
                    {pumpStatus.map((isOn, index) => (
                        <ToggleSwitch
                            key={index}
                            isOn={isOn}
                            onChange={(newIsOn) => clickSwitch(index, newIsOn)}
                        />
                    ))}
                </div>
                <div>
                    <h3>스케쥴</h3>
                    <ToggleSwitch isOn={scheduleOn} onChange={clickSchedule} />
                    <h3>간격(초)</h3>
                    <input type='number' />
                    <h3>시퀀스</h3>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    )
}

export default Pump;
