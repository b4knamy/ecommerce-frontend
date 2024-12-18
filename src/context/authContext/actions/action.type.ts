import { Dispatch } from 'react';
import { InitState, UserInfo, UserToken } from '../context/context.type';
export type LoginPayload = {
  user: UserInfo;
  token: UserToken;
};

export type ActionType =
  | {
      type: 'LOGIN';
      payload: LoginPayload;
    }
  | { type: 'LOGOUT' }
  | {
      type: "UPDATE";
      payload: UserToken;
    }

export type TypeActions = Dispatch<ActionType>;

export interface AuthContextType {
  user: InitState;
  actions: performActionType;
}
export type performActionType = {
  logIn: (payload: LoginPayload) => void;
  logOut: () => void;
  updateToken: (payload: UserToken) => void;
};
