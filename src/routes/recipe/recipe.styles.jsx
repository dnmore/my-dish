import styled from "styled-components";

export const RecipeContainer = styled.div`
  width: 50vw;
  margin: auto;
  display: grid;
  place-items: center;
`;

export const RecipeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

export const IngredientsList = styled.ol`
  list-style: none;
`;