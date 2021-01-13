import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


export default class Blog extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data);
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        const postsJSX = this.state.data.map(bazar => {
            return <li><Link to={"/blog/"+bazar.id}>{bazar.title}</Link></li>
        })

        return (
            <div>
                <h1>Mes articles</h1>
                <ul>
                    {postsJSX}
                </ul>
            </div>
        )
    }
}
