'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      number: this.props.number
    };
  }

  handleChange(ev) {
    let state = {};
    state[ev.target.name] = ev.target.value;
    this.setState(state);
    }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.onSave(this.state.name, this.state.number);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <span>Name: 
        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
      </span>
      <span>Number: 
      <input name="number" type="text" value={this.state.number} onChange={this.handleChange} />
      </span>
      <button type="submit">save</button>
    </form>
  }
}

export default ContactEdit;