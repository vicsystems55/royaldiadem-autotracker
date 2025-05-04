import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Create these components
import About from '../components/About.vue';

const routes = [
    { path: '/', component: Home, meta: { layout: 'MainLayout', pageTitle: 'Home' } },
    { path: '/about', component: About, meta: { layout: 'MainLayout', pageTitle: 'About Us' } },
    { path: '/blog', component: BlogPage, meta: { layout: 'MainLayout', pageTitle: 'Blog' } },
    { path: '/contact', component: ContactPage, meta: { layout: 'MainLayout', pageTitle: 'Contact' } },
    { path: '/training', component: TrainingPage, meta: { layout: 'MainLayout', pageTitle: 'Training Programs' } },
    { path: '/clinic', component: ClinicPage, meta: { layout: 'MainLayout', pageTitle: 'Clinic' } },
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
  