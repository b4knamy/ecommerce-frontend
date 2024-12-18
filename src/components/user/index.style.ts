import styled from 'styled-components';
import { flexBox, flexBoxDirection } from '../../settings/styles/utils';

export const UserNavigation = styled.div`
  width: 15%;
  height: auto;
  text-align: center;
  ${flexBoxDirection('center', 'center', 'column')}

  @media (min-width: 0px) and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const UserNavOptions = styled.div<{ $current: string }>`
  width: 100%;
  height: 100px;
  ${flexBox('center', 'center')}
  ${({ $current, theme }) => {
    if ($current === 'true')
      return {
        backgroundColor: theme.colors.secondaryDark,
        color: theme.colors.primaryLight,
      };
  }}

  span {
    font-size: 20px;
  }

  &:hover {
    ${({ theme }) => ({
      backgroundColor: theme.colors.secondaryDark,
      color: theme.colors.primaryLight,
    })};
    cursor: pointer;
  }

  @media (min-width: 0px) and (max-width: 768px) {
    height: 50px;
  }

  @media (min-width: 0px) and (max-width: 520px) {
    span {
      font-size: 14px;
    }
  }
`;

export const UserPageContainer = styled.div`
  width: 85%;
  height: auto;

  div {
    transition: all 300ms linear;
  }
  @media (min-width: 0px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  div.separator {
    width: 1px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
  width: 70%;
  height: 100%;
  margin: 0px auto;
  /* box-shadow: 0px 0px 230px black; */
  ${flexBoxDirection('center', 'start', 'row')}

  @media (min-width: 0px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 0px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    div.separator {
      width: 100vw;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;
