import React from 'react';
import NoteList from './NoteList.jsx';
import NoteForm from './NoteForm.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  addNote(note) {
    this.state.notes.push(note);
    this.setState({notes: this.state.notes});
  }

  removeNote(id) {
    let note = this.state.notes.findIndex(note => note.id === id);
    this.state.notes.splice(note, 1);
    this.setState({notes: this.state.notes});
  }

  editNote(noteInfo, index) {
    let newArr = [...this.state.notes];
    newArr[index].title = noteInfo.title;
    newArr[index].content = noteInfo.content;
    this.setState({notes: newArr});
  }

  render() {
    return <div>
      <NoteForm addNote={this.addNote}/>
      <NoteList remove={this.removeNote}
        editNote={this.editNote}
        notes={this.state.notes}/>
    </div>
  }
}

export default Dashboard;
