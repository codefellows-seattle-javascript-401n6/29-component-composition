'use strict';

import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h2>Landing</h2>
      <p>A simple to do list where you can add, delete and edit notes.</p>
      <p>Click on Dashboard to get started.</p>
    </div>
  }
}

export default Landing;