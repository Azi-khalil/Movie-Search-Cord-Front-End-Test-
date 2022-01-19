import React from "react";
import styled, { css } from 'styled-components';

import * as colors from "../../colors";
import ExpandableFilter from "../../components/expandablefilter";
import SearchBar from "../../components/searchbar";

export default class SearchFilters extends React.Component {

  state = {
    genres: [],
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=885b085ddf759af703d71ca6be89d58b&language=en-US`)
      .then((response) => response.json())
      .then(response => {
          this.setState({
            genres: response.genres
          })
      });
  }


  render () {
    const { ratings, languages, searchMovies, handleKeyword, handleYear } = this.props;

    return (
      <FiltersWrapper>
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          <SearchBar searchMovies={searchMovies} handleKeyword={handleKeyword} handleYear={handleYear}  />
        </SearchFiltersCont>
        <CatergoryCont>
          <CategoryTitle>Movies</CategoryTitle>
          {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
          <ExpandableFilter name="Select Genre(s)" options={this.state.genres}/>
          <ExpandableFilter name= "Select min. vote" options={ratings} />
          <ExpandableFilter name= "Select language" options={languages}/>
        </CatergoryCont>
      </FiltersWrapper>
    )
  }
}

const FiltersWrapper = styled.div`
  
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all .3s ease-in-out;
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
 
 
`
const CatergoryCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all .3s ease-in-out;
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
  @media (max-width: 668px) {
      display: none;
    }
 
`

const CategoryTitle = styled.div`
  font-weight: 700;
`