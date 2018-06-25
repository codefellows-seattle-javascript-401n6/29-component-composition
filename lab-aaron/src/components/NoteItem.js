'use strict';

import React from 'react';
import NoteForm from './NoteForm';
import EditNote from './EditNote';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };

    this.removeNote = this.removeNote.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.saveUpdate = this.saveUpdate.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  };
  
  removeNote(event){
    event.preventDefault();
    console.log(`Removing Note: ${this.props.id}`);
    this.props.removeNote(this.props.id);
  };
  // removeNote = (event) => {
  //   event.preventDefault();
  //   console.log(`Removing Note: ${this.props.id}`);
  //   this.props.removeNote(this.props.id);
  // };

  toggleEdit() {
    console.log('is Editing');
    this.setState({editing: !this.setState.editing});
  };

  saveUpdate(noteInfo) {
    console.log('is Saving');
    this.setState({editing: false});
    this.props.editNote(noteInfo, this.props.id);
  };

  cancelUpdate() {
    this.toggleEdit();
  };

  render() {
    if (this.state.editing) {
      return (
        <EditNote 
        title={this.props.title}
        content={this.props.content}
        id={this.props.id}
        key={this.props.id}
        saveUpdate={this.saveUpdate}
        cancelUpdate={this.cancelUpdate}>
        </EditNote>
      )
    }

    return (
      <div>
        <div onDoubleClick={this.toggleEdit}>
          <h1>
            {this.props.title}
          </h1>
          <div>
            {this.props.content}
          </div>
          <button onClick={this.removeNote}>Remove Note</button>
        </div>
      </div>
    )
  };
};

export default NoteItem;