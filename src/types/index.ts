export interface Project {
  id: number;
  key: string;
  title: string;
  date: string;
  version: string;
  description: string;
  image: string;
  types: string[];
  technologies: string[];
  features: string[];
  details: string;
  githubUrl: string;
  liveUrl: string | null;
}

export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  key?: string;
  title: string;
  skills: Skill[];
  color: string;
}

export interface SkillCardProps {
  category: SkillCategory;
  index: number;
  isVisible: boolean;
}
export interface SkillBadgeProps {
  skill: Skill;
  delay: number;
  isVisible: boolean;
  index: number;
}

export interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}
