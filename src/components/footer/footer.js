import React, { Component } from 'react';
import TasksFilter from '../tasks-filter';

export default class Footer extends Component {
  render() {
    const { setFilter, currentFilter } = this.props;

    return (
      <footer className='footer'>
        <span className='todo-count'>{ this.props.itemLeft } items left</span>
        <TasksFilter 
          currentFilter = { currentFilter }
          setFilter = { setFilter } />
        <button className='clear-completed'
                onClick = { this.props.clearCompleted }>
          Clear completed
        </button>
      </footer>
    );
  }
}