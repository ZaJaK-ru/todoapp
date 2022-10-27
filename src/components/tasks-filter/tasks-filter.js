import { Component } from 'react';
import PropTypes from 'prop-types';

import './tasks-filter.css';

export default class TasksFilter extends Component {
  static propTypes = {
    currentFilter: PropTypes.oneOf(['all', 'active', 'completed']),
    setFilter: PropTypes.func.isRequired,
  };

  render() {
    const { currentFilter, setFilter } = this.props;

    return (
      <ul className="filters">
        <li>
          <button
            className={currentFilter === 'all' ? 'selected' : ''}
            onClick={() => {
              setFilter('all');
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={currentFilter === 'active' ? 'selected' : ''}
            onClick={() => {
              setFilter('active');
            }}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={currentFilter === 'completed' ? 'selected' : ''}
            onClick={() => {
              setFilter('completed');
            }}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
