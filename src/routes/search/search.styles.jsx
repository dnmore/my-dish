import styled from "styled-components";



export const SearchContainer = styled.div `
width: 80%;
  margin: auto;
  display: grid;
  place-items: center;

  form {
    display: grid;
    gap: 10px;

    input {
      padding: 10px 20px;
      border: 1px solid #848282;
      border-radius: 6px;
      font: inherit;
      outline-color: #7a7777;

     
    }

    button {
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font: inherit;
      border: transparent;
      background-color: #f41919;
      color: white;

      &:hover {
        background-color: #e05353;
      }
    }
  }
`

