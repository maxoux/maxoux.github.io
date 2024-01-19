export interface ISkill {
  id: string;
  name: string;
  category: TCategoryID;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
}

export type TSkillID = (typeof skillList)[number]['id'];
export type TCategoryID = (typeof CategoryList)[number]['id'];

export const CategoryList = [
  {
    id: 'frontend',
    name: 'Front-End',
    description:
      'Création et intégration de sites web et applications mobiles responsive, accessibles et répondant aux normes W3C.Création et intégration de sites web et applications mobiles responsive, accessibles et répondant aux normes W3C.',
  },
  {
    id: 'backend',
    name: 'Back-End',
    description:
      'Développement de sites web et applications, création et gestion de bases de données, programmation orientée objet et modèle 3 tiers, mise en ligne.',
  },
  { id: 'ci/cd', name: 'CI / CD', description: 'Description ci/cd' },
  { id: 'js', name: 'JS/Node', description: 'Frameworks et outils NodeJS/Javascript' },
  { id: 'devops', name: 'devops', description: 'Creation de réseaux virtuels, etc.' },
  { id: 'software', name: 'Applicatif', description: 'Applications C/C++' },
  { id: 'hobby', name: 'Hobby', description: 'Hobby entre autres' },
] as const satisfies ICategory[];

export const skillList = [
  { id: 'graphql', name: 'GraphQL', category: 'backend', level: 1 },
  { id: 'symfony', name: 'Symfony', category: 'backend', level: 1 },
  { id: 'php', name: 'PHP', category: 'backend', level: 2 },
  { id: 'webrtc', name: 'WebRTC', category: 'backend', level: 3 },
  { id: 'cypress', name: 'Cypress', category: 'ci/cd', level: 4 },
  { id: 'husky', name: 'Husky', category: 'ci/cd', level: 4 },
  { id: 'jest', name: 'Jest', category: 'ci/cd', level: 4 },
  { id: 'mongo', name: 'MongoDB', category: 'backend', level: 1 },
  { id: 'mysql', name: 'MySQL', category: 'backend', level: 2 },
  { id: 'postgres', name: 'PostgreSQL', category: 'backend', level: 2 },
  { id: 'apache', name: 'Apache', category: 'devops', level: 3 },
  { id: 'nginx', name: 'NGINX', category: 'devops', level: 4 },
  { id: 'shell', name: 'Shell', category: 'devops', level: 5 },
  { id: 'linux', name: 'Linux / Administration Système', category: 'devops', level: 4 },
  { id: 'docker', name: 'Docker', category: 'devops', level: 4 },
  { id: 'aws', name: 'AWS', category: 'devops', level: 3 },
  { id: 'styledcomponent', name: 'Styled Component', category: 'frontend', level: 4 },
  { id: 'scss', name: 'SCSS', category: 'frontend', level: 5 },
  { id: 'vuex', name: 'VueX', category: 'frontend', level: 4 },
  { id: 'vue', name: 'Vue 2/3', category: 'frontend', level: 4 },
  { id: 'bootstrap', name: 'Bootstrap', category: 'frontend', level: 3 },
  { id: 'arduino', name: 'Arduino', category: 'hobby', level: 4 },
  { id: 'moment', name: 'MomentJS', category: 'js', level: 5 },
  { id: 'nextjs', name: 'NextJS', category: 'js', level: 3 },
  { id: 'loopback', name: 'LoopBack', category: 'js', level: 3 },
  { id: 'redux', name: 'Redux', category: 'js', level: 4 },
  { id: 'webpack', name: 'Webpack', category: 'js', level: 4 },
  { id: 'react', name: 'React', category: 'js', level: 5 },
  { id: 'sails', name: 'SailsJS', category: 'js', level: 2 },
  { id: 'node', name: 'NodeJS', category: 'js', level: 5 },
  { id: 'typescript', name: 'TypeScript', category: 'js', level: 4 },
  { id: 'lerna', name: 'Lerna', category: 'software', level: 3 },
  { id: 'tampermonkey', name: 'TamperMonkey', category: 'software', level: 5 },
  { id: 'codepush', name: 'CodePush', category: 'software', level: 3 },
  { id: 'git', name: 'Git', category: 'software', level: 5 },
  { id: 'reactnative', name: 'React-Native', category: 'software', level: 5 },
  { id: 'asm', name: 'ASM x86', category: 'software', level: 3 },
  { id: 'C', name: 'C/C++', category: 'software', level: 4 },
  { id: 'haos', name: 'Home Assistant', category: 'hobby', level: 4 },
] as const satisfies ISkill[];
