import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import COLORS from "./constants";
import { FiRepeat } from "react-icons/fi";
import ActionBar from "./ActionBar";
import { Link, useHistory } from "react-router-dom";

const SmallTweet = ({ tweetInfo }) => {
  //console.log(tweetInfo);
  const date = format(new Date(tweetInfo.timestamp), "LLL do");
  const { author } = tweetInfo;
  const [isLiked, setIsLiked] = React.useState(tweetInfo.isLiked);
  const [numOfLikes, setNumOfLikes] = React.useState(tweetInfo.numLikes);
  const [isRetweeted, setIsRetweeted] = React.useState(tweetInfo.isRetweeted);
  const [numOfRetweets, setNumOfRetweets] = React.useState(
    tweetInfo.numRetweets
  );

  let history = useHistory();
  //console.log(history);
  const ClickLink = () => {
    history.push(`/tweet/${tweetInfo.id}`);
  };

  return (
    <TweetContainer
      onClick={ClickLink}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          ClickLink();
        }
      }}
      tabIndex="0"
      aria-label="View Tweet"
    >
      {tweetInfo.retweetFrom && (
        <Retweet>
          <RetweetIcon />
          {tweetInfo.retweetFrom.handle} Remeowed
        </Retweet>
      )}
      <TweetWrapper>
        <ProfilePicture src={author.avatarSrc} />
        <TweetBody>
          <div>
            <DisplayName
              to={`/${author.handle}`}
              onClick={(event) => {
                event.stopPropagation();
              }}
              onKeyDown={(event) => {
                event.stopPropagation();
              }}
            >
              {author.displayName}
            </DisplayName>
            <Handle> @{author.handle} - </Handle>
            <Timestamp>{date}</Timestamp>
          </div>
          <TweetText>{tweetInfo.status}</TweetText>
          {tweetInfo.media.length > 0
            ? tweetInfo.media.map((tweet) => {
                return <PostedImg src={tweet.url} />;
              })
            : null}
          <ActionBar
            isLiked={isLiked}
            setIsLiked={setIsLiked}
            numOfLikes={numOfLikes}
            setNumOfLikes={setNumOfLikes}
            tweetId={tweetInfo.id}
            isRetweeted={isRetweeted}
            setIsRetweeted={setIsRetweeted}
            numOfRetweets={numOfRetweets}
            setNumOfRetweets={setNumOfRetweets}
          />
        </TweetBody>
      </TweetWrapper>
    </TweetContainer>
  );
};

const TweetContainer = styled.div`
  border-bottom: 1px solid ${COLORS.divider};
  padding: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const TweetWrapper = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
`;

const ProfilePicture = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50px;
`;

const TweetBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const DisplayName = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Handle = styled.span`
  font-size: 16px;
  color: ${COLORS.secondaryFont};
  margin-left: 5px;
`;

const Retweet = styled.div`
  color: ${COLORS.secondaryFont};
  margin-left: 68px;
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-size: 16px;
  margin-left: 5px;
  color: ${COLORS.secondaryFont};
`;

const TweetText = styled.span`
  padding: 15px 0px;
`;

const PostedImg = styled.img`
  height: 350px;
  width: 100%;
  max-width: 90%;
  object-fit: cover;
  border-radius: 10px;
`;

const RetweetIcon = styled(FiRepeat)`
  color: ${COLORS.third};
  align-items: center;
  margin-bottom: -3px;
  margin-right: 8px;
`;

export default SmallTweet;
