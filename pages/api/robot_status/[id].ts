import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import prisma_jincheon1 from "../../../lib/prisma_jincheon1";
import prisma_jincheon2 from "../../../lib/prisma_jincheon2";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const ecobot = await prisma.ecobot_status_temp.findFirst({
        where: { robot_id: String(id) },
        orderBy: {
          timestamp: "desc",
        },
      });

      const jincheon1 = await prisma_jincheon1.ecobot_status_temp.findFirst({
        where: { robot_id: String(id) },
        orderBy: {
          timestamp: "desc",
        },
      });

      const jincheon2 = await prisma_jincheon2.ecobot_status_temp.findFirst({
        where: { robot_id: String(id) },
        orderBy: {
          timestamp: "desc",
        },
      });

      const combineData = [ecobot, jincheon1, jincheon2].filter(Boolean);

      if (combineData.length === 0) {
        return res.status(404).json({ error: "Robot not found" });
      }

      res.status(200).json(combineData);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch robot data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
