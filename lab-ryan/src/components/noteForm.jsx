import React from 'react';
import uuidv4 from 'uuid/v4';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuidv4(),
            title: '',
            edit: false,
            content: '',
            complete: false
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(ev) {
        this.setState({title: ev.target.value});
    }

    updateContent(ev) {
        this.setState({content: ev.target.value});
    }

    handleChange(ev) {
        let change = ev.target.value;
        this.setState({[ev.target.name]: change, id: uuidv4()});
        }
    
    handleSubmit(ev) {
        ev.preventDefault();
        let newId = uuidv4();
        this.setState({id: newId});
        this.props.addNote(this.state);
    }

    render() {
        return <div>
            <p>Add a new Note</p>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.updateTitle} type="text" placeholder="title" />
        <textarea onChange={this.updateContent} />
        <button type="submit">Add Note</button>
      </form>
      </div>
    }
}

export default NoteForm;