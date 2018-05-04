import React from 'react';

import NoteItem from './NoteItem.jsx';

class NoteList extends React.Component {
    constructor(props) {
        super(props);

        this.allNotes = this.allNotes.bind(this);
    }

    allNotes() {
        return this.props.notes.map((note, index) => {
            return<NoteItem 
                removeNote={this.props.removeNote}
                note={note}
                key={index}
                index={index} />
            });
        }

    render() {
        return <div>
            <ul>
                {this.allNotes()}
            </ul>
        </div>
    }
}

export default NoteList;