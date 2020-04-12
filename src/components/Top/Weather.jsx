import React, {
  Component, Fragment
} from 'react';

import SunnyImage from '../../static/images/sun.png';

export default class Weather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const {
      cityName,
      localTime,
      observationTime,
      region,
      temperature,
      weatherDescriptions,
      weatherIcons
    } = this.props.weatherData;
    return (
      <Fragment>
        <div className={`weather-container`}>
          <div className="header">{cityName}, {region}</div>
          <time datetime={observationTime}>Observation Time: {observationTime}</time>
          <time datetime={localTime}>Local Time: {localTime}</time>
          <div className={`inner-container`}>
            <div className="image">
              <img src={weatherIcons ? weatherIcons : SunnyImage} alt="Weather Image" />
            </div>
            <div className="current-weather">
              {temperature}&deg;
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </Fragment>
    )
  }
}