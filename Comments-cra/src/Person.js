import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div>
                <h3>Son nom: {this.props.name}</h3>
                <p>Son âge: {this.props.age}</p>
            </div>
        )
    }
}
