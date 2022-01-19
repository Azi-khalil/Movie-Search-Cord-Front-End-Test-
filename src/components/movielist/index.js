import React from "react";
import styled from 'styled-components';

import MovieItem from '../movieitem';

export default class MovieList extends React.Component {
 

  render () {
    const { movies }  = this.props;

    return (
      <MoviesWrapper>
        {movies.map(item => {
          return (
            <MovieItem 
              key={item.id}
              id={item.id}
              image={item.backdrop_path}
              title={item.title}
              genre={item.genre_ids}
              rate={item.vote_average}
              overview={item.overview}
              date={item.release_date}
            />
          )
        })}
      </MoviesWrapper>
    )
  }
}

const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`