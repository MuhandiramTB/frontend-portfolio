import { Github, Linkedin, Mail, Cloud, Figma, GitMerge, Briefcase, School, Code, TerminalSquare, Puzzle, Pipette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
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
    description: 'A full-featured e-commerce site with product listings, cart, and checkout.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com',
    liveLink: '#',
    imageAiHint: 'online store'
  },
  {
    id: 2,
    name: 'Task Management App',
    description: 'A collaborative task management tool for teams.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['React', 'Firebase', 'Material UI'],
    githubLink: 'https://github.com',
    liveLink: '#',
    imageAiHint: 'task list'
  },
  {
    id: 3,
    name: 'Portfolio Website Template',
    description: 'A customizable portfolio template for developers.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com',
    liveLink: '#',
    imageAiHint: 'developer portfolio'
  },
  {
    id: 4,
    name: 'Recipe Finder App',
    description: 'An application to search and save your favorite recipes.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['Vue.js', 'Spoonacular API', 'Bootstrap'],
    githubLink: 'https://github.com',
    liveLink: '#',
    imageAiHint: 'food recipe'
  },
];

export interface TechStackItem {
  id: number;
  name: string;
  icon: LucideIcon;
}

export const techStackData: TechStackItem[] = [
  { id: 1, name: 'React', icon: Puzzle }, 
  { id: 2, name: 'Tailwind CSS', icon: Pipette }, 
  { id: 3, name: 'Firebase', icon: Cloud }, 
  { id: 4, name: 'Git', icon: GitMerge },
  { id: 5, name: 'GitHub', icon: Github },
  { id: 6, name: 'VS Code', icon: TerminalSquare }, 
  { id: 7, name: 'Figma', icon: Figma },
];

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  type: 'internship' | 'freelance' | 'open-source';
  icon: LucideIcon; // Note: The icon property was already here but not used for mapping in the component.
                    // The component directly mapped item.type to an icon. This is fine.
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: 'Frontend Developer Intern',
    company: 'Tech Solutions Inc.',
    date: 'Jun 2022 - Aug 2022',
    description: 'Contributed to the development of responsive UI components and collaborated with senior developers on new features.',
    type: 'internship',
    icon: School, // Retained for clarity, though component remaps
  },
  {
    id: 2,
    role: 'Freelance Web Developer',
    company: 'Various Clients',
    date: 'Sep 2022 - Present',
    description: 'Designed and developed custom websites for small businesses, focusing on performance and user experience.',
    type: 'freelance',
    icon: Briefcase, // Retained for clarity
  },
  {
    id: 3,
    role: 'Contributor',
    company: 'Open Source UI Library',
    date: 'Jan 2023 - May 2023',
    description: 'Improved documentation and submitted pull requests for bug fixes and new components to a popular UI library.',
    type: 'open-source',
    icon: Code, // Retained for clarity
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
