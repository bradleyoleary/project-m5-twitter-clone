import React from "react";
import { useParams } from "react-router-dom";
import BigTweet from "./BigTweet";
import LoadingIcon from "./LoadingIcon";

const TweetDetails = () => {
  let { tweetId } = useParams();
  const [status, setStatus] = React.useState("loading");
  const [tweetInfo, setTweetInfo] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/tweet/${tweetId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const tweetData = data.tweet;
        setTweetInfo(tweetData);
        setStatus("idle");
      });
  }, [tweetId]);
  return (
    <div>
      {status !== "loading" ? (
        <BigTweet tweetInfo={tweetInfo}></BigTweet>
      ) : (
        <LoadingIcon />
      )}
    </div>
  );
};

export default TweetDetails;
