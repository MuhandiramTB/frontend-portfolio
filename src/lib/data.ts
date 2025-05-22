import { Github, Linkedin, Mail, Cloud, Figma, GitMerge, Briefcase, School, Code, TerminalSquare, Puzzle, Pipette, Rocket, Palette, Database, Brain, Package } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#tech-stack'},
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  imageAiHint: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, cart, and checkout, built for scalability and a smooth user experience.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js'],
    githubLink: 'https://github.com',
    liveLink: '#',
    imageAiHint: 'modern online shopping'
  },
  {
    id: 2,
    name: 'Task Management App',
    description: 'A collaborative task management tool designed for teams to organize, track, and manage projects efficiently.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
    githubLink: 'https://github.com',
    liveLink: '#',
    imageAiHint: 'team productivity tool'
  },
  {
    id: 3,
    name: 'Portfolio Website Template',
    description: 'A sleek, customizable portfolio template for developers and creatives to showcase their work with elegance.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    githubLink: 'https://github.com',
    liveLink: '#',
    imageAiHint: 'personal developer showcase'
  },
  {
    id: 4,
    name: 'Recipe Finder App',
    description: 'An intuitive application to search, discover, and save your favorite recipes from a vast culinary database.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['Vue.js', 'Spoonacular API', 'Bootstrap', 'Vuex'],
    githubLink: 'https://github.com',
    liveLink: '#',
    imageAiHint: 'digital cookbook app'
  },
];

export interface TechStackItem {
  id: number;
  name: string;
  icon: LucideIcon;
}

// Updated icons for Tech Stack
export const techStackData: TechStackItem[] = [
  { id: 1, name: 'React/Next.js', icon: Rocket }, // Rocket for Next.js/React's performance focus
  { id: 2, name: 'Tailwind CSS', icon: Palette }, // Palette for styling
  { id: 3, name: 'Firebase', icon: Cloud }, 
  { id: 4, name: 'Git', icon: GitMerge },
  { id: 5, name: 'Node.js/Express', icon: Package }, // Package or Code for backend
  { id: 6, name: 'MongoDB', icon: Database },
  { id: 7, name: 'Genkit AI', icon: Brain }, // Brain for AI
];


export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  type: 'internship' | 'freelance' | 'open-source';
  icon: LucideIcon; 
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: 'Frontend Developer Intern',
    company: 'Tech Solutions Inc.',
    date: 'Jun 2022 - Aug 2022',
    description: 'Contributed to the development of responsive UI components and collaborated with senior developers on new features for client projects.',
    type: 'internship',
    icon: School, 
  },
  {
    id: 2,
    role: 'Freelance Web Developer',
    company: 'Various Clients',
    date: 'Sep 2022 - Present',
    description: 'Designed and developed custom websites and web applications for small to medium-sized businesses, focusing on performance, SEO, and user experience.',
    type: 'freelance',
    icon: Briefcase, 
  },
  {
    id: 3,
    role: 'Contributor',
    company: 'Open Source UI Library "ShineComponents"',
    date: 'Jan 2023 - May 2023',
    description: 'Improved documentation, submitted pull requests for bug fixes, and added new accessible components to a popular community-driven UI library.',
    type: 'open-source',
    icon: Code, 
  },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/tbmuhandiram', icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/tbmuhandiram', icon: Github },
  { name: 'Email', url: 'mailto:tb.muhandiram@example.com', icon: Mail },
];
