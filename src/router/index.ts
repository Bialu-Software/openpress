import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/PostView.vue'),
  },
  {
    path: '/saved-posts',
    name: 'savedPosts',
    component: () => import('../views/SavedPostsView.vue'),
  },
  {
    path: '/contact',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
