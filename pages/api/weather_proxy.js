export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { tm1, tm2, stn } = req.query;

        const startTime = tm1 || '202502040000';
        const endTime = tm2 || '202502050000';
        const station = stn || '110';

        const apiUrl = `https://apihub.kma.go.kr/api/typ01/url/kma_sfctm3.php?tm1=${startTime}&tm2=${endTime}&stn=${station}&help=0&authKey=vtgXY7UzRtOYF2O1M4bT-Q`;

        const response = await fetch(apiUrl);
        const textData = await response.text(); // JSON 대신 text로 받아옴

        // 🔹 1. 모든 줄을 읽고 주석은 분리
        const lines = textData.split('\n');

        // 🔹 2. 첫 번째, 두 번째, 네 번째 줄을 제거하고, 세 번째 줄에서만 "#"을 제거
        lines.splice(0, 2); // 첫 번째와 두 번째 줄 제거
        lines.splice(-2);

        if (lines.length > 0) {
            lines[0] = lines[0].replace(/^#/, '');
            lines[1] = lines[1].replace(/^#/, ''); 
        }

        // // 🔹 3. 첫 번째 줄을 헤더로, 나머지 줄은 데이터로 매핑
        const header1 = lines[0].split(/\s+/);  // 여러 공백을 기준으로 헤더 분리
        const header2 = lines[1].split(/\s+/);  // 여러 공백을 기준으로 헤더 분리

        const mergedHeader = header1.map((h1, index) => 
            h1 + (header2[index] ? '_' + header2[index] : '')
        );
        
        const data = lines.slice(2).map(line => {
            const values = line.split(/\s+/);  // 여러 공백을 기준으로 데이터 분리
            const row = {};
            mergedHeader.forEach((key, index) => {
                row[key] = values[index-1] || '';  // 데이터가 없으면 빈 문자열로 처리
            });
            return row;
        });

        // 🔹 4. 결과를 JSON 형식으로 응답
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
