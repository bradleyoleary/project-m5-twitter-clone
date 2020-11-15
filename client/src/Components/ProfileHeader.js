import React from "react";
import styled from "styled-components";
import COLORS from "./constants";
import { ProfileContext } from "./ProfileContext";
import { format } from "date-fns";
import { FiMapPin, FiCalendar } from "react-icons/fi";

const ProfileHeader = () => {
  const { profileInfo } = React.useContext(ProfileContext);
  const { profile } = profileInfo;
  const date = format(new Date(profile.joined), "LLLL y");
  //console.log(profileInfo);
  return (
    <Wrapper>
      <Banner src={profile.bannerSrc} />
      <UserInfo>
        <ProfilePicture src={profile.avatarSrc} />
        <FollowBtn>Following</FollowBtn>
        <DisplayName>{profile.displayName}</DisplayName>
        <Handle>@{profile.handle}</Handle>
        {profile.isFollowingYou && <FollowsYou>Follows You</FollowsYou>}
        <UserBio>{profile.bio}</UserBio>
        {profile.location ? (
          <Location>
            <FiMapPin style={{ marginRight: "3px" }} /> {profile.location}
          </Location>
        ) : (
          <Location>N/AP</Location>
        )}
        <DateJoined>
          <FiCalendar style={{ marginRight: "3px" }} />
          Joined {date}
        </DateJoined>
        <FollowInfo>
          <Following>
            <FollowNum>{profile.numFollowing}</FollowNum>
            Following
          </Following>
          <Followers>
            <FollowNum>{profile.numFollowers}</FollowNum>
            Followers
          </Followers>
        </FollowInfo>
      </UserInfo>
      <HeaderTabs>
        <TweetTab>Tweets</TweetTab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </HeaderTabs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  display: block;
  border-bottom: 1px solid ${COLORS.divider};
  position: relative;
`;

const Banner = styled.img`
  height: 280px;
  width: 100%;
  object-fit: cover;
  position: relative;
`;

const UserInfo = styled.div`
  position: relative;
  margin-top: -10%;
  padding: 8px;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 130px;
  border-radius: 50%;
  border: 3px solid white;
`;

const FollowBtn = styled.button`
  display: block;
  float: right;
  border: none;
  border-radius: 50px;
  font-size: 15px;
  padding: 13px 30px;
  color: white;
  font-weight: bold;
  background: ${COLORS.primary};
  cursor: pointer;
`;

const DisplayName = styled.h1`
  font-size: 20px;
  padding: 10px 0px 5px 0px;
`;

const Handle = styled.span`
  font-size: 16px;
  color: ${COLORS.secondaryFont};
`;

const FollowsYou = styled.span`
  font-size: 14px;
  background: #ebebeb;
  padding: 3px;
  border-radius: 5px;
  color: #575757;
  margin-left: 5px;
`;

const UserBio = styled.p`
  font-size: 16px;
  padding: 20px 20px 20px 0;
`;

const Location = styled.span`
  display: inline-block;
  padding: 10px 0px;
  color: ${COLORS.secondaryFont};
`;

const DateJoined = styled.span`
  display: inline-block;
  padding: 10px 25px;
  color: ${COLORS.secondaryFont};
`;

const FollowInfo = styled.div`
  display: block;
  margin-top: 8px;
  color: ${COLORS.secondaryFont};
`;

const Following = styled.span`
  padding-right: 30px;
`;

const Followers = styled.span``;

const FollowNum = styled.span`
  color: black;
  font-weight: bold;
  padding-right: 5px;
`;

const HeaderTabs = styled.div`
  font-size: 18px;
  display: flex;
  flex-wrap: nowrap;
  padding: 0px;
`;

const TweetTab = styled.h1`
  flex-grow: 1;
  text-align: center;
  font-weight: 800;
  color: ${COLORS.primary};
  background: white;
  padding: 20px 0;
  outline: none;
  border-bottom: 5px solid ${COLORS.primary};
`;

const Tab = styled.h1`
  flex-grow: 1;
  text-align: center;
  font-weight: 800;
  color: ${COLORS.secondaryFont};
  background: white;
  padding: 20px 0;
  outline: none;
`;

export default ProfileHeader;
