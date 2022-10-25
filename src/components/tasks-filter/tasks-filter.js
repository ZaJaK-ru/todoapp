import React, { Component } from 'react';

export default class TasksFilter extends Component {
  render() {
    const { currentFilter, setFilter } = this.props

    return (
      <ul className='filters'>
        <li>
          <button 
            className= { currentFilter === 'all' ? 'selected' : '' }
            onClick={ (e) => { setFilter('all') } }>
              All
          </button>
        </li>
        <li>
          <button
            className= { currentFilter === 'active' ? 'selected' : '' }
            onClick={ () => { setFilter('active') }}>
            Active
          </button>
        </li>
        <li>
          <button
            className= { currentFilter === 'completed' ? 'selected' : '' }
            onClick={ () => { setFilter('completed') }}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
