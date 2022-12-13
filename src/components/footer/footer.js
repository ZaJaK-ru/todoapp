import PropTypes from 'prop-types';

import TasksFilter from '../tasks-filter';
import './footer.css';

export default function Footer({ itemLeft, setFilter, currentFilter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{itemLeft} items left </span>
      <TasksFilter currentFilter={currentFilter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  itemLeft: 0,
  currentFilter: 'all',
};

Footer.propTypes = {
  itemLeft: PropTypes.number,
  clearCompleted: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.oneOf(['all', 'active', 'completed']),
};
