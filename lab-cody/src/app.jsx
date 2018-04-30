import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import Landing from './components/landing.jsx';
import Dashboard from './components/dashboard.jsx';
import './style/main.scss';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: 'My Notes',
      }
    }
  
    render() {
      return  <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        <h1>{this.state.title}</h1>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
    }
  }
  
  let root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(<App/>, root);