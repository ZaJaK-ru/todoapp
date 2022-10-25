import React, { Component } from 'react';
import Task from '../task';
import EditTask from '../edit-task';

export default class TaskList extends Component {
  render() {
    const { tasks, onEditing ,onDeleted, onChecked } = this.props;

    const elements = tasks.map((item) => {
      const { id, completed, editing, ...data } = item;
      let liStyle = '';
  
      if (editing) liStyle += ' editing';
      if (completed) liStyle += ' completed';

      return (
        <li key={id} className={liStyle}>
          <Task 
            { ...data }
            onDeleted = { () => { onDeleted(id) }}
            onEditing = { () => { onEditing(id) }}
            onChecked = { () => { onChecked(id) }} />
          { editing && (
            <EditTask 
              description = { item.description }
              id = { id }
              saveEdit = { this.props.saveEdit }/>
          )}
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