import React, {Component} from "react";
import axios from 'axios';

class App extends Component {

  state = {
    houses: []
  }

  componentDidMount() {

    axios.get('https://anapioficeandfire.com/api/houses/')
    .then(res => {
      console.log(res)

      this.setState({
        houses: res.data
      })
    })
    
  }

  render() {

    const got= this.state.houses.map(house => {
      return <li>{house.name} from {house.region}</li>
    })

    return (
      <div className="App">
        <ul>
          {got}
        </ul>
        
      </div>
    );
  }
}
export default App;