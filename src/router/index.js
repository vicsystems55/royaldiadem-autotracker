import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/pages/HomeView.vue';
import AboutView from '../views/pages/AboutView.vue';
import BlogView from '../views/pages/BlogView.vue';
import ContactView from '../views/pages/ContactView.vue';

const routes = [
    { path: '/', component: HomeView, meta: { layout: 'MainLayout', pageTitle: 'Home' } },
    { path: '/about', component: AboutView, meta: { layout: 'MainLayout', pageTitle: 'About Us' } },
    { path: '/blog', component: BlogView, meta: { layout: 'MainLayout', pageTitle: 'Blog' } },
    { path: '/contact', component: ContactView, meta: { layout: 'MainLayout', pageTitle: 'Contact' } },

  ];
  
  
  
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  router.afterEach((to) => {
    const title = to.meta.pageTitle || 'My App';
    document.title = `${title} | Royal Diadem Group`;
  });
  
  
  export default router;
  