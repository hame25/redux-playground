import React, { PropTypes } from 'react';

const ProgressBarItem = ({clickHandler, id, active}) => {

  return (
    <li onClick={() => clickHandler(id)} className={active ? 'active' : 'inactive'}>{id}</li>
  )
}

ProgressBarItem.PropTypes = {
  clickHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default ProgressBarItem;
