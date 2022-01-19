import React from "react";
import styled from 'styled-components';
import * as colors from "../../colors";


export default class MovieItem extends React.Component {
  
  state = {
    genre: []
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=885b085ddf759af703d71ca6be89d58b&language=en-US`)
      .then((response) => response.json())
      .then(response => {
          this.setState({
            genre: response.genres
          })
      });
  }
  
  
  render () {
    const { image, title, overview, rate, date } = this.props;

    
    return (
      // Complete the MovieItem component
      <MovieItemWrapper>
        <LeftCont>
          <ItemImage src={`https://image.tmdb.org/t/p/w500/${image}`}></ItemImage>
        </LeftCont>
        <RightCont>
            <ContentHeader>
              <ContentTitle>
                <ContentName>{title}</ContentName>
                <ContentGenre>{this.state.genre.map(genre => {return (`${genre.name} |`)})}</ContentGenre>
              </ContentTitle>
              <ContentRating>{rate}</ContentRating> 
            </ContentHeader>
            <ContentFooter>
              {overview}
            </ContentFooter>
            <ContentDate>{date}</ContentDate>
        </RightCont>
      </MovieItemWrapper>
    )
  }
}

const MovieItemWrapper = styled.div`
  background-color: white;
  height: 200px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  gap: 7px;
  padding: 5px;
`

const LeftCont = styled.div`
  height: 100%;
  width: 30%;  
`
const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;;
`

const RightCont = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
 
`
const ContentTitle = styled.span`
`
const ContentFooter = styled.div`
  max-height: 85px;
  overflow: hidden;
`
const ContentDate = styled.div`
  color: ${colors.primaryColor};
  font-weight: 100;
  font-size: x-small;
`

const ContentName = styled.div`
  font-weight: 700;
  font-size: x-large;
`
const ContentGenre = styled.div`
  font-weight: 300;
  color:${colors.primaryColor} ;
`
const ContentRating = styled.div`
  color: white;
  background-color:${colors.primaryColor};
  padding: 3px;
  border-radius: 5px;
  height: 20px;
`