import React from 'react';

const ProgressBar = ({active, onProgressItemClick}) =>{
  const progressItems = [1, 2, 3, 4];
  return (
    <div className='progress-bar'>
      <ul>
        {progressItems.map(item =>
          <li key={item} onClick={() => onProgressItemClick(item)} className={active === item ? 'active' : 'inactive'}>{item}</li>
        )}
      </ul>
    </div>
  );
} 

export default ProgressBar;
