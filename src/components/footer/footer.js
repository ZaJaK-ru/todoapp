import React, { Component } from 'react';
import TasksFilter from '../tasks-filter';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  static defaultProps = {
    itemLeft: 0,
    currentFilter: 'all'
  }

  static propTypes = {
    itemLeft: PropTypes.number,
    clearCompleted: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
    currentFilter: PropTypes.oneOf(['all', 'active', 'completed'])
  }

  render() {
    const { itemLeft, setFilter, currentFilter, clearCompleted } = this.props;

    return (
      <footer className='footer'>
        <span className='todo-count'>
          { itemLeft } items left
        </span>
        <TasksFilter 
          currentFilter = { currentFilter }
          setFilter = { setFilter } />
        <button className='clear-completed'
                onClick = { clearCompleted }>
          Clear completed
        </button>
      </footer>
    );
  }
}