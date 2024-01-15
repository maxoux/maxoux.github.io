
type ICategorie = 'frontend' | 'backend' | 'db' | 'devops' | 'software' | 'ci/cd' | 'js' | 'hobby'

interface ISkill {
    id: string;
    name: string;
    category: ICategorie;
    level: 1 | 2 | 3 | 4 | 5;
}

export type TSkillID = typeof skillList[number]['id'];

const skillList = [
    { id: "typescript", name: "TypeScript", category: 'js', level: 4 },
    { id: "C", name: "C/C++", category: "software", level: 4 },
    { id: "asm", name: "ASM x86", category: "software", level: 3},
    { id: 'arduino', name: "Arduino", category: "hobby", level: 4 },
    { id: "node", name: "NodeJS", category: "js", level: 5 },
    { id: "sails", name: "SailsJS", category: "js", level: 2},
    { id: "postgres", name: "PostgreSQL", category: "db", level: 2},
    { id: "mysql", name: "MySQL", category: "db", level: 2},
    { id: "react", name: "React", category: "js", level: 5},
    { id: "webpack", name: "Webpack", category: "js", level: 4},
    { id: "redux", name: "Redux", category: "js", level: 4},
    { id: "loopback", name: "LoopBack", category: "js", level: 3},
    { id: "aws", name: "AWS", category: "devops", level: 3},
    { id: "reactnative", name: "React-Native", category: "software", level: 5},
    { id: "webrtc", name: "WebRTC", category: "backend", level: 3},
    { id: "docker", name: "Docker", category: "devops", level: 4},
    { id: "linux", name: "Linux / Administration Système", category: "devops", level: 4 },
    { id: 'shell', name: "Shell", category: "devops", level: 5 },
    { id: 'git', name: "Git", category: "software", level: 5 },
    { id: 'nginx', name: "NGINX", category: "devops", level: 4 },
    { id: 'apache', name: "Apache", category: 'devops', level: 3},
    { id: "php", name: "PHP", category: "backend", level: 2},
    { id: "nextjs", name: "NextJS", category: "js", level: 3 },
    { id: "symfony", name: "Symfony", category: "backend", level: 1 },
    { id: "bootstrap", name: "Bootstrap", category: "frontend", level: 3 },
    { id: "vue", name: "Vue 2/3", category: "frontend", level: 4 },
    { id: "vuex", name: "VueX", category: "frontend", level: 4},
    { id: "scss", name: "SCSS", category: "frontend", level: 5 },
    { id: "codepush", name: "CodePush", category: "software", level: 3 },
    { id: "moment", name: "MomentJS", category: "js", level: 5},
    { id: "graphql", name: "GraphQL", category: "backend", level: 1 },
    { id: "jest", name: "Jest", category: "ci/cd", level: 4},
    { id: "tampermonkey", name: "TamperMonkey", category: "software", level: 5 },
    { id: "mongo", name: "MongoDB", category: "db", level: 1 },
    { id: "husky", name: "Husky", category: "ci/cd", level: 4 },
    { id: "cypress", name: "Cypress", category: "ci/cd", level: 4 },
    { id: "lerna", name: "Lerna", category: "software", level: 3 },
    { id: "styledcomponent", name: "Styled Component", category: "frontend", level: 4 },

] as const satisfies ISkill[]