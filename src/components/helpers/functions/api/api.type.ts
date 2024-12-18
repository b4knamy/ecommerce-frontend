import { LoginPayload } from '../../../../context/authContext/actions/action.type';
import {
  CommentFormType,
  JSONCommentType,
} from '../../../glasses/components/comments/components/makecomment/makecomment.type';

export interface GetDataResponse {
  status: number;
  response: Response;
}

export type refreshTokenType =
  | {
      access: string;
    }
  | false;

export type CheckUserType = false | LoginPayload;

export type CsrfTokenType = {
  csrf_token: string;
};

export type createUserDataType = {
  urls: {
    create: string;
    csrf: string;
  };
  userInfo: { fName: string; lName: string; email: string; password: string };
};

export type LoginDataType = {
  urls: {
    login: string;
    csrf: string;
    user: string;
  };
  userInfo: { email: string; password: string };
};

export type DefaultApiType = {
  status: number;
  response: Response;
};

export type PostCommentDataType =
  | JSONCommentType
  | FormData
  | undefined
  | CommentFormType;

export type PostCommentHeadersType = {
  Authorization: string;
  'Content-Type': string;
};
