import styled, { css } from 'styled-components';
import {
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../settings/styles/utils';

export const Container = styled.section`
  ${flexBoxDirection('center', 'center', 'column')}
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;

  img[content='background'] {
    width: 100%;
    min-height: 100%;
    position: absolute;
    opacity: 0.1;
  }
`;

export const Content = styled.div`
  ${flexBoxDirection('center', 'center', 'column')}
  margin-top: 100px;
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
  gap: 50px;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${flexBoxOnlyDirection('column')}
    width: 70%;
    height: max-content;
    padding-bottom: 80px;
    text-align: center;
    gap: 40px;

    h1 {
      font-size: ${theme.text.size.title};
    }
    p {
      font-size: ${theme.text.size.large};
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      h1 {
        font-size: ${theme.text.size.large};
      }
      p {
        font-size: ${theme.text.size.medium};
      }
    }

    @media (min-width: 0px) and (max-width: 767px) {
      h1 {
        font-size: ${theme.text.size.large};
      }
      p {
        font-size: ${theme.text.size.small};
      }
      width: 80%;
    }
  `}
`;

export const BlockContainer = styled.div`
  ${flexBoxDirection('center', 'center', 'column')}
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  padding-bottom: 100px;
  gap: 120px;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 50px;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    gap: 100px;
  }
`;

export const BlockChildren = styled.div`
  ${({ theme }) => {
    return css`
      ${flexBoxDirection('center', 'center', 'column')}
      width: 40%;
      height: 600px;
      text-align: start;

      img {
        width: 100%;
        height: 400px;
      }
      div {
        width: 100%;
        height: 150px;

        h2 {
          font-size: ${theme.text.size.xxlarge};
        }
        span {
          font-size: ${theme.text.size.medium};
        }
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        gap: 20px;
        width: 80%;
        img {
          height: 100%;
        }
        h2 {
          font-size: ${theme.text.size.xlarge};
        }
        span {
          font-size: ${theme.text.size.medium};
        }
      }

      @media (min-width: 520px) and (max-width: 767px) {
        width: 90%;
        gap: 30px;
        img {
          height: 100%;
        }
        h2 {
          font-size: ${theme.text.size.xlarge};
        }
        span {
          font-size: ${theme.text.size.medium};
        }
      }

      @media (min-width: 0px) and (max-width: 519px) {
        width: 90%;
        gap: 30px;
        height: 400px;
        h2 {
          font-size: ${theme.text.size.xlarge};
        }
        span {
          font-size: ${theme.text.size.medium};
        }
      }
    `;
  }}
`;
