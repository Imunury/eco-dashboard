import React, { useEffect, useState } from 'react';
import { ecobot_status_temp } from '@prisma/client';
import ToggleSwitch from '@/app/components/ToggleSwitch';
import PumpONOFF from './PumpONOFF';
import PumpSchedule from './PumpSchedule';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const Pump: React.FC<RobotInfoProps> = ({ robotData }) => {

    return (
        <div className='text-center h-full'>
            <h1>PUMP</h1>
            <div className='pump'>
                <PumpONOFF robotData={robotData} />
                <PumpSchedule robotData={robotData} />
            </div>
        </div>
    )
}

export default Pump;
