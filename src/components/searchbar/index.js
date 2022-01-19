import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import Filter from "../../images/filter-icon.png"

export default class SearchBar extends React.Component {
  
    
    render () {

        return (
            <SearchWrapper>
                <SearchCon>
                    <SearchLogo src={SearchIcon}></SearchLogo>
                    <SearchInput placeholder="Name of Movies" onChange={this.props.handleKeyword}></SearchInput>
                </SearchCon>
                <SearchCal>
                    <SearchCalender src={CalendarIcon}></SearchCalender>
                    <SearchInput placeholder="Year of Release" onChange={this.props.handleYear}></SearchInput>
                </SearchCal>
                <FilterIcon src={Filter}></FilterIcon>
            </SearchWrapper>
        )
        
    }           
}
const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 3px;
    @media (max-width: 668px) {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }

`
const SearchCon = styled.div`
    padding: 10px;
    display: flex;
    gap: 20px;
    flex-direction: row;
    border-bottom: 1px solid ;
    border-color: ${colors.primaryColor};
    @media (max-width: 668px) {
      width: 100%;
    }
`
const SearchCal = styled.div`
    padding: 10px;
    display: flex;
    gap: 20px;      
    flex-direction: row;
    border-bottom: 1px solid ;
    border-color: ${colors.primaryColor};

    @media (max-width: 668px) {
      display: none;
    }
 
`
const SearchLogo = styled.img`
    width: 30px;
    height: 30px;
    `

const SearchInput = styled.input`
    border: none;
    outline: none; 
    &::-webkit-input-placeholder {
    color: ${colors.primaryColor};
  }   
`

const SearchCalender = styled.img`
    width: 30px;
    height: 30px;
`

const FilterIcon = styled.img`
    display: none;
    width: 30px;
    margin-top: 10px;
    @media (max-width: 668px) {
      display: flex;
      border-bottom: 1px solid;
      border-color: ${colors.primaryColor} ;
    }
`