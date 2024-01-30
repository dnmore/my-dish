import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const CategoryBodyContainer = styled.div`
  height: 90px;
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const CategoryContainer = styled.div`
  height: 200px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;
  &:hover {
    cursor: pointer;

    & ${CategoryBackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryBodyContainer} {
      opacity: 0.8;
    }
  }
`;

export const CategoryNavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f41919;
  font-size: 14px;
  font-weight: bold;
`;
