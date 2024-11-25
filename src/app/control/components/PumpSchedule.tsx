"use client"

import type { ecobot_status_temp } from '../../../../generated/client';
import { useState, type SetStateAction } from "react";

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const PumpSchedule: React.FC<RobotInfoProps> = ({ robotData }) => {

    const robotId = robotData.robot_id

    const [pumpOptions, setPumpOptions] = useState([0, 0, 0, 0]);
    const [scheduleInterval, setScheduleInterval] = useState('');

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        const index = parseInt(value) - 1;
        setPumpOptions((prevOptions) => {
            const newOptions = [...prevOptions];
            newOptions[index] = checked ? 1 : 0;
            return newOptions;
        });
    };

    const handleIntervalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setScheduleInterval(event.target.value);
    };

    const stopSchedule = async () => {

        setPumpOptions([0, 0, 0, 0])
        setScheduleInterval('')

        try {
            const response = await fetch('/api/send-mqtt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: robotId,
                    topics: [
                        { topic: "pmp_ctrl", payload: "0,0,0,0,0" },
                        { topic: "schedule_ctrl", payload: `interval: 0, sequence: []` }
                    ]
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const pumpOptionsBind = [...pumpOptions, scheduleInterval].join(',');

        console.log(pumpOptionsBind)

        try {
            const response = await fetch('/api/send-mqtt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: robotId,
                    topics: [
                        { topic: "pmp_ctrl", payload: pumpOptionsBind },
                        { topic: "schedule_ctrl", payload: `interval: ${scheduleInterval}, sequence : ${pumpOptions}` }
                    ]
                }),
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
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>스케쥴</h3>
                    <button type="submit" value="ON">ON</button>
                    <button type="button" onClick={stopSchedule} value="OFF">OFF</button>
                </div>
                <h3>간격(초)</h3>
                <input type='number' name="schedule_interval" value={scheduleInterval} onChange={handleIntervalChange} />
                <h3>시퀀스</h3>
                <div className='flex'>
                    <input type="checkbox" id="pump1" value="1" checked={pumpOptions[0] === 1} onChange={handleCheckboxChange} />
                    <label htmlFor='pump1'><h3>pump1</h3></label>
                    <input type="checkbox" id="pump2" value="2" checked={pumpOptions[1] === 1} onChange={handleCheckboxChange} />
                    <label htmlFor='pump2'><h3>pump2</h3></label>
                    <input type="checkbox" id="pump3" value="3" checked={pumpOptions[2] === 1} onChange={handleCheckboxChange} />
                    <label htmlFor='pump3'><h3>pump3</h3></label>
                    <input type="checkbox" id="pump4" value="4" checked={pumpOptions[3] === 1} onChange={handleCheckboxChange} />
                    <label htmlFor='pump4'><h3>pump4</h3></label>
                </div>
            </form>
        </div>
    );
}

export default PumpSchedule;
