import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { COLORS } from "./constants";
import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);
  return (
    <Wrapper>
      <StyledLogo />
      <StyledLink exact to="/">
        <span>
          <FiHome style={{ width: "28px", height: "28px" }} />
          <SidebarText>Home</SidebarText>
        </span>
      </StyledLink>
      <StyledLink exact to={`/${currentUser?.handle}`}>
        <span>
          <FiUser style={{ width: "28px", height: "28px" }} />
          <SidebarText>Profile</SidebarText>
        </span>
      </StyledLink>
      <StyledLink exact to="/notifications">
        <span>
          <FiBell style={{ width: "28px", height: "28px" }} />
          <SidebarText>Notifications</SidebarText>
        </span>
      </StyledLink>
      <StyledLink exact to="/bookmarks">
        <span>
          <FiBookmark style={{ width: "28px", height: "28px" }} />
          <SidebarText>Bookmarks</SidebarText>
        </span>
      </StyledLink>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <MeowBtn>Meow</MeowBtn>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0px;
  margin-left: 50px;
  width: 240px;
  position: sticky;
  border-right: 1px solid ${COLORS.divider};
`;

const StyledLogo = styled(Logo)`
  height: 50px;
  width: auto;
  padding-left: 5px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;

  & span {
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }

  &.active {
    color: ${COLORS.primary};
  }

  &:hover > span {
    background: ${COLORS.hover};
    border-radius: 50px;
  }
`;

const SidebarText = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
`;

const MeowBtn = styled.button`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background: ${COLORS.primary};
  color: white;
  border-radius: 50px;
  padding: 10px;
  border: 0px;
  outline: none;
  width: 84%;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export default Sidebar;
