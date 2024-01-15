import { createApp } from 'vue';
import './style.css';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';
import AppVue from './App.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(AppVue);

app.use(router);

app.mount('#app');
