import React from 'react';

import CreateForm from './note-create-form.jsx';

import NoteList from './note-list.jsx';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      notes: [
      ],
    }

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  addNote(noteObj) {
    let newArray = this.state.notes;
    newArray.push(noteObj);
    this.setState({notes: newArray});
  }

  removeNote(id) {
    console.log('note to remove', id);
    let noteToRemove = this.state.notes.find(note => {
      return note.id = id;
    });
    let noteIndex = this.state.notes.indexOf(noteToRemove);
    let newNoteArray = this.state.notes.slice();
    newNoteArray.splice(noteIndex, 1);
    this.setState({notes: newNoteArray});
  }

  editNote(noteInfo, id) {
    let noteToUpdate = this.state.notes.find(note => {
      return note.id = id;
    });
    let noteIndex = this.state.notes.indexOf(noteToUpdate);
    let newNoteArray = this.state.notes.slice();
    newNoteArray[noteIndex] = noteInfo;
    this.setState({notes: newNoteArray});
  }

  render() {
    return <main>
      <p>Welcome to your dashboard!</p>
      <CreateForm addNoteFunc={this.addNote}></CreateForm>
      <NoteList notes={this.state.notes} removeNote={this.removeNote} editNote={this.editNote}/>
    </main>
  }
}

export default Dashboard;