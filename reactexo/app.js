class App extends React.Component {
    state = {
        answer: "",
        comments: [],
    }
    changeText = (event) => {
        this.setState({
            answer: event.target.value
        })
    }
    submit = (event) => {
        event.preventDefault();
    }



    render(){
        return(
            <form>
                <div id="container" onSubmit={this.submit}>
                    <h3>Say something</h3>
                    <input id="name" type="text" value={this.state.answer} onChange={this.changeText} placeholder="Your Name"/>
                    <textarea placeholder="Your Comment" rows="10"></textarea>
                    <button id="comment">Comment</button>
                </div>
            </form> 
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));