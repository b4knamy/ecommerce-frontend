import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { CommentPostType } from '../../makecomment.type';
import { CommentInputTypeOptions } from './inputs.type';

export const formCommentInputHandler =
  (
    setValue: Dispatch<SetStateAction<string>>,
    setComment: Dispatch<SetStateAction<CommentPostType[]>>,
    type: CommentInputTypeOptions,
  ) =>
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement
    ) {
      const value = event.target.value;
      setValue(value);
      setComment((prev) => {
        if (type === 'text') {
          prev[0].title = value;
        } else {
          prev[0].text = value;
        }
        return prev;
      });
    }
  };
