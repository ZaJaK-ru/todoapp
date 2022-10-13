import React from 'react';
import Task from '../task';

const TaskList = ({ tasks }) => {
  const elements = tasks.map((item) => {
    const { id, ...data } = item;
    let liStyle = '';

    if (id === 1) liStyle = 'completed';
    if (id === 2) liStyle = 'editing';

    return (
      <li key={id} className={liStyle}>
        <Task { ...data }/>
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

export default TaskList;