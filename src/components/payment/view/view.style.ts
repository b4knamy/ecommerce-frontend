import styled, { css } from 'styled-components';
import { flexBox } from '../../../settings/styles/utils';

export const Delete = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: absolute;
  right: 0;
  ${flexBox('center', 'center')}

  svg {
    transform: scale(2);
  }
  cursor: pointer;

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.primaryRed};
    }
  }

  @media (min-width: 520px) and (max-width: 767px) {
    svg {
      transform: scale(1.3);
    }
  }
  @media (min-width: 0px) and (max-width: 519px) {
    transform: translate(20px, -20px);
    svg {
      transform: scale(1);
    }
  }
`;

export const SelectContainer = styled.div<{ $mode: 'color' | 'qtd' }>`
  ${({ $mode }) => css`
    width: ${$mode === 'color' ? '90px' : '40px'};
    height: 30px;

    select {
      width: 100%;
      font-size: 12px;
      color: black;
      /* -webkit-appearance: none; */
      padding: 5px;
      border-radius: 3px;

      option:hover {
        color: blue;
        background-color: black;
        cursor: pointer;
      }
    }

    @media (min-width: 520px) and (max-width: 767px) {
      width: ${$mode === 'color' ? '50px' : '40px'};
      select {
        font-size: 8px;
      }
    }

    @media (min-width: 0px) and (max-width: 519px) {
      width: ${$mode === 'color' ? '45px' : '35px'};
      select {
        font-size: 6px;
      }
    }
  `}
`;
