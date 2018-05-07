import React from 'react';
import { Link } from 'react-router-dom';

import NoteUpdateForm from './noteUpdateForm.jsx';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: this.props.note,
            isEditing: false,
        }

        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEditOn = this.toggleEditOn.bind(this);
        this.toggleEditOff = this.toggleEditOff.bind(this);
    }

    handleRemove(event) {
        console.log('handleRemove', this.props.removeNote);
        return this.props.removeNote(this.props.index);
    }

    toggleEditOn() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    toggleEditOff(noteInfo) {
        this.setState({ isEditing: false});
        this.props.editNote(noteInfo, this.props.index);
    }

    render() {
        if(this.state.isEditing) {
            return <NoteUpdateForm 
                note={this.props.note}
                toggleEditOn={this.toggleEditOn}
                toggleEditOff={this.toggleEditOff} />
        }
        return <div onDoubleClick={this.toggleEditOn}>
                <h4>{this.props.note.title}</h4>
                <p>{this.props.note.content}</p>
                <button onClick={this.handleRemove}>Remove</button>
                <button onClick={this.toggleEditOn}>Edit</button>
        </div>

    }
}

export default NoteItem;