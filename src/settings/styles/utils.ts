import { css } from 'styled-components';

export const flexBoxOnlyDirection = (direction: string = 'row') => css`
  display: flex;
  flex-direction: ${direction};
`;

export const flexBox = (justify: string, align: string) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const flexBoxDirection = (
  justify: string,
  align: string,
  direction: string,
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const afterTransition = () => css`
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    left: 50%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transition: all 0.5s ease;
  }
`;
