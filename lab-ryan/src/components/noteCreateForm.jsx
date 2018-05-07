import React from 'react';
import uuidv4 from 'uuid/v4';

class NoteCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let id = uuidv4();
        let title = event.target.title.value;
        let content = event.target.content.value;
        this.props.addNote({ id, title, content });
        event.target.reset();

    }

    render() {
        return <div>
            <p>Add a new Note</p>
                <form 
                onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="title" 
                />
                <input 
                    type="text"
                    name="content"
                />
                <button type="submit" 
                    value="Add Note">Add Note</button>
            </form>
        </div>
    }
}

export default NoteCreateForm;