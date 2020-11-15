import React from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import LoadingIcon from "./LoadingIcon";
import { ProfileContext } from "./ProfileContext";
import HomeFeed from "./HomeFeed";

const Profile = () => {
  const { status, profileId } = React.useContext(ProfileContext);

  return (
    <Wrapper>
      {status === "idle" ? (
        <Container>
          <ProfileHeader />
          <HomeFeed url={`/api/${profileId}/feed`} />
        </Container>
      ) : (
        <LoadingIcon />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
`;

export default Profile;
