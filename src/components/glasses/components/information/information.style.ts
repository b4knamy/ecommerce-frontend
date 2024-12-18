import styled, { css } from 'styled-components';
import { flexBox, flexBoxDirection } from '../../../../settings/styles/utils';

export const Container = styled.div`
  ${({ theme }) => css`
    ${flexBoxDirection('center', 'center', 'column')}

    position: relative;
    padding: 20px;
    width: 400px;
    height: 700px;
    gap: 40px;
    overflow: hidden;

    .product-promotion {
      ${flexBox('center', 'center')}
      width: 250px;
      height: 50px;
      position: absolute;
      top: 0;
      right: 0;
      background-color: ${theme.colors.primaryDark};
      color: ${theme.colors.primaryLight};
      font-size: ${theme.text.size.large};
      transform: rotate(40deg) translate(70px, -25px);
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      height: 500px;
      width: 350px;

      .product-promotion {
        height: 35px;
      }
    }

    @media (min-width: 520px) and (max-width: 767px) {
      height: 400px;
      width: 520px;

      .product-promotion {
        height: 25px;
        width: 100%;
        font-size: ${theme.text.size.medium};
        transform: rotate(0deg) translate(0px, 0px);
        position: relative;
      }

      padding: 5px;
      gap: 20px;
    }

    @media (min-width: 0px) and (max-width: 519px) {
      height: 100%;
      width: 100%;

      .product-promotion {
        height: 25px;
        width: 100%;
        font-size: ${theme.text.size.medium};
        transform: rotate(0deg) translate(0px, 0px);
        position: relative;
      }

      padding: 5px;
      gap: 20px;
    }
  `}
`;

export const Cart = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  right: 0;
  margin-right: 10px;
  margin-top: 10px;

  svg {
    transform: scale(2);
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    width: 80%;
    height: auto;
    text-align: start;
    font-weight: ${theme.text.weight.xsmall};
    color: ${theme.colors.primaryDark};
    font-size: ${theme.text.size.xxlarge};

    @media (min-width: 0px) and (max-width: 767px) {
      width: 95%;
      font-size: ${theme.text.size.title};
      text-align: center;
    }
  `}
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    ${flexBoxDirection('center', 'center', 'column')}

    width: 80%;
    gap: 10px;

    button {
      width: 100%;
      height: 50px;
      background-color: ${theme.colors.primaryDark};
      font-weight: ${theme.text.weight.xsmall};
      color: ${theme.colors.primaryLight};
      font-size: ${theme.text.size.large};

      border-radius: 10px;
    }

    @media (min-width: 520px) and (max-width: 767px) {
      width: 95%;
      button {
        height: 40px;
        font-size: ${theme.text.size.medium};
      }
    }
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
    width: 80%;
    text-align: start;
    font-weight: ${theme.text.weight.xsmall};
    color: ${theme.colors.primaryDark};
    font-size: ${theme.text.size.medium};

    .current {
      color: ${theme.colors.primaryGreen};
      font-size: ${theme.text.size.xxlarge};
    }
    .old {
      margin-left: 10px;
      text-decoration: line-through;
    }

    @media (min-width: 0px) and (max-width: 767px) {
      width: 95%;
      text-align: center;
    }
  `}
`;

export const Colors = styled.div`
  width: 80%;
  height: auto;
  position: relative;
  ${flexBoxDirection('start', 'start', 'column')}

  border-radius: 10px;
  gap: 10px;
  div {
    ${flexBoxDirection('start', 'center', 'row')}
    gap: 10px;
    flex-wrap: wrap;
  }

  /* ${({ theme }) => ({ backgroundColor: theme.colors.primaryDark })} */

  .color-ball {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    margin-top: 50px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    width: 95%;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    margin-top: 50px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    width: 95%;
  }
`;
