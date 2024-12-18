import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import { authActions } from '../actions/actions';
import { InitState } from './context.type';
import { authReducer } from '../reducer/reducer';
import { TypeActions, AuthContextType } from '../actions/action.type';
import { initialState } from './context';
import { ChildrenComponentNode } from '../../../components/helpers/types/types';
import { checkUserIsNotAuthOrGetUserData } from '../api';
import Loading from '../../../animations/productsLoading/loading';
import useSettings from '../../settingsContext/context';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthContextProvider = ({ children }: ChildrenComponentNode) => {
  const [loading, setLoading] = useState(true);
  const { api } = useSettings();
  const [state, dispatch]: [InitState, TypeActions] = useReducer(
    authReducer,
    initialState,
  );
  const actions = useRef(authActions(dispatch));

  useEffect(() => {
    const checkingUserIsAuth = async () => {
      try {
        await checkUserIsNotAuthOrGetUserData(api).then((response) => {
          if (response) {
            actions.current.logIn(response);
          }
        });
      } catch (err) {}
    };

    checkingUserIsAuth().then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading class="context-loading" />;
  }

  const valueProvider: AuthContextType = {
    user: state,
    actions: actions.current,
  };
  return (
    <AuthContext.Provider value={valueProvider}>
      {children}
    </AuthContext.Provider>
  );
};
