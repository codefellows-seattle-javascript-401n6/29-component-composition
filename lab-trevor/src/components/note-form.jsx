
import React from 'react';


class NoteForm extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(ev){
    ev.preventDefault();
    this.props.addNote(ev.target.title.value, ev.target.content.value)
  }

  render(){
    return <form onSubmit={this.submit}>
      <input type="text" name="title" placeholder="title"/>
      <input type="text" name="content" placeholder="Content"/>
      <input type="submit" value="Add TODO" />
    </form>
  }
}

export default NoteForm;