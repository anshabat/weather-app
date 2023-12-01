import "./WeatherCard.css";
import Card from "../../shared/Card/Card";
import { useFetchWeather } from "../../../hooks/useFetchWeather";

type Props = {
  city: string;
  delay?: number;
};

const WeatherCard = (props: Props) => {
  const { city, delay } = props;
  const { data, loading, error } = useFetchWeather(city, delay);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="weather-card">
      {data ? (
        <Card title={`Today in ${data.name}`}>
          {loading ? (
            <div className="weather-card__loading">Updating...</div>
          ) : null}
          <dl className="weather-card__list">
            <dt>Temperature: </dt>
            <dd>{data.main.temp} °C</dd>
            <dt>Humidity: </dt>
            <dd>{data.main.humidity}%</dd>
            <dt>Conditions:</dt>
            <dd>{data.weather.map((info) => info.main).join(" / ")}</dd>
          </dl>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default WeatherCard;
