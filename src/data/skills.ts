export interface ISkill {
  id: string;
  name: string;
  category: TCategoryID;
  level: 1 | 2 | 3 | 4 | 5;
  icon: string;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export type TSkillID = (typeof skillList)[number]['id'];
export type TCategoryID = (typeof CategoryList)[number]['id'];

export const CategoryList = [
  {
    id: 'frontend',
    name: 'Front-End',
    description:
      'Création et intégration de sites web et applications mobiles responsive, accessibles et répondant aux normes W3C.Création et intégration de sites web et applications mobiles responsive, accessibles et répondant aux normes W3C.',
    icon: 'cog',
  },
  {
    id: 'backend',
    name: 'Back-End',
    description:
      'Développement de sites web et applications, création et gestion de bases de données, programmation orientée objet et modèle 3 tiers, mise en ligne.',
    icon: 'house',
  },
  { id: 'ci/cd', name: 'CI / CD', description: 'Description ci/cd' },
  { id: 'js', name: 'JS/Node', description: 'Frameworks et outils NodeJS/Javascript' },
  { id: 'devops', name: 'devops', description: 'Creation de réseaux virtuels, etc.' },
  { id: 'software', name: 'Applicatif', description: 'Applications C/C++' },
  { id: 'hobby', name: 'Hobby', description: 'Hobby entre autres' },
] as const satisfies ICategory[];

export const skillList = [
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'backend',
    level: 1,
    icon: '/skill/file_type_graphql.svg',
  },
  {
    id: 'symfony',
    name: 'Symfony',
    category: 'backend',
    level: 1,
    icon: '/skill/file_type_light_symfony.svg',
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    level: 2,
    icon: '/skill/file_type_php.svg',
  },
  {
    id: 'webrtc',
    name: 'WebRTC',
    category: 'backend',
    level: 3,
    icon: '/skill/webrtc.svg',
  },
  {
    id: 'nestjs',
    name: 'Nest JS',
    category: 'backend',
    level: 4,
    icon: '/skill/nestjs.svg',
  },
  {
    id: 'cypress',
    name: 'Cypress',
    category: 'ci/cd',
    level: 4,
    icon: '/skill/file_type_cypress.svg',
  },
  {
    id: 'husky',
    name: 'Husky',
    category: 'ci/cd',
    level: 4,
    icon: '/skill/file_type_git.svg',
  },
  {
    id: 'jest',
    name: 'Jest',
    category: 'ci/cd',
    level: 4,
    icon: '/skill/file_type_jest.svg',
  },
  {
    id: 'mongo',
    name: 'MongoDB',
    category: 'backend',
    level: 1,
    icon: '/skill/file_type_mongo.svg',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'backend',
    level: 2,
    icon: '/skill/file_type_mysql.svg',
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'backend',
    level: 2,
    icon: '/skill/file_type_graphql.svg',
  },
  {
    id: 'apache',
    name: 'Apache',
    category: 'devops',
    level: 3,
    icon: '/skill/file_type_apache.svg',
  },
  {
    id: 'nginx',
    name: 'NGINX',
    category: 'devops',
    level: 4,
    icon: '/skill/file_type_nginx.svg',
  },
  {
    id: 'shell',
    name: 'Shell/Bash',
    category: 'devops',
    level: 5,
    icon: '/skill/file_type_shell.svg',
  },
  {
    id: 'linux',
    name: 'Linux / Sysadmin',
    category: 'devops',
    level: 4,
    icon: '/skill/file_type_debian.svg',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 4,
    icon: '/skill/file_type_docker.svg',
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'devops',
    level: 3,
    icon: '/skill/file_type_aws.svg',
  },
  {
    id: 'styled',
    name: 'Styled Component',
    category: 'frontend',
    level: 4,
    icon: '/skill/file_type_styled.svg',
  },
  {
    id: 'scss',
    name: 'SCSS',
    category: 'frontend',
    level: 4,
    icon: '/skill/file_type_scss.svg',
  },
  {
    id: 'vuex',
    name: 'VueX',
    category: 'frontend',
    level: 4,
    icon: '/skill/file_type_vue.svg',
  },
  {
    id: 'vue',
    name: 'Vue 2/3',
    category: 'frontend',
    level: 4,
    icon: '/skill/file_type_vue.svg',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'frontend',
    level: 3,
    icon: '/skill/bootstrap.svg',
  },
  {
    id: 'arduino',
    name: 'Arduino',
    category: 'hobby',
    level: 4,
    icon: '/skill/file_type_arduino.svg',
  },
  {
    id: 'moment',
    name: 'MomentJS',
    category: 'js',
    level: 5,
    icon: '/skill/momentjs.svg',
  },
  {
    id: 'nextjs',
    name: 'NextJS',
    category: 'js',
    level: 3,
    icon: '/skill/nextjs.svg',
  },
  {
    id: 'loopback',
    name: 'LoopBack',
    category: 'js',
    level: 3,
    icon: '/skill/loopback-icon.svg',
  },
  {
    id: 'redux',
    name: 'Redux',
    category: 'js',
    level: 4,
    icon: '/skill/redux-original.svg',
  },
  {
    id: 'webpack',
    name: 'Webpack',
    category: 'js',
    level: 4,
    icon: '/skill/file_type_webpack.svg',
  },
  {
    id: 'react',
    name: 'React',
    category: 'js',
    level: 5,
    icon: '/skill/react.svg',
  },
  {
    id: 'sails',
    name: 'SailsJS',
    category: 'js',
    level: 2,
    icon: '/skill/file_type_sails.svg',
  },
  {
    id: 'node',
    name: 'NodeJS',
    category: 'js',
    level: 5,
    icon: '/skill/file_type_node.svg',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'js',
    level: 4,
    icon: '/skill/file_type_typescript.svg',
  },
  {
    id: 'lerna',
    name: 'Lerna',
    category: 'software',
    level: 3,
    icon: '/skill/file_type_lerna.svg',
  },
  {
    id: 'tampermonkey',
    name: 'TamperMonkey',
    category: 'software',
    level: 5,
    icon: '/skill/tampermonkey-icon-512x512-sdt8akam.png',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'software',
    level: 5,
    icon: '/skill/file_type_git.svg',
  },
  {
    id: 'reactnative',
    name: 'React-Native',
    category: 'software',
    level: 5,
    icon: '/skill/react.svg',
  },
  {
    id: 'asm',
    name: 'ASM x86',
    category: 'software',
    level: 3,
    icon: '/skill/appbar.os.x86.svg',
  },
  {
    id: 'C',
    name: 'C/C++',
    category: 'software',
    level: 4,
    icon: '/skill/c-plain.svg',
  },
  {
    id: 'haos',
    name: 'Home Assistant',
    category: 'hobby',
    level: 4,
    icon: '/skill/home-assistant.svg',
  },
] as const satisfies ISkill[];
