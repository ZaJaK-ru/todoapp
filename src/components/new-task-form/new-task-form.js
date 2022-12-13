import { useState } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default function NewTaskForm({ onItemAdded }) {
  const [label, setLabel] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded(label, Number(min) * 60 + Number(sec));
    setLabel('');
    setMin('');
    setSec('');
  };

  const onChangeTask = (e) => setLabel(e.target.value);

  const onChangeMin = (e) => setMin(e.target.value);

  const onChangeSec = (e) => setSec(e.target.value);

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input type="text" className="new-todo" placeholder="Task" value={label} required onChange={onChangeTask} />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Min"
        value={min}
        min="0"
        max="60"
        step="1"
        required
        onChange={onChangeMin}
      />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Sec"
        value={sec}
        min="0"
        max="60"
        step="1"
        onChange={onChangeSec}
      />
      <input type="submit" className="hidden" />
    </form>
  );
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
};
