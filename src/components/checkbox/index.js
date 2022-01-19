import React from "react";
import styled from 'styled-components';

export default class CheckBox extends React.Component {
  // Create a custom checkbox component
  state = {
    checked: false
  }

  handleChange = (e) => {
    this.setState({
      checked: !this.state.checked
    })
  }
  
  render () {
    return (
      <CheckboxContainer onClick={this.handleChange}>
        <StyledCheckbox checked={this.state.checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
     </CheckboxContainer>
    )
  }
}

const CheckboxContainer = styled.div`
  
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`


const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid grey;
  background: ${({ checked }) => checked  ? '#c4ca18' : 'white'};
  border-radius: 3px;
  transition: all 150ms;

 
  ${Icon} {
    visibility: ${({ checked }) => checked  ? 'visible' : 'hidden'}
  }
`