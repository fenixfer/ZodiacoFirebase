
//Esto yo lo agregue
import Vue from 'vue';
import Router from 'vue-router';
import router from '.';

// Vue.use(VueRouter)
//---------------------------------
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue'), meta: {requiresAuth: true } },
      { path: 'tareas', component: () => import('pages/Tareas.vue'),meta: {requiresAuth: true } },
      { path: 'chat', component: () => import('pages/Chat.vue'), meta: {requiresAuth: true } },
      { path: 'bienvenida', component: () => import('pages/Bienvenida.vue'), meta: {requiresAuth: true } },
      { path: 'myaccount', component: () => import('pages/MyAccount.vue'), meta: {requiresAuth: true } },
    ],
  },
  //-------------PROBANDO
  {
    path: '/ingreso',
    component: () => import('pages/Ingreso.vue')
  },
  // {
  //   path: '/registrov2',
  //   component: () => import('pages/Registrov2.vue'),
  //   meta: {rutaProtegida: true}
  // },

  //----------------------
  // {
  //   path: '/login',
  //   component: () => import('pages/Login.vue'),
  //   meta: {rutaProtegida: true}
  // },
  {
    path: '/registro',
    component: () => import('pages/Registro.vue')
    // meta: {requiresAuth: true }
  },
  // {
  //   path: '/bienvenida',
  //   name: 'bienvenida',
  //   component: () => import('pages/Bienvenida.vue'),
  //   meta: {rutaProtegida: true}
  // },
  // {
  //   path: '/loginvue2',
  //   component: () => import('pages/LoginChido.vue'),
  //   meta: {rutaProtegida: true}
  // },
  
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]


// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })


export default routes
