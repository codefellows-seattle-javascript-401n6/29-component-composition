import React from 'react';

import Note from './note.jsx';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: this.props.title,
        content: this.props.content,
        id: this.props.id
    }
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  update(event) {
      let newState = {};
      newState[event.target.name] = event.target.value;
      this.setState(newState);

  }

  save(event) {
    event.preventDefault();
    console.log(this.state, 'first save console');
    this.props.saveUpdate(this.state)
    console.log(this.state, 'second save console');

  }

  cancel(event) {
    event.preventDefault();
    this.props.cancelUpdate();
  }


  render() {
    return <form onSubmit={this.save}>
     <input onChange={this.update} name="title" type="text" placeholder="title"/>
     <textarea onChange={this.update} name="content"/>
     <button type="submit">Update</button>
     <button onClick={this.cancel}>Cancel</button>
    </form>
  }
}

export default Edit;