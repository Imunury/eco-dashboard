import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

function convertBigIntToNumber(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToNumber);
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj: any = {};
    for (const key in obj) {
      const value = obj[key];
      newObj[key] = typeof value === 'bigint' ? Number(value) : convertBigIntToNumber(value);
    }
    return newObj;
  }
  return obj;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, depth_date } = req.query;

  if (req.method === "GET") {
    try {
      if (typeof id !== 'string' || typeof depth_date !== 'string') {
        return res.status(400).json({ error: "Invalid query parameters" });
      }

            const ecobot = await prisma.$queryRaw`
              WITH clustered_points AS (
        SELECT
          latitude,
          longitude,
          ST_ClusterDBSCAN(ST_MakePoint(longitude, latitude), eps := 0.00005, minpoints := 2) OVER () AS cluster_id
        FROM water_quality
        WHERE robot_id = ${id}
          AND timestamp >= ${depth_date}::date
          AND timestamp < (${depth_date}::date + interval '1 day')
          AND sample_depth / 100 > 1.0
      ),
      grouped_points AS (
        SELECT
          latitude,
          longitude,
          COALESCE(cluster_id, -ROW_NUMBER() OVER (ORDER BY latitude, longitude)) AS group_id
        FROM clustered_points
      )
      SELECT
        group_id,
        PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY latitude) AS median_latitude,
        PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY longitude) AS median_longitude,
        COUNT(*) AS total_count
      FROM grouped_points
      GROUP BY group_id
      ORDER BY group_id;

            `;

//       const ecobot = await prisma.$queryRaw`
//               WITH filtered_water_quality AS (
//   SELECT
//     wq.*
//   FROM water_quality wq
//   JOIN ecobot_status es
//     ON wq.robot_id = es.robot_id
//    AND wq.timestamp = es.timestamp
//   WHERE wq.robot_id = ${id}
//     AND wq.timestamp >= ${depth_date}::date
//     AND wq.timestamp < (${depth_date}::date + interval '1 day')
//     AND es.pump_values[4] = 1
// ),
// depth_variation AS (
//   SELECT
//     a.*
//   FROM filtered_water_quality a
//   WHERE EXISTS (
//     SELECT 1
//     FROM filtered_water_quality b
//     WHERE a.robot_id = b.robot_id
//       AND a.timestamp <> b.timestamp
//       AND ABS(a.sample_depth - b.sample_depth) > 2.5
//       AND b.timestamp BETWEEN a.timestamp - interval '1 hour' AND a.timestamp + interval '1 hour'
//   )
// ),
// clustered_points AS (
//   SELECT
//     latitude,
//     longitude,
//     ST_ClusterDBSCAN(ST_MakePoint(longitude, latitude), eps := 0.00005, minpoints := 2) OVER () AS cluster_id
//   FROM depth_variation
// ),
// grouped_points AS (
//   SELECT
//     latitude,
//     longitude,
//     COALESCE(cluster_id, -ROW_NUMBER() OVER (ORDER BY latitude, longitude)) AS group_id
//   FROM clustered_points
// )
// SELECT
//   group_id,
//   PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY latitude) AS median_latitude,
//   PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY longitude) AS median_longitude,
//   COUNT(*) AS total_count
// FROM grouped_points
// GROUP BY group_id
// ORDER BY group_id;
//             `;


      const result = convertBigIntToNumber(ecobot);

      res.status(200).json(result);
    } catch (error) {
      console.error("쿼리 실패:", error);
      res.status(500).json({ error: "Failed to fetch robot data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
