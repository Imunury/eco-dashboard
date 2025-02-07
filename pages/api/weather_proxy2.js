export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const apiUrl = `https://api.hrfco.go.kr/966803A1-1446-4FCC-A18D-3998A76E082E/rainfall/list/1H`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); 

        // 🔹 4. 결과를 JSON 형식으로 응답
        res.status(200).json(data.content);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
