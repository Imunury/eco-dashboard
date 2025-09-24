import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import prisma_jincheon1 from '../../lib/prisma_jincheon1'
import prisma_jincheon2 from '../../lib/prisma_jincheon2'
import type { ecobot_status_temp } from '../../generated/client';

interface RobotAll {
  robotData: ecobot_status_temp;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const ecobot = await prisma.$queryRaw<RobotAll[]>`
        SELECT robot_id, motor_values, ctr_bat_soc FROM ecobot_status_temp
        WHERE (robot_id, timestamp) IN (
          SELECT robot_id, MAX(timestamp)
          FROM ecobot_status_temp
          GROUP BY robot_id
        )
        ORDER BY robot_id
      `;

      const jincheon1 = await prisma_jincheon1.$queryRaw<RobotAll[]>`
        SELECT robot_id, motor_values, ctr_bat_soc FROM ecobot_status_temp
        WHERE (robot_id, timestamp) IN (
          SELECT robot_id, MAX(timestamp)
          FROM ecobot_status_temp
          GROUP BY robot_id
        )
        ORDER BY robot_id
      `;

      const jincheon2 = await prisma_jincheon2.$queryRaw<RobotAll[]>`
        SELECT robot_id, motor_values, ctr_bat_soc FROM ecobot_status_temp
        WHERE (robot_id, timestamp) IN (
          SELECT robot_id, MAX(timestamp)
          FROM ecobot_status_temp
          GROUP BY robot_id
        )
        ORDER BY robot_id
      `;

      const combineData = [...ecobot, ...jincheon1, ...jincheon2]
      res.status(200).json(combineData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch ecobot status' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
