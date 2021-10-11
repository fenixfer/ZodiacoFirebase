<template>
  <div class="welcometext">
   <h2> En mantenimiento. </h2>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
// import { QCalendar } from '@quasar/quasar-ui-qcalendar'

import { ref } from 'vue'
//importamos lo del chat
import VistaAcceso from '../components/VistaAcceso.vue'


//-----------Importamos el método de la autenticación
import {useAuth} from "@vueuse/firebase"
//--------------Importaciones extras si funcionan -----
import firebase from 'firebase/compat/app'
//import { initializeApp, firebase } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//-----------------------------------------
//import Registro from './Registro.vue'

export default defineComponent({
  name: 'MiCuenta',
  // components: {
  //   QCalendar
  // },

  //  components: {
  //    VistaAcceso
  //  },
   //-----------Importamos igual lo del acceso de VistaAcceso
   setup(){
        const {user, isAuthenticated} = useAuth(firebase.auth)
     return{
     }
   }
})
</script>

<style lang="scss" scoped>
.custom-caption{
  text-align: center;
  margin-top: 0.5rem;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
.welcometext{
  text-align: center;
  margin-top: 20rem;
  color: rgb(66, 165, 20);
}
</style>