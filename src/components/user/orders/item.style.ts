import styled, { css } from 'styled-components';
import { flexBoxOnlyDirection } from '../../../settings/styles/utils';

export const OrderContent = styled.div`
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: 200px calc(100% - 200px);
  grid-template-rows: 1fr;

  &:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }

  img {
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px calc(100% - 200px);
    height: auto;

    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }

    img {
      grid-area: 1 / 1 / 2 / 2;
      width: 200px;
      height: 200px;
    }
  }
`;

export const OrderInformation = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: minmax(0px, 80px) 50px 50px;
    padding: 5px 10px;

    div.item-title {
      font-size: ${theme.text.size.title} !important;
    }

    span {
      font-size: ${theme.text.size.medium};
    }
    div:nth-child(1) {
      width: 100%;
      height: auto;
    }
    div {
      grid-column: 1 / 2;
      width: 100%;
      position: relative;

      .color-ball {
        min-width: 30px;
        max-height: 30px;
        min-height: 30px;
        max-width: 30px;

        border-radius: 50%;
      }
    }

    div:nth-child(2) {
      ${flexBoxOnlyDirection('row')};
      gap: 20px;
    }

    button {
      width: 200px;
      height: 40px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
      div.item-title {
        font-size: ${theme.text.size.xxlarge} !important;
      }
      span {
        font-size: ${theme.text.size.small};
      }

      div:nth-child(2) {
        ${flexBoxOnlyDirection('row')};
        gap: 15px;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      div.item-title {
        font-size: ${theme.text.size.xxlarge} !important;
      }
    }

    @media (min-width: 0px) and (max-width: 519px) {
      div.item-title {
        font-size: ${theme.text.size.xxlarge} !important;
      }

      span {
        font-size: ${theme.text.size.small};
      }
    }
  `}
`;
