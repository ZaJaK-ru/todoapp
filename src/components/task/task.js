import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    created: PropTypes.instanceOf(Date).isRequired, 
    onEditing: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
    onChecked: PropTypes.func.isRequired,
  }

  render() {
    const { description, created, onEditing, onDeleted, onChecked } = this.props; 

    return (
      <div className='view'>
        <input className='toggle' 
               type='checkbox'
               onClick={ onChecked } />
        <label>
          <span className='description'>
            { description }
          </span>
          <span className='created'>
            { `created ${ formatDistanceToNow(created) } ago` }
          </span>
        </label>
        <button className='icon icon-edit'
                onClick={ onEditing }></button>
        <button className='icon icon-destroy'
                onClick={ onDeleted }></button>
      </div>
    );
  }
}
