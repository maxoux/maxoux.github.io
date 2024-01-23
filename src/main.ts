import { createApp } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';
import AppVue from './App.vue';
import './styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { initializeIcons } from './utils/icons';

declare global {
  interface ObjectConstructor {
    typedKeys<T>(obj: T): Array<keyof T>;
  }
}
Object.typedKeys = Object.keys as any;

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(AppVue);
initializeIcons();

app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
