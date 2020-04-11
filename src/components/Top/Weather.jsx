import React, {
  Component, Fragment
} from 'react';

export default class Weather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className={`weather-container`}>
          <div className="header"></div>
          <div className={`inner-container`}>
            <div className="image">

            </div>
            <div className="current-weather"></div>
          </div>
          <div className="footer"></div>
        </div>
      </Fragment>
    )
  }
}