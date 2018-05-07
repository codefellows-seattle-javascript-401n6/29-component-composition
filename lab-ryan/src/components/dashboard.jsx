import React from 'react';
import ReactDOM from 'react-dom';

import NoteCreateForm from './noteCreateForm.jsx';
// import NoteItem from './noteItem.jsx';
import NoteList from './noteList.jsx';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        }

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.editNote = this.editNote.bind(this);
    }

    addNote(note){
        let newNote = {
            id: note.id,
            editing: false,
            compleated: false,
            title: note.title,
            content: note.content
        }
        this.state.notes.push(newNote);
        this.setState({ notes: this.state.notes });
    }

    removeNote(index) {
        this.state.notes.splice(index, 1);
        this.setState({ notes: this.state.notes });
    }

    editNote(noteInfo, index) {
        let newArray = [...this.state.notes];
        newArray[index].title = noteInfo.title;
        newArray[index].content = noteInfo.content;
        this.setState({ notes: newArray })

    }
    
    render() {
        return <div>
            <NoteCreateForm addNote={this.addNote}></NoteCreateForm>
            <NoteList removeNote={this.removeNote} 
            editNote={this.editNote}
            notes={this.state.notes} />
        </div>
    }
}

export default Dashboard;