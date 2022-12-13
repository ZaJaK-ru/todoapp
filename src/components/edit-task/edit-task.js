import { useState } from 'react';
import PropTypes from 'prop-types';

export default function EditTask({ id, saveEdit, description }) {
  const [text, setText] = useState(description);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      saveEdit(id, text);
    }

    if (e.keyCode === 27) {
      saveEdit(id, description);
    }
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return <input type="text" className="edit" onKeyDown={onKeyDown} onChange={changeHandler} value={text} />;
}

EditTask.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  saveEdit: PropTypes.func.isRequired,
};
