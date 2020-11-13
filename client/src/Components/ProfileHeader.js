import React from "react";
import styled from "styled-components";

const ProfileHeader = ({ profileInfo }) => {
  //console.log(profileInfo);
  const { profile } = profileInfo;
  return (
    <Wrapper>
      <Banner src={profile?.bannerSrc} />
      <InfoWrapper>
        <TopContainer>
          <ProfilePicture src={profile.avatarSrc} />
          <FollowBtn>Follow</FollowBtn>
        </TopContainer>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Banner = styled.img``;

const InfoWrapper = styled.div``;

const TopContainer = styled.div``;

const ProfilePicture = styled.img``;

const FollowBtn = styled.button``;

export default ProfileHeader;
