
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/registro',
    component: () => import('pages/Registro.vue')
  },
  {
    path: '/bienvenida',
    name: 'bienvenida',
    component: () => import('pages/Bienvenida.vue')
  },
  {
    path: '/loginvue2',
    component: () => import('pages/LoginChido.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
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
