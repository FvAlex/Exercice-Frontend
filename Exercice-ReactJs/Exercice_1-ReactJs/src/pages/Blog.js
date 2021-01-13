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
            return (
            <div className="card col-4">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{bazar.title}</h5>
                    <Link className="btn btn-primary" to={"/blog/"+bazar.id}>En savoir plus</Link>
                </div>
            </div>
            )
          
        })

        return (
            <div>
                <h1>Mes articles</h1>
                <div className="container">
                    <div className="row">
                        {postsJSX}
                    </div>
                </div>
                
            </div>
        )
    }
}
