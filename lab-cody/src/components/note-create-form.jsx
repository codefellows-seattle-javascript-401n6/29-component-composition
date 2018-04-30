import React from 'react';

import uuidv1 from 'uuid/v4';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: uuidv1(),
      title: '',
      editing: false,
      content: '',
      completed: false
  }
  this.updateTitle = this.updateTitle.bind(this);
  this.updateContent = this.updateContent.bind(this);
  this.submitNote = this.submitNote.bind(this);
}

  updateTitle(event) {
    this.setState({title: event.target.value});
  }

  updateContent(event) {
    this.setState({content: event.target.value});
  }

  submitNote(event) {
    event.preventDefault();
    let newId = uuidv1()
    this.setState({id: newId});
    this.props.newNoteFunc(this.state);
  }

  render() {
    return <div>
      <h2>Add a new note</h2>
      <form onSubmit={this.submitNote}>
        <input onChange={this.updateTitle} type="text" placeholder="title"/>
        <textarea onChange={this.updateContent} />
        <button type="submit">Add Note</button>
      </form>
    </div>
  }
}

export default NoteForm;