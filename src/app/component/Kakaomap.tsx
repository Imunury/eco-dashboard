// // components/KakaoMap.tsx
// import React, { useEffect } from 'react';

// const KakaoMap: React.FC = () => {
//     useEffect(() => {
//         const initializeMap = () => {
//             if (window.kakao && window.kakao.maps) {
//                 const container = document.getElementById('map');
//                 const options = {
//                     center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//                     level: 3,
//                 };
//                 new window.kakao.maps.Map(container, options);
//             }
//         };

//         if (window.kakao && window.kakao.maps) {
//             window.kakao.maps.load(initializeMap);
//         } else {
//             const checkKakaoMap = setInterval(() => {
//                 if (window.kakao && window.kakao.maps) {
//                     clearInterval(checkKakaoMap);
//                     initializeMap();
//                 }
//             }, 100);
//         }
//     }, []);

//     return <div id="map" style={{ width: '100%', height: '500px', border: '1px solid black' }}></div>;
// };

// export default KakaoMap;
