import styled from 'styled-components';
import {
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../../settings/styles/utils';
import { div } from 'framer-motion/client';

export const ContainerWrapper = styled(div)`
  ${flexBoxOnlyDirection('row')}
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 30px 20px 150px 20px;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding-top: 10px;
  }
`;

export const NoFoundContent = styled.div`
  ${flexBoxDirection('center', 'center', 'column')}
  margin-top: 150px;
  width: 100%;
  color: gray;
  gap: 100px;

  svg {
    transform: scale(10);
  }

  span {
    font-size: 30px;
    text-align: center;
  }
`;
