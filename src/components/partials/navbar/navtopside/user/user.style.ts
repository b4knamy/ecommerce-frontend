import styled from 'styled-components';
import { flexBoxDirection } from '../../../../../settings/styles/utils';

export const UserContainer = styled.div`
  ${flexBoxDirection('center', 'center', 'row')}

  cursor: pointer;
  width: 50px;
  height: 1.5rem;
  margin-top: 17px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 10px;
  font-size: 12px;
  margin-bottom: 15px;
  gap: 20px;
  word-wrap: break-word;

  @media (min-width: 0px) and (max-width: 519px) {
    padding: 0;
  }
`;
