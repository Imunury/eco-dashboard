import React from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const SolarCharge: React.FC<RobotInfoProps> = ({ robotData }) => {
    return (
        <div className='text-center'>
            <h1>Solar Charge</h1>
            <div className='flex justify-evenly'>
                <div>
                    <h2>충전전압</h2>
                    <h3>{robotData.ctr_bat_v}</h3>
                </div>
                <div>
                    <h2>태양광 전압</h2>
                    <h3>{robotData.ctr_pv_v}</h3>
                </div>
                <div>
                    <h2>태양광 전류</h2>
                    <h3>{robotData.ctr_pv_c}</h3>
                </div>
                <div>
                    <h2>배터리 온도</h2>
                    <h3>{robotData.ctr_bat_temp}</h3>
                </div>
                <div>
                    <h2>장치 온도</h2>
                    <h3>{robotData.ctr_device_temp}</h3>
                </div>
            </div>
        </div>
    )
}

export default SolarCharge