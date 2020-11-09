import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeFeed from "./Components/HomeFeed";
import Notifications from "./Components/Notifications";
import Bookmarks from "./Components/Bookmarks";
import TweetDetails from "./Components/TweetDetails";
import Profile from "./Components/Profile";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeFeed />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/tweet/:tweetID">
            <TweetDetails />
          </Route>
          <Route path="/:profileID">
            <Profile />
          </Route>
        </Switch>
        <GlobalStyle />
      </Router>
    </>
  );
};

export default App;
