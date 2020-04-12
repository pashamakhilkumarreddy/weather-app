import React, {
  Fragment
} from 'react';

const CurrentWeather = ({
  current
}) => {
  if (!current) return null;
  const {
    lat,
    lon,
    observation_time: observationTime,
    pressure,
    region,
    uv_index,
    weather_code: weatherCode,
    weather_descriptions: weatherDescriptions,
    wind_speed: windSpeed,
    wind_dir: windDir,
    wind_degree: windDegree
  } = current;
  return (
    <Fragment>
      <div className={`current-weather-container`}>
        <div className="images">
          <div className="weather-description">
            {
              current.weather_icons.map((iconSrc, index) => <img src={iconSrc} key={index.toString()} />)
            }
            {
              weatherDescriptions.map((desc, index) => <div key={index.toString()}>{desc}</div>)
            }
          </div>
        </div>
        <div className="text">
          Region: {region}
        </div>
        <div className="text">
        Co-ordinates: {lat},{` `}{lon}
        </div>
        <time dateTime={observationTime}>{observationTime}</time>
        <div className="text">
          Weather Code: {weatherCode}
        </div>
        <div className="text">
          UV Index: {uv_index}
        </div>
        <div className="text">
          Wind Speed: {windSpeed}
        </div>
        <div className="text">
          Wind Dir: {windDir}
        </div>
        <div className="text">
          Wind Degree: {windDegree}
        </div>
        <div className="text">
          Pressure: {pressure}
        </div>
        <div className="a"></div>
      </div>
    </Fragment>
  )
}

export default CurrentWeather;
