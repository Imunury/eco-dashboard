import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { water_quality_temp } from '../../generated/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const latestStatusByRobot = await prisma.$queryRaw<water_quality_temp[]>`
        SELECT * FROM water_quality_temp
        WHERE (robot_id, timestamp) IN (
          SELECT robot_id, MAX(timestamp)
          FROM ecobot_status_temp
          GROUP BY robot_id
        )
        ORDER BY robot_id
      `;
            res.status(200).json(latestStatusByRobot);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch ecobot status' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
