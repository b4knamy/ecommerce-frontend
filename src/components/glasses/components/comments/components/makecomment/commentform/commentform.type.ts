import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { CommentPostType } from '../makecomment.type';
import { CommentInputTypeOptions } from './inputs/inputs.type';

export type CommentFormProps = {
  titleRef: MutableRefObject<HTMLInputElement | null>
  defaultTitleValue: string;
  textRef: MutableRefObject<HTMLTextAreaElement | null>
  defaultTextValue: string;
  fileRef: MutableRefObject<HTMLInputElement | null>
};

export type CommentFormHandlerType = {
  value: string;
  setComment: Dispatch<SetStateAction<CommentPostType[]>>;
  sourceValue: string;
  type: CommentInputTypeOptions;
};
