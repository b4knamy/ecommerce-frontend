import { Container } from './index.style';
import SearchContainer from './components/filter/filter';
import Navigation from './components/navigation/navigation';
import { SearchContextProvider } from '../../context/searchContext/context/provider';
import { ActionsProps } from '../../context/searchContext/actions/actions.type';
import { useRef } from 'react';

export function SearchWrapper({ actions }: ActionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Container ref={containerRef}>
      <SearchContainer actions={actions} containerRef={containerRef} />
      <Navigation />
    </Container>
  );
}

export default function Search() {
  return <SearchContextProvider />;
}
