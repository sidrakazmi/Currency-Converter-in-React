import{ BrowserRouter as Router, Link, Route } from'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Home from './component/Home.js';
import Converter from './component/Converter.js';
import RateList from './component/RateList.js';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
        <h1>Welcome! </h1>
        
          <ul>
            <li><Link to="/convert">Start Conversion</Link></li>
            <li><Link to="/rateList">Rate List</Link></li>
          </ul>
          
          <div className="content-wrapper">
            <Route path="/convert" component={Converter} />
            <Route path="/rateList" component={RateList} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;