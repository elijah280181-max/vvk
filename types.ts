import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  category: 'core' | 'backend' | 'ai' | 'legacy' | 'lang';
  level: number; // 1-100
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  iconName: string; // We will map this to Lucide icons dynamically or use a switch
  link?: string;
  secondaryLinks?: {
    platform: string;
    url: string;
    iconName: string;
  }[];
}

export interface TimelineEra {
  id: string;
  period: string;
  title: string;
  iconName: string;
  summary: string;
  content: string; // The full story
  skillsLearned: string[]; // Names of skills relevant to this era
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}