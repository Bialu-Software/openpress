import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap-icons/font/bootstrap-icons.css';

import { createHead } from '@unhead/vue'
const head = createHead()

const app = createApp(App)
    .use(router)
    .use(head)
    .mount('#app');
