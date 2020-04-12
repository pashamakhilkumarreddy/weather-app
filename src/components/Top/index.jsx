import React, {
  Component, Fragment
} from 'react';
import Weather from './Weather';
import './index.scss';

export default class TopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className={`top-container`}>
          <div className={`title`}>
            Weather App
          </div>
          <Weather weatherData={this.props.weatherData} />
          <button className={`button is-primary`}>Select Location</button>
        </div>
      </Fragment>
    )
  }
}