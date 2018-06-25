import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
// import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import './styles/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Notes',
    };
  };

  render() {
    return (
      <Router>
        <div>
            <nav>
              <div>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
              </div>
            </nav>
            <p><Route exact path="/" component={Landing} /></p>
            <p><Route path="/dashboard" component={Dashboard} /></p>
        </div>
      </Router>
    )
  };
};

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);