import React from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const ONOFF: React.FC<RobotInfoProps> = ({ robotData }) => {
    return (
        <div className='text-center'>
            <h1>ON / OFF</h1>
        </div>
    )
}

export default ONOFF