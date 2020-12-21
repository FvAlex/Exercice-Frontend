import React, { Component } from 'react';
import axios from "axios";

class OtherdayWeather extends Component {
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
            <div className="semaine">
              <div className="jour1">
                <p><strong>Wednesday</strong></p>
                <p className="temp">{this.state.data.daily[1].temp.day}°C</p>
              </div> 
              <div className="jour2">
                <p><strong>Thursday</strong></p>
                <p></p>
                <p className="temp">{this.state.data.daily[2].temp.day}°C</p>
              </div>
              <div className="jour3">
                <p><strong>Friday</strong></p>
                <p></p>
                <p className="temp">{this.state.data.daily[3].temp.day}°C</p>
              </div>
              <div className="jour1">
                <p><strong>Saturday</strong></p>
                <p></p>
                <p className="temp">{this.state.data.daily[4].temp.day}°C</p>
              </div>
            </div>
        );
    }
    else {
      // Sinon j'affiche un loading
      return (<p>Loading...</p>);
    }
    }
    
}
export default OtherdayWeather;