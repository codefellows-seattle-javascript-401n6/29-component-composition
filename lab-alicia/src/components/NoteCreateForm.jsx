import React from "react";

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    let title = ev.target.title.value;
    let content = ev.target.content.value;
    this.props.addNote({ title, content });
  }

  render() {
    return <form
      onSubmit={this.handleSubmit}>
      <input
        type='text'
        name='title'
      />
      <input
        type='text'
        name='content'
      />
      <button type='submit' value='Add Note'>Create Note</button>
    </form>
  }
}

export default NoteCreateForm;