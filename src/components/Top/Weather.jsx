import React, {
  Component, Fragment
} from 'react';

import SunnyImage from '../../static/images/sun.png';

export default class Weather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      cityName,
      localTime,
      country,
      temperature,
      weatherDescriptions,
      weatherIcons
    } = this.props.weatherData;
    return (
      <Fragment>
        <div className={`weather-container`}>
          <div className="header">{cityName}, {country}</div>
          <time dateTime={localTime}>{localTime}</time>
          <div className={`inner-container`}>
            <div className="image">
              <img src={weatherIcons ? weatherIcons : SunnyImage} alt="Weather Image" />
            </div>
            <div className="current-weather">
              Temp: {temperature}&deg;
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </Fragment>
    )
  }
}