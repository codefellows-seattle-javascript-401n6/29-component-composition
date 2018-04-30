import React from 'react';
import NoteForm from './noteForm.jsx';
import NoteList from './noteList.jsx';
import NoteItem from './noteList.jsx';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {title: "Shopping List", content: "Buy Milk", id: 1},
                {title: "Honey Do List", content: "Remodel Kitchen", id: 2}
            ],
        }

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    addNote(noteObj){
        let newArray = this.state.notes;
        newArray.push(noteObj);
        this.setState({notes: newArray});
        console.log('available notes', this.state.notes);
        }

    removeNote(id) {
        let noteRemove = this.state.notes.find(note => {
            return note.id = id;
        });
        let noteIndex = this.state.notes.indexOf(noteRemove);
        this.state.notes.splice(noteIndex, 1);
        this.setState({notes: this.state.notes});
    }
    

    render() {
        return <main>
            <p>Your Dashboard</p>
            <NoteForm addNote={this.addNote}></NoteForm>
            <NoteList notes={this.state.notes} removeNote={this.removeNote} />
    </main>
    }
}

export default Dashboard;