import React from 'react';

import Note from './note-item.jsx';

class NoteList extends React.Component{
  constructor(props) {
    super(props);

    this.displayAllNotes = this.displayAllNotes.bind(this);
  }

  displayAllNotes() {
    return this.props.notes.map((note) => {
      return <Note key={note.id} id={note.id} title={note.title} content={note.content} removeNote={this.props.removeNote}
      editNote={this.props.editNote}/>
    });
  }

  render() {
    return <div>
      <h2>Your Notes</h2>
      <ul>{this.displayAllNotes()}</ul>
    </div>
  }
}

export default NoteList;