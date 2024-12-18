import styled from 'styled-components';
import {
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../settings/styles/utils';

export const Content = styled.div`
  width: calc(100% - 400px);
  min-height: calc(100vh - 120px);
  height: auto;
  ${flexBoxOnlyDirection('column')}
  gap: 50px;

  .loading-products {
    margin-top: 200px;
  }
  @media (min-width: 1024px) and (max-width: 1600px) {
    width: calc(100% - 300px);
  }
`;

export const Container = styled.div`
  ${flexBoxDirection('center', 'start', 'row')}

  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  padding: 50px 150px 50px 100px;
  gap: 50px;
  transition: height 300ms linear;

  &.direction-layout {
    flex-direction: column !important;
    padding: 50px 20px;
    gap: 20px;

    ${Content} {
      width: 100%;
    }

    @media (min-width: 0px) and (max-width: 520px) {
      padding: 10px 5px;
      gap: 5px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1920px) {
    padding: 50px 20px;
    gap: 20px;
  }
`;
