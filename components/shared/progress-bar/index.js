import React from 'react';
import ProgressBarItem from '../progress-bar-item';

const ProgressBar = ({active, onProgressItemClick}) =>{
  const progressItems = [1, 2, 3, 4];
  return (
    <div className='progress-bar'>
      <ul>
        {progressItems.map(item =>
          <ProgressBarItem  key={item} id={item} clickHandler={onProgressItemClick} active={active === item ? true : false}/>
        )}
      </ul>
    </div>
  );
} 

export default ProgressBar;
