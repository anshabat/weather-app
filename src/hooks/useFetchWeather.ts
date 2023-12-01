import { useCallback, useEffect, useState } from "react";
import { WEATHER_UPDATE_DELAY } from "../config/constants";

type WeatherInfo = {
  main: string;
  description: string;
};

type WeatherData = {
  main: {
    temp: number;
    humidity: number;
  };
  weather: WeatherInfo[];
  name: string;
};

export const useFetchWeather = (city: string, delay = WEATHER_UPDATE_DELAY) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async () => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Weather data fetch failed");
      }
      const data: WeatherData = await response.json();
      setWeatherData(data);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "something went wrong";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, delay);

    return () => clearInterval(interval);
  }, [fetchWeather, delay]);

  return { data: weatherData, loading, error };
};
