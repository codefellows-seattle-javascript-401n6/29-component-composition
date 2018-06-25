'use strict';

import React from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import NoteItem from './NoteItem';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: [],
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.editNote = this.editNote.bind(this);
  };

  addNote(note) {
    let newArray = this.state.notesList;
    newArray.push(note);
    this.setState({notesList: newArray});
    console.log('Objects Array: ', this.state.notesList);
  };
  // addNote = (note) => {
  //   let newArray = this.state.notesList;
  //   newArray.push(note);
  //   this.setState({notesList: newArray});
  //   console.log('Objects Array: ', this.state.notesList);
  // };


  removeNote(id) {
    let deletingNote = this.state.notesList.find(note => {
      return note.id === id;
    });
    let objIndex = this.state.notes.indexOf(deletingObject);
    this.state.notesList.splice(objIndex, 1);
    this.setState({notesList: this.state.notesList});
  };
  // removeNote = (id) => {
  //   let deletingNote = this.state.notesList.find(note => {
  //     return note.id === id;
  //   });
  //   let objIndex = this.state.notes.indexOf(deletingObject);
  //   this.state.notesList.splice(objIndex, 1);
  //   this.setState({notesList: this.state.notesList});
  // };

  editNote(nodeInfo, id) {
    let pendingUpdate = this.state.notes.find((note) => {
      return nore.id = id;
    });
    let noteIndex = this.state.notes.indexOf(pendingUpdate);
    let newNoteArray = this.state.notes.slice();
    newNoteArray[noteIndex] = noteInfo;
    this.setState({notesList: newNoteArray});
  };

  render() {
    return (
      <div>
        <h1>Lab-28</h1>
        <NoteForm newObject={this.addNotes}></NoteForm>
        <NoteList notes={this.state.notesList} removeObj={this.removeNote}/>
      </div>
    )
  };
};

export default Dashboard;