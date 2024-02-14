import styled from "styled-components";

import { Link } from "react-router-dom";

export const CardBackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardBodyContainer = styled.div`
  height: 120px;
  width: 180px;
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const CardContainer = styled.div`
  height: 200px;
  width: 280px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${CardBackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CardBodyContainer} {
      opacity: 0.8;
    }
  }
`;

export const RecipeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f41919;
  font-size: 14px;
  font-weight: bold;
`;
