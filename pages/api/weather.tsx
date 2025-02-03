// pages/api/saveWeatherData.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // 현재 시각의 tm 파라미터 생성
      const now = new Date();
      const tm = `${now.getUTCFullYear()}${String(now.getUTCMonth() + 1).padStart(2, '0')}${String(now.getUTCDate()).padStart(2, '0')}${String(now.getUTCHours()).padStart(2, '0')}00`;

      const API_URL = `https://apihub.kma.go.kr/api/typ01/url/kma_sfctm2.php?tm=${tm}&stn=0&help=1&authKey=vtgXY7UzRtOYF2O1M4bT-Q`;

      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      // API 데이터 받아오기
      const rawData = await response.text();

      // 데이터 파싱
      const rows = rawData.split('\n').filter((row) => row.trim() && !row.startsWith('#'));
      const parsedData = rows.map((row) => {
        const fields = row.split(/\s+/);

        return {
          TM: new Date(
            `20${fields[0].slice(0, 2)}-${fields[0].slice(2, 4)}-${fields[0].slice(4, 6)}T${fields[0].slice(6, 8)}:${fields[0].slice(8, 10)}:00Z`
          ), // ISO 8601 형식으로 변환
          STN: parseInt(fields[1]),
          WD: parseFloat(fields[2]) || null,
          WS: parseFloat(fields[3]) || null,
          GST_WD: parseFloat(fields[4]) || null,
          GST_WS: parseFloat(fields[5]) || null,
          GST_TM: parseFloat(fields[6]) || null,
          PA: parseFloat(fields[7]) || null,
          PS: parseFloat(fields[8]) || null,
          PT: parseFloat(fields[9]) || null,
          PR: parseFloat(fields[10]) || null,
          TA: parseFloat(fields[11]) || null,
          TD: parseFloat(fields[12]) || null,
          HM: parseFloat(fields[13]) || null,
          PV: parseFloat(fields[14]) || null,
          RN: parseFloat(fields[15]) || null,
          RN_DAY: parseFloat(fields[16]) || null,
          RN_JUN: parseFloat(fields[17]) || null,
          RN_INT: parseFloat(fields[18]) || null,
          SD_HR3: parseFloat(fields[19]) || null,
          SD_DAY: parseFloat(fields[20]) || null,
          SD_TOT: parseFloat(fields[21]) || null,
          WC: parseFloat(fields[22]) || null,
          WP: parseFloat(fields[23]) || null,
          WW: parseFloat(fields[24]) || null,
          CA_TOT: parseFloat(fields[25]) || null,
          CA_MID: parseFloat(fields[26]) || null,
          CH_MIN: parseFloat(fields[27]) || null,
          CT: parseFloat(fields[28]) || null,
          CT_TOP: parseFloat(fields[29]) || null,
          CT_MID: parseFloat(fields[30]) || null,
          CT_LOW: parseFloat(fields[31]) || null,
          VS: parseFloat(fields[32]) || null,
          SS: parseFloat(fields[33]) || null,
          SI: parseFloat(fields[34]) || null,
          ST_GD: parseFloat(fields[35]) || null,
          TS: parseFloat(fields[36]) || null,
          TE_005: parseFloat(fields[37]) || null,
          TE_01: parseFloat(fields[38]) || null,
          TE_02: parseFloat(fields[39]) || null,
          TE_03: parseFloat(fields[40]) || null,
          ST_SEA: parseFloat(fields[41]) || null,
          WH: parseFloat(fields[42]) || null,
          BF: parseFloat(fields[43]) || null,
          IR: parseFloat(fields[44]) || null,
          IX: parseFloat(fields[45]) || null,
        };
      });

      // 데이터베이스에 삽입
      await prisma.weather_data.createMany({
        data: parsedData,
        skipDuplicates: true, // 중복 데이터는 건너뜀
      });

      res.status(200).json({ message: 'Data saved successfully', data: parsedData });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Failed to save data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
