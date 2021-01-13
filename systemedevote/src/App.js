import React, { Component } from 'react';
import Vote from "./vote";
import Answer from "./answer";

class App extends Component {
  state = {
    questions : [
      {
        id:1,
        title : "Should dogs be allowed to fly ?",
        answers: [
          {id:1, name: "Yes", count: 12},
          {id:2, name: "No", count: 25},
          {id:3, name: "Osef", count: 45},
        ]
      },
      {
        id:2,
        title : "Should developers use IDEs ?",
        answers: [
          {id:1, name: "Yes", count: 75},
          {id:2, name: "No", count: 2},
          {id:3, name: "Osef", count: 4},
        ]
      },
      {
        id:3,
        title : "Should dors be shut at night ?",
        answers: [
          {id:1, name: "Yes", count: 4},
          {id:2, name: "No", count: 79},
          {id:3, name: "Osef", count: 16},
        ]
      }
    ]
  }

  render() {
    const questionJSX = this.state.questions.map(question => {
      return <Vote key={question.id} data = {question} />
    })
    return (
      <div>
        {questionJSX}
      </div>
    )
  }
}
export default App;