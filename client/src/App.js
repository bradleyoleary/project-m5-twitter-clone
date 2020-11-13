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
import TweetInput from "./Components/TweetInput";
import LoadingIcon from "./Components/LoadingIcon";
import { HomeFeedHeader } from "./Components/HomeFeedHeader";

const App = () => {
  const { status } = React.useContext(CurrentUserContext);
  return (
    <>
      <Router>
        <Wrapper>
          <GlobalStyle />
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <div>
                {status !== "loading" ? <HomeFeedHeader /> : null}
                {status !== "loading" ? <TweetInput /> : <LoadingIcon />}
                {status !== "loading" ? <HomeFeed /> : null}
              </div>
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
            <Route exact path="/:profileId">
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
