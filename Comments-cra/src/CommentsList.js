import React, { Component } from 'react';
import Message from './Message';

export default class CommentsList extends Component {

    state= {
        comments: [
          { name: "JB", message: "Youhou la famille"},
          { name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"},
        ]
      }
    render() {
        const  commentsList = this.state.comments.map(message => {
            return <Message name={message.name} message={message.message} />
          })
        return (
            <div>
                <h2 className="title">Liste des commentaires</h2>
                {commentsList}
            </div>
        )
    }
}
