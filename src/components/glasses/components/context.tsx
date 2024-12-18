import { createContext, ReactNode, useContext } from 'react';
import { GlassesProfileType } from '../index.type';

export const GlassesProfileContext = createContext<GlassesProfileType | null>(
  null,
);

export const useGlassesContext = (): GlassesProfileType => {
  const context = useContext(GlassesProfileContext);
  if (!context) {
    throw new Error(
      'useGlassesContext() must be wrapped inside GlassesProfileContextProvider.',
    );
  }
  // @ts-ignore
  return context;
};

export default function GlassesProfileContextProvider({
  children,
  value,
}: GlassesProfileContextProviderProps) {
  return (
    <GlassesProfileContext.Provider value={value}>
      {children}
    </GlassesProfileContext.Provider>
  );
}

type GlassesProfileContextProviderProps = {
  children: ReactNode;
  value: GlassesProfileType;
};
