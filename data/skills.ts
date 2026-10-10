import type { IconType } from 'react-icons';
import { FaAws, FaJava } from 'react-icons/fa';
import { TbApi, TbSql } from 'react-icons/tb';
import {
  SiCplusplus,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiSharp,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

export type Skill = { name: string; icon: IconType };

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'C#', icon: SiSharp },
      { name: 'Java', icon: FaJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'SQL', icon: TbSql },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'ASP.NET Core', icon: SiDotnet },
      { name: 'React.js', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'REST APIs', icon: TbApi },
    ],
  },
  {
    title: 'Databases & Cloud',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'AWS', icon: FaAws },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Linux', icon: SiLinux },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Swagger', icon: SiSwagger },
    ],
  },
];

export const practices = [
  'Code Reviews',
  'Debugging',
  'Version Control',
  'API Testing',
  'Documentation',
  'AI-assisted Development',
];

export const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Software Engineering',
  'Computer Networks',
  'Cloud Computing',
  'System Design',
];
