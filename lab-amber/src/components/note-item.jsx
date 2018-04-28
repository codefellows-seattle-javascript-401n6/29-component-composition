import React from 'react';

import NoteUpdateForm from './note-update-form.jsx';

class Note extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    }

    this.deleteNote = this.deleteNote.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.finishUpdate = this.finishUpdate.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  deleteNote(event) {
    console.log('delete note x clicked');
    event.preventDefault();
    this.props.removeNote(this.props.id);
  }

  finishUpdate(noteInfo) {
    this.setState({isEditing: false});
    this.props.editNote(noteInfo, this.props.id);
  }

  cancelUpdate() {
    this.toggleEdit();
  }

  render() {
    if (this.state.isEditing) {
      return <NoteUpdateForm title={this.props.title} content={this.props.content} id={this.props.id} key={this.props.id} finishUpdate={this.finishUpdate} cancelUpdate={this.cancelUpdate}></NoteUpdateForm>
    }
    return <li onDoubleClick={this.toggleEdit}>
      {this.props.title}: {this.props.content}. <a onClick={this.deleteNote}>x</a>
    </li>
  }
}

export default Note;