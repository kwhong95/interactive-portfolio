import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* navigation */

export const Nav = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 44px;
  padding: 0 1rem;
`;

export const NavList = styled.div`
  display: flex;
  max-width: 1000px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

export const Link = styled(NavLink)`
  font-size: .8rem;
  color: #8c8c8c;
  text-decoration: none;
  color: #ececec;
`;