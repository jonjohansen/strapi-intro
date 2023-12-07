export const baseUrl = "http://127.0.0.1:1337";

export const getImageUrl = (url: string) => `${baseUrl}${url}`;

export const strapiFetch = async (slug: string): Promise<any> => {
  const res = await fetch(`${baseUrl}${slug}`, {
    next: { revalidate: 0 },
  });

  const json = await res.json();

  return json;
};
