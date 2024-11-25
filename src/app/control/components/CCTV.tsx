import React from 'react';
import { ecobot_status_temp } from '../../../../generated/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const CCTV: React.FC<RobotInfoProps> = ({ robotData }) => {

    let robotId = robotData.robot_id

    return (
        <iframe className='text-center w-full h-full' src={`https://ecobotdashboard1.co.kr/${robotId}/`}>
        </iframe>
    );
};

export default CCTV;
