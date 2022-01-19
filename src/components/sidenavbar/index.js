import React from "react";
import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import { withRouter } from "react-router-dom";

class SideNavBar extends React.Component {
  state = {
    isOpen: false,
  }

  slideNav = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  /* Write the necessary functions to show and hide the side bar on small devices */

  render () {
 
    return (
      <>
        <MainCon isOpen={this.state.isOpen}>
          <Hamburger onClick={this.slideNav}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
          <MobilePageTitle>{this.props.location.pathname.substring(1).toUpperCase()}</MobilePageTitle> 
        </MainCon>
        <SideNavBarCont isOpen={this.state.isOpen} onClick={this.slideNav}>
          {/* Implement a hamburger icon slide in effect for small devices */}
          <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
            Wesley
            <NavIcon src={Arrow}></NavIcon>
          </SideNavMainLink>
          <SideNavMainLink className="menu_nav_link" to="/discover">
            Discover
            <NavIcon src={SearchWhite}></NavIcon>
          </SideNavMainLink>
          <SideNavHeader><HeaderText>Watched</HeaderText></SideNavHeader>
          <NavLink className="menu_nav_link" to="/watched/movies">Movies</NavLink>
          <NavLink className="menu_nav_link" to="/watched/tv-shows">Tv Shows</NavLink>
          <SideNavHeader><HeaderText>Saved</HeaderText></SideNavHeader>
          <NavLink className="menu_nav_link" to="/saved/movies">Movies</NavLink>
          <NavLink className="menu_nav_link" to="/saved/tv-shows">Tv Shows</NavLink>
        </SideNavBarCont>
      </> 
    );
  }
}

export default withRouter(SideNavBar)

const MainCon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => isOpen ? "none" : "flex"};
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    gap: 15px;
  }
`
const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 20%;
  height: 100%;
  background-color: ${colors.sideNavBar};
  padding-left: 30px;

  @media (max-width: 768px) {
    left: ${({ isOpen }) => isOpen ? "0" : "-100%"};
    transition: 0.3s ease-in-out;
    width: 50%;
    height: 100%;
    top: 0;

  }
`

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding-top: 25px ;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  &:hover{
    background-color: ${colors.sideNavBarHover};
  }
`

const NavIcon = styled.img`
  position: absolute;
  right: 35px;
  top: 50%;
`

const SideNavHeader = styled.div`
  border-bottom: 1px solid grey;
  padding-top: 25px;
  padding-bottom: 10px;
  margin-top: 15px;
`

const HeaderText = styled.div`
  font-size: 1.2em;
  font-weight: 300;
  color: white;
`

const NavLink = styled(Link)`
  display: block;
  color: grey;
  padding-top: 10px;

`
const Hamburger = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    height: 2px;
    width: 25px;
    background-color: black;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    z-index: 20;
  }

`
const MobilePageTitle = styled.div`
  font-size: x-large;
  @media (max-width: 668px) {
      display: block;
      top: 0;
      left: 55px
  }
`