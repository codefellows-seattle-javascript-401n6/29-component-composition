import React from 'react';
import { Link } from 'react-router-dom';

import NoteItem from './NoteItem.jsx';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note
    }

    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  update(ev) {
    let newState = Object.assign(this.state.note);
    newState[ev.target.name] = ev.target.value;
    this.setState(newState);
  }

  save(ev) {
    ev.preventDefault();
    this.props.finishEdit(this.state);
  }

  cancel() {
    this.props.toggleEdit();
  }

  render() {
    return <form onSubmit={this.save}>
      <span>Title:
        <input name="title"
          type="text"
          value={this.state.note.title}
          onChange={this.update} />
      </span>
      <span>Content:
        <input name="content"
          type="text"
          value={this.state.note.content}
          onChange={this.update} />
      </span>
      <button onClick={this.cancel}>
        Cancel</button>
      <button type="submit"
        onClick={this.save}>
        Save</button>
    </form>
  }
}

export default NoteUpdateForm;