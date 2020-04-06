import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import history from "./components/History";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Student from './components/Student';
import Redirect from './components/Redirect';

class App extends Component {
  render() {
      return (
      <BrowserRouter history={history}>
        <div>
          <Navigation></Navigation>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/student/:studentname/:studentno?" component={Student} />
            <Route path="/redirect" component={Redirect} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
