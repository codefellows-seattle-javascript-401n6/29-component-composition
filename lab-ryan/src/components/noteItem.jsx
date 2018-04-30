import React from 'react';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
    }

    delete(ev) {
        ev.preventDefault();
        console.log('trying to remove a note', this.props.id);
        this.props.removeNote(this.props.id);
    }

    render() {
        return <li>
                {this.props.title}: {this.props.content}.
            <button onClick={this.delete}>Remove</button>
        </li>;
    }
}

export default NoteItem;