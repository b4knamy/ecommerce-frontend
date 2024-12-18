import { ChangeEvent } from 'react';
import { InputContainer } from './input.style';
import { FieldType } from '../profile/helpers';

const InputForm = ({
  type,
  label,
  id,
  width,
  height,
  value,
  isDisabled,
  limitValue,
  onChangeHandler,
  inputName,
  message,
}: inputFormProps) => {
  return (
    <InputContainer $height={height} $width={width}>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        onChange={(e) => onChangeHandler(e, limitValue, inputName)}
        value={value}
        placeholder={type === 'password' ? '***********' : label}
        id={id}
        disabled={isDisabled}
      />
      {message && (
        <div>
          {message.map((text, index) => (
            <span key={index} className="input-error">
              {text}
            </span>
          ))}
        </div>
      )}
    </InputContainer>
  );
};

type inputFormProps = {
  type: string;
  label: string;
  id: string;
  width: string;
  height: string;
  value?: string;
  isDisabled: boolean;
  limitValue: number;
  inputName: FieldType;
  message: string[] | undefined;
  onChangeHandler: (
    e: ChangeEvent<HTMLInputElement>,
    limit: number,
    field: FieldType,
  ) => void;
};

export default InputForm;
