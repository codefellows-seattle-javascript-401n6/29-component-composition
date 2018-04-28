import React from 'react';
import NoteEdit from './NoteEdit.jsx';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import faTrash from '@fortawesome/fontawesome-free-solid/faTrashAlt'

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  handleRemove(e) {
    this.props.remove(this.props.note.id);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  finishEdit(noteInfo) {
    this.setState({isEditing: false});
    this.props.editNote(noteInfo, this.props.index);
  }

  render() {
    if (this.state.isEditing) {
      return <NoteEdit title={this.props.title}
        content={this.props.content}
        finishEdit={this.finishEdit}
        toggleEdit={this.toggleEdit}/>
    }
    return <li onDoubleClick={this.toggleEdit} className="note">
      <h3>{this.props.note.title}</h3>
      <h4>{this.props.note.content}</h4>
      <button onClick={this.toggleEdit} className="edit"><FontAwesomeIcon icon={faPencil}/></button>
      <button onClick={this.handleRemove} className="remove"><FontAwesomeIcon icon={faTrash}/></button>
    </li>
  }
}

export default NoteItem;
