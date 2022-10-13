import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const Task = ({ description, created }) => {
  return (
    <div className='view'>
      <input className='toggle' type='checkbox' />
      <label>
        <span className='description'>{ description }</span>
        <span className='created'>{ formatDistanceToNow(new Date(created)) + ' ago' }</span>
      </label>
      <button className='icon icon-edit'></button>
      <button className='icon icon-destroy'></button>
    </div>
  );
}

export default Task;