import React from 'react';

import { Link } from 'react-router-dom';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(event) {
        return this.props.removeNote(this.props.index);
    }

    render() {
        return <div>
            <ul>
                <li>
                    <Link to={"/dashboard/" + this.props.content}>
                    {this.props.note.title}</Link>
                </li>
            </ul>
            <ul>
                <li>{this.props.note.content}</li>
            </ul>
                <button onClick={this.handleRemove}>Remove</button>
           </div>
       
    }
}

export default NoteItem;