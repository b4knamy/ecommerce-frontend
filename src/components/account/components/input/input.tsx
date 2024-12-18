import { Container } from './input.style';
import { AccountInputType } from './input.type';
import { PartialsInput, PwdInput, ShowError } from './partials';

export default function AccountInput({
  elementId,
  type,
  placeholder,
  warnings,
  initValue,
  reference,
}: AccountInputType) {
  return (
    <Container>
      {type === 'password' ? (
        <PwdInput
          reference={reference}
          elementId={elementId}
          placeholder={placeholder}
          initValue={initValue}
          type={type}
        />
      ) : (
        <PartialsInput
          elementId={elementId}
          type={type}
          initValue={initValue}
          reference={reference}
          placeholder={placeholder}
        />
      )}

      {warnings &&
        warnings.length > 0 &&
        warnings?.map((warning, index) => {
          return <ShowError warning={warning} key={index} />;
        })}
    </Container>
  );
}
