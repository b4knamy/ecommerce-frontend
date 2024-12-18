import { Dispatch, SetStateAction } from 'react';
import { CommentPostType } from '../../makecomment.type';

export type CommentFormInputType = {
  id: string;
  type: CommentInputTypeOptions;
  name: string;
  sourceValue: string;
  setComment: Dispatch<SetStateAction<CommentPostType[]>>;
};

export type CommentInputTypeOptions = 'textarea' | 'text';
