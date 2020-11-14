import React from "react";
import styled from "styled-components";
import { FiRepeat, FiHeart, FiMessageCircle, FiShare } from "react-icons/fi";
import { COLORS } from "./constants";

const ActionBar = ({
  isLiked,
  setIsLiked,
  numOfLikes,
  setNumOfLikes,
  tweetId,
  isRetweeted,
  setIsRetweeted,
  numOfRetweets,
  setNumOfRetweets,
}) => {
  const RetweetHandler = (event) => {
    const setValue = !isRetweeted;
    console.log(setValue);
    event.stopPropagation();
    const incOrDec = isRetweeted ? -1 : 1;
    setIsRetweeted(!isRetweeted);
    setNumOfRetweets(numOfRetweets + incOrDec);
    fetch(`/api/tweet/${tweetId}/retweet`, {
      method: "PUT",
      body: JSON.stringify({
        like: setValue,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  };
  //^Trying to get retweets from retweet API, but no luck yet. Will check in later!^//

  const LikeHandler = (event) => {
    const setValue = !isLiked;
    //console.log(setValue);
    event.stopPropagation();
    const incOrDec = isLiked ? -1 : 1;
    setIsLiked(!isLiked);
    setNumOfLikes(numOfLikes + incOrDec);
    fetch(`/api/tweet/${tweetId}/like`, {
      method: "PUT",
      body: JSON.stringify({
        like: setValue,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  };
  return (
    <Wrapper>
      <IconWrapper>
        <ChatIcon />
      </IconWrapper>
      <IconWrapper>
        <RepeatIcon onClick={RetweetHandler} />
        {numOfRetweets > 0 ? <Number>{numOfRetweets}</Number> : null}
      </IconWrapper>
      <IconWrapper>
        <HeartIcon
          onClick={LikeHandler}
          style={{
            fill: isLiked ? "red" : "transparent",
            stroke: isLiked ? "red" : `${COLORS.secondaryFont}`,
          }}
        />
        {numOfLikes > 0 ? <Number>{numOfLikes}</Number> : null}
      </IconWrapper>
      <IconWrapper>
        <UploadIcon />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  max-width: 90%;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  padding: 5px 0px;

  &:hover > svg {
    color: ${COLORS.primary};
    background: ${COLORS.hover};
  }
`;

const ChatIcon = styled(FiMessageCircle)`
  color: ${COLORS.third};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 9px;
  overflow: visible;
`;

const RepeatIcon = styled(FiRepeat)`
  color: ${COLORS.third};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 9px;
  overflow: visible;
`;

const HeartIcon = styled(FiHeart)`
  color: ${COLORS.third};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 9px;
  overflow: visible;
`;

const UploadIcon = styled(FiShare)`
  color: ${COLORS.third};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 9px;
  overflow: visible;
`;

const Number = styled.span`
  color: ${COLORS.secondaryFont};
  padding-left: 8px;
`;

export default ActionBar;
