import styled, { css } from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../settings/styles/utils';

export const Options = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    ${flexBoxDirection('center', 'center', 'column')};
    gap: 10px;

    button {
      width: 100%;
      height: 60px;
      background-color: ${theme.colors.secondaryDark};
      color: ${theme.colors.primaryLight};
      font-size: ${theme.text.size.xlarge};

      svg {
        transform: scale(2);
      }

      &:hover {
        background-color: ${theme.colors.primaryGreen};
        color: ${theme.colors.primaryDark};
        font-size: ${theme.text.size.xlarge};
      }

      transition: all 100ms ease-out;
    }

    @media (min-width: 0px) and (max-width: 1023px) {
      button {
        height: 30px;
        font-size: ${theme.text.size.medium};

        svg {
          transform: scale(1.1);
        }
      }
    }
  `}
`;

export const Container = styled.div`
  ${flexBoxOnlyDirection('column')}
  overflow: hidden;
  text-align: start;
  width: 350px;
  height: auto;
  position: relative;
  border-radius: 5px 5px 20px 20px;
  user-select: none;
  box-shadow: 3px 10px 10px 0px ${({ theme }) => theme.colors.secondaryDark};

  img {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 1300px) and (max-width: 1600px) {
    width: 300px;
    img {
      width: 300px;
      height: 300px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1299px) {
    width: 250px;
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media (min-width: 470px) and (max-width: 1023px) {
    justify-content: center;
    align-items: center;
    width: 200px;
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media (min-width: 0px) and (max-width: 469px) {
    width: 150px;
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    text-align: center;
    width: 100%;
    height: auto;
    min-height: 50px;
    color: ${theme.colors.primaryDark};
    font-size: ${theme.text.size.large};
    ${flexBox('center', 'center')};

    @media (min-width: 0px) and (max-width: 469px) {
      font-size: ${theme.text.size.small};
    }
  `}
`;

export const Pricing = styled.div`
  ${({ theme }) => css`
    padding: 0px 5px;
    height: 150px;
    ${flexBoxDirection('center', 'center', 'column')}
    width: 100%;
    span {
      color: green;
    }
    .current-amount {
      color: ${theme.colors.primaryGreen};
      font-size: ${theme.text.size.xxlarge};
    }
    .old-value,
    .installments {
      color: ${theme.colors.primaryDark};
      font-size: ${theme.text.size.medium};
    }

    .old-value {
      text-decoration: line-through;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      height: 120px;

      .current-amount {
        font-size: ${theme.text.size.large};
      }
      .old-value,
      .installments {
        font-size: ${theme.text.size.medium};
      }
    }

    @media (min-width: 480px) and (max-width: 768px) {
      height: 100px;

      .current-amount {
        font-size: ${theme.text.size.medium};
      }
      .old-value,
      .installments {
        font-size: ${theme.text.size.small};
      }
    }

    @media (min-width: 0px) and (max-width: 469px) {
      height: 60px;
      .current-amount {
        font-size: ${theme.text.size.small};
      }
      .old-value,
      .installments {
        font-size: ${theme.text.size.xsmall};
      }
    }
  `}
`;

export const Promotion = styled.div`
  ${flexBox('center', 'center')}
  width: 150px;
  height: 40px;
  ${({ theme }) => {
    return {
      backgroundColor: theme.colors.primaryGreen,
      color: theme.colors.primaryDark,
      fontSize: theme.text.size.medium,
      fontWeight: theme.spacing.xxlarge,
    };
  }};
  position: absolute;
  right: 0;
  top: 0;
  transform: rotate(40deg) translate(30px, -15px);
`;
