import { strapiFetch } from "./strapi";

export interface Project {
  projectName: string;
  shortDescription: string;
  image: any;
  slug: string;
  keywords?: string[];
  date?: string;
  content?: any;
}

export const getProjects = async (): Promise<Project[]> => {
  /* Implementer meg */
  return [];
};

export const getProject = async (
  slug: string
): Promise<Project | undefined> => {
  /* Implementer meg */
  return undefined;
};
