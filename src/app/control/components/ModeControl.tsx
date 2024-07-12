import React from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const ModeControl: React.FC<RobotInfoProps> = ({ robotData }) => {
    return (
        <div className='text-center'>
            <h1>Mode Control</h1>
            <div className='flex justify-evenly'>
                <button>수동</button>
                <button>코스주행</button>
                <button>위치사수</button>
                <button>정지</button>
            </div>
        </div>

    )
}

export default ModeControl