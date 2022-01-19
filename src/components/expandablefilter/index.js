import React from "react";
import styled from 'styled-components';


import Checkbox from "../checkbox";
import Delete from "../../images/delete.png"
import Plus from "../../images/plus.png"

export default class ExpandableFilter extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      filtersShown: false,
    };
  }


  handleIcon = () => {
    this.setState({
      filtersShown: !this.state.filtersShown
    })
  }

  render() {
 
    return (
      <ExpandCon>
        <ExpandHeader>
          <IconHeader src={this.state.filtersShown ? Delete : Plus} onClick={this.handleIcon} ></IconHeader>
          <TitleHeader>{this.props.name}</TitleHeader>
        </ExpandHeader>
        <ExpandFooter filtersShown={this.state.filtersShown}>
          {this.props.options.map(item => {
            return (
              <BoxCon key={item.id}>
                <Checkbox />
                <BoxName>{item.name}</BoxName>
              </BoxCon>
            )
          })}
        </ExpandFooter>

      </ExpandCon>
    )
  }

  // You need to create your own checkbox component with a custom checkmark
}


const ExpandCon = styled.div`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`
const ExpandHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const IconHeader = styled.img`
  width: 20px;
  color: black;
  cursor: pointer;
`
const TitleHeader = styled.span`

`
const ExpandFooter = styled.div`
  position: relative;
  margin-top: 20px;
  display: ${({ filtersShown }) => filtersShown ? "block" : "none"};
  transition: 0.3s ease-in-out;
`

const BoxCon = styled.div`
  height: 50px;
  padding: 10px;
  display: flex;
`

const BoxName = styled.span`
  font-weight: 200;
  margin-left: 10px;
`
