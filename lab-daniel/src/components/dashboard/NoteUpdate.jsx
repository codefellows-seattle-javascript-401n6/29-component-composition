import React from 'react';
import {Link} from 'react-router-dom';

class NoteUpdateForm extends React.Component {
    constructor(props) {
        super(props)

        this.saveGoal = this.saveGoal.bind(this);
    }
    saveGoal(ev) {
        ev.preventDefault();
        this.props.edited(ev.target.title.value, ev.target.content.value)
    }
    render() {
        return (
            <form onSubmit={this.saveGoal}>
                <div>Title: 
                    <input type="text" name="title" placholder={this.props.title}/>
                </div>

                <div>Content:
                    <input type="text" name="content" placholder={this.props.content}/>
                </div>
            </form>
        )
    }
}

export default NoteUpdate;