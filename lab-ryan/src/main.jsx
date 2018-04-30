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
            title: 'Notes App',
        }
    }

    render(){
        return <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to ="/">Landing</Link></li>
                        <li><Link to = "/dashboard">Dashboard</Link></li>
                    </ul>
                </nav>
                <div>
                    <h2>{this.state.title}</h2>
                    <Route exact path="/" component={Landing} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </div>
       </Router>
    }
};

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);