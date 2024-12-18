import styled, { css } from 'styled-components';

export const defaultMainPage = css`
  position: relative;
  padding-top: 120px;
`;

export const defaultSearchPage = css`
  padding-bottom: 10px;
  border-bottom: 2px solid black;
  width: 100%;

  span {
    font-size: 20px;
  }
`;

export const GlobalPageContainer = styled.main`
  width: 100%;
  height: auto;

  ${defaultMainPage}
`;
