import React, { Component } from 'react';
import Task from '../task';
import EditTask from '../edit-task';
import PropTypes from 'prop-types';

export default class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        created: PropTypes.instanceOf(Date).isRequired, 
        completed: PropTypes.bool.isRequired,
        editing: PropTypes.bool.isRequired, 
        id: PropTypes.number.isRequired
      })
    ),
    onEditing: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
    onChecked: PropTypes.func.isRequired,
    saveEdit: PropTypes.func.isRequired
  }

  render() {
    const { tasks, onEditing ,onDeleted, onChecked, saveEdit } = this.props;

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
              saveEdit = { saveEdit }/>
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