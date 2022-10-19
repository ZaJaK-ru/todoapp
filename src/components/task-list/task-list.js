import React, { Component } from 'react';
import Task from '../task';

export default class TaskList extends Component {
  render() {
    const { tasks, onDeleted, onChecked } = this.props;

    const elements = tasks.map((item) => {
      const { id, completed, ...data } = item;
      let liStyle = '';
  
      if (completed) liStyle += ' completed';

      return (
        <li key={id} className={liStyle}>
          <Task 
            { ...data }
            onDeleted = { () => { onDeleted(id) }}
            onEditing = { () => { console.log('Edit'); }}
            onChecked = { () => { onChecked(id) }} />
          <input type='text' className='edit' />
        </li>
      );
    });

    return (
      <ul className='todo-list'>
        { elements }
      </ul>
    );
  }
}