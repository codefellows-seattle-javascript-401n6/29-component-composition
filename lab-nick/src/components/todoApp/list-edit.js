'use strict';

import React from 'react';
import List from './list.js';

class ListEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: this.props.title,
        content: this.props.content,
        id: this.props.id
    }
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  update(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  save(event) {
    event.preventDefault();
    this.props.saveUpdate(this.state)
  }

  cancel(event) {
    event.preventDefault();
    this.props.cancelUpdate();
  }

  render() {
    return <form onSubmit={this.save}>
    <div>
      <input id="title-edit" onChange={this.update} name="title" type="text" 
        value={this.state.title}/>
    </div>
    <pre>
      <textarea id="content-edit" onChange={this.update} name="content" type="text"
        value={this.state.content}/>
    </pre>
    <button type="submit">Update</button>
    <button onClick={this.cancel}>Cancel</button>
    </form>
  }
}

export default ListEdit;