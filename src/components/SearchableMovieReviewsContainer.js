import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    search: '',
    reviews: []
  }

  handleSubmit = event => {
        event.preventDefault();

        fetch(URL.concat('&query=',this.state.search))
        .then(res => res.json())
        .then(data => this.setState({ reviews: data.results }));
  }

  render(){
    return(
      <div class="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          Search Movie Reviews:<br/>
          <input
              type="text"
              onChange={ this.handleChange } 
              value={this.state.searchTerm}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews />
      </div>
    );
  }
}
