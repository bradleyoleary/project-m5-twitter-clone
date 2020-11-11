import React from "react";
import styled from "styled-components";
import SmallTweet from "./SmallTweet";

const HomeFeed = () => {
  const [feed, setFeed] = React.useState(null);
  const [feedLoadingStatus, setFeedLoadingStatus] = React.useState("loading");

  React.useEffect(() => {
    fetch("/api/me/home-feed", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeed(data);
        setFeedLoadingStatus("idle");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    </FeedWrapper>
  );
};

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
`;

export default HomeFeed;
