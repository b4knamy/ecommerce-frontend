import styled from 'styled-components';
import {
  flexBox,
  flexBoxOnlyDirection,
} from '../../../../../settings/styles/utils';

export const NavSearchContainer = styled.div`
  ${flexBoxOnlyDirection('column')}
  position: relative;
`;

export const NavForm = styled.form`
  width: 500px;
  height: 2.5rem;
  position: relative;
  color: ${({ theme }) => theme.colors.primaryDark};

  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-left: 50px;
    border-radius: 10px;
    border: 0;
    outline: none;

    &::-webkit-search-cancel-button {
      display: none;
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }

    &:focus,
    &:focus ~ svg {
      color: ${({ theme }) => theme.colors.primaryLight};
      transition: all 300ms linear;
    }
  }
  svg {
    transform: scale(1.5) rotate(90deg);
    position: absolute;
    left: 0;
    margin-left: 20px;
    top: 30%;
    cursor: pointer;
  }

  &:hover {
    svg,
    input {
      color: ${({ theme }) => theme.colors.primaryLight};
      transition: all 300ms linear;
    }

    input {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  @media (min-width: 1024px) and (max-width: 1400px) {
    width: 300px;
  }

  @media (min-width: 520px) and (max-width: 768px) {
    width: 350px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    width: 250px;
  }
`;

export const RelatedSearchContainer = styled.div`
  width: 100vw !important;
  height: calc(100vh - 120px) !important;
  margin-top: 120px;
  right: 0;
  left: 0;
  top: 0;
  ${flexBox('center', 'start')}
  position: absolute;
  @media (min-width: 1024px) and (max-width: 1400px) {
    /* width: 300px; */
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 100px) !important;
    margin-top: 100px;
  }
`;
