import React, { Component } from "react";
import "./App.css";
import TodayWeather from "./TodayWeather";
import OtherdayWeather from "./OtherdayWeather";

class App extends Component {

  render() {
      return (
        <div className="App">
           <div className="input">
            <input type="text" className="Longitude" value="" placeholder="Ville.."/>
          </div>
          <div className="container">
            <TodayWeather/>
            <OtherdayWeather/>
          </div>
        </div>
      );
    }
}

export default App;
