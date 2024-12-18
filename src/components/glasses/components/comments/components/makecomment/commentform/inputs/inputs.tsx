import { useState } from 'react';
import { CommentFormInputType } from './inputs.type';
import { formCommentInputHandler } from './helpers';
export default function FormInput({
  id,
  name,
  type,
  sourceValue,
  setComment,
}: CommentFormInputType) {
  const [value, setValue] = useState(sourceValue);
  if (type === 'text') {
    return (
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={formCommentInputHandler(setValue, setComment, type)}
      />
    );
  }
  return (
    <textarea
      id={id}
      name={name}
      onChange={formCommentInputHandler(setValue, setComment, type)}
      value={value}
    />
  );
}
