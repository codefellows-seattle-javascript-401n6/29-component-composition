import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Dashboard from './components/Dashboard.jsx';
import Landing from './components/Landing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  render() {
    return <Router>
      <div>
        <nav>
          <h1>ToDo List</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        <div id="main-content">
          <h1>{this.state.title}</h1>
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </div>
    </Router>
  }
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);