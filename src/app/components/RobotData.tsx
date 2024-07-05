import React from 'react';

interface Location {
    robot_id: string;
    latitude: number;
    longitude: number;
    timestamp: string;
}

interface RobotDataProps {
    locations: Location[];
}

const RobotData: React.FC<RobotDataProps> = ({ locations }) => {

    return (
        <div>
            <h1>Location</h1>
            {locations.length > 0 ? (
                <ul>
                    {locations.map((location, index) => (
                        <li key={index}>
                            <p>설치위치: {location.robot_id}</p>
                            <p>Latitude: {location.latitude.toFixed(4)}</p>
                            <p>Longitude: {location.longitude.toFixed(4)}</p>
                            <p>Timestamp: {new Date(location.timestamp).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default RobotData