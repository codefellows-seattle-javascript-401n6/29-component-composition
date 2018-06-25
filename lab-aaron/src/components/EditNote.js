import React from 'react';
import NoteItem from './NoteItem';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
      id: this.props.id
    };
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.canacel = this.canacel.bind(this);
  };

  update(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  save(event) {
    event.preventDefault();
    this.props.saveUpdate(this.state);
  };

  cancel(event) {
    event.preventDefault();
    this.props.cancelUpdate();
  };

  render() {
    return (
      <form onSubmit={this.save}>
        <input onChange={this.update} name="title" type="text"/>
        <textarea onChange={this.update} name="content"/>
        <button type="submit">Update Note</button>
        <button onClick={this.cancel}>Cancel Update</button>
      </form>
    )
  };
};

export default Edit;