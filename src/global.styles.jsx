import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    font-family: "Quicksand", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  .container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


  
    h2 {
      font-size: 1.3rem;
      font-family: "Open Sans", sans-serif;
    }

    h3 {
        font-size: 1.1rem;
        font-family: "Open Sans", sans-serif;
    }
  
    p {
      font-size: 1rem;
      line-height: 2;
      text-align: justify;
      
    }
  
    .recipes-nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #F41919;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
