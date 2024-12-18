import { SUCCESSFULLY_COMMENT_CREATED_WARNING } from '../../../../../../../../settings/glass/warnings';
import DefaultWarningBody from '../defaultWarning';

export default function SucessfullyCommentCreatedWarning({
  handler,
  message,
}: {
  handler: () => void;
  message?: string;
}) {
  return (
    <DefaultWarningBody
      mode="success"
      text="Ok"
      handler={handler}
      message={message ? message : SUCCESSFULLY_COMMENT_CREATED_WARNING}
    />
  );
}
