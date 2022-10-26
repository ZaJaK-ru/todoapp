import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditTask extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    saveEdit: PropTypes.func.isRequired
  }

  state = {
    text: this.props.description
  }

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.props.saveEdit(this.props.id, this.state.text);
    }

    if (e.keyCode === 27) {
      this.props.saveEdit(this.props.id, this.props.description);
    }
  }

  changeHandler = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    
    return (
      <input 
        type='text' 
        className='edit'
        onKeyDown = { this.onKeyDown }
        onChange = { this.changeHandler }
        value = { this.state.text } />
    )
  }
}