import React from "react";
import styled from 'styled-components';
import axios from 'axios'


import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default class Discover extends React.Component {
 
  constructor (props) {
    super(props);

    this.state = {
      keyword: '',
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 }
      ],
      languageOptions: [
        { id: 'GR', name: 'Greek' },
        { id: 'EN', name: 'English' },
        { id: 'RU', name: 'Russian' },
        { id: 'PO', name: 'Polish' }
      ]
    };
  }
  // api =  885b085ddf759af703d71ca6be89d58b
  componentDidMount() {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=885b085ddf759af703d71ca6be89d58b&language=en-US&page=1")
      .then((response) => response.json())
      .then(response => {
          this.setState({
            results: response.results,
            totalCount:response.total_results,
          })
      });
    }

  handleKeyword = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  handleYear = (e) => {
    this.setState({
      year: e.target.value
    })
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.keyword !== this.state.keyword || prevState.year !== this.state.year ) {
      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=885b085ddf759af703d71ca6be89d58b&query=${this.state.keyword}&year=${this.state.year}`)
      .then(response => {
        this.setState({
          results: response.data.results,
        })
      })
    }else{
      console.log("nooo")
    }
  }
  // Write a function to preload the popular movies when page loads & get the movie genres

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters



  render () {
    const { genreOptions, languageOptions, ratingOptions, totalCount, results } = this.state;


    return (
      <DiscoverWrapper>
        {/* MobilePageTitle should become visible on small screens & mobile devices*/}
        <MovieResults>
          <TotalCounter>{totalCount} results</TotalCounter>
          <MovieList 
            movies={results || []}
          />
        </MovieResults>
        <MovieFilters>
          <SearchFilters 
            genres={genreOptions} 
            ratings={ratingOptions}  
            languages={languageOptions}
            handleKeyword={this.handleKeyword}
            handleYear={this.handleYear}
          />
        </MovieFilters>     
      </DiscoverWrapper>
    )
  }
}

const DiscoverWrapper = styled.main`
  padding: 40px;
  padding-right: 10px;
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    padding-left: 0;
    display: flex;
    flex-direction: column-reverse;
  }

`

const TotalCounter = styled.div`
 display:none;
 font-weight: 600;
 left: 0;
 padding: 10px;
 @media (max-width: 768px) {
    display: flex;
  } 
`

const MovieResults = styled.div`
  
`

const MovieFilters = styled.div`
`

