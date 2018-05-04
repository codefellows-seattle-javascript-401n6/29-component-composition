import React from 'react';

import NoteItem from './noteItem.jsx';

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
                
                console.log('in allNotes checking removeNote', this.props.removeNote);
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