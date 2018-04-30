import React from 'react';

import Note from './note.jsx';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.showAllNotes = this.showAllNotes.bind(this);
  }
  showAllNotes() {
    return this.props.notes.map((note) => {
      return <Note key={note.id} id={note.id} title={note.title} content={note.content} deleteNote={this.props.deleteNote} editNote={this.props.editNote}/>
    });
  }
  render() {
    return <div>
    <h2>Notes</h2>
    <ul>{this.showAllNotes()}</ul>
  </div>
  }
}

export default NotesList;