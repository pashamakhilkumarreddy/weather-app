import React, { Component } from 'react';
import axios from 'axios';
import TopSection from './components/Top/index';
import BottomSection from './components/Bottom/index';
import './App.css';
import './sass/app.scss';

const WEATHER_APP_KEY = `2142a4d61720d434c61165625afc8eb0`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      cityName: 'London',
      temperature: '',
      weatherDescriptions: [],
      weatherIcons: '',
      name: '',
      country: '',
      localTime: null,
      current: null
    }
  }

  updateWeather = async () => {
    try {
      const URL = `http://api.weatherstack.com/current?access_key=${WEATHER_APP_KEY}&query=${this.state.cityName}`;
      const data = await axios.get(URL);
      if (data) {
        const {data: weatherData, status, statusText} = data;
        if (status === 200 && statusText === 'OK') {
          const {
            current,
            location
          } = weatherData;
          const {
            observation_time: time,
            temperature,
            weather_icons,
            weather_descriptions
          } = current;
          const {
            name,
            country,
            region,
            localtime,
            lat, 
            lon
          } = location;
          this.setState({
            isLoading: false,
            cityName: name,
            country,
            temperature,
            weatherDescriptions: weather_descriptions,
            weatherIcons: weather_icons[0],
            localTime: localtime,
            current: {
              ...current,
              weather_icons,
              lat, 
              lon,
              region,
              time,
              weatherDescriptions: weather_descriptions
            }
          });
        }
      }
    } catch(err) {
      console.error(`Cannot fetch the data from the weather API, ${err}`);
    }
  }

  componentDidMount () {
    const { eventEmitter } = this.props;
    this.updateWeather();

    eventEmitter.on('updateWeather', data => {
      this.setState({
        cityName: data
      }, () => this.updateWeather());
    })
  }

  render() {
    const weatherData = {...this.state};
    delete weatherData.isLoading;
    delete weatherData.current;
    return (
      <div className={`app-container`}>
        <div className={`main-container`}>
          <div className={`top-section`}>
            {
              this.state.isLoading ? <h3>Loading...</h3> : <TopSection weatherData={weatherData} eventEmitter={this.props.eventEmitter} />
            }
          </div>
          <div className={`bottom-section`}>
            <BottomSection current={this.state.current} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
