import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import Login from 'pages/Login.vue'
import Registro from 'pages/Registro.vue'
import Router from 'vue-router';


//-----------Importamos el método de la autenticación
import {useAuth} from "@vueuse/firebase"
//--------------Importaciones extras si funcionan -----
import firebase from 'firebase/compat/app'
//import { initializeApp, firebase } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth,db } from '../boot/firebase';
//-----------------------------------------------

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })

  //-------Para rutas protegidas
  Router.beforeEach((to,from,next) => {
    // console.log(to.meta.rutaProtegida)
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if(requiresAuth) {
    firebase.auth().onAuthStateChanged( (user) => {
      if(!user){
        next('/ingreso')
      }
      else{ 
        next() 
      }
    })
  } 
  else {
    next()
  }
    // if (to.meta.rutaProtegida) {
    //   let usuario = firebase.auth().currentUser;
    //   let autorizacion = to.matched.some(record => record.meta.autentificado)
    //   if(autorizacion && usuario){
    //     next('/')
    //   } else {
    //     next('/ingreso')
    //   }
    // }  else {
    //   next()
    // }


    // } else {
    //   next('')
    // }
  })

  //------------------

  return Router
})
