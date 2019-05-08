// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews})=>{
  return(
    <div class="review-list">
      {reviews.map(r=><div class="review"></div>)}
    </div>
  )
}

export default MovieReviews
