import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Service from './Views/Service.vue';
import Notfound from './Views/Notfound.vue';
 


const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: { title: 'Home Page' }
  },
  {
    path: '/about',
    component: About,
    name: 'About',
    meta: { title: 'About Page' }
  },
  {
    path: '/service',
    component: Service,
    name: 'Service',
    meta: { title: 'Service Page' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: Notfound,
    meta: { title: '404 Not Found', hideNavbar: true }
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App); 

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next(); 
});

app.use(router);
app.mount('#app');






