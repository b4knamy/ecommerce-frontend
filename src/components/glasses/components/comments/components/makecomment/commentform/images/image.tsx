import { useState } from 'react';
import { Images } from '../commentform.style';
import { CommentImageFormProps } from './image.type';
import { fileValidator } from './helpers';
import { ErrorValidatorComment } from '../../warnings/validatorErrors/validatorError';
import { MdOutlineInput } from 'react-icons/md';

export function ImagesForm({ fileRef }: CommentImageFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  function performErrorHandler() {
    setFiles([]);
    setError(null);
  }

  if (error) {
    return (
      <ErrorValidatorComment
        message={error}
        setterHandler={performErrorHandler}
      />
    );
  }
  return (
    <>
      <Images>
        <div className="input-file">
          <span>Deseja adicionar imagens?</span>
          <input
            onChange={fileValidator(setFiles, setError)}
            ref={fileRef}
            type="file"
            id="form-images"
            name="images"
            accept="image/png, image/jpeg"
            multiple
          />
          <label htmlFor="form-images">
            <MdOutlineInput />
          </label>
        </div>
        {files.length > 0 && (
          <div className="uploaded-files">
            <span>Imagens adicionadas até agora:</span>
            <div>
              {files.map((file, index) => {
                return (
                  <img
                    key={index + 1}
                    src={URL.createObjectURL(file)}
                    alt="unknow"
                  />
                );
              })}
            </div>
          </div>
        )}
      </Images>
    </>
  );
}
