export default async function handler(
  req = NextApiRequest,
  res = NextApiResponse
) {
  if (req.method === "POST") {
    const { id, topics } = req.body;

    const dataSend = {
      topics: topics,
    };

    try {
      const response = await fetch(
        `http://112.164.105.160:4001/send-mqtt/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Connection: "keep-alive",
            "Content-Length": JSON.stringify(dataSend).length.toString(),
          },
          body: JSON.stringify(dataSend),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error sending data:", error);
      res.status(500).json({ error: "Failed to send data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
