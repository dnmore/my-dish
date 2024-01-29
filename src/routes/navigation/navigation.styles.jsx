import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;


export const NavLink = styled(Link)`
 display: flex;
  align-items: center;
  text-decoration: none;
  font: inherit;
  color: #f41919;
  font-weight: bold;
`;
