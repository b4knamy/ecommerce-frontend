import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    width: 100vw;
    /* min-height: 100vh; */
    height: auto;
    overflow-x: hidden;

    // abel font style

    font-family: "Abel", sans-serif;
    font-weight: 100;
    font-style: normal;
  }

  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

export const ContainerTitle = styled.h3`
  ${({ theme }) => ({
    fontSize: theme.text.size.title,
    fontWeight: theme.text.weight.xsmall,
    color: theme.colors.secondaryDark,
  })}
`;
