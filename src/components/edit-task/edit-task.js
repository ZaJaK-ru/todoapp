import { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditTask extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    saveEdit: PropTypes.func.isRequired,
  };

  state = {
    // eslint-disable-next-line react/destructuring-assignment
    text: this.props.description,
  };

  onKeyDown = (e) => {
    const { id, saveEdit, description } = this.props;
    const { text } = this.state;

    if (e.keyCode === 13) {
      saveEdit(id, text);
    }

    if (e.keyCode === 27) {
      saveEdit(id, description);
    }
  };

  changeHandler = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { text } = this.state;

    return <input type="text" className="edit" onKeyDown={this.onKeyDown} onChange={this.changeHandler} value={text} />;
  }
}
