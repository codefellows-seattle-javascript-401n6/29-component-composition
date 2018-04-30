import React from 'react';

import EditNoteForm from './edit-note.jsx';

class Note extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.deleteNote = this.deleteNote.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.saveUpdate = this.saveUpdate.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  toggleEdit() {
    this.setState({editing: !this.setState.editing});
    console.log(this.state, 'are we editing?')
  }

  deleteNote(event) {
    event.preventDefault();
    console.log('deleting a note', this.props.id);
    this.props.deleteNote(this.props.id);
  }
  saveUpdate(noteInfo) {
    console.log(this.state, 'are we editing?')
    this.setState({editing: false});
    this.props.editNote(noteInfo, this.props.id);
  }

  cancelUpdate() {
    this.toggleEdit();
  }

  render() {
    if (this.state.editing) {
      return <EditNoteForm title={this.props.title} content={this.props.content} id={this.props.id} key={this.props.id} saveUpdate={this.saveUpdate} cancelUpdate={this.cancelUpdate}></EditNoteForm>
    }
    return <li onDoubleClick={this.toggleEdit}><div>
      {this.props.title}: {this.props.content}. <a onClick={this.deleteNote}>DELETE</a>
      </div>
    </li>
  }
}

export default Note;