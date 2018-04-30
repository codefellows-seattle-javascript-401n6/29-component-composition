import React from 'react';

import NoteItem from './noteItem.jsx';

class NoteList extends React.Component {
    constructor(props) {
        super(props);

        this.allNotes = this.allNotes.bind(this);
    }

    allNotes() {
        return this.props.notes.map((note) => {
            console.log(note.id);
            return<NoteItem key={note.id} note={note.id} title={note.title} content={note.content} remove={this.props.remove}  />
        });
    }

    render() {
        return <div>
            <h3>Notes</h3>
            <ul>{this.allNotes()}</ul>
        </div>
    }
}

export default NoteList;