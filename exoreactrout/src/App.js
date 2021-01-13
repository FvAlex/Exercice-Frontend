import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import Author from "./pages/Author";

export default class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link" exact to="/">Accueil</NavLink>
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                <NavLink className="nav-link" to="/me-contacter">Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>
        <ul>

        </ul>

        <Switch>
          <Route path="/blog/:id" component={Post} />
          <Route path="/blog" component={Blog} />
          

          <Route path="/me-contacter" component={Contact} />

          <Route path="/auteurs/:id" component={Author} />

          <Route path="/" component={Home} />
        </Switch>



      </Router>
    )
  }
}
