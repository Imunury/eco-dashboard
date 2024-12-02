import React from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const CCTV: React.FC<RobotInfoProps> = ({ robotData }) => {

    let robotId = robotData.robot_id

    return (
        <div className='h-full text-center'>
            <div className='h-1/6'>
                <h1>CCTV</h1>
            </div>
            <iframe className='text-center w-full h-5/6' src={`https://ecobotdashboard1.co.kr/${robotId}/`}>
            </iframe>
        </div>
    );
};

export default CCTV;
