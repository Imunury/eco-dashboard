// /api/water_quality/[id]/[startDate]/[endDate].ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../lib/prisma";
import prisma_jincheon1 from "../../../../../lib/prisma_jincheon1";
import prisma_jincheon2 from "../../../../../lib/prisma_jincheon2";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, startDate, endDate } = req.query;

  if (req.method === "GET") {
    try {
      const start = new Date(`${startDate}T00:00:00.000Z`);
      const end = new Date(`${endDate}T23:59:59.999Z`);

      const whereCondition = {
        robot_id: String(id),
        timestamp: {
          gte: start,
          lte: end,
        },
      };

      const ecobot = await prisma.water_quality.findMany({
        where: whereCondition,
        orderBy: { timestamp: "asc" },
      });

      const jincheon1 = await prisma_jincheon1.water_quality.findMany({
        where: whereCondition,
        orderBy: { timestamp: "asc" },
      });

      const jincheon2 = await prisma_jincheon2.water_quality.findMany({
        where: whereCondition,
        orderBy: { timestamp: "asc" },
      });

      const combineData = [...ecobot, ...jincheon1, ...jincheon2];

      if (combineData.length === 0) {
        return res.status(404).json({ error: "No data found" });
      }

      res.status(200).json(combineData);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
