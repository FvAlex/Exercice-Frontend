import React, {Component} from 'react';

class Question extends Component {
    state = {
        countVisible: false,
        selectedAnswer: ""
    }

    handleVote = () => {
        this.setState({
            countVisible: true
        })

        const question = this.props.data;
        console.log(question);
        console.log(this.state.selectedAnswer);
    }

    handleSelectedAnswer = (event) => {
        this.setState({
            selectedAnswer: event.target.value
        })
    }

    render() {
        const data = this.props.data;
        const answersJSX = data.answers.map(answer => {
            const idAnswer = "q"+data.id+"r"+answer.number;
            return (
                <div className="form-check">
                    <input className="form-check-input" type="radio" 
                    name={"radiogrp-"+data.id} id={idAnswer} 
                    onChange={this.handleSelectedAnswer}
                    value={answer.number} />
                    <label className="form-check-label" htmlFor={idAnswer}>
                        {answer.name} 
                        {this.state.countVisible ? answer.count : ""} 
                    </label>
                </div>
            )
        })
        
        return(
            <div className="card mb-3">
                <div className="card-header bg-primary text-white border-primary">
                    {data.title}
                </div>
                <div className="card-body">
                <form>
                    {answersJSX}
                </form>
                </div>
                <div className="card-footer bg-transparent">
                    <button className="btn btn-primary"
                        onClick={this.handleVote}>Voter</button>
                </div>
            </div>
        );
    }
}

export default Question;

//Pour Jeudi,
à partir de la méthode handleVote, et des données qu'on a, à savoir: la question d'origine + la réponse sélectionnée

Ex: 
    La question d'origine
    {
        id:1,
        title: "Who let's the dog out?",
        answers: [
          {number:1, name: "Yes", count: 12},
          {number:2, name: "No", count: 7},
          {number:3, name: "OSEF", count: 23},
        ]
      }
      
      La réponse sélectionnée, c'est 3
      
      L'objectif, c'est de recréer une variable newQuestion
      qui vaudra:
          
          
              {
        id:1,
        title: "Who let's the dog out?",
        answers: [
          {number:1, name: "Yes", count: 12},
          {number:2, name: "No", count: 7},
          {number:3, name: "OSEF", count: 24},
        ]
      }
          