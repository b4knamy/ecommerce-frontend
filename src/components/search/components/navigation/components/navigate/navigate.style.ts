import styled, { css } from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
} from '../../../../../../settings/styles/utils';

export const ContainerWrapper = styled.section`
  ${flexBoxDirection('center', 'center', 'row')}

  width: 100vw !important;
  height: max-content;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  gap: 10px;
  overflow: hidden;
  padding: 50px 0px;
`;

export const SideOptions = styled.div`
  ${({ theme }) => css`
    ${flexBoxDirection('center', 'center', 'row')}
    width: 200px;
    height: 50px;
    color: ${theme.colors.primaryLight};
    gap: 25px;

    span {
      font-size: ${theme.text.size.large};
      text-decoration: underline;
      color: darkgrey;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        color: ${theme.colors.secondaryDark};
        text-decoration: none;
      }
    }

    @media (min-width: 520px) and (max-width: 768px) {
      width: fit-content;
      gap: 10px;
    }

    @media (min-width: 0px) and (max-width: 519px) {
      width: fit-content;
      gap: 5px;
      span {
        font-size: ${theme.text.size.small};
      }
    }
  `}
`;

export const Arrow = styled.div`
  ${flexBox('center', 'center')}
  width: 30px;
  height: 30px;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.primaryDark};
    height: 100%;
    width: 100%;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    height: 20px;
  }
`;

export const GroupNav = styled.div`
  ${flexBoxDirection('center', 'center', 'row')}
  width: auto;
  height: auto;
  gap: 10px;
  overflow: hidden;
  @media (min-width: 520px) and (max-width: 768px) {
    width: 200px;
    overflow: unset;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    overflow: unset;
    width: 185px;
  }
`;

export const ButtonNav = styled.button<{ $isCurrent: string }>`
  ${flexBox('center', 'center')}

  width: 50px;
  height: 50px;
  ${({ $isCurrent }) => {
    if ($isCurrent === 'true')
      return {
        backgroundColor: 'white',
        color: 'black',
      };
    return {
      backgroundColor: 'black',
      color: 'white',
    };
  }}
  text-decoration: none;
  border: 2px solid darkgray;
  text-align: center;
  cursor: pointer;

  @media (min-width: 520px) and (max-width: 768px) {
    min-width: 30px;
    min-height: 30px;
    width: 30px;
    height: 30px;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    min-width: 25px;
    min-height: 25px;
    width: 25px;
    height: 25px;
  }
`;
