'use strict';

import React from 'react';
import NoteItem from './NoteItem';

class NoteList extends React.Component {
  constructor(props){
    super(props);

    this.showNotes = this.showNotes.bind(this);
  };

  showNotes(){
    return this.props.notes.map((note) => {
      return <Note key={note.id} id={note.id} content={note.content}/>
    });
  };
  // showNotes = () => {
  //   return this.props.notes.map((note) => {
  //     return <Note key={note.id} id={note.id} content={note.content}/>
  //   });
  // };

  render() {
    return (
      <div>
        {this.showNotes()}
      </div>
    )
  };
};

export default NoteList;