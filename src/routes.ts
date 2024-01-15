import AppVue from './App.vue';
import HelloWorldVue from './components/HelloWorld.vue';
import HomeVue from './views/Home.vue';

export const routes = [
  { path: '/', name: 'Hello', component: HelloWorldVue },
  { path: '/home', name: 'Home', component: HomeVue },
];
