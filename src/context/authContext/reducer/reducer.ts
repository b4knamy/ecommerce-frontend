import { ActionType } from '../actions/action.type';
import { logIn, logOut, updateToken } from '../actions/actions';
import { initialState } from '../context/context';
import { InitState } from '../context/context.type';

export const authReducer = (
  state: InitState,
  action: ActionType,
): InitState => {
  switch (action.type) {
    case logIn:
      return {
        isAuthenticated: true,
        info: action.payload.user,
        token: action.payload.token,
      };
    case logOut:
      return initialState;

    case updateToken:
      return {...state, token: action.payload}

    default:
      return state
  }
};
