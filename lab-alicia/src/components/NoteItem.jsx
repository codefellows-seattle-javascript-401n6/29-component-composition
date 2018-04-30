import React from "react";
import { Link } from 'react-router-dom';

import NoteUpdateForm from './NoteUpdateForm.jsx';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
      isEditing: false,
    }

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  handleRemove(ev) {
    return this.props.removeNote(this.props.note.id);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  finishEdit(noteInfo) {
    this.setState({ isEditing: false });
    this.props.editNote(noteInfo, this.props.index);
  }

  render() {
    if (this.state.isEditing) {
      return <NoteUpdateForm
        note={this.props.note}
        finishEdit={this.finishEdit}
        toggleEdit={this.toggleEdit} />
    }
    return <div onDoubleClick={this.toggleEdit}>
      <h2>{this.props.note.title}</h2>
      <h3>{this.props.note.content}</h3>
      <button onClick={this.handleRemove}>Remove</button>
      <button onClick={this.toggleEdit}>Edit</button>
    </div>
  }
}

export default NoteItem;