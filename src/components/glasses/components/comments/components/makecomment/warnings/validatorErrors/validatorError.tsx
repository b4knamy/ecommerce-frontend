import DefaultWarningBody from '../defaultWarning';
import { ValidatorErrorProp } from './validatorError.type';

export function ErrorValidatorComment({
  message,
  setterHandler,
}: ValidatorErrorProp) {
  return (
    <DefaultWarningBody
      message={message}
      handler={setterHandler}
      mode="warning"
      text="Ok"
    />
  );
}
