import styled from 'styled-components';
import { flexBoxDirection } from '../../../../../../settings/styles/utils';
import { div } from 'framer-motion/client';

export const Container = styled(div)`
  ${flexBoxDirection('center', 'center', 'column')}
  gap: 50px;
  width: 100%;
  height: auto;
  padding: 50px;
  color: ${({ theme }) => theme.colors.secondaryDark};
  overflow: hidden;

  .mk-comment-options {
    ${flexBoxDirection('center', 'center', 'row')}
    width: 100%;
    gap: 20px;
    button {
      width: 200px;
      height: 40px;
      ${({ theme }) => ({
        backgroundColor: theme.colors.secondaryDark,
        color: theme.colors.primaryLight,
        fontSize: theme.text.size.medium,
      })}

      &:hover {
        ${({ theme }) => ({
          backgroundColor: theme.colors.primaryLight,
          color: theme.colors.primaryDark,
        })}
      }
    }
  }
`;
