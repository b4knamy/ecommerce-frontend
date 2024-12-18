import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import {
  MAX_FILE_PER_COMMENT,
  MAX_IMAGE_SIZE,
} from '../../../../../../../../settings/glass/configs';
import {
  MAX_FILE_WARNING,
  MAX_IMAGE_SIZE_WARNING,
  TYPE_IMAGE_ALLOWED_WARNING,
} from '../../../../../../../../settings/glass/warnings';

export const fileValidator =
  (
    setFiles: Dispatch<SetStateAction<File[]>>,
    setError: Dispatch<SetStateAction<string | null>>,
  ) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    if (
      event.target instanceof HTMLInputElement &&
      event.target.files !== null
    ) {
      const files = event.target.files;
      if (files.length > MAX_FILE_PER_COMMENT) {
        setError(MAX_FILE_WARNING);
        return;
      }

      for (const file of files) {
        if (file.size > MAX_IMAGE_SIZE) {
          setError(MAX_IMAGE_SIZE_WARNING);
          return;
        }
        if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
          setError(TYPE_IMAGE_ALLOWED_WARNING);
          return;
        }
      }

      const FilesToArray = Array.from(files);
      setFiles(FilesToArray);
      setError(null);

    }
  };
