import { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static propTypes = {
    onItemAdded: PropTypes.func.isRequired,
  };

  onKeyDown = (e) => {
    const { onItemAdded } = this.props;

    if (e.keyCode === 13 && e.target.value !== '') {
      onItemAdded(e.target.value);
      e.target.value = '';
    }
  };

  render() {
    return <input className="new-todo" placeholder="What needs to be done?" onKeyDown={this.onKeyDown} />;
  }
}
