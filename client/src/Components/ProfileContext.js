import React from "react";
import { useParams } from "react-router-dom";

export const ProfileContext = React.createContext(null);

const ProfileProvider = ({ children }) => {
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
    <ProfileContext.Provider
      value={{ status, setStatus, profileInfo, setProfileInfo, profileId }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
