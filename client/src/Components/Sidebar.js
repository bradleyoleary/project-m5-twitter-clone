import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { COLORS } from "./constants";

const Sidebar = () => {
  return (
    <Wrapper>
      <StyledLogo />
      <StyledLink exact to="/">
        <span>
          <FiHome style={{ width: "28px", height: "28px" }} />
          <SidebarText>Home</SidebarText>
        </span>
      </StyledLink>
      <StyledLink to="/profile">
        <span>
          <FiUser style={{ width: "28px", height: "28px" }} />
          <SidebarText>Profile</SidebarText>
        </span>
      </StyledLink>
      <StyledLink to="/notifications">
        <span>
          <FiBell style={{ width: "28px", height: "28px" }} />
          <SidebarText>Notifications</SidebarText>
        </span>
      </StyledLink>
      <StyledLink to="/bookmarks">
        <span>
          <FiBookmark style={{ width: "28px", height: "28px" }} />
          <SidebarText>Bookmarks</SidebarText>
        </span>
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  margin-left: 20px;
  height: 100vh;
  width: 240px;
  position: sticky;
  border-right: 1px solid ${COLORS.SideBardDivider};
  box-shadow: 15px 0px 36px -18px rgba(0, 0, 0, 0.1);
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
    background: ${COLORS.secondary};
    border-radius: 50px;
  }
`;

const SidebarText = styled.text`
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
`;

export default Sidebar;
