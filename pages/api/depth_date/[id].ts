import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;

    if (req.method === "GET") {
        try {

            const dates = await prisma.$queryRaw`
                SELECT DISTINCT DATE(timestamp) AS date
                FROM water_quality
                WHERE robot_id = ${id}
                AND sample_depth > 0.5
                AND measurement_status = 2
            `;

            // const combineData = [ecobot].filter(Boolean);
            const combineData = dates;

            res.status(200).json(combineData);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch robot data" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
