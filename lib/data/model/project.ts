/* eslint-disable no-unused-vars */

export const ProjectCategoriesColors: Record<string, string> = {
  "Swift": "#FF82AA",
  "Java": "#F99B29",
  "TypeScript": "#3174C0",
  "Rust": "#F66702",
  "Web": "#F66702",
  "Next.js": "#000000",
  "JavaScript": "#EFD91E",
  "Python": "#366FA2",
  "React": "#82D7F7",
  "SCSS": "#BF6C97"
} as const;

export interface Project {
  title: string;
  description: string;
  badges: string[];
  desktop_img: string,
  phone_img: string
}
