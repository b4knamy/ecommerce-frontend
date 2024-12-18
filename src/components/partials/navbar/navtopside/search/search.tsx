import { NavForm } from './search.style';
import useDynamicSearch from './hook';
import { CiSearch } from 'react-icons/ci';
import { useEffect, useRef } from 'react';
import QuerySearchContainer from './data/data';
import { useAnimation } from 'framer-motion';

export default function NavSearch() {
  const { isLoading, search, query, setQuery, getNextPageQuery } =
    useDynamicSearch();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      if (
        containerRef.current && // @ts-ignore
        !containerRef.current.contains(e?.target) &&
        // @ts-ignore
        !formRef.current?.contains(e?.target)
      ) {
        return controls.start('hidden');
      }
    };
    document.addEventListener('mousedown', closeHandler);
    return () => {
      document.removeEventListener('mousedown', closeHandler);
    };
  }, []);
  return (
    <div>
      <NavForm ref={formRef}>
        <input
          content="search"
          type="text"
          placeholder="Pesquisar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            controls.start('open');
            containerRef.current?.focus();
          }}
        />

        <CiSearch />
      </NavForm>
      <QuerySearchContainer
        search={search}
        containerRef={containerRef}
        isLoading={isLoading}
        getNextPageQuery={getNextPageQuery}
        controls={controls}
      />
    </div>
  );
}
