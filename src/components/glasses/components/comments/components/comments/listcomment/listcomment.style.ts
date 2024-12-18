import styled, { css, keyframes } from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../../../settings/styles/utils';

const CommentAddAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 300ms, transform 300ms;
  }
  100% {
    opacity: 1;
    transform: translateY(0);

  }
`;

const defaultCss = css`
  width: max-content;
  height: max-content;
`;

export const Content = styled.div`
  width: 90%;
  height: auto;
  position: relative;
  padding: 10px 0px;
  animation: ${CommentAddAnimation};
  animation-duration: 3s;
  transition: 300ms all linear;

  &::after {
    content: '';
    width: 100%;
    margin-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.primaryLight};
    position: absolute;
  }
`;

export const Container = styled.div`
  ${flexBoxDirection('center', 'center', 'column')};
  width: 100%;
  height: auto;
  gap: 25px;

  ${Content}:nth-child(1) {
    margin-top: 25px;
    &::before {
      content: '';
      width: 100%;
      border-top: 1px solid ${({ theme }) => theme.colors.primaryLight};
      position: absolute;
      transform: translateY(-15px);
    }
  }

  button {
    width: 200px;
    height: 40px;
    margin-top: 20px;
    ${({ theme }) => ({
      backgroundColor: theme.colors.primaryLight,
      color: theme.colors.secondaryDark,
    })}
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    margin-top: 10px;
    ${defaultCss};
    max-width: 70%;

    h3 {
      font-size: 25px;
    }
    word-wrap: break-word;

    @media (min-width: 0px) and (max-width: 767px) {
      h3 {
        font-size: ${theme.text.size.medium};
      }
    }
  `}
`;

export const Date = styled.div`
  ${defaultCss};
`;

export const User = styled.div`
  ${flexBoxDirection('center', 'center', 'row')}
  gap: 10px;
  ${defaultCss};

  p {
    font-size: 20px;
    font-weight: 500;
  }

  div[content='user'] {
    ${flexBox('center', 'center')}
    width: 40px;
    height: 40px;
    background-color: darkgray;
  }

  svg {
    transform: scale(1.4);
  }

  .delete-post {
    ${flexBoxOnlyDirection('row')};
    margin-left: 20px;
    gap: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  }

  @media (min-width: 520px) and (max-width: 768px) {
    p,
    span {
      font-size: 15px;
    }
  }

  @media (min-width: 0px) and (max-width: 519px) {
    p {
      font-size: 15px;
    }
    gap: 5;
    div[content='user'] {
      ${flexBox('center', 'center')}
      width: 25px;
      height: 25px;
      background-color: darkgray;
    }
    svg {
      transform: scale(1.1);
    }
    .delete-post {
      margin-left: 0px;
      gap: 5px;
      font-size: 12px;
    }
  }
`;

export const Rating = styled.div`
  ${defaultCss};
`;
export const Details = styled.div`
  ${flexBoxDirection('center', 'end', 'column')}
  ${defaultCss};
  position: absolute;
  right: 0;
  margin-right: 10px;
  color: black;

  .fa-solid {
    color: black;
  }
  .fa-regular {
    color: darkgray;
  }

  div {
    ${defaultCss};
  }

  @media (min-width: 520px) and (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    font-size: 10px;
  }
`;

export const Comment = styled.div`
  ${({ theme }) => css`
    max-width: 70%;
    font-size: ${theme.text.size.medium};
    font-weight: 100;
    word-wrap: break-word;

    @media (min-width: 0px) and (max-width: 767px) {
      font-size: ${theme.text.size.small};
    }
  `}
`;

export const Image = styled.div`
  ${flexBoxOnlyDirection('row')}
  width: 100%;
  height: auto;
  margin-top: 20px;
  gap: 10px;
  img {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    gap: 5px;
    img {
      width: 140px;
      height: 140px;
    }
  }

  @media (min-width: 400px) and (max-width: 519px) {
    gap: 5px;
    img {
      width: 100px;
      height: 100px;
    }
  }

  @media (min-width: 0px) and (max-width: 399px) {
    gap: 10px;
    flex-direction: column;
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
