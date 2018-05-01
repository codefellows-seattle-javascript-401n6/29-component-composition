import React from 'react';
import uuidv4 from 'uuid/v4'


import NoteForm from './note-form.jsx'
import NoteList from './note-list.jsx'

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noteList: []
    }
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

    updateNote(title, content, index) {
      console.log('updatingggg', title)
      let newArray = [...this.state.noteList];
      newArray[index].title = title;
      newArray[index].content = content;
      this.setState({contacts: newArray});
    }

    addNote(title, content){
      let newTodo = {
        id: uuidv4(),
        editing: false,
        completed: false,
        title: title,
        content: content
      }
      let newArr = [...this.state.noteList];
      newArr.push(newTodo);
      this.setState({noteList: newArr});
    }

    removeNote(index){

      console.log('removing', index)
      let newArr = [...this.state.noteList];
      newArr.splice(index, 1)
      this.setState({noteList: newArr});
    }

    render(){
      console.log('dashboard')
      return <div>
        <div>TODOs</div>
        <NoteForm addNote={this.addNote}/>
        <NoteList noteList={this.state.noteList}
        removeNote={this.removeNote}
        updateNote={this.updateNote}/>
        </div>
    }
  }

export default Dashboard;