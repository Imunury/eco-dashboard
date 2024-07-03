// types/location.ts
export interface Location {
  robot_id: string;
  timestamp: Date; // ISO 문자열 형식으로 저장
  latitude: number; // 소수를 포함한 부동 소수점 숫자
  longitude: number; // 소수를 포함한 부동 소수점 숫자
}
