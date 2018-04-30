import React from "react";
import ReactDOM from "react-dom";
import uuidv4 from 'uuid/v4';

import NoteCreateForm from './NoteCreateForm.jsx';
import NoteList from './NoteList.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  addNote(note) {
    let newNote = {
      id: '',
      editing: false,
      completed: false,
      title: note.title,
      content: note.content
    }
    this.state.notes.push(newNote);
    this.setState({ notes: this.state.notes });
  }

  removeNote(id) {
    this.state.notes = this.state.notes.filter(note => {
      return note.id !== id;
    });
    this.setState({ notes: this.state.notes });
  }

  editNote(noteInfo, index) {
    let newArr = [...this.state.notes];
    newArr[index].title = noteInfo.title;
    newArr[index].content = noteInfo.content;
    this.setState({ notes: newArr });
  }

  render() {
    return <div>
      <NoteCreateForm addNote={this.addNote} />
      <NoteList removeNote={this.removeNote}
        editNote={this.editNote}
        notes={this.state.notes} />
    </div>
  }
}

export default Dashboard;