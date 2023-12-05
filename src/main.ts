import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap-icons/font/bootstrap-icons.css';
import hljs from "highlight.js/lib/common";
import '@/assets/styles/code_formater.scss';

import { createHead } from '@unhead/vue';
const head = createHead();

const app = createApp(App)
  .use(router)
  .use(head)
  .use(hljs.vuePlugin)
  .directive('highlight', {
    mounted(el) {
      let blocks: any = el.querySelectorAll('pre code');
      blocks.forEach((block: any) => {
        hljs.highlightBlock(block);
      });
    },
  })
  .mount('#app');
