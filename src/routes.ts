import HelloWorldVue from './components/DebugWidget.vue';
import HomeVue from './views/Home.vue';

export const routes = [
  { path: '/', name: 'Hello', component: HelloWorldVue },
  { path: '/home', name: 'Home', component: HomeVue },
];
