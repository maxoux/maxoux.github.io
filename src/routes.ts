import GameVue from './views/Game.vue';
import HomeVue from './views/Home.vue';

export const routes = [
  { path: '/', name: 'Hello', component: HomeVue },
  { path: '/game', name: 'Game', component: GameVue },
];
