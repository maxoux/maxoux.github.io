import { TExperienceID } from './experience';
import { TSkillID } from './skills';

type ILinks = {
  [key in TExperienceID]: Array<TSkillID>;
};

const LinksExperienceSkill = {
  treezor: [
    'react',
    'aws',
    'mongo',
    'tampermonkey',
    'reactnative',
    'typescript',
    'redux',
    'jest',
    'husky',
    'lerna',
    'cypress',
    'styled',
  ],
  prestashop: [
    'vue', //
    'vuex',
    'graphql',
    'typescript',
    'jest',
  ],
  prochaine_escale_freelance: [
    'reactnative',
    'redux',
    'bootstrap',
    'vue',
    'vuex',
    'scss',
  ],
  prochaine_escale_website: [
    'symfony', //
    'bootstrap',
    'vue',
    'vuex',
    'scss',
  ],
  prochaine_escale_mobile: [
    'reactnative', //
    'redux',
    'node',
    'moment',
  ],
  devfoundry_admin: [
    'docker',
    'node',
    'nginx',
    'mysql',
    'nextjs',
    'react',
    'loopback',
    'mysql',
    'php',
  ],
  clashfoot: [
    'aws', //
    'node',
    'loopback',
    'reactnative',
    'webpack',
    'webrtc',
    'redux',
  ],
  devfoundry_rh2: [
    'node', //
    'loopback',
    'postgres',
    'mysql',
  ],
  cygenio: [
    'node', //
    'sails',
    'postgres',
  ],
  openjet: [
    'node', //
    'webpack',
    'react',
    'redux',
  ],
  devfoundry_rh: [
    'node', //
    'sails',
    'postgres',
    'react',
  ],
  numen: [
    'C', //
  ],
} as const satisfies ILinks;

export default LinksExperienceSkill;
