import React, { PropTypes } from 'react';

const ProgressBarItem = ({onClick, id}) => {

  return (
    <li onClick={onClick}>{id}</li>
  )
}

ProgressBarItem.PropTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default ProgressBarItem;
