import React from "react";
import styled from "styled-components";
import SmallTweet from "./SmallTweet";
import LoadingIcon from "./LoadingIcon";
import { HomeFeedContext } from "./HomeFeedContext";
import FeedHook from "../FeedHook";
import ErrorPage from "./ErrorPage";

const HomeFeed = ({ url }) => {
  const {
    feed,
    setFeed,
    feedLoadingStatus,
    setFeedLoadingStatus,
    error,
    setError,
  } = React.useContext(HomeFeedContext);

  FeedHook({
    url: url,
    dataSet: setFeed,
    loadingStatus: setFeedLoadingStatus,
    errorSet: setError,
  });

  return (
    <div>
      {error === false ? (
        <FeedContainer>
          {feedLoadingStatus === "idle" ? (
            <div>
              {feed.tweetIds.map((tweetId, index) => {
                const tweetInfo = feed.tweetsById[tweetId];
                return (
                  <SmallTweet key={tweetId + index} tweetInfo={tweetInfo} />
                );
              })}
            </div>
          ) : (
            <LoadingIcon />
          )}
        </FeedContainer>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HomeFeed;
