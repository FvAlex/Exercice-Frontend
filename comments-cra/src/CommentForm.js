import React, { Component } from 'react'

export default class CommentForm extends Component {
    render() {
        return (
            <form class="commentform">
                <h2 className="title">Ajouter un commentaire</h2>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Your name" value=""/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Your comment">
                        </textarea>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-primary">Envoyer</button>
                    </div>
                </div>
            </form>
        )
    }
}
