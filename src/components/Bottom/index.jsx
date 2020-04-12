import React, {
  Component,
  Fragment
} from 'react';
import CurrentWeather from './CurrentWeather';
import './index.scss';

export default class BottomSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return ( 
      <Fragment>
        <div className={`bottom-container`}>
          <div className="inner-container">
            <CurrentWeather current={this.props.current }/>
          </div>
        </div>
      </Fragment>
    )
  }
}