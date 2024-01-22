import { createApp } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';
import AppVue from './App.vue';
import './styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconsBrand from '@fortawesome/free-brands-svg-icons';

declare global {
  interface ObjectConstructor {
    typedKeys<T>(obj: T): Array<keyof T>;
  }
}
Object.typedKeys = Object.keys as any;

function isIconDefinition(
  obj: IconsSolid.IconPack | IconsSolid.IconDefinition | IconsSolid.IconPrefix,
): obj is IconsSolid.IconDefinition {
  return !!(obj as IconsSolid.IconDefinition).icon;
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const iconSolid = Object.values(IconsSolid).filter<IconsSolid.IconDefinition>(
  (obj): obj is IconsSolid.IconDefinition => isIconDefinition(obj),
);

const iconBrands = Object.values(IconsBrand).filter<IconsBrand.IconDefinition>(
  (obj): obj is IconsBrand.IconDefinition => isIconDefinition(obj),
);

library.add(...iconSolid);
library.add(...iconBrands);

const app = createApp(AppVue);

app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
