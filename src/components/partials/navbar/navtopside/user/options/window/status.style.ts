import styled from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
} from '../../../../../../../settings/styles/utils';
import { motion } from 'framer-motion';

export const SettingsContainer = styled(motion.div)`
  position: relative;
  ${flexBoxDirection('start', 'start', 'column')}
  width: auto;
  height: auto;
  gap: 20px;
  ${({ theme }) => {
    return {
      backgroundColor: theme.colors.primaryDark,
      padding: theme.spacing.medium,
    };
  }}

  border-radius: 0px 0px 10px 10px;
  .logout {
    font-size: ${({ theme }) => theme.text.size.medium};
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    width: 100%;
  }
`;

export const SettingsOption = styled.div`
  width: 100%;
  ${flexBox('start', 'center')}
  color:;
  ${({ theme }) => ({
    color: theme.colors.primaryLight,
    fontSize: theme.text.size.large,
  })}
  display: inline-block !important;
  &:hover {
    span {
      color: ${({ theme }) => theme.colors.primaryGray};
    }
  }

  &:hover::after {
    width: 60%;
    left: 0;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    margin-top: 30px;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transition:
      width 0.5s ease,
      left 0.5s ease;
  }
`;

export const UserApresentation = styled.div`
  width: 100%;
  height: 50px;
  ${({ theme }) => {
    return {
      color: theme.colors.primaryLight,
      fontSize: theme.text.size.xlarge,
    };
  }}
`;
export const Options = styled(motion.div)`
  width: auto;
  position: absolute;
  top: 120px;
  border-top: 1px solid white;

  @media (min-width: 0px) and (max-width: 1023px) {
    border-top: 0px;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    gap: 50px;
    left: 0;
  }
`;
