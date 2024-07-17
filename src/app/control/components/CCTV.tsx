import React from 'react';
import { ecobot_status_temp } from '@prisma/client';
import CCTVSeg from '@/app/cctv/CCTVSeg';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const CCTV: React.FC<RobotInfoProps> = ({ robotData }) => {

    const getBaseIp = () => {
        const myValue = robotData.robot_id;
        let baseIp = "http://223.171.146.46:28080";

        switch (myValue) {
            case "ecobot00001":
                baseIp = "http://223.171.80.116:28080";
                break;
            case "ecobot00002":
                baseIp = "http://223.171.81.142:28080";
                break;
            case "ecobot00003":
                baseIp = "http://223.171.67.203:28080";
                break;
            case "ecobot00004":
                baseIp = "http://223.171.146.46:28080";
                break;
            case "ecobot00005":
                baseIp = "http://223.171.157.70:28080";
                break;
            case "ecobot00006":
                baseIp = "http://223.171.158.175:28080";
                break;
            case "ecobot00007":
                baseIp = "http://223.171.81.151:28080";
                break;
            case "ecobot00008":
                baseIp = "http://223.171.81.138:28080";
                break;
            case "ecobot00014":
                baseIp = "http://223.171.157.68:28080";
                break;
        }
        return baseIp;
    };

    return (
        <div className='text-center'>
            <CCTVSeg baseIp={getBaseIp()} />
        </div>
    );
};

export default CCTV;
