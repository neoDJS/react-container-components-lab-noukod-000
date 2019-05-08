import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'yjIJIYQO8xM8pEQawixA4TY457vqyF9t';//'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.PureComponent {
  state = {
    reviews: []
  }

  componentDidMount(){
    fetch(URL).then(res=>res.json)
    .then(data=>{
      this.setState({
        reviews: data.results
      });
    });
  }

  render(){
    return(
      <div class="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
