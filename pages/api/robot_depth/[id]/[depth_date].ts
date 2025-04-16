import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import prisma_jincheon1 from "../../../../lib/prisma_jincheon1";
import prisma_jincheon2 from "../../../../lib/prisma_jincheon2";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;
    const { depth_date } = req.query;

    if (req.method === "GET") {
        try {

            const ecobot = await prisma.$queryRaw`
                    WITH rounded AS (
                    SELECT *,
                        ROUND(latitude::numeric, 3) AS grid_lat,
                        ROUND(longitude::numeric, 3) AS grid_lng
                    FROM water_quality
                    WHERE robot_id = ${id}
                    AND (timestamp + interval '9 hours') >= ${depth_date}::date
                    AND (timestamp + interval '9 hours') < (${depth_date}::date + interval '1 day')
                    AND sample_depth / 100 >= 1.8
                ),
                grouped AS (
                    SELECT grid_lat, grid_lng, COUNT(*) AS cnt
                    FROM rounded
                    GROUP BY grid_lat, grid_lng
                    HAVING COUNT(*) > 5
                )
                SELECT r.*
                FROM rounded r
                JOIN grouped g
                ON r.grid_lat = g.grid_lat AND r.grid_lng = g.grid_lng;
            `;
            // const depth_2 = await prisma.$queryRaw`
            // SELECT *
            // FROM water_quality
            // WHERE robot_id = ${id}
            //     AND (timestamp + interval '9 hours') >= ${depth_date}::date
            //     AND (timestamp + interval '9 hours') < (${depth_date}::date + interval '1 day')
            //     AND sample_depth / 100 > 1.8
            // `;

            const depth_2 = await prisma.$queryRaw`
            SELECT *
            FROM water_quality
            WHERE robot_id = ${id}
            ORDER BY timestamp desc
            LIMIT 1;
            `;


            // const combineData = [ecobot].filter(Boolean);
            const combineData = ecobot;

            res.status(200).json(combineData);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch robot data" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
