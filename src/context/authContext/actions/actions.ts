import { UserToken } from '../context/context.type';
import { LoginPayload, TypeActions } from './action.type';

export const logIn = 'LOGIN';
export const logOut = 'LOGOUT';
export const updateToken = 'UPDATE';

export const authActions = (dispatch: TypeActions) => {
  return {
    logIn: (payload: LoginPayload) => {
      dispatch({ type: logIn, payload });
    },
    logOut: () => {
      dispatch({ type: logOut });
    },
    updateToken: (payload: UserToken) => {
      dispatch({
        type: updateToken,
        payload,
      });
    },
  };
};
