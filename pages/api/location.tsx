// pages/api/location.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const result = await prisma.$queryRaw`
        SELECT
          *
        FROM
          ecobot_status
        GROUP BY
          robot_id, timestamp 
        ORDER BY
          timestamp desc
        LIMIT 10
          ;
      `;

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
