import React from 'react';

class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content
    }

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  save(e) {
    e.preventDefault();
    this.props.finishEdit(this.state);
  }

  cancel() {
    this.props.toggleEdit();
  }

  render() {
    return <form onSubmit={this.save}>
      <span>Title:
        <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
      </span>
      <span>Content:
        <input name="content" type="text" value={this.state.content} onChange={this.handleChange}/>
      </span>
      <button onClick={this.cancel}>Cancel</button>
      <button type="submit" onClick={this.save}>Save</button>
    </form>
  }
}

export default NoteEdit;
