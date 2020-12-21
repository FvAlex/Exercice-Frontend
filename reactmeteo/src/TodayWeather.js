import React, { Component } from 'react';
import axios from "axios";

class TodayWeather extends Component {
    state = {
        data: {}
      }
      componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=en&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
        .then(res => {
          console.log(res.data)
          this.setState({
            data: res.data
          })
        })
      }
    render() {
        const data = this.state.data;
        // Checker que data est vide
        if(Object.keys(data).length !== 0) {
        return (
            <div className="today">
              <p>Today</p>
              <h1 className="ville">Lens</h1>
              <p>Temperature:  {this.state.data.daily[0].temp.day}°C</p>
              <p>{this.state.data.daily[0].weather[0].description}</p>
            </div>
        );
    } 
    else {
        // Sinon j'affiche un loading
        return (<p>Loading...</p>);
      }
    }
}
export default TodayWeather;