import React from 'react';

import NoteForm from './note-create-form.jsx';

import NoteList from './note-list.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: []
  }
  this.addNote = this.addNote.bind(this);
  this.deleteNote = this.deleteNote.bind(this);
  this.editNote = this.editNote.bind(this);
}

addNote(noteObj) {
    let newArray = this.state.notes;
    newArray.push(noteObj);
    this.setState({notes: newArray});
    console.log('new note', this.state.notes);
  }

deleteNote(id) {
    console.log('note to delete', id);
    let noteToDelete = this.state.notes.find(note => {
      return note.id = id;
    });
    let noteIndex = this.state.notes.indexOf(noteToDelete);
    this.state.notes.splice(noteIndex, 1);
    this.setState({notes: this.state.notes});
  }

  editNote(noteInfo, id) {
    console.log(this.state, 'inside edit note function in dashboard');
    let pendingUpdate = this.state.notes.find(note => {
      return note.id = id;
    });
    let noteIndex = this.state.notes.indexOf(pendingUpdate);
    let newNoteArray = this.state.notes.slice();
    newNoteArray[noteIndex] = noteInfo;
    this.setState({notes: newNoteArray});
    console.log(this.state.notes, 'finished dashboard');
  }

  render() {
    return <main>
      <p>Dashboard</p>
      <NoteForm newNoteFunc={this.addNote}></NoteForm>
      <NoteList notes={this.state.notes} deleteNote={this.deleteNote} editNote={this.editNote} />
    </main>
  }
}

export default Dashboard;