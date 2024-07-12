import React from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const Motor: React.FC<RobotInfoProps> = ({ robotData }) => {
    return (
        <div className='text-center'>
            <h1>Motor</h1>
        </div>
    )
}

export default Motor