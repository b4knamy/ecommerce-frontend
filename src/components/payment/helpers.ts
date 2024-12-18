export default async function fetchShoppingGlasses(query: string, url: string) {
  const response = await fetch(`${url}?query=${query}`);

  if (!response.ok) return null;

  return response;
}

export async function fetchCheckOutURL(
  data: {
    user_ID: number | undefined;
    data: {
      productID: number;
      colorID: number;
      quantitaty: number;
    }[];
  },
  token: string,
  url: string,
) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  return response;
}
