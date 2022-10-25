import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  onKeyDown = (e) => {
    if (e.keyCode === 13 && e.target.value !== '') {
      this.props.onItemAdded(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <input
      className='new-todo'
      placeholder='What needs to be done?' 
      autoFocus 
      onKeyDown = { this.onKeyDown } />
    )
  }
}
