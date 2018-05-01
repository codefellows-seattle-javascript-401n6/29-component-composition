import React from "react";

import NoteItem from './NoteItem.jsx';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.compileList = this.compileList.bind(this);
  }

  compileList() {
    return this.props.notes.map((note, index) => {
      return <NoteItem
        removeNote={this.props.removeNote}
        editNote={this.props.editNote}
        note={note} key={note.id} id={note.id} index={index} />
    })
  }

  render() {
    return <div>
      <ul>
        {this.compileList()}
      </ul>
    </div>
  }
}

export default NoteList;