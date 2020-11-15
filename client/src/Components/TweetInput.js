import React from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "./constants";
import { HomeFeedContext } from "./HomeFeedContext";

const TweetInput = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [numOfChars, setNumOfChars] = React.useState("280");
  const [value, setValue] = React.useState("");
  const { setFeed } = React.useContext(HomeFeedContext);
  const [loadingStatus, setLoadingStatus] = React.useState("idle");

  //console.log(currentUser);

  const handleClick = () => {
    setLoadingStatus("loading");
    if (value.length >= 0) {
      fetch("/api/tweet", {
        method: "POST",
        body: JSON.stringify({
          status: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            setLoadingStatus("loading");
          }
          return res.json();
        })
        .then((data) => {
          setValue("");
          setNumOfChars(280);
          setLoadingStatus("idle");
          return data;
        })
        .catch((error) => console.log(error))
        .then(() => {
          return fetch("/api/me/home-feed", {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setFeed(data);
            })
            .catch((error) => console.log(error));
        });
    }
  };

  return (
    <Wrapper>
      <InputTextDiv>
        <ProfilePicture src={currentUser.avatarSrc} />
        <Input
          placeholder={"What's happening?"}
          value={value}
          onChange={(event) => {
            setNumOfChars(Number(280) - Number(`${event.target.value.length}`));
            setValue(event.target.value);
          }}
        />
      </InputTextDiv>
      <CharDiv>
        <CharCount
          style={{
            color:
              numOfChars > 55
                ? `${COLORS.secondaryFont}`
                : numOfChars > 0
                ? "orange"
                : "red",
          }}
        >
          {numOfChars}
        </CharCount>
        {numOfChars < 0 || loadingStatus === "loading" ? (
          <DisabledButton disabled>Meow</DisabledButton>
        ) : (
          <PostButton onClick={handleClick}>Meow</PostButton>
        )}
      </CharDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 8px solid ${COLORS.divider};
`;

const ProfilePicture = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  margin: 5px 15px 5px 10px;
`;

const Input = styled.textarea`
  border: none;
  padding-top: 25px;
  height: 200px;
  font-size: 18px;
  font-weight: medium;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const CharCount = styled.div``;

const PostButton = styled.button`
  border: none;
  border-radius: 50px;
  font-size: 15px;
  padding: 15px 35px;
  margin-left: 10px;
  color: white;
  font-weight: bold;
  background: ${COLORS.primary};
  cursor: pointer;
`;

const DisabledButton = styled.button`
  border: none;
  border-radius: 50px;
  font-size: 15px;
  padding: 15px 35px;
  margin-left: 10px;
  color: white;
  font-weight: bold;
  background: ${COLORS.secondary};
`;

const InputTextDiv = styled.div`
  display: flex;
`;

const CharDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: flex-end;
`;

export default TweetInput;
