import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { PostCommentDataType } from '../../../../../helpers/functions/api/api.type';
import { MKWrapperProps } from './makecommentwrapper';
import { ErrorPatternType } from '../../../../../../utils/customError';

export type CommentPostType = {
  color: string | undefined;
  rating: number | null;
  title: string;
  text: string;
};

export type CommentPostValidatedType = {
  color: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  text: string;
};

export type CommentPostValidatedOptionType = {
  color?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  title?: string;
  text?: string;
};

export type OldStateTyped = {
  wasUnauthorized: boolean;
  form: PostCommentDataType;
  contentType: ContentTypeTyped;
};
export type OldStateType = OldStateTyped | null;

export interface CommentFormType extends CommentPostType {
  color: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export type ContentTypeTyped = 'json' | 'form';

export type JSONCommentType = {
  glasses: number;
  color: string;
  rating: number;
  text: string;
  title: string;
  user: number;
};

export type CommentMessageType = {
  message: string;
  status: 'error' | 'success';
} | null;

export interface MakeCommentProps extends MKWrapperProps {
  comment: CommentPostType;
  setComment: Dispatch<SetStateAction<CommentPostType>>;
  setError: Dispatch<SetStateAction<ErrorPatternType | null>>;
  setIsCommentCreated: Dispatch<SetStateAction<boolean>>;
  openCommentForm: boolean;
}

export type CommentFormRefsType = {
  colorRef: MutableRefObject<HTMLSelectElement | null>;
  ratingRef: MutableRefObject<HTMLDivElement | null>;
  titleRef: MutableRefObject<HTMLInputElement | null>;
  textRef: MutableRefObject<HTMLTextAreaElement | null>;
  fileRef: MutableRefObject<HTMLInputElement | null>;
};
