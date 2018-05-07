'use strict';

import React from 'react';
import List from './list.js';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.showAllItems = this.showAllItems.bind(this);
  }

  showAllItems() {
    return this.props.items.map((item) => {
      return <List  key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    content={item.content} 
                    deleteItem={this.props.deleteItem} 
                    editItem={this.props.editItem}/>
    });
  }

  render() { // This is the list of items that shows up on the dashboard.
    return <div>
    <h2>Items List</h2>
    <ul>{this.showAllItems()}</ul>
  </div>
  }
}

export default TodoList;