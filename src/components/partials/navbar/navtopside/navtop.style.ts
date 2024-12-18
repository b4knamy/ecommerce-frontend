import styled from 'styled-components';
import { flexBoxDirection } from '../../../../settings/styles/utils';
import { motion } from 'framer-motion';

export const NavbarTopSideContainer = styled(motion.div)`
  ${flexBoxDirection('center', 'center', 'row')}
  width: 100%;
  height: max-content;
  gap: 100px;
`;

export const LeftSideContent = styled.div`
  ${flexBoxDirection('center', 'center', 'row')}
  width: auto;
  height: max-content;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 10px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    position: absolute;
    left: 0;
    margin-left: 5px;
    gap: 5;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    left: 0;
    margin-left: 50px;
  }
  @media (min-width: 520px) and (max-width: 767px) {
    position: absolute;
    left: 0;
    margin-left: 20px;
  }
`;

export const RightSideContent = styled.div`
  ${flexBoxDirection('center', 'center', 'row')}
  width: max-content;
  height: max-content;
  gap: 25px;

  @media (min-width: 1024px) and (max-width: 1400px) {
    gap: 10px;
  }
`;

export const SiteTitle = styled.h1`
  white-space: nowrap;

  &::after {
    content: '';
    border-right: 2px solid ${({ theme }) => theme.colors.primaryLight};
    margin-left: 40px;
  }
  ${({ theme }) => {
    return {
      fontSize: theme.text.size.xxlarge,
      fontWeight: theme.text.weight.xsmall,
    };
  }};

  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.text.size.title};
  }
  @media (min-width: 520px) and (max-width: 767px) {
    font-size: ${({ theme }) => theme.text.size.large};
  }
  @media (min-width: 0px) and (max-width: 519px) {
    font-size: ${({ theme }) => theme.text.size.medium};
    &::after {
      border-right: 1px solid ${({ theme }) => theme.colors.primaryLight};
      margin-left: 20px;
    }
  }
`;
