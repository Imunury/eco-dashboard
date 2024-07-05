import React from 'react';

import { Location } from '../index';
import { RobotStatus } from '../index';

interface RobotDataProps {
    robotStatus: RobotStatus[];
}

const RobotData: React.FC<RobotDataProps> = ({ robotStatus }) => {

    return (
        <div>
            {robotStatus.length > 0 ? (
                <ul >
                    {robotStatus.map((data, index) => {
                        const firstValue = data.motor_values && data.motor_values.length > 0 ? data.motor_values[0] : null;
                        const isMotorOn = firstValue === 1;

                        return (
                            <li key={index} className='p-3'>
                                <p>설치위치 : {data.robot_id}</p>
                                <p>ON / OFF : {firstValue !== null ? (isMotorOn ? "ON" : "OFF") : "NO DATA"}</p>
                                <p>배터리(%) : {data.ctr_bat_soc !== null ? data.ctr_bat_soc : "NO DATA"}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default RobotData