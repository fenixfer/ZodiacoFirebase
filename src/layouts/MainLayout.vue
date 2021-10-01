<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar :class="$q.dark.isActive ? 'bg-pink' : 'bg-green'">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <!--Lo bueno si esta autenticado traemos el correo para que lo pinte -->
          Zodiaco {{isAuthenticated ? user.displayName : ''}}
          <!-- this.$router.push({ path: '/' }) -->
        </q-toolbar-title>

        <!--El color de fondo ------------------->

        <q-btn flat round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />



        <!----------El color de fondo ------------->

          <div>
            <q-badge :class="$q.dark.isActive ? 'bg-amber' : 'bg-teal'" text-color="dark">v1.0.0</q-badge>
          </div>

          <div>
            <!-- El @click="" es el método para salir -->
            <q-btn color="negative" @click="salir">Salir</q-btn>
          </div>
      </q-toolbar>
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
          Essential Links
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
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'


const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { createStore } from 'vuex'
import {useRouter} from 'vue-router'
import { defineComponent, ref } from 'vue'
//import useAuth from '../store/index'
//import {useAuth} from '@vueuse/firebase'
//-----------Importamos el método de la autenticación
import {useAuth} from "@vueuse/firebase"
//--------------Importaciones extras si funcionan -----
import firebase from 'firebase/compat/app'
//import { initializeApp, firebase } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from 'src/boot/firebase';
//-----------------------------------------------

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    const router = useRouter
    //Tengo que checar esto
    //const { isAuthenticated, email, name, logout } = useAuth()
    //-------Para el método de autenticación
    const {isAuthenticated, user} = useAuth(firebase.auth)

    //El método del botón salir
    const salir = async() => {
      try {
        //Esto se tiene de la documentación de firebase
        await auth.signOut()
        this.$router.push({ path: '/' })
        
      } catch (error) {
        console.log(error)
      }
    }

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        // this.$router.push({ path: '/' })
        // logout()
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      isAuthenticated,
      user,
      salir
      //email

    }
  }
})
</script>
