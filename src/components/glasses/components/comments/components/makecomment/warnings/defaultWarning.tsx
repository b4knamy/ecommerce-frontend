import { CiWarning } from 'react-icons/ci';
import WarningModal from '../../../../../../helpers/utils/modal/modal';
import {
  MessageContainer,
  WarningButton,
  WarningButtonContainer,
  WarningContainer,
  WarningContentWrapper,
} from './warnings.style';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export default function DefaultWarningBody({
  mode,
  message,
  handler,
  secondaryHandler,
  text,
  secondaryText,
}: DefaultWarningBodyType) {
  return (
    <WarningModal
      handler={handler}
      children={
        <WarningContainer data-testid="__warning_modal" className={mode}>
          <WarningContentWrapper>
            <div className="icon-related">
              {mode === 'warning' && <CiWarning />}
              {mode === 'success' && <IoMdCheckmarkCircleOutline />}
              {/* {mode === 'warning' && <CiWarning />} */}
            </div>
            <MessageContainer>
              <span>{message}</span>
            </MessageContainer>
            <WarningButtonContainer>
              {secondaryText && (
                <WarningButton onClick={secondaryHandler}>
                  {secondaryText}
                </WarningButton>
              )}

              <WarningButton onClick={handler}>{text}</WarningButton>
            </WarningButtonContainer>
          </WarningContentWrapper>
        </WarningContainer>
      }
    />
  );
}

type DefaultWarningBodyType = {
  mode: 'success' | 'error' | 'warning';
  message: string;
  handler: () => void;
  secondaryHandler?: () => void | Promise<void> | null;
  text: string;
  secondaryText?: string;
};
