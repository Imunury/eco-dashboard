import React from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const ONOFF: React.FC<RobotInfoProps> = ({ robotData }) => {

    const formattedTimestamp = new Date(robotData.timestamp).toLocaleString();

    return (
        <div className='text-center'>
            <h1>ON / OFF</h1>
            <h3>{formattedTimestamp}</h3>
        </div>
    )
}

export default ONOFF