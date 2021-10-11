<template>
<!-- <div class="q-pa-md"> -->
  <q-layout view="lHh lpr lFf">
  <!-- <q-layout view="lHh Lpr lFf"> -->
    <q-header elevated>
      <q-toolbar :class="$q.dark.isActive ? 'bg-pink' : 'bg-green'">
        <q-btn
          flat
          dense
          round
          icon="menu_open"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
        <q-avatar>
            <img src="~/src/assets/Logo-Zodiaco.png"/>
        </q-avatar>
          <!-- <q-icon name="~/src/assets/Logo-Zodiaco.png"/> -->
          <!--Lo bueno si esta autenticado traemos el correo para que lo pinte -->
          Zodiaco
          <!-- {{isAuthenticated ? user.displayName : 'Acceso denegado'}} -->
          <!-- Zodiaco {{usuarioname.arguments}} -->
          <!-- this.$router.push({ path: '/' }) -->
        </q-toolbar-title>


        <!--El color de fondo ------------------->

        <q-btn flat round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'dark_mode' : 'wb_sunny'"
        />



        <!----------El color de fondo ------------->

          <div>
            <q-badge :class="$q.dark.isActive ? 'bg-amber' : 'bg-teal'" text-color="dark" flat rounded>v1.0.0</q-badge>
          </div>

          <!-- <div> -->
            <!-- El @click="" es el método para salir -->
            <!-- <router-link to="/ingreso" class="routerlinkd"> -->
              <!-- <q-btn color="negative">Salir</q-btn> -->
              <!-- <q-btn icon="las la-sign-out-alt"/> -->
              <q-btn size="11px" round :color="$q.dark.isActive ? 'secondary':'deep-orange'" icon="logout" push dense @click="salir"/>
            <!-- </router-link> -->
            <!-- <q-btn color="negative" @click="onLogout">Salir</q-btn> -->
          <!-- </div> -->
      </q-toolbar>



  <q-footer>
        <q-toolbar :class="$q.dark.isActive ? 'bg-pink' : 'bg-green'">
          <q-toolbar-title class="titulocentrado"> {{isAuthenticated ? user.email : ''}} </q-toolbar-title>
          <!-- <q-toolbar-title>Zodiaco 2021</q-toolbar-title> -->
        </q-toolbar>
         <!-- <q-bar  style="height:18px" :class="$q.dark.isActive ? 'bg-pink' : 'bg-green'">
          <div>Zentinela 2021 Todos los derechos reservados</div>
         </q-bar>  -->
  </q-footer>


    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
        Bievenido
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
<!-- </div> -->
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import Registro from '../pages/Registro.vue'


const linksList = [
  {
    title: 'Inicio',
    // caption: 'Crea',
    icon: 'home',
    // icon: 'receipt_long',
    // icon: 'las la-scroll',
    link: '/'
  },
  // {
  //   title: 'Reportes',
  //   caption: 'Visualiza',
  //   icon: 'description',
  //   link: 'https://github.com/quasarframework'
  // },
  // {
  //   title: 'Notas',
  //   caption: 'Crea notas',
  //   icon: 'note_add',
  //   // icon: 'las la-sticky-note',
  //   link: 'https://chat.quasar.dev'
  // },
  // {
  //   title: 'Rutas',
  //   caption: 'Rutas más cortas',
  //   icon: 'call_split',
  //   // icon: 'las la-route',
  //   link: 'https://forum.quasar.dev'
  // },
  {
    title: 'Mesa de ayuda',
    caption: 'Chat',
    icon: 'question_answer',
    // icon: 'las la-comments',
    link: 'chat'
  },
  {
    title: 'Mi información',
    caption: 'Visualiza y cambia datos',
    icon: 'person',
    // icon: 'las la-user-check',
    link: 'myaccount'
  },
];

import { createStore } from 'vuex'
import {useRouter} from 'vue-router'
import { defineComponent, ref, watch } from 'vue'
//import useAuth from '../store/index'
//import {useAuth} from '@vueuse/firebase'
//-----------Importamos el método de la autenticación
import {useAuth} from "@vueuse/firebase"
//--------------Importaciones extras si funcionan -----
import firebase from 'firebase/compat/app'
//import { initializeApp, firebase } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth,db } from '../boot/firebase';
//-----------------------------------------------
//import store from 

//--------------------------------------------------------
import {mapActions,mapState} from 'vuex'
import { FirebaseError } from '@firebase/util';

//---------------------------------------------------------

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    const {isAuthenticated, user , displayName} = useAuth(firebase.auth)

    // const {isAuthenticated, user , displayName} = useAuth(firebase.auth)
    // const router = useRouter
    //Tengo que checar esto
    // const { isAuthenticated, email, name, logout } = useAuth()
    //-------Para el método de autenticación
    // const {isAuthenticated, username, logout} = useAuth()

    //El método del botón salir
    // const salir = async() => {
    //   try {
    //     //Esto se tiene de la documentación de firebase
    //     await auth.signOut()
    //     this.$router.push({ path: '/' })
        
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // const salir = async() => {
    //       try {
    //         //Esto se tiene de la documentación de firebase
    //         await auth.signOut();
    //         await db.collection('usuarios').doc(this.user.value).update({ 
    //             estado: false,
    //          })
    //         this.$router.push({ path: '/ingreso' })
    //         // await db.collecion('usuarios').doc(user.uid).update({
    //         //         estado: false,
                
    //         //     })
    //       } catch (error) {
    //         console.log(error)
    //       }
    //     }
  
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      isAuthenticated,
      user,
      // salir,

    }
  },
  methods: {
        ...mapActions(['checkAuthentication']),
        //...mapActions(['registrarUsuarioB']),
        //para que cuando mandemos el formulario limpie los campos
        // async nametalbar(){
        //     await this.usuarioname({email, password})

        // },

        async salir(){
          try {
            //Esto se tiene de la documentación de firebase
            await db.collection('usuarios').doc(this.user.uid).update({ 
                  estado: false,
            })
            await auth.signOut();
            // await db.collection('usuarios').doc(user.value.uid).update({ 
              //     estado: false,
            //  })
            this.$router.push({ path: '/ingreso' })
            // await db.collecion('usuarios').doc(user.uid).update({
            //         estado: false,
                
            //     })
          } catch (error) {
            console.log(error)
          }
        }
    }
})
</script>
<style lang="scss" scoped>
.routerlinkd{
    text-decoration: none;
}
.titulocentrado{
  text-align: center;
}
</style>
