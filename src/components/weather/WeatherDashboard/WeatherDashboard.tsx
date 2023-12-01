import WeatherCard from "../WeatherCard/WeatherCard";
import "./WeatherDashboard.css";

const WeatherDashboard = () => {
  return (
    <div className="weather-dashboard">
      <WeatherCard city="London" />
      <WeatherCard city="Madrid" />
      <WeatherCard city="New york" />
    </div>
  );
};

export default WeatherDashboard;
