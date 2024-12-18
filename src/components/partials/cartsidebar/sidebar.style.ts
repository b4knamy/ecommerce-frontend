import styled from 'styled-components';
import { flexBox, flexBoxOnlyDirection } from '../../../settings/styles/utils';

export const SideBarContainer = styled.div`
  width: 50%;
  height: 100vh;
  position: fixed;
  right: -50%;
  bottom: 0;
  top: 0;
  z-index: 15;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  ${flexBoxOnlyDirection('column')}
  gap: 20px;
  transition: all 500ms ease-out;

  &.open-cart {
    right: 0 !important;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 75% !important;
    right: -75%;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100% !important;
    right: -100%;
  }
`;
export const Title = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  ${({ theme }) => {
    return {
      color: theme.colors.primaryLight,
      fontSize: theme.text.size.title,
      backgroundColor: theme.colors.secondaryDark,
    };
  }}
  ${flexBox('start', 'center')}

  svg {
    position: absolute;
    right: 0;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
  padding-left: 20px;
`;

export const ItemsContainer = styled.div`
  padding: 0px 20px;
  width: 100%;
  max-height: calc((100% - 80px) - 30%);
  ${flexBoxOnlyDirection('column')}
  gap: 20px;
  ${({ theme }) => {
    return {
      color: theme.colors.primaryDark,
      fontSize: theme.text.size.medium,
    };
  }}
  overflow-y: auto;
`;
