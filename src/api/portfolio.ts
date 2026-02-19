const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://portfolio-backend-ruddy-chi.vercel.app";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${BASE_URL}/api/projects`);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const fetchSkills = async (): Promise<SkillCategory[]> => {
  const response = await fetch(`${BASE_URL}/api/skills`);
  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }
  return response.json();
};
