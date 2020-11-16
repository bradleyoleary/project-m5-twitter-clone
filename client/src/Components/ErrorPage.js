import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { u1F4A3 as Bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";
import COLORS from "./constants";

const BombIcon = () => <Icon icon={Bomb} size={50} />;

const ErrorPage = () => {
  return (
    <Wrapper>
      <PageIcon />
      <ErrStatus>An unknown error has occurred!</ErrStatus>
      <div>
        Please try refreshing the page, or <Bold>contact support</Bold> if the
        problem persists.
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid ${COLORS.divider};
`;

const ErrStatus = styled.h1`
  margin: 20px 0px;
`;

const Bold = styled.span`
  font-weight: bold;
  text-decoration: underline;
`;

const PageIcon = styled(BombIcon)``;

export default ErrorPage;
