import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Land from './components/land.jsx';
import Dashbaord from './components/dashboard.jsx';
import './style/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('test');
    this.state = {
      title: 'To Do List'
    }
  }

  render(){
    return <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/dashboard">TODOs</Link></li>
            </ul>
          </nav>
          <h1>{this.state.title}</h1>
          <Route exact path="/" component={Land} />
          <Route path="/dashboard" component={Dashbaord} />
        </div>
      </Router>
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);