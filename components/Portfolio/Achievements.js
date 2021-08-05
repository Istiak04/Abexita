import React from 'react';
import './achievements.css';

function Achievements(props) {
  const { } = props;
  return (
    <div id='achievements' className='my-5 py-5 text-center container d-flex justify-content-evenly rounded'>
      <div className="flex-item">
        <h4 className="text-bold">Completed</h4>
        <p>{105}</p>
      </div>
      <div className="flex-item">
        <h4 className="text-bold">Completed</h4>
        <p>{105}</p>
      </div>
      <div className="flex-item">
        <h4 className="text-bold">Completed</h4>
        <p>{105}</p>
      </div>
      <div className="flex-item">
        <h4 className="text-bold">Completed</h4>
        <p>{105}</p>
      </div>
    </div>
  )
}

export default Achievements;
