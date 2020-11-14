import React from "react";
import Styled from "styled-components";
import { useParams } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import LoadingIcon from "./LoadingIcon";

const Profile = () => {
  const { profileId } = useParams();
  const [status, setStatus] = React.useState("loading");
  const [profileInfo, setProfileInfo] = React.useState(null);
  //console.log(profileId);
  React.useEffect(() => {
    fetch(`api/${profileId}/profile`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProfileInfo(data);
        setStatus("idle");
      });
  }, [profileId]);
  return (
    <div>
      {status === "idle" ? (
        <ProfileHeader profileInfo={profileInfo} />
      ) : (
        <LoadingIcon />
      )}
    </div>
  );
};

export default Profile;
