import { Weather } from '../types/weather';
import ApiService from './ApiService';

const weatherUrl = '/weather';

const WeatherService = {
  getWeather: () => ApiService.get<Weather[]>(`${weatherUrl}`),
};

export default WeatherService;
