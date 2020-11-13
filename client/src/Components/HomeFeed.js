import React from "react";
import styled from "styled-components";
import SmallTweet from "./SmallTweet";
import LoadingIcon from "./LoadingIcon";
import COLORS from "./constants";
import { HomeFeedContext } from "./HomeFeedContext";

const HomeFeed = () => {
  const { feed, setFeed, setFeedLoadingStatus } = React.useContext(
    HomeFeedContext
  );

  React.useEffect(() => {
    fetch("/api/me/home-feed", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFeed(data);
        setFeedLoadingStatus("idle");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <FeedWrapper>
      {feed && (
        <div>
          {feed.tweetIds.map((tweetId, index) => {
            const tweetInfo = feed.tweetsById[tweetId];
            //console.log(tweetInfo);
            return <SmallTweet key={tweetId + index} tweetInfo={tweetInfo} />;
          })}
        </div>
      )}
      <LoadingIcon />
    </FeedWrapper>
  );
};

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  border-right: 1px solid ${COLORS.divider};
`;

export default HomeFeed;
