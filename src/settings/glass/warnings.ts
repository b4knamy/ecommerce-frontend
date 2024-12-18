import { MAX_FILE_PER_COMMENT, MAX_IMAGE_SIZE_MB } from './configs';

export const MAX_FILE_WARNING = `É permitido enviar no máximo ${MAX_FILE_PER_COMMENT} arquivos.`;

export const MAX_IMAGE_SIZE_WARNING = `Arquivos não podem ultrapassar o tamanho de ${MAX_IMAGE_SIZE_MB}MB.`;

export const TYPE_IMAGE_ALLOWED_WARNING =
  'Somente arquivos "PNG" e "JPG" são permitidos.';

export const CONFIRM_COMMENT_DELETE_WARNING =
  'Você tem certeza de que quer excluir o comentário?';

export const LOGIN_REQUIRED_POST_COMMENT_WARNING =
  'Para fazer uma avaliação é necessário fazer login.';

export const COLOR_VALUE_IS_REQUIRED_WARNING =
  'É obrigátorio especificar a cor do Óculos avaliado';

export const RATING_VALUE_IS_REQUIRED_WARNING =
  'É obrigátorio dar uma nota a avaliação do Óculos.';

export const TITLE_IS_REQUIRED_WARNING = 'Ó titulo não pode estar vazio.';

export const TEXT_IS_REQUIRED_WARNING = 'O comentário nao pode estar vazio.';

export const SUCCESSFULLY_COMMENT_CREATED_WARNING =
  'Comentário criado com sucesso! Obrigado pela sua avaliação.';
