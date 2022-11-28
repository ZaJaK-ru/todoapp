/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './task.css';

export default class Task extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    created: PropTypes.instanceOf(Date).isRequired,
    onEditing: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
    onChecked: PropTypes.func.isRequired,
  };

  render() {
    const { description, created, timer, timerCounting, completed, onStartStop, onEditing, onDeleted, onChecked } =
      this.props;

    const timerFormat = (sec) => {
      const minutes = String(Math.floor(sec / 60)).padStart(2, '0');
      const seconds = String(sec - minutes * 60).padStart(2, '0');
      return `${minutes}:${seconds}`;
    };

    const btnPlayPause = timerCounting ? (
      <button className="icon icon-pause" onClick={onStartStop} />
    ) : (
      <button className="icon icon-play" onClick={onStartStop} />
    );

    const renderTimer =
      timer > 0 ? (
        <span className="description">
          {btnPlayPause} {timerFormat(timer)}
        </span>
      ) : (
        <span className="description">time is over</span>
      );

    return (
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={onChecked} />
        <label>
          <span className="title">{description}</span>
          {renderTimer}
          <span className="description">{`created ${formatDistanceToNow(created)} ago`}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditing} />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>
    );
  }
}
