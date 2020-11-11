import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeFeed from "./Components/HomeFeed";
import Notifications from "./Components/Notifications";
import Bookmarks from "./Components/Bookmarks";
import TweetDetails from "./Components/TweetDetails";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";
import { CurrentUserContext } from "./Components/CurrentUserContext";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";

const App = () => {
  const { currentUser, status, error } = React.useContext(CurrentUserContext);
  //console.log(currentUser);
  //console.log(status);
  return (
    <>
      <Router>
        <Wrapper>
          <GlobalStyle />
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <HomeFeed />
            </Route>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route exact path="/tweet/:tweetID">
              <TweetDetails />
            </Route>
            <Route exact path="/:profileID">
              <Profile />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 290px 1fr;
`;

export default App;
