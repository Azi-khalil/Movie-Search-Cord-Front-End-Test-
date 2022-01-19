import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';


import SideNavBar from "./components/sidenavbar/index";

import Discover from "./pages/discover";

import './css/app.css'; 

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <PageContainer>
          <NavCon>
            <SideNavBar {...this.props} />
          </NavCon>
          <ContentWrapper>
            <Switch>
              <Route path="/discover" component={Discover} {...this.props}/>
            </Switch>
          </ContentWrapper>
        </PageContainer>
      </Router>
    );
  }
}


const ContentWrapper = styled.main`
  width: 80%;
  @media (max-width: 768px) {
      width: 100%;
      
    }
`

const PageContainer = styled.main`
  display: flex;
  justify-content: space-between;
    @media (max-width: 768px) {
      display:block;
      
    }
  
`
const NavCon = styled.div`
  @media (max-width: 768px) {
    
  }
`

