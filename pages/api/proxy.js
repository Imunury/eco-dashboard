import { createProxyMiddleware } from "http-proxy-middleware";

export default function handler(req, res) {
  const { baseIp, fullUrl } = req.query;

  if (!baseIp || !fullUrl) {
    res
      .status(400)
      .json({ error: "baseIp and fullUrl query parameters are required" });
    return;
  }

  const target = `http://${baseIp}`;
  console.log(target);
  const proxy = createProxyMiddleware({
    target,
    changeOrigin: true,
    selfHandleResponse: false,
    pathRewrite: {
      [`^/api/proxy`]: "", // API 경로 재작성
    },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.path = `/${fullUrl}`;
      proxyReq.setHeader(
        "Authorization",
        "Basic " + Buffer.from("admin:ecopeace123").toString("base64")
      );
    },
  });

  return proxy(req, res, (err) => {
    if (err) {
      res.status(500).json({ error: "Proxy error" });
    }
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
