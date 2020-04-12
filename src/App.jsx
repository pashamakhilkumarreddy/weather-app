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
      observationTime: '',
      temperature: '',
      weatherDescriptions: [],
      weatherIcons: '',
      name: '',
      region: '',
      localTime: null,
    }
  }

  async componentDidMount () {
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
            region,
            localtime
          } = location;
          this.setState({
            isLoading: false,
            cityName: name,
            observationTime: time,
            temperature,
            weatherDescriptions: weather_descriptions,
            weatherIcons: weather_icons[0],
            region,
            localTime: localtime
          });
        }
      }
    } catch(err) {
      console.error(`Cannot fetch the data from the weather API, ${err}`);
    }
  }

  render() {
    const weatherData = {...this.state};
    delete weatherData.isLoading;
    return (
      <div className={`app-container`}>
        <div className={`main-container`}>
          <div className={`top-section`}>
            {
              this.state.isLoading ? <h3>Loading...</h3> : <TopSection weatherData={weatherData} />
            }
          </div>
          <div className={`bottom-section`}>
            <BottomSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
