import styled, { css } from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
} from '../../../../../settings/styles/utils';

type TableProps = {
  $isOpen: string;
};

export const TableContainer = styled.div`
  ${({ theme }) => css`
    ${flexBoxDirection('start', 'start', 'column')}
    gap: 15px;
    padding: 20px;

    &.close {
      max-height: 0px;
      overflow: hidden;
      opacity: 0;
    }
    &.open {
      max-height: 1000px;
      opacity: 1;
    }
    transition:
      opacity 500ms ease-in-out,
      max-height 300ms linear;
    .tb-container {
      width: 100%;
      height: auto;
      ${flexBoxDirection('start', 'start', 'row')}
    }
    .tb-title {
      width: 10%;

      height: 20px;
      font-size: ${theme.text.size.large};
      font-weight: ${theme.text.weight.xsmall};
    }

    .tb-value {
      width: 80%;
      word-wrap: break-word;
      font-size: ${({ theme }) => theme.text.size.medium};
    }

    @media (min-width: 0px) and (max-width: 767px) {
      width: 100%;

      .tb-title {
        width: 120px;
      }

      .tb-value {
        width: calc(100% - 120px);
      }
    }
  `}
`;

export const TableTitleContainer = styled.div<TableProps>`
  ${({ theme }) => ({
    borderTop: `1px solid ${theme.colors.primaryLight}`,
    borderBottom: `1px solid ${theme.colors.primaryLight}`,
  })}
  width: 100%;
  height: 100px;
  ${flexBox('center', 'center')}
  cursor: pointer;
  position: relative;
  span {
    ${({ theme }) => ({
      fontSize: theme.text.size.xlarge,
      fontWeight: theme.text.weight.xsmall,
      color: theme.colors.secondaryDark,
    })}
  }

  svg {
    position: absolute;
    transform: scale(2)
      ${({ $isOpen }) =>
        $isOpen === 'true' ? 'rotate(180deg)' : 'rotate(0deg)'};
    right: 0;
    transition: transform 300ms linear;
  }
`;
