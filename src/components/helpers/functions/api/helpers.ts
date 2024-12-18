const statusErrors: { [key: number]: string } = {
  400: 'Bad request',
  401: 'Permission denied',
  404: 'Failed to fetch data',
  405: 'Method not allowed',
  500: 'Something went wrong',
};
export const authErrors: { [key: number]: string } = {
  400: 'Error ao validar suas informações, verifique novamente.',
  401: 'Vocẽ não tem permissão para acessar este conteudo.',
  404: 'Não encontramos esse recurso.',
  405: 'Vocẽ não tem permissão para acessar este conteudo.',
  500: 'Opa, tivemos um problema interno, tente novamente mais tarde.',
};

export function getApiRequestErrors(status: number): string {
  const errorMessage = statusErrors[status] || 'Unknow error has ocurred.';

  // const completeMessage = `Failed to fetch data!\n\nStatus: ${status}\nMessage error: ${errorMessage}\nURL: ${url}\n`;
  const completeMessage = `Error: ${errorMessage}.`;

  return completeMessage;
}
