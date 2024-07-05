// pages/api/location.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const result = await prisma.$queryRaw`
        SELECT DISTINCT ON (robot_id) *
        FROM ecobot_status
        ORDER BY robot_id, timestamp DESC;
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
