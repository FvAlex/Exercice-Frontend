import React, { Component } from 'react';


export default class Button extends Component {
    render() {
        return (
           
                <div className="columns">
                    <div className="column">
                        <h1 className="title">Ajouter un commentaire</h1>
                            <form className="commentform">
                                <div className="field">
                                    <label class="label">Name</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Your name" value/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Message</label>
                                    <div className="controle">
                                        <textarea className="textarea" placeholder="Your comment"></textarea>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
               
            )
    }
}
