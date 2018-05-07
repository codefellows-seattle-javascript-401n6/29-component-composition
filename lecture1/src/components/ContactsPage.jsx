import React from 'react';

import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts:  [
        {name: "Mom", number: "555-111-9999"},
        {name: "Dad", number: "555-111-8000"},
        {name: "Landlord", number: "555-637-5309"},
    ]};
    this.createContact = this.createContact.bind(this);
    // this.removeContact = this.removeContact.bind(this);
  }

  // addContact(contact) {
  //   console.log('got new contact', contact);
  //   this.state.contacts.push(contact);
  //   this.setState({contacts: this.state.contacts});
  // }

  // removeContact(index) {
  //   console.log('page removing', index);
  //   this.state.contacts.splice(index, 1);
  //   this.setState({contacts: this.state.contacts});
  // }

  // contactInfo should be an object with .name and .number properties.
  createContact(contactInfo) {
    let newArray = this.state.contacts.slice();
    this.state.contacts.push(contactInfo);
    newArray.push(contactInfo);
    this.setState({contacts: newArray}); // tels react to display updated information.
  }

  // index should be the index of a contact to remove inside the contacts list.
  reomveContact(index) {
    let newArray = this.state.contacts.slice();
    newArray.splice(index, 1);
    this.setState({contacts: newArray});
  }

  render() {
    return <div>
      <ContactForm createContact={this.createContact}
        createContact={this.createContact} />
      <ContactList contacts={this.state.contacts} 
        removeContact={this.removeContact} />
    </div>
  }
}

export default Contacts;