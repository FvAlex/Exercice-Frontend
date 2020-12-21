import React, { Component } from 'react'

export default class AdminMode extends Component {

    state = {

    }
    render() {

       let button = this.props.isTrue ? 
        <button className="button is-danger" onClick={this.props.changeMode}>Désactiver le mode d'administration</button>
        : <button className="button is-info" onClick={this.props.changeMode}>Activer le mode d'administration</button>;

        let classMessage = this.props.isTrue ? "message is-danger" : "message is-info";

        return (
            <article className={classMessage}>
                 <div className="message-body">
                    {button}
                </div>
            </article>
        )
    }
}