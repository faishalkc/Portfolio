import { ReactNode } from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  metrics?: string;
  image?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  tasks: string[];
}

export interface Skill {
  label: string;
  icon: ReactNode;
}

export interface SkillCategory {
  title: string;
  delay: string;
  skills: Skill[];
}
