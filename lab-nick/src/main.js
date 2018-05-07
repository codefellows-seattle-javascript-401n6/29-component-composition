'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Landing from './components/landing.js';
import Dashboard from './components/dashboard.js';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Todo List'
    }
  }

  render() { // JSX
    return <Router>
      <div>

        <h1>{this.state.title}</h1>
        <nav>
          <ul>
            <li><Link to="/">Landing</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
          </ul>
        </nav>

        
        
      </div>
    </Router>
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<TodoApp />, root);  // Class and render need to be the same.