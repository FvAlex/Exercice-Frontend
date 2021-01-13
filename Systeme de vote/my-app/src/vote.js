import React, { Component } from 'react'

class Vote extends Component {
    render() {
        return (
            <div className="container">
                <div className="title">
                    <h3>Should dogs be allowed to fly</h3>
                </div>
                <div className="yes">
                    <p>Yes</p>
                </div>
                <div className="no">
                    <p>No</p>
                </div>
                <div className="other">
                    <p>I really don't care</p>
                </div>
                <button type="button" class="btn btn-primary">Vote</button>
            </div>
        )
    }
}

export default Vote;