import styled from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
} from '../../../../../settings/styles/utils';
import { div } from 'framer-motion/client';
import { NoFoundContent } from '../../../../search/components/navigation/components/products/products.style';

export const Container = styled.div`
  width: 100px;
  height: 100%;
  position: absolute;
  right: 0;

  ${flexBox('center', 'center')}

  .nav-hamburguer {
    transform: scale(3);
    transition: all 300ms linear;
  }

  @media (min-width: 520px) and (max-width: 768px) {
    .nav-hamburguer {
      transform: scale(2);
    }
  }
  @media (min-width: 0px) and (max-width: 519px) {
    width: 50px;
    .nav-hamburguer {
      transform: scale(1.5);
    }
  }
`;

export const NavContent = styled(div)`
  ${flexBoxDirection('center', 'start', 'row')};

  background-color: ${({ theme }) => theme.colors.secondaryDark};
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  height: auto;
  color: black;
  top: 120px;
  gap: 5%;
  z-index: 10;
  & > div {
    padding-top: 30px;
  }

  @media (min-width: 0px) and (max-width: 1023px) {
    svg:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
    ${NoFoundContent} {
      padding: 0px 50px;
      svg {
        transform: scale(8) !important;
      }
    }
  }
  @media (min-width: 0px) and (max-width: 519px) {
    /* width: 250px; */
    svg {
      transform: scale(1.5);
    }

    gap: 5px;
  }
`;
