import React, { useEffect, useState } from 'react';
import { ecobot_status_temp } from '@prisma/client';
import ToggleSwitch from '@/app/components/ToggleSwitch';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const Pump: React.FC<RobotInfoProps> = ({ robotData }) => {

    const robotId = robotData.robot_id;
    const [isOn, setIsOn] = useState(false);
    const [pumpStatus, setPumpStatus] = useState([0, 0, 0, 0]);

    useEffect(() => {
        setPumpStatus([
            robotData.pump_values[0] !== 0 ? 1 : 0,
            robotData.pump_values[1] !== 0 ? 1 : 0,
            robotData.pump_values[2] !== 0 ? 1 : 0,
            robotData.pump_values[3] !== 0 ? 1 : 0
        ]);
    }, [robotData.pump_values]);

    const clickSwitch = async (index: number) => {

        pumpStatus[index] = pumpStatus[index] ? 0 : 1;

        const newPumpStatus = pumpStatus.join(',')

        try {
            const response = await fetch('/api/send-mqtt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: robotId, topics: [{ topic: "pmp_ctrl", payload: newPumpStatus }] }),
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
                            isOn={pumpStatus[index] === 1 ? true : false}
                            onChange={() => clickSwitch(index)}
                        />
                    ))}
                </div>
                <div>
                    <div>
                        <h3>스케쥴</h3>
                        <ToggleSwitch isOn={scheduleOn} onChange={clickSchedule} />
                    </div>
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
