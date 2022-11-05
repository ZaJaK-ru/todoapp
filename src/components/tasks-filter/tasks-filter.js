/* eslint-disable jsx-a11y/label-has-associated-control */
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
          <label className={currentFilter === 'all' ? 'selected' : ''}>
            <input
              type="radio"
              value="all"
              name="filter"
              onChange={() => {
                setFilter('all');
              }}
            />
            All
          </label>
        </li>
        <li>
          <label className={currentFilter === 'active' ? 'selected' : ''}>
            <input
              type="radio"
              value="active"
              name="filter"
              onChange={() => {
                setFilter('active');
              }}
            />
            Active
          </label>
        </li>
        <li>
          <label className={currentFilter === 'completed' ? 'selected' : ''}>
            <input
              type="radio"
              value="completed"
              name="filter"
              onChange={() => {
                setFilter('completed');
              }}
            />
            Completed
          </label>
        </li>
      </ul>
    );
  }
}
