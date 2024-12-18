import styled from 'styled-components';
import { flexBoxDirection } from '../../../../../settings/styles/utils';
import { motion } from 'framer-motion';

export const CategoriesContainer = styled.div`
  width: max-content;
  height: fit-content;


  ${flexBoxDirection('center', 'center', 'row')}
  gap: 20px;

  @media (min-width: 0px) and (max-width: 519px) {
    gap: 0px !important;
  }
`;
export const CategoryContainer = styled.div`
  width: fit-content;
  height: max-content;
  position: relative;

  cursor: pointer;
  ${({ theme }) => {
    return {
      color: theme.colors.primaryLight,
      padding: theme.spacing.small,
      fontSize: theme.text.size.large,
    };
  }};

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primaryLight};

    transition:
      width 0.5s ease,
      left 0.5s ease;
  }

  svg {
    position: relative;
    top: 5px;
    transition: all 300ms linear;
  }

  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: ${({ theme }) => theme.text.size.medium};
  }
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: ${({ theme }) => theme.text.size.small};
  }
`;

type ContentProps = {
  $type: 'category' | 'pages';
};
export const Content = styled(motion.div)<ContentProps>`
  border-top: 1px solid white;
  width: auto;
  position: absolute;
  top: 135px;




  left: 0;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  display: flex;
  z-index: 20;

  svg {
    position: absolute;
    top: 15px;
    margin-left: 5px;
    transition: all 300ms linear;
  }
  div {
    min-width: 100px;
  }

  @media (max-width: 1024px) {
    ${({ $type }) => {
      if ($type === 'category') {
        return {
          position: 'fixed',
          top: '120px',
          width: '100%',
        };
      }
    }};
  }
`;

export const Container = styled.div`

  width: max-content;
  height: auto;
  position: relative;
  min-height: 150px;
  cursor: pointer;

  &:hover {
    & .title::after {
      width: 100%;
      left: 0;
    }

    & .title svg {
      transform: rotate(-180deg);
    }
  }
  ${flexBoxDirection('center', 'center', 'column')}
`;
