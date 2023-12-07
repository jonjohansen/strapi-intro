import { strapiFetch } from "./strapi";

interface Author {
  name: string;
  bio: string;
  image?: any;
}

export const getAuthor = async (): Promise<Author | undefined> => {
  /* Implementer meg */
  return undefined;
};
