import React from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import COLORS from "./constants";

const BigTweetHeader = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <BackBtn
        onClick={() => {
          history.goBack();
        }}
      >
        <ArrowIcon />
      </BackBtn>
      <Title>Meow</Title>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  border-bottom: 1px solid ${COLORS.divider};
  display: flex;
  align-items: center;
`;

const BackBtn = styled.button`
  border: none;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const ArrowIcon = styled(FiArrowLeft)`
  height: 20px;
  width: 20px;
  color: ${COLORS.secondaryFont};
`;

const Title = styled.span`
  padding: 10px;
  font-size: 21px;
  font-weight: bold;
`;

export default BigTweetHeader;
