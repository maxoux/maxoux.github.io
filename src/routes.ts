import { RouteRecordRaw } from 'vue-router';
import GameVue from './views/Game.vue';
import HomeVue from './views/Home.vue';
import TemporaryVue from './views/Temporary.vue';
import SkillVue from './views/Skill.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeVue },
  { path: '/game', component: GameVue },
  { path: '/experience', component: TemporaryVue },
  { path: '/experience/:experience', component: TemporaryVue },
  { path: '/skill', component: SkillVue },
];
