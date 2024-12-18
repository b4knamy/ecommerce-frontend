import styled from 'styled-components';
import {
  afterTransition,
  flexBox,
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../settings/styles/utils';
import { defaultSearchPage } from '../../../../../settings/styles/default';
import { div } from 'framer-motion/client';

export const Title = styled.div<{ $open: string }>`
  width: 100%;
  height: 30px;
  cursor: pointer;
  z-index: 5;
  position: relative;

  ${({ theme }) => {
    return {
      // backgroundColor: theme.colors.primaryDark,
      borderTop: theme.colors.primaryDark,
      borderLeft: theme.colors.primaryDark,
      borderRight: theme.colors.primaryDark,
      color: theme.colors.secondaryDark,
      fontSize: theme.text.size.medium,
    };
  }};

  ${afterTransition()};

  &:hover {
    /* background-color: ${({ theme }) => theme.colors.primaryGray}; */
  }
  ${flexBox('start', 'center')};
  svg {
    position: absolute;
    right: 0;
    transform: ${({ $open }) =>
      $open === 'open' ? 'rotate(0deg)' : 'rotate(180deg)'};

    transition: all 300ms linear;
  }
`;

export const Container = styled.div`
  ${flexBoxDirection('center', 'center', 'column')};
  /* ${defaultSearchPage}; */
  gap: 20px;

  &:hover {
    ${Title}::after {
      width: 100%;
      bottom: -10px;
      left: 0;
    }
  }
`;

export const Group = styled(div)<{ $direction: string }>`
  ${({ $direction }) => flexBoxDirection('center', 'center', $direction)}

  /* background-color: black; */
  position: relative;
  width: 100%;
  gap: 10px;
  padding: 10px 20px;
  padding-bottom: 5px;
`;

export const Content = styled.div`
  ${flexBoxOnlyDirection('row')};

  justify-content: start;
  align-items: center;
  width: 100%;
  height: fit-content;
  position: relative;

  input {
    transform: scale(1.3);
    accent-color: black;
    cursor: pointer;
    margin-right: 10px;
  }

  label {
    width: 100%;
    height: 100%;
    /* padding-left: 30px; */
    position: relative;
    cursor: pointer;
    & .item-count {
      position: absolute;
      right: 0;
    }
  }
`;
