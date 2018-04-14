const API_KEY = 'e0d35159eeefa8f1b48f6d5050391dab';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';
import axios from 'axios';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}