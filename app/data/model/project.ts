/* eslint-disable no-unused-vars */

export const ProjectCategoriesColors: Record<string, string> = {
  "Swift": "#FF82AA",
  "Java": "#F99B29",
  "TypeScript": "#3174C0",
  "Rust": "#F66702",
  "Web": "#F66702",
  "NextJS": "#F66702",
  "AI": "#7B5E7B",
  "JavaScript": "#EFD91E",
  "Python": "#366FA2",
  "C++": "#000000"

} as const;

export interface Project {
  title: string;
  description: string;
  badges?: string[];
  desktop_img: string,
  phone_img: string
}
