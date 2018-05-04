import React from 'react';
import { Link } from 'react-router-dom';

import Dashboard from './dashboard.jsx';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <p>Welcome to the Notes App!</p>
     </div>
  }
}

export default Landing;