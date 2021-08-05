import React from 'react';
import './review.css';

function ReviewComponent(props) {
  const { img, text } = props;
  return (
    <div className='container'>
      <div className='review d-flex flex-md-row flex-column justify-content-between p-5'>
        <div className='flex__item__1 text-center'>
          <img src={img} className='review__pic img-thumbnail'></img>
          <p>***</p>
        </div>
        <div className='flex__item__2'>
          <p className='font-italic text-center'>
            {text}
          </p>

        </div>
      </div>
    </div>

  )
}

export default ReviewComponent
