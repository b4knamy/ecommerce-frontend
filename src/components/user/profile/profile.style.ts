import styled from 'styled-components';
import {
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../settings/styles/utils';

export const ProfileContainer = styled.section<{ $display: string }>`
  width: auto;
  padding: 20px;
  display: ${({ $display }) => `${$display} !important`};
  ${flexBoxOnlyDirection('column')}
  gap: 20px;

  .form-details {
    ${flexBoxDirection('start', 'center', 'row')};
    gap: 20px;
    button {
      width: 200px;
      height: 40px;
    }
  }
`;
