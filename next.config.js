/** @type {import('next').NextConfig} */
const nextConfig = {
    // CORS headers 설정
    async headers() {
        return [
            {
                source: "/api/:path*", // API 경로에 대해서 CORS 설정
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*", // 모든 도메인에 대해 허용
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET, POST, OPTIONS", // 허용되는 HTTP 메소드
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Content-Type", // 허용되는 헤더
                    },
                ],
            },
        ];
    },

    // 이미지 최적화 설정
    images: {
        domains: ["localhost", "https://eco-dashboard-kappa.vercel.app/"], // 허용할 도메인 추가
    },

    // assetPrefix 설정 (최상위 옵션으로 이동)
    assetPrefix: '/',
};

module.exports = nextConfig;
