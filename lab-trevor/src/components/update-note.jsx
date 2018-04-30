import React from 'react';
import {Link} from 'react-router-dom';

class UpdateNote extends React.Component {
  constructor(props){
    super(props);

    this.save = this.save.bind(this);
  }

  save(ev){
    console.log('saving', ev.target.title.value)
    ev.preventDefault();
    this.props.finishEdit(ev.target.title.value, ev.target.content.value)
  }

  render(){
    return <form onSubmit={this.save}>
      <div>Title: 
        <input type="text" name="title" placholder={this.props.title}/>
      </div>

      <div>Content: {this.props.content}
      <input type="text" name="content" placholder={this.props.content}/>
      </div>
      <button type="submit" value="SAVE">SAVE</button>
    </form>
  }
}

export default UpdateNote;