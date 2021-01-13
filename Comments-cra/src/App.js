import React, {Component} from 'react';
import AdminMode from './AdminMode';
import './App.scss';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import Person from './Person';

class App extends Component {

  state= {
    people: [
      { name: "Pilippe", age: "12"},
      { name: "Gaston", age: "23"},
      { name: "Coincoin", age: "34"}
    ]
  }  
  changeMode = () => {
    this.setState({
      isTrue : !this.state.isTrue
    }) 
  }

  render() {
    const peopleList = this.state.people.map(person => {
      return <Person name={person.name} age={person.age} />
    })

    // peopleList: [<Person/>, <Person />, <Person />]
    // <Person name="Pilippe" age="12" />
    // <Person name="Gaston" age="23" />
    // <Person name="Coincoin" age="34" />

    return (
      <div className="App container">
        <AdminMode isTrue={this.state.isTrue} changeMode={this.changeMode}/>

        <div className="columns">
          <div className="column">
            <CommentForm/>
          </div>
          <div className="column">
            <CommentsList/>
          </div>
        </div>

        {peopleList}
      </div>
    );
  }

}

export default App;
