// utils/scheduler.ts
const API_ENDPOINT = 'http://localhost:3000/api/saveWeatherData';

// 5분마다 데이터 저장
const interval = 5 * 60 * 1000;

export const startScheduler = () => {
  setInterval(async () => {
    try {
      console.log('Fetching and saving weather data...');
      const response = await fetch(API_ENDPOINT, { method: 'POST' });

      if (!response.ok) {
        throw new Error(`Failed to save data: ${response.statusText}`);
      }

      console.log('Weather data saved successfully.');
    } catch (error) {
      console.error('Error in scheduler:', error);
    }
  }, interval);
};
