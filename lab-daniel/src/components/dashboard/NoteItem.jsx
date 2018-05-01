import React from "react";


class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove(ev) {
      return this.props.removeGoal(this.props.note.id)
  }

  render() {
    return (
        <div className="goal-list">
            <h3 id="note-title">{this.props.note.title}</h3>
            <p id="note-list">{this.props.note.content}</p>
            <button id="note-remove" onClick={this.handleRemove}> Delete </button>
        </div>
    )
  }
}

export default NoteItem;