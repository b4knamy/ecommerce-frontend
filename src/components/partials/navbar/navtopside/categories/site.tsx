import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
} from '../../../../../settings/styles/utils';

export default function NavSite() {
  return (
    <NavSiteContainer>
      <Link to="/">
        <div>
          <span>Home</span>
        </div>
      </Link>
      <Link to="/pesquisa">
        <div>
          <span>Pesquisa</span>
        </div>
      </Link>
    </NavSiteContainer>
  );
}

const NavSiteContainer = styled.div`
  ${flexBoxDirection('center', 'center', 'column')}
  height: auto;

  div {
    width: 100px;
    height: 50px;
    ${flexBox('center', 'center')}
    transition: all 150ms linear;
    &:hover {
      ${({ theme }) => {
        return {
          backgroundColor: theme.colors.primaryLight,
        };
      }}

      span {
        ${({ theme }) => {
          return {
            color: theme.colors.secondaryDark,
          };
        }};
      }
    }
    span {
      text-decoration: none;
      ${({ theme }) => {
        return {
          color: theme.colors.primaryLight,
          fontSize: theme.text.size.medium,
        };
      }};

      &:hover {
      }
    }
  }
`;
