import { createApp } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';
import AppVue from './App.vue';
import './styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

declare global {
  interface ObjectConstructor {
    typedKeys<T>(obj: T): Array<keyof T>;
  }
}
Object.typedKeys = Object.keys as any;

function isIconDefinition(
  obj: Icons.IconPack | Icons.IconDefinition | Icons.IconPrefix,
): obj is Icons.IconDefinition {
  return !!(obj as Icons.IconDefinition).icon;
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const icons = Object.values(Icons).filter<Icons.IconDefinition>(
  (obj): obj is Icons.IconDefinition => isIconDefinition(obj),
);

library.add(...icons);

const app = createApp(AppVue);

app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
