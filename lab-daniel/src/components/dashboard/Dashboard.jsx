import React from 'react';
import ReactDOM from 'react-dom';
import uuidv1 from 'uuid/v1';

import NoteCreateForm from './NoteCreateForm.jsx';
import NoteList from './NoteList.jsx'
import NoteItem from './NoteItem.jsx'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
        this.addGoal = this.addGoal.bind(this);
        this.removeGoal = this.removeGoal.bind(this);
        this.updateGoal = this.updateGoal.bind(this);
    }

    addGoal(noteObj) {
        let newArray = this.state.notes;
        newArray.push(noteObj);
        this.setState({notes: newArray});
        console.log('new note', this.state.notes);
      }
    
    removeGoal(id){
        this.state.notes = this.state.notes.filter((note) => {
            return note.id !== id;
        })
        this.setState({ note: this.state.note })
    }

    updateGoal(title, content, index) {
        console.log('new title', title)
        let newArray = [...this.state.notes];
        newArray[index].title = title;
        newArray[index].content = content;
        this.setState({notes: newArray});
      }

    render() {
        return (
            <main>
            <NoteCreateForm newGoalFunc={this.addGoal}></NoteCreateForm>
            <NoteList notes={this.state.notes} removeGoal={this.removeGoal} updateGoal={this.updateGoal} ></NoteList>
            </main>
        )
    }
}

export default Dashboard;