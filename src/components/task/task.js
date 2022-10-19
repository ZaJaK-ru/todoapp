import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {

  render() {
    const { description, created, onEditing, onDeleted, onChecked } = this.props; 

    return (
      <div className='view'>
        <input className='toggle' 
               type='checkbox'
               onClick={ onChecked } />
        <label>
          <span className='description'>{ description }</span>
          <span className='created'>{ formatDistanceToNow(new Date(created)) + ' ago' }</span>
        </label>
        <button className='icon icon-edit'
                onClick={ onEditing }></button>
        <button className='icon icon-destroy'
                onClick={ onDeleted }></button>
      </div>
    );
  }
}
