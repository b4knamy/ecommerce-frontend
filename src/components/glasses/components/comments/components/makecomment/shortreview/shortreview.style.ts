import styled from 'styled-components';
import {
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../../../settings/styles/utils';
export const ProductInfo = styled.div`
  ${flexBoxDirection('center', 'center', 'column')}

  width: 100%;
  height: 100%;
  gap: 50px;

  div[content='rating'] {
    ${flexBoxDirection('center', 'center', 'column')}
    width: max-content;
    height: max-content;
    gap: 10px;

    div {
      ${flexBoxOnlyDirection('row')}
      gap: 3px;

      i {
        cursor: pointer;
      }
    }
  }

  div[content='colors'] {
    ${flexBoxDirection('center', 'center', 'column')}
    gap: 3px;
  }
`;
