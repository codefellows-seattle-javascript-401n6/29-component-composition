import React from 'react';
import uuidv4 from 'uuid/v4';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false,
      id: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let change = e.target.value;
    this.setState({[e.target.name]: change, id: uuidv4()});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({title: '', content: ''});
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <span>New Task: </span>
      <input type="text" name="title" placeholder="Title" onChange={this.handleChange}/>
      <input type="text" name="content" placeholder="To do" onChange={this.handleChange}/>
      <input type="submit" value='Add'/>
    </form>
  }
}

export default NoteForm;
