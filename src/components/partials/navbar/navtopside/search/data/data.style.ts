import styled, { css } from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../../settings/styles/utils';
import { keyframes } from 'styled-components';

export const slideDown = keyframes`
  0% {
    opacity: 0;
    max-height: 0px;
  }
  100% {
    opacity: 1;
    max-height: 800px;
  }
`;

export const Container = styled.div`
  button {
    width: 150px;
    height: 40px;
    border-radius: 10px;
    ${({ theme }) => {
      return {
        backgroundColor: theme.colors.primaryGreen,
        color: theme.colors.primaryDark,
      };
    }}
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  width: 100%;
  padding: 0px 20px;
  height: calc(100vh - 220px) !important;
  right: 0;
  left: 0;
  top: 120px;
  position: absolute;
  margin: 0 auto;
  overflow-y: scroll;
  ${flexBoxDirection('start', 'safe center', 'column')}
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  gap: 20px;

  animation: ${slideDown} 1s ease forwards;

  @media (min-width: 1400px) {
    width: 70%;
  }
  @media (min-width: 1200px) and (max-width: 1399px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    height: calc(100vh - 150px) !important;
  }

  @media (min-width: 0px) and (max-width: 1023) {
    width: 100%;
  }
`;

export const QueryDetails = styled.div`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  ${flexBox('start', 'center')};
  ${({ theme }) => {
    return {
      backgroundColor: theme.colors.primaryGray,
      color: theme.colors.primaryLight,
      fontSize: theme.text.size.large,
    };
  }}

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 30px;
    ${({ theme }) => {
      return {
        fontSize: theme.text.size.medium,
      };
    }}
  }
  @media (min-width: 1024px) and (max-width: 1400px) {
    width: 300px;
  }
`;

export const QueryData = styled.div<modeProps>`
  width: 100%;
  height: auto;
  /* padding: 20px; */
  ${flexBoxOnlyDirection('column')}
  gap: 20px;
  ${({ theme, $mode }) => {
    if ($mode !== 'checkout') {
      return {
        backgroundColor: theme.colors.secondaryDark,
      };
    }
  }};
  padding-bottom: 50px;

  animation: ${slideDown} 1s ease forwards;
`;

export const SearchMoreResults = styled.div`
  min-height: 100px;
  ${flexBox('center', 'start')};
  height: 200px;

  button {
    width: 200px;
    height: 40px;
    border-radius: 5px;
  }

  .loading {
    justify-content: center;
    align-items: start;
    svg {
      margin-top: 25px;
    }
  }
`;

export const QueryFields = styled.div<modeProps>`
  width: 100%;
  height: 40px;
  display: grid;

  ${({ $mode, theme }) => {
    if ($mode === 'checkout') {
      return css`
        grid-template-columns: calc(100% - 500px) 100px 100px 100px;

        @media (min-width: 768px) and (max-width: 1300px) {
          grid-template-columns: calc(100% - 300px) 100px 50px 100px;
        }

        @media (min-width: 520px) and (max-width: 768px) {
          grid-template-columns: calc(100% - 220px) 70px 50px 70px;
          font-size: ${theme.text.size.xsmall} !important;
        }

        @media (min-width: 0px) and (max-width: 519px) {
          grid-template-columns: calc(100% - 170px) 50px 40px 60px;
          font-size: ${theme.text.size.xsmall} !important;
        }
      `;
    }

    return css`
      grid-template-columns: calc(100% - 400px) 100px 100px;

      @media (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: calc(100% - 240px) 80px 80px;
      }

      @media (min-width: 520px) and (max-width: 767px) {
        grid-template-columns: calc(100% - 190px) 50px 50px;
      }

      @media (min-width: 0px) and (max-width: 519px) {
        grid-template-columns: calc(100% - 150px) 40px 50px;

        font-size: ${theme.text.size.xsmall} !important;
      }
    `;
  }}

  &:nth-child(1) {
    grid-column: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
  }
  &:nth-child(3) {
    grid-column: 3 / 4;
  }
  &:nth-child(4) {
    grid-column: 4 / 5;
  }

  grid-template-columns: calc(100% - 400px) 100px 100px 150px;
`;

type modeProps = {
  $mode: 'checkout' | 'search' | 'cart';
};
