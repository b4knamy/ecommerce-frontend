import styled, { css } from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../../settings/styles/utils';

export const Container = styled.div`
  ${flexBoxDirection('center', 'center', 'column')}
  font-size: 30px;
  width: 100%;
  gap: 50px;

  &::before,
  &::after {
    content: '';
    width: 50%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  .rating-group {
    width: 100%;
    ${flexBoxDirection('center', 'center', 'row')};
    position: relative;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .rating-group {
      flex-direction: column;
      gap: 50px;
    }
  }
`;

export const Rating = styled.div`
  ${({ theme }) => css`
    ${flexBoxDirection('center', 'center', 'column')}
    width: fit-content;
    height: auto;
    position: relative;
    color: ${theme.colors.primaryDark};
    .container-rate {
      ${flexBoxOnlyDirection('row')}
      gap: 20px;
    }
    .rate-star {
      width: 150px;
    }
    .rate-progress {
      width: 300px;
      progress {
        width: 100%;
        &::-webkit-progress-value {
          background-color: ${theme.colors.primaryDark};
        }
      }
    }
    .rate-count {
      width: 80px;
    }

    &::after {
      content: '';
      width: 1px;
      height: 100%;
      background-color: ${theme.colors.primaryLight};
      position: absolute;
      right: 0;
    }

    @media (min-width: 520px) and (max-width: 767px) {
      padding-bottom: 50px;
      &::after {
        width: 50%;
        height: 1px;
        right: auto;
        bottom: 0;
      }
      .rate-progress {
        width: 200px;
      }
      .rate-count {
      }
    }
    @media (min-width: 0px) and (max-width: 519px) {
      padding-bottom: 50px;
      &::after {
        width: 50%;
        height: 1px;
        right: auto;
        bottom: 0;
      }

      .container-rate {
        gap: 5px;
      }
      .rate-star {
        svg {
          transform: scale(0.7);
        }
      }
      .rate-progress {
        width: 150px;
      }
      .rate-count {
        text-align: end;
        width: 30px;
        font-size: ${theme.text.size.large};
      }
    }
  `}
`;

export const MakeComment = styled.div`
  ${flexBox('center', 'center')}

  width: 30%;

  button {
    width: 50%;
    height: 50px;
    border-radius: 10px;
    font-size: 19px;

    &:hover {
      ${({ theme }) => ({
        backgroundColor: theme.colors.secondaryDark,
        color: theme.colors.primaryLight,
      })}
    }
  }

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    button {
      width: 80%;
    }
  }
`;
