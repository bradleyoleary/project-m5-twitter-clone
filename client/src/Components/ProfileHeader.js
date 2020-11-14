import React from "react";
import styled from "styled-components";
import COLORS from "./constants";

const ProfileHeader = ({ profileInfo }) => {
  //console.log(profileInfo);
  const { profile } = profileInfo;
  return (
    <Wrapper>
      <Banner src={profile.bannerSrc} />
      <InfoWrapper>
        <TopContainer>
          <ProfilePicture src={profile.avatarSrc} />
          <FollowBtn>Follow</FollowBtn>
        </TopContainer>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
`;

const Banner = styled.img`
  position: relative;
  z-index: -1;
  height: 250px;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const ProfilePicture = styled.img`
  width: 130px;
  border-radius: 50%;
  border: 5px solid white;
`;

const FollowBtn = styled.button`
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

export default ProfileHeader;
