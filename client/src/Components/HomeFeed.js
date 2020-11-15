import React from "react";
import styled from "styled-components";
import SmallTweet from "./SmallTweet";
import LoadingIcon from "./LoadingIcon";
import COLORS from "./constants";
import { HomeFeedContext } from "./HomeFeedContext";
import FeedHook from "../FeedHook";

const HomeFeed = ({ url }) => {
  const {
    feed,
    setFeed,
    feedLoadingStatus,
    setFeedLoadingStatus,
  } = React.useContext(HomeFeedContext);

  FeedHook({
    url: url,
    dataSet: setFeed,
    loadingStatus: setFeedLoadingStatus,
  });

  return (
    <FeedContainer>
      {feedLoadingStatus === "idle" ? (
        <div>
          {feed.tweetIds.map((tweetId, index) => {
            const tweetInfo = feed.tweetsById[tweetId];
            return <SmallTweet key={tweetId + index} tweetInfo={tweetInfo} />;
          })}
        </div>
      ) : (
        <LoadingIcon />
      )}
    </FeedContainer>
  );
};

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HomeFeed;
