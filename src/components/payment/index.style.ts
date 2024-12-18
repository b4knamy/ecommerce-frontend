import styled, { css } from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../settings/styles/utils';
import { ProductView } from '../partials/navbar/navtopside/search/data/item.style';

export const PaymentContainer = styled.section`
  ${flexBoxDirection('center', 'start', 'row')}
  width: 100%;
  height: calc(100vh - 120px);
  margin-top: 120px;
  background-color: ${({ theme }) => theme.colors.primaryLight};

  @media (min-width: 0px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .back-home {
    width: 100%;
    height: 400px;
    ${flexBox('center', 'center')}
  }
`;

export const ProductViewContainer = styled.div`
  ${flexBoxDirection('start', 'center', 'column')}
  padding: 50px 30px 0px 30px;
  width: 70%;
  height: auto;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  @media (min-width: 0px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    padding: 20px 10px 0px 10px;
    ._price {
      font-size: 10px;
    }

    div h2 {
      font-size: 16px;
    }

    ${ProductView} {
      gap: 10px;

      img {
        width: 60px;
        height: 60px;
      }
    }
  }

  @media (min-width: 0px) and (max-width: 519px) {
    ._price {
      font-size: 12px;
    }

    div h2 {
      font-size: 14px;
    }

    ${ProductView} {
      gap: 5px;

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export const PaymentCheckoutContainer = styled.div`
  ${flexBoxDirection('start', 'center', 'column')}
  gap: 20px;
  width: 30%;
  height: 100%;
  background-color: #fff;
  padding-top: 120px;
  padding-bottom: 50px;

  .resume {
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: ${({ theme }) => theme.text.size.title};
  }
  .separator {
    width: 80%;
    height: 1px;
    background-color: black;
  }

  select {
    width: 200px;
    height: 30px;
    padding: 5px;
  }

  .checkout-details {
    width: 80%;
    ${flexBoxOnlyDirection('row')}
    position: relative;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.text.size.large};
  }

  .checkout-button {
    margin-top: 50px;
    width: 80%;
    height: 50px;

    button {
      width: 100%;
      height: 100%;
      ${({ theme }) => ({
        backgroundColor: theme.colors.primaryDark,
        color: theme.colors.primaryLight,
      })}
    }
  }

  @media (min-width: 0px) and (max-width: 1023px) {
    padding-top: 20px;
    width: 100%;
    height: 300px;
    gap: 10px;
    /* background-color: blue; */
  }
`;

export const PaymentQueryDataCSS = css`
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;
