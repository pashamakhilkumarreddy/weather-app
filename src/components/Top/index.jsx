import React, {
  Component, Fragment
} from 'react';
import Weather from './Weather';
import './index.scss';
import { Manager, Reference, Popper } from 'react-popper';

export default class TopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false,
      location: ''
    };
  }

  handleOnChange = (e) => {
    const { value } = e.target;
    if (value) {
      this.setState({
        location: value
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { location } = this.state;
    const { eventEmitter } = this.props;
    if (this.state.location) {
      eventEmitter.emit('updateWeather', location);
      this.setState({
        location: '',
        isSelectLocationOpen: false
      });
    }
  }

  onToggleSelectLocation = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      isSelectLocationOpen: !prevState.isSelectLocationOpen
    }));
  }

  render() {
    const { isSelectLocationOpen } = this.state;
    const { eventEmitter } = this.props;
    return (
      <Fragment>
        <div className={`top-container`}>
          <div className={`title`}>
            Weather App
          </div>
          <Weather weatherData={this.props.weatherData} />
          <Manager>
            <Reference>
              {({ ref }) => (
                <button className={`button is-primary`} ref={ref} onClick={this.onToggleSelectLocation}>
                  Select Location
                </button>
              )
              }
            </Reference>
            <Popper placement="right">
              {
                ({ ref, style, placement, arrowProps }) => (
                  isSelectLocationOpen && (
                    <div className={`popup-container`} ref={ref} style={{...style, top: '-12%', left: '-25%'}} data-placement={placement}>
                      <form className={`form-container`} onSubmit={this.handleSubmit}>
                        <label htmlFor="location-name">Location Name</label>
                        <input id="location-name" type="text" placeholder="Please enter the city name" value={this.state.location} onChange={this.handleOnChange}/>
                        <button className={`button is-secondary`}>Get Weather Details</button>
                      </form>
                      <div ref={arrowProps.ref} style={arrowProps.style}></div>
                    </div>
                  )
                )
              }
            </Popper>
          </Manager>
        </div>
      </Fragment>
    )
  }
}