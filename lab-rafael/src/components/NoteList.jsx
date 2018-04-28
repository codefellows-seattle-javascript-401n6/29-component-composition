import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import NoteItem from './NoteItem.jsx';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.buildList = this.buildList.bind(this);
  }

  buildList() {
    return this.props.notes.map((note, index) => {
      return <NoteItem title={note.title} content={note.content}
        editNote={this.props.editNote}
        remove={this.props.remove}
        key={note.id} note={note} index={index} />
    });
  }

  render() {
    return <div>
      <ul id="todo-list">{this.buildList()}</ul>
    </div>
  }
}

export default NoteList;
