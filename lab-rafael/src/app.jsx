import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './style/main.scss';

import Landing from './components/Landing.jsx';
import Dashboard from './components/Dashboard.jsx';
import NoteForm from './components/NoteForm.jsx';
import NoteList from './components/NoteList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'To Do React',
      description: 'This a To Do application built with Reactjs.'
    }
  }

  render() {
    return <Router>
      <div>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>

        <div id="main-content">
          <h1>{this.state.title}</h1>
           <Route exact path="/" component={Landing}/>
           <Route path="/dashboard" component={Dashboard}/>
        </div>

      </div>
    </Router>
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
