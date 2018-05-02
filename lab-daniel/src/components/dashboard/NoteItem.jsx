import React from "react";


class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

  }

  handleRemove(ev) {
      return this.props.removeGoal(this.props.note.id)
  }

  toggleEdit() {
    console.log('clicked')
    this.setState({editing: !this.state.editing})
  }


  render() {
    return (
        <div className="goal-list">
            <h3 id="note-title">{this.props.note.title}</h3>
            <p id="note-list">{this.props.note.content}</p>
            <button id="note-remove" onClick={this.handleRemove}> Delete </button>
            <button id="note-edit" onClick={this.toggleEdit} > Edit </button> {'' + this.state.editing}
        </div>
    )
  }
}

export default NoteItem;