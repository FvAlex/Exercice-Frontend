import React, { Component } from 'react';
import App from "./App";

class Answer extends Component {
    render() {
        return (
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={"radiogrp-"+data.id} id={'q' +data.id+"r"+answer.number} />
                    <label className="form-check-label" htmlFor={'q' +data.id+"r"+answer.number}>
                        {answer.name} {this.state.countVisible ? answer.count: ""}
                    </label>
                </div>
            );
    };
};
export default Answer;
