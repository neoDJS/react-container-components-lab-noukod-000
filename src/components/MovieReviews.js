// Code MovieReviews Here
import React from 'react';

const MovieReviews = (reviews)=>{
  return(
    <div class="review-list">
      {reviews.map(r=><div class="review">{r.display_title}</div>)}
    </div>
  )
}

export default MovieReviews
