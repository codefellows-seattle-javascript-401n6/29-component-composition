import React from "react";
// import NoteCreateForm from './NoteCreateForm.jsx'

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.isEdited = this.isEdited.bind(this);
  }

  handleRemove(ev) {
      return this.props.removeGoal(this.props.note.id)
  }

  toggleEdit() {
    console.log('clicked')
    this.setState({editing: !this.state.editing})
  }
  
  isEdited(title, content, index) {
    console.log('edited title', title)
    this.props.updateGoal(title, content, this.props.index);
    this.toggleEdit();
  }

  render() {
    return (
        <div className="goal-list" onClick={this.isEdited}>
            <h3 id="note-title">{this.props.note.title}</h3>
            <p id="note-list">{this.props.note.content}</p>
            <button id="note-remove" onClick={this.handleRemove}> Delete </button>
            {'' + this.state.editing}
        </div>
    )
  }
}

export default NoteItem;