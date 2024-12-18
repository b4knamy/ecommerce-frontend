import { ButtonSubmit } from './submit.style';
import { submitInputAccountType } from './submit.type';

export default function SubmitButton({
  label,
  handler,
}: submitInputAccountType) {
  return (
    <ButtonSubmit onClick={handler} type="button">
      {label}
    </ButtonSubmit>
  );
}
