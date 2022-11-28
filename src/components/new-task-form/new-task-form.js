import { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  static propTypes = {
    onItemAdded: PropTypes.func.isRequired,
  };

  state = {
    label: '',
    min: '',
    sec: '',
  };

  onSubmit = (e) => {
    const { onItemAdded } = this.props;
    const { label, min, sec } = this.state;

    e.preventDefault();
    onItemAdded(label, Number(min) * 60 + Number(sec));
    this.setState({ label: '', min: 0, sec: 0 });
  };

  onChangeTask = (e) => this.setState({ label: e.target.value });

  onChangeMin = (e) => this.setState({ min: e.target.value });

  onChangeSec = (e) => this.setState({ sec: e.target.value });

  render() {
    const { label, min, sec } = this.state;

    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="Task"
          value={label}
          required
          onChange={this.onChangeTask}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          value={min}
          min="0"
          max="60"
          step="1"
          required
          onChange={this.onChangeMin}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
          min="0"
          max="60"
          step="1"
          onChange={this.onChangeSec}
        />
        <input type="submit" className="hidden" />
      </form>
    );
  }
}
