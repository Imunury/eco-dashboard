// pages/_app.tsx
import { useEffect } from 'react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const kakaoMapScript = document.createElement('script');
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
        kakaoMapScript.onload = () => {
            window.kakao.maps.load(() => {
                console.log('Kakao Map API loaded');
            });
        };
        document.head.appendChild(kakaoMapScript);
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
