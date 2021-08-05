import React from 'react';
import ReviewComponent from './Review';
function Review() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <ReviewComponent />
      </section>
    </main>
  );
}

export default Review;
