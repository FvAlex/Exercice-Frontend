import React, { Component } from 'react'
import "./Comment.scss"

export default class Comment extends Component {

    state = {
        isRed: false
    }

    render() {
        // L'ancien dégueu
        // let classComment;
        // if(this.state.isRed) { classComment = "comment comment--red"}
        // else { classComment="comment"}

        // Tout beau tout propre
        const classComment = this.state.isRed ? "comment comment--red" : "comment";

        return (
            <div className={classComment}>
                <strong>{this.props.name}</strong>
                <p>{this.props.message}</p>
            </div>
        )
    }
}
