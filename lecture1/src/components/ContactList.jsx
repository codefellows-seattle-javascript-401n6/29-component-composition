import React from 'react';

import Contact from './ContactItem.jsx';

// export default this.props.contacts.map((contact, index) => {
//   return <ContactItem name={contact.name} number={contact.number}
//     key={index} index={index}
//     removeContact={this.props.removeContact} />;
// });


class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  list() {
    return this.props.contacts.map((contact, index) => {
      return <ContactItem name={contact.name} number={contact.number}
      // react does not actually pass the key prop into the component
      // so explictly create another prop called index so the component can access it
        key={index} index={index}
        removeContact={this.props.removeContact}/>;
    });
  }

  render() {
    return <ul>
      {this.list()}
    </ul>
  }
}

export default ContactList;