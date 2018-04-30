import React from "react";
import { Link } from "react-router-dom";

import Dashboard from "./Dashboard.jsx";

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Link to="/dashboard">Welcome to the ToDo List Application!</Link>
    </div>
  }
}

export default Landing;