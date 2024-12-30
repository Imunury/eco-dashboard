import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import type { weather_data } from '../../generated/client';

interface WeatherData {
  robotData: weather_data;
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const apiUrl = "https://apihub.kma.go.kr/api/typ01/url/kma_sfctm2.php?tm=202412241000&stn=0&help=1&authKey=vtgXY7UzRtOYF2O1M4bT-Q";

//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json(); // API의 데이터 형식에 따라 수정

//       // PostgreSQL 연결
//       const client = new Client(dbConfig);
//       await client.connect();

//       // 데이터 저장 로직 (예제)
//       for (const record of data.records) { // data.records는 API 데이터 구조에 따라 수정
//         await client.query(
//           `INSERT INTO your_table_name (column1, column2, column3)
//            VALUES ($1, $2, $3)
//            ON CONFLICT (unique_column) DO UPDATE SET column2 = $2, column3 = $3`, 
//           [record.field1, record.field2, record.field3] // 필드 매핑
//         );
//       }

//       // PostgreSQL 연결 종료
//       await client.end();

//       res.status(200).json({ message: 'Data saved successfully' });
//     } catch (error) {
//       console.error('Error saving data:', error);
//       res.status(500).json({ error: 'Failed to save data' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }