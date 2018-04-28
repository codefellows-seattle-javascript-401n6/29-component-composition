import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h2 className="page-description">This is an example todo app built with reactjs.
        Go to the <Link to="/dashboard">dashboard</Link> try it out.
      </h2>
    </div>
  }
}

export default Landing;
