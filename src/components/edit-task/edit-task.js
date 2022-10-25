import React, { Component } from 'react';

export default class EditTask extends Component {
  state = {
    text: this.props.description
  }

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.props.saveEdit(this.props.id, this.state.text);
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