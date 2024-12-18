import styled, { css } from 'styled-components';
import { flexBoxDirection } from '../../settings/styles/utils';
import { div } from 'framer-motion/client';

export const CartContainer = styled.div`
  ${flexBoxDirection('center', 'center', 'column')}
  width: 250px;
  height: auto;
  position: fixed;
  opacity: 1;
  z-index: 0;
  gap: 20px;
  right: 0;
  bottom: 0;
  margin-right: 100px;
  margin-bottom: 50px;

  @media (min-width: 0px) and (max-width: 520px) {
    width: 100%;
    margin: 0 auto;
    left: 0;
    margin-right: 0px;
  }
`;

export const CartAnimationContainer = styled(div)`
  ${({ theme }) => css`
    width: 350px;
    height: 100px;
    ${flexBoxDirection('start', 'center', 'column')}
    gap: 20px;
    background-color: ${theme.colors.primaryGreen};
    color: ${theme.colors.primaryDark};
    font-size: ${theme.text.size.large};
    border-radius: 10px;
    svg {
      transform: scale(3);
    }

    @media (min-width: 0px) and (max-width: 520px) {
      width: 250px;
      height: 60px;
      gap: 10px;

      font-size: ${theme.text.size.small};
    }
  `}
`;
