import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.message}</p>
            </div>
        )
    }
}
  
