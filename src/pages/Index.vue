<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page class="padding">
  
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <!--Solo se va a mostrar si el usuario no esta autenticado-->
    <VistaAcceso v-if="!isAuthenticated"/> 
  </q-page>

  <!-- <h1>Hola</h1> -->

</template>

<script>
import { defineComponent } from 'vue';
//importamos lo del chat
import VistaAcceso from '../components/VistaAcceso.vue'


//-----------Importamos el método de la autenticación
import {useAuth} from "@vueuse/firebase"
//--------------Importaciones extras si funcionan -----
import firebase from 'firebase/compat/app'
//import { initializeApp, firebase } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default defineComponent({
  name: 'PageIndex',
   components: {
     VistaAcceso
   },
   //-----------Importamos igual lo del acceso de VistaAcceso
   setup(){
        const {user, isAuthenticated} = useAuth(firebase.auth)
     return{
       isAuthenticated
     }
   }
})
</script>
