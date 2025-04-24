import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

// BigInt를 JSON에 대응 가능한 값으로 변환하는 함수
function convertBigIntToNumber(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(convertBigIntToNumber);
    } else if (obj && typeof obj === "object") {
        // Date 객체는 그대로 반환
        if (obj instanceof Date) {
            return obj;
        }

        const newObj: any = {};
        for (const key in obj) {
            const value = obj[key];
            newObj[key] =
                typeof value === "bigint"
                    ? Number(value)
                    : convertBigIntToNumber(value);
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
    //         const ecobot = await prisma.$queryRaw`
    //     WITH clustered_points AS (
    //       SELECT
    //         latitude,
    //         longitude,
    //         timestamp,
    //         temp_deg_c,
    //         ph_units,
    //         depth_m,
    //         spcond_us_cm,
    //         turb_ntu,
    //         hdo_sat,
    //         hdo_mg_l,
    //         chl_ug_l,
    //         bg_ppb,
    //         ph_mv,
    //         salinity_psu,
    //         sample_depth,
    //         ST_ClusterDBSCAN(ST_MakePoint(longitude, latitude), eps := 0.00005, minpoints := 10) OVER () AS cluster_id
    //       FROM water_quality
    //       WHERE robot_id = ${id}
    //         AND timestamp >= ${depth_date}::date
    //         AND timestamp < (${depth_date}::date + interval '1 day')
    //         AND sample_depth / 100 > 1.0
    //     )
    //     SELECT
    //       latitude,
    //       longitude,
    //       timestamp,
    //       temp_deg_c,
    //       ph_units,
    //       depth_m,
    //       spcond_us_cm,
    //       turb_ntu,
    //       hdo_sat,
    //       hdo_mg_l,
    //       chl_ug_l,
    //       bg_ppb,
    //       ph_mv,
    //       salinity_psu,
    //       sample_depth,
    //       COALESCE(cluster_id, -ROW_NUMBER() OVER (ORDER BY latitude, longitude)) AS group_id,
    //       COUNT(*) OVER (PARTITION BY cluster_id) AS total_count
    //     FROM clustered_points
    //     ORDER BY group_id, timestamp;
    //   `;

//     const ecobot = await prisma.$queryRaw`
//     WITH filtered_water_quality AS (
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
//     AND wq.sample_depth / 100 > 1.0
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
//     timestamp,
//     temp_deg_c,
//     ph_units,
//     depth_m,
//     spcond_us_cm,
//     turb_ntu,
//     hdo_sat,
//     hdo_mg_l,
//     chl_ug_l,
//     bg_ppb,
//     ph_mv,
//     salinity_psu,
//     sample_depth,
//     ST_ClusterDBSCAN(ST_MakePoint(longitude, latitude), eps := 0.00005, minpoints := 10) OVER () AS cluster_id
//   FROM depth_variation
// )
// SELECT
//   latitude,
//   longitude,
//   timestamp,
//   temp_deg_c,
//   ph_units,
//   depth_m,
//   spcond_us_cm,
//   turb_ntu,
//   hdo_sat,
//   hdo_mg_l,
//   chl_ug_l,
//   bg_ppb,
//   ph_mv,
//   salinity_psu,
//   sample_depth,
//   COALESCE(cluster_id, -ROW_NUMBER() OVER (ORDER BY latitude, longitude)) AS group_id,
//   COUNT(*) OVER (PARTITION BY cluster_id) AS total_count
// FROM clustered_points
// ORDER BY group_id, timestamp;

//   `;

const ecobot = await prisma.$queryRaw`
    WITH filtered_water_quality AS (
  SELECT
    *
  FROM water_quality
  WHERE robot_id = ${id}
    AND timestamp >= ${depth_date}::date
    AND timestamp < (${depth_date}::date + interval '1 day')
    AND sample_depth / 100 > 1.0
),
depth_variation AS (
  SELECT
    a.*
  FROM filtered_water_quality a
  WHERE EXISTS (
    SELECT 1
    FROM filtered_water_quality b
    WHERE a.robot_id = b.robot_id
      AND a.timestamp <> b.timestamp
      AND ABS(a.sample_depth - b.sample_depth) > 2.5
      AND b.timestamp BETWEEN a.timestamp - interval '1 hour' AND a.timestamp + interval '1 hour'
  )
),
clustered_points AS (
  SELECT
    latitude,
    longitude,
    timestamp,
    temp_deg_c,
    ph_units,
    depth_m,
    spcond_us_cm,
    turb_ntu,
    hdo_sat,
    hdo_mg_l,
    chl_ug_l,
    bg_ppb,
    ph_mv,
    salinity_psu,
    sample_depth,
    ST_ClusterDBSCAN(ST_MakePoint(longitude, latitude), eps := 0.00005, minpoints := 10) OVER () AS cluster_id
  FROM depth_variation
)
SELECT
  latitude,
  longitude,
  timestamp,
  temp_deg_c,
  ph_units,
  depth_m,
  spcond_us_cm,
  turb_ntu,
  hdo_sat,
  hdo_mg_l,
  chl_ug_l,
  bg_ppb,
  ph_mv,
  salinity_psu,
  sample_depth,
  COALESCE(cluster_id, -ROW_NUMBER() OVER (ORDER BY latitude, longitude)) AS group_id,
  COUNT(*) OVER (PARTITION BY cluster_id) AS total_count
FROM clustered_points
ORDER BY group_id, timestamp;


  `;


            const formatted = convertBigIntToNumber(ecobot);
            res.status(200).json(formatted);
        } catch (error) {
            console.error("Error fetching robot data:", error);
            res.status(500).json({ error: "Failed to fetch robot data" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
