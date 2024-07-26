"use client"

import React, { useEffect, useState } from 'react';
import type { ecobot_status_temp } from '@prisma/client';

interface RobotInfoProps {
    robotData: ecobot_status_temp;
}

const TrackingMap: React.FC<RobotInfoProps> = ({ robotData }) => {

    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    return (
        <div className="w-full h-full relative">
            {/* <div id="map" className="w-full h-full"></div>
            {selectedLocation && (
                <div className="absolute top-0 left-0 bg-white p-4 border z-10 text-red-500">
                    <h1>Location</h1>
                    <ul>
                        <li>로봇 아이디: {selectedLocation.robot_id}</li>
                        <li>Latitude: {selectedLocation.latitude.toFixed(4)}</li>
                        <li>Longitude: {selectedLocation.longitude.toFixed(4)}</li>
                        <li>Timestamp: {new Date(selectedLocation.timestamp).toLocaleString()}</li>
                    </ul>
                </div>
            )} */}
        </div>
    )
};

export default TrackingMap;
