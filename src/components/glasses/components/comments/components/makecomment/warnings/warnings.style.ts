import styled, { css } from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
} from '../../../../../../../settings/styles/utils';
export const MessageContainer = styled.div`
  ${flexBox('center', 'center')}
  width: 80%;
  height: auto;

  span {
    text-align: center;
    font-size: 20px;
  }
`;

export const WarningButton = styled.button`
  width: 100px !important;
  height: 30px;

  ${({ theme }) => ({
    backgroundColor: theme.colors.primaryLight,
    color: theme.colors.secondaryDark,
  })}
`;

export const WarningContainer = styled.div`
  ${({ theme }) => css`
    ${flexBoxDirection('center', 'center', 'column')}
    width: 100%;
    min-height: 200px;
    border-radius: 20px;
    &.success {
      background-color: ${theme.colors.primaryGreen};
      color: ${theme.colors.secondaryDark};
      ${WarningButton} {
        background-color: ${theme.colors.primaryLight};
        color: ${theme.colors.secondaryDark};
      }
    }
    &.warning {
      background-color: ${theme.colors.primaryLight};
      color: ${theme.colors.secondaryDark};

      ${WarningButton} {
        background-color: ${theme.colors.secondaryDark};
        color: ${theme.colors.primaryLight};
      }
    }

    @media (min-width: 0px) and (max-width: 768px) {
      width: 90%;

      ${MessageContainer} {
        margin-top: 20px;
        span {
          font-size: ${theme.text.size.medium};
        }
      }
    }

    @media (min-width: 0px) and (max-width: 520px) {
      ${MessageContainer} {
        margin-top: 20px;
        span {
          font-size: ${theme.text.size.small};
        }
      }
    }
  `}
`;

export const WarningButtonContainer = styled.div`
  ${flexBoxDirection('center', 'center', 'row')}
  gap: 20px;
  width: 100%;
  height: auto;
`;

export const WarningContentWrapper = styled.div`
  ${flexBoxDirection('center', 'center', 'column')}

  width: 100%;
  height: 200px;
  gap: 30px;
  position: relative;

  .icon-related {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 20px;
    margin-left: 20px;
    svg {
      transform: scale(3);
    }
  }
`;
