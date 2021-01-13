import React, { Component } from 'react';
import axios from "axios";

export default class Post extends Component {
    state= {
        data: {}
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        
        const id = this.props.match.params.id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' +id)
        .then(res => {
            console.log(res.data);
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.data.title}</h1>
                <p>{this.state.data.body}</p>
            </div>
        )
    }
}
