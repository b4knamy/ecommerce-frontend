import styled, { keyframes } from 'styled-components';
import { flexBox } from '../../../../../settings/styles/utils';
import { motion } from 'framer-motion';

const boxShadowAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(3.5);
  }
  25% {
    transform:  scale(2.5);
  }
  50% {
    transform:  scale(3.5);
  }
  75% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(3.5);
  }
`;

const ProductAddedAnimation = keyframes`
  0% {
    transform: translateX(0px)
  }
  30% {
    transform: translateX(120px) rotate(-20deg);
  }
  40% {
    transform: translateX(120px)
  }
  70% {
    transform: translateX(0px) rotate(20deg)
  }
  100% {
    transform: translateX(0px)
  }
`;

export const Ball = styled.div`
  width: 20px;
  height: 20px;
  ${flexBox('center', 'center')}
  border-radius: 50%;
  position: absolute;
  ${({ theme }) => {
    return {
      backgroundColor: theme.colors.secondaryDark,
      color: theme.colors.primaryLight,
    };
  }}
  left: 20px;
  bottom: 10px;

  @media (max-width: 1023px) {
    ${({ theme }) => {
      return {
        backgroundColor: theme.colors.primaryDark,
        color: theme.colors.primaryLight,
      };
    }}
  }
`;

export const NavCart = styled(motion.div)`
  ${flexBox('center', 'center')}
  position: relative;
  right: 0;
  text-decoration: none;
  margin-top: 10px;

  &.run-transition {
    animation: ${ProductAddedAnimation} 2s linear;
  }
  svg {
    transform: scale(3.5);
    color: ${({ theme }) => theme.colors.primaryLight};

    cursor: pointer;
    &.increasing-transition {
      animation: ${boxShadowAnimation} 3s linear infinite;
    }
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.secondaryDark};
    }
    transition: all 300ms linear;
    div {
      color: ${({ theme }) => theme.colors.primaryLight};
    }
  }

  @media (min-width: 1024px) and (max-width: 1400px) {
    svg {
      transform: scale(2);
    }
  }

  @media (max-width: 520px) {
    svg {
      transform: scale(1.5) !important;
    }
    ${Ball} {
      left: 10px;
      width: 15px;
      height: 15px;
      font-size: ${({ theme }) => theme.text.size.small};
    }
  }
`;
