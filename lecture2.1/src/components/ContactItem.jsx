import React from 'react';
import {Link} from 'react-router-dom';

import ContactEdit from 'ContactEdit.jsx';

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.remove = this.remove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.save = this.save.bind(this);
  }

  remove() {
    this.props.removeContact(this.props.index);
  }

  toggleEdit() {
    // console.log('edding', this.props.index);
    this.setState({isEdititng: !this.state.isEditing});
    // this.props.updateContact();
  }

  // nameInput() {
  //   if (this.state.isEditing) {
  //     <input type="text" value={this.props.name} />
  //   } else {
  //     return <Link to={"/contacts/" + this.props.number}> {this.props.name} </Link>
  //   }
  // }

  save(name, number) {
    this.props.updateContact(this.props.index, name, number);
    this.toggleEdit();
  }

  render() {
    if (this.state.isEditing) {
      return <ContactEdit name={this.props.name} number={this.props.number}
        onSave={this.save} />
    }
    return <div>
      <span>Name: 
        {<Link to={"/contacts/" + this.props.number}> {this.props.name} </Link>}
      </span>
      <span>Number: <a href={"tel:" + this.props.number}>
          {this.props.number}
        </a>
      </span>
      <button onClick={this.remove}>remove</button>
      <button onClick={this.toggleEdit}>edit</button> {this.state.isEditing}
    </div>
  }
}

export default ContactItem;