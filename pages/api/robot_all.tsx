import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const latestStatusByRobot = await prisma.$queryRaw`
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
            res.status(200).json(latestStatusByRobot);
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Failed to fetch ecobot status' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
