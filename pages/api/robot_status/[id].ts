import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const robotData = await prisma.ecobot_status_temp.findFirst({
        where: { robot_id: String(id) },
        orderBy: {
          timestamp: "desc",
        },
      });

      if (!robotData) {
        return res.status(404).json({ error: "Robot not found" });
      }

      res.status(200).json(robotData);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch robot data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
