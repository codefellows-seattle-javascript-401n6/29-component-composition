import React from 'react';

import Note from './note-item.jsx';

class NoteUpdateForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      content: this.props.content,
      id: this.props.id
    }

    this.update = this.update.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  update(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  submitUpdate(event) {
    event.preventDefault();
    this.props.finishUpdate(this.state);
  }

  cancelUpdate(event) {
    event.preventDefault();
    this.props.cancelUpdate();
  }

  render() {
    return <form onSubmit={this.submitUpdate}>
     <input onChange={this.update} name="title" type="text" placeholder="title"/>
     <textarea onChange={this.update} name="content"/>
     <button type="submit">Update</button>
     <button onClick={this.cancelUpdate}>Cancel</button>
    </form>
  }
}

export default NoteUpdateForm;