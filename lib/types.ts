// Type definitions for all entities in the system

export interface Career {
  id: string;
  role: string;
  title: string;
  location: string;
  type: string;
  team: string;
  skills: string[];
  color: string;
  disc: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  href: string;
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  href: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  image: string;
}

export interface TechStackItem {
  id: string;
  name: string;
  iconClass: string;
  category?: string;
}

export interface Leader {
  id: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export interface Employee {
  id: string;
  name: string;
  initials: string;
  title: string;
  bio: string;
  skills: string[];
  color: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image?: string;
  technologies: string[];
}

export interface KPVTalk {
  id: string;
  title: string;
  speaker: string;
  date: string;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export interface StatCard {
  id: string;
  title: string;
  value: number;
  suffix?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  aboutClient: string;
  problemStatement: string;
  ourSolution: string;
  resultsAndOutcomes: string;
  technologies: string[];
  image?: string;
}

export type EntityType =
  | 'careers'
  | 'services'
  | 'testimonials'
  | 'techStack'
  | 'leaders'
  | 'employees'
  | 'blogs'
  | 'caseStudies'
  | 'kpvTalk'
  | 'stats'
  | 'projects';
