import { useContext } from 'react';
import { InitState } from './context.type';
import { AuthContext } from './provider';

export const initialState: InitState = {
  isAuthenticated: false,
  info: null,
  token: null,
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuthContext must be used inside of AuthContextProvider');
  }
  return context;
};

export default useAuthContext;
