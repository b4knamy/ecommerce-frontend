import styled, { css } from 'styled-components';
import { flexBoxDirection } from '../../../../../../settings/styles/utils';
import { div } from 'framer-motion/client';
import { slideDown } from './data.style';

const CartCSS = css`
  grid-template-columns: calc(100% - 200px) 200px;

  &:first-child {
    grid-column: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
  }

  @media (min-width: 0px) and (max-width: 1023px) {
    grid-template-columns: calc(100% - 150px) 150px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    div > h2 {
      font-size: ${({ theme }) => theme.text.size.medium} !important;
    }
    div {
      gap: 5px;
    }
  }

  @media (min-width: 0px) and (max-width: 767px) {
    div > h2 {
      font-size: ${({ theme }) => theme.text.size.small} !important;
    }
    div > span {
      font-size: ${({ theme }) => theme.text.size.xsmall} !important;
    }
  }
`;
const SearchBarCSS = css`
  grid-template-columns: calc(100% - 400px) 100px 100px 150px;

  &:first-child {
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

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: calc(100% - 240px) 80px 80px 80px;

    div > .search-save-cart {
      width: 120px !important;
    }
    div > span {
      font-size: ${({ theme }) => theme.text.size.small} !important;
    }
  }

  @media (min-width: 520px) and (max-width: 767px) {
    grid-template-columns: calc(100% - 190px) 50px 50px 90px;

    div > .search-save-cart {
      width: 90px !important;
    }
    div > span {
      font-size: ${({ theme }) => theme.text.size.small} !important;
    }
  }

  @media (min-width: 0px) and (max-width: 519px) {
    grid-template-columns: calc(100% - 150px) 40px 50px 60px;

    div > .search-save-cart {
      width: 60px !important;
      height: 30px !important;
      font-size: ${({ theme }) => theme.text.size.xsmall} !important;
    }
    div > span {
      font-size: ${({ theme }) => theme.text.size.xsmall} !important;
    }
    div > h2 {
      font-size: ${({ theme }) => theme.text.size.small} !important;
    }
    img {
      width: 60px !important;
      height: 60px !important;
    }
    div {
      gap: 10px;
    }
  }
`;

const CheckoutCSS = css`
  grid-template-columns: calc(100% - 400px) 100px 100px 100px 150px;

  &:first-child {
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
  &:nth-child(5) {
    grid-column: 5 / 6;
  }

  @media (min-width: 768px) and (max-width: 1300px) {
    grid-template-columns: calc(100% - 300px) 100px 50px 100px 50px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    grid-template-columns: calc(100% - 220px) 70px 50px 70px 30px;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    grid-template-columns: calc(100% - 170px) 50px 40px 60px 10px;
  }
`;
export const QueryItemContainer = styled(div)<{
  $mode: 'checkout' | 'search' | 'cart';
}>`
  .important {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
  ._price {
    font-size: 20px;
  }
  .sold-out {
    color: ${({ theme }) => theme.colors.primaryRed};
  }
  width: 100%;
  height: 100px;
  display: grid;
  position: relative;

  &:hover {
    ${({ theme, $mode }) => {
      if ($mode !== 'checkout')
        return {
          color: theme.colors.primaryDark,
        };
    }};
  }

  animation: ${slideDown} 2.5s ease forwards;

  ${({ $mode }) => {
    if ($mode === 'cart') return CartCSS;
    else if ($mode === 'search') return SearchBarCSS;
    else return CheckoutCSS;
  }};

  @media (min-width: 768px) and (max-width: 1023px) {
    div > .search-save-cart {
      width: 80px !important;
    }
  }
`;

export const ProductView = styled.div`
  ${flexBoxDirection('start', 'start', 'row')}
  gap: 30px;
  div {
    h2 {
      white-space: normal;
    }
    padding-right: 5px;
  }

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100px;
    height: 100px;
  }
  div {
    div {
      max-width: 100%;
      height: auto;

      span {
        font-size: ${({ theme }) => theme.text.size.xxlarge};
      }
    }
  }
`;
