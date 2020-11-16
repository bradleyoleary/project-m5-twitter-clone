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
import { COLORS } from "./Components/constants";
import GlobalStyle from "./GlobalStyles";
import TweetInput from "./Components/TweetInput";
import LoadingIcon from "./Components/LoadingIcon";
import { HomeFeedHeader } from "./Components/HomeFeedHeader";
import ProfileProvider from "./Components/ProfileContext";
import BigTweetHeader from "./Components/BigTweetHeader";
import ErrorPage from "./Components/ErrorPage";

const App = () => {
  const { status, error } = React.useContext(CurrentUserContext);
  return (
    <>
      <Router>
        <Wrapper>
          <GlobalStyle />
          <Sidebar />
          <Switch>
            <Route exact path="/">
              {error === true ? (
                <ErrorPage />
              ) : (
                <div>
                  {status !== "loading" ? <HomeFeedHeader /> : null}
                  {status !== "loading" ? <TweetInput /> : <LoadingIcon />}
                  {status !== "loading" ? (
                    <HomeFeed url="/api/me/home-feed" />
                  ) : null}
                </div>
              )}
            </Route>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route exact path="/tweet/:tweetId">
              <div>
                {status !== "loading" ? <BigTweetHeader /> : null}
                {status !== "loading" ? <TweetDetails /> : null}
              </div>
            </Route>
            <Route exact path="/:profileId">
              <ProfileProvider>
                <Profile />
              </ProfileProvider>
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
  max-width: 80%;
  border-right: 1px solid ${COLORS.divider};
`;

export default App;
