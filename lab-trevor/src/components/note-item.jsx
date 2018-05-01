import React from 'react';
import {Link} from 'react-router-dom';

import UpdateNote from './update-note.jsx'

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
    }
    this.remove = this.remove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }
  remove(){
    console.log('remove', this.props.index)
    this.props.removeNote(this.props.index);
  }

  toggleEdit(){
     this.setState({isEditing: !this.state.isEditing});
  }

  finishEdit(title, content, index) {
    console.log('edit', title)
    this.props.updateNote(title, content, this.props.index);
    this.toggleEdit()
  }

  render(){
    if(this.state.isEditing) {
      return <UpdateNote title={this.props.content}
        content={this.props.content}
        finishEdit={this.finishEdit}
        cancel={this.toggleEdit}/>
    }
    return <div onDoubleClick={this.toggleEdit}>
      <div>Title: {this.props.title}</div>
      <div>Content: {this.props.content}</div>
      <button onClick={this.remove}>Remove</button>
      <button onClick={this.toggleEdit}>Edit</button>
      </div>
  }
}

export default NoteItem;