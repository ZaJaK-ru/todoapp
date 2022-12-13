/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

import './tasks-filter.css';

export default function TasksFilter({ currentFilter, setFilter }) {
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

TasksFilter.propTypes = {
  currentFilter: PropTypes.oneOf(['all', 'active', 'completed']),
  setFilter: PropTypes.func.isRequired,
};
