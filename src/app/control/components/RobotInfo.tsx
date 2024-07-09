import React from 'react';
import { ecobot_status_temp } from '@prisma/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const RobotInfo: React.FC<RobotInfoProps> = ({ robotData }) => {
    return (
        <div className='text-center'>
            <h1>Robot Status</h1>
            <div className='flex justify-evenly'>
                <div>
                    <h2>경도</h2>
                    <h3>{robotData.latitude}</h3>
                </div>
                <div>
                    <h2>위도</h2>
                    <h3>{robotData.longitude}</h3>
                </div>
                <div>
                    <h2>속도</h2>
                    <h3>{robotData.current_speeds}</h3>
                </div>
                <div>
                    <h2>각속도</h2>
                    <h3>{robotData.current_angular_vel}</h3>
                </div>
                <div>
                    <h2>방위</h2>
                    <h3>{robotData.bearing}</h3>
                </div>

            </div>
        </div>
    );
};

export default RobotInfo;
