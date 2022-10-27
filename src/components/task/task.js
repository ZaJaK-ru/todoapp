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
    const { description, created, onEditing, onDeleted, onChecked } = this.props;

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onChecked} />
        <label>
          <span className="description">{description}</span>
          <span className="created">{`created ${formatDistanceToNow(created)} ago`}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditing} />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>
    );
  }
}
