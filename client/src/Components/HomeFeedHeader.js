import React from "react";
import styled from "styled-components";
import COLORS from "./constants";

export const HomeFeedHeader = () => {
  return (
    <Wrapper>
      <Header>Home</Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid ${COLORS.divider};
`;

const Header = styled.h1`
  padding: 10px;
  font-size: 21px;
`;
