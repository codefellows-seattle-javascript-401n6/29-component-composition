'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import TodoCreateForm from './todoApp/createForm.js';
import TodoList from './todoApp/todoList.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  addItem(itemObj) {
    let newArray = this.state.items;
    newArray.push(itemObj);
    this.setState({ item: newArray });
    console.log('new todo item', this.state.items);
  }

  deleteItem(id) {
    console.log('item to delete', id);
    let itemToDelete = this.state.items.find(item => {
      return item.id === id;
    });
    let itemIndex = this.state.items.indexOf(itemToDelete);
    this.state.items.splice(itemIndex, 1);
    console.log('dashboard: ', { items: this.state.items })
    this.setState({ items: this.state.items });
  }

  editItem(itemInfo, id) {
    let pendingUpdate = this.state.items.find(item => {
      return item.id === id;
    });
    let itemIndex = this.state.items.indexOf(pendingUpdate);
    let newItemArray = this.state.items.slice();
    newItemArray[itemIndex] = itemInfo;
    this.setState({ items: newItemArray });
    console.log(this.state.items, 'editing completed');
  }

  render() {
    return <div>
      <h2>Dashboard</h2>
      <TodoCreateForm newItemFunc={this.addItem}></TodoCreateForm>
      <TodoList items={this.state.items} 
                deleteItem={this.deleteItem} 
                editItem={this.editItem} />
    </div>
  }
}

export default Dashboard;