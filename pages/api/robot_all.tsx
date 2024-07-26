import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import prisma_jincheon1 from '../../lib/prisma_jincheon1'
import prisma_jincheon2 from '../../lib/prisma_jincheon2'

export interface RobotAll {
    robot_id: string;
    timestamp: string;
    chl_ug_l: number;
    bg_ppb: number;
    latitude: number;
    longitude: number;
    current_state: number;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const ecobotAll = await prisma.$queryRaw<RobotAll[]>`
                SELECT 
                    wq.robot_id,
                    wq.timestamp as timestamp,
                    wq.chl_ug_l,
                    wq.bg_ppb,
                    es.latitude,
                    es.longitude,
                    es.current_state
                FROM 
                    (SELECT * 
                    FROM water_quality_temp
                    WHERE (robot_id, timestamp) IN (
                        SELECT robot_id, MAX(timestamp)
                        FROM water_quality_temp
                        GROUP BY robot_id
                    )) AS wq
                JOIN 
                    (SELECT * 
                    FROM ecobot_status_temp
                    WHERE (robot_id, timestamp) IN (
                        SELECT robot_id, MAX(timestamp)
                        FROM ecobot_status_temp
                        GROUP BY robot_id
                    )) AS es
                ON 
                    wq.robot_id = es.robot_id
                ORDER BY 
                    wq.robot_id;
            `;

            const jincheon1 = await prisma_jincheon1.$queryRaw<RobotAll[]>`
                SELECT 
                    wq.robot_id,
                    wq.timestamp as timestamp,
                    wq.chl_ug_l,
                    wq.bg_ppb,
                    es.latitude,
                    es.longitude,
                    es.current_state
                FROM 
                    (SELECT * 
                    FROM water_quality_temp
                    WHERE (robot_id, timestamp) IN (
                        SELECT robot_id, MAX(timestamp)
                        FROM water_quality_temp
                        GROUP BY robot_id
                    )) AS wq
                JOIN 
                    (SELECT * 
                    FROM ecobot_status_temp
                    WHERE (robot_id, timestamp) IN (
                        SELECT robot_id, MAX(timestamp)
                        FROM ecobot_status_temp
                        GROUP BY robot_id
                    )) AS es
                ON 
                    wq.robot_id = es.robot_id
                ORDER BY 
                    wq.robot_id;
            `;

            const jincheon2 = await prisma_jincheon2.$queryRaw<RobotAll[]>`
                SELECT 
                    wq.robot_id,
                    wq.timestamp as timestamp,
                    wq.chl_ug_l,
                    wq.bg_ppb,
                    es.latitude,
                    es.longitude,
                    es.current_state
                FROM 
                    (SELECT * 
                    FROM water_quality_temp
                    WHERE (robot_id, timestamp) IN (
                        SELECT robot_id, MAX(timestamp)
                        FROM water_quality_temp
                        GROUP BY robot_id
                    )) AS wq
                JOIN 
                    (SELECT * 
                    FROM ecobot_status_temp
                    WHERE (robot_id, timestamp) IN (
                        SELECT robot_id, MAX(timestamp)
                        FROM ecobot_status_temp
                        GROUP BY robot_id
                    )) AS es
                ON 
                    wq.robot_id = es.robot_id
                ORDER BY 
                    wq.robot_id;
            `;

            const combineData = [...ecobotAll, ...jincheon1, ...jincheon2]
            res.status(200).json(combineData);
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Failed to fetch ecobot status' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
