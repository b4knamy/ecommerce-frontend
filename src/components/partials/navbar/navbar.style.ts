import styled from 'styled-components';
import { flexBoxDirection } from '../../../settings/styles/utils';

export const NavbarContainer = styled.nav`
  ${flexBoxDirection('center', 'center', 'column')}
  position: fixed;
  z-index: 6;
  top: 0;
  width: 100%;
  height: 120px;

  ${({ theme }) => {
    return {
      backgroundColor: theme.colors.primaryDark,
      color: theme.colors.primaryLight,
    };
  }};
`;

export const NavbarTags = styled.div`
  ${flexBoxDirection('center', 'center', 'row')}

  height: 20%;
  width: 100%;
  gap: 2rem;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin-bottom: 5px;

  h1 {
    font-size: 40px;
    color: white;
    position: relative;
    right: 150px;
    font-weight: 100;
  }
`;
