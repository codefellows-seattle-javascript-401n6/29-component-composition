'use strict';

import React from 'react';
import uuidv4 from 'uuid/v4';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuidv4(),
      title: '',
      content: '',
      editing: false,
      completed: false,
    };

    this.titleInput = this.titleInput.bind(this);
    this.contentInput = this.contentInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  };

  titleInput(event){
    this.setState({title: event.target.value});
  };
  // titleInput = (event) => {
  //   this.setState({title: event.target.value});
  // };

  contentInput(event){
    this.setState({content: event.target.value});
  };
  // contentInput = (event) => {
  //   this.setState({content: event.target.value});
  // };

  submitInput(event){
    event.preventDefault();
    let setId = uuidv4();
    this.setState({id: setId});
    this.props.newObject(this.state);
  };
  // submitInput = (event) => {
  //   event.preventDefault();
  //   let setId = uuidv4();
  //   this.setState({id: setId});
  //   this.props.newObject(this.state);
  // };

  render() {
    return (
      <div>
        <h1>Add New Note Object</h1>
        <form onSubmit={this.submitInput}>
          <input onChange={this.titleInput} type="text" placeholder="Title"/>
          <textarea onChange={this.contentInput}/>
          <button type="submit">Add Note Object</button>
        </form>
      </div>
    )
  };
};

export default NoteForm;