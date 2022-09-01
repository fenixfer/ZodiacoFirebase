<template>
  <div class="q-pa-md">
    <!-- Los puntos son navigation, los quite para que se vea biem -->
    <q-carousel
      animated
      v-model="slide"
      
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="500px"
    >
      <q-carousel-slide :name="1" img-src="~/src/assets/welcome.jpg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">ZODIACO V2 bien vale dos 1</div>
          <div class="text-subtitle1">Es hora de conocer un nuevo mundo.</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="~/src/assets/technology1.jpg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">MESA DE AYUDA</div>
          <div class="text-subtitle1">Chatea con el equipo en tiempo real.</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="~/src/assets/team.jpg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">EQUIPO</div>
          <div class="text-subtitle1">Realiza tus tareas en equipo.</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="~/src/assets/team-office.jpg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">TAREAS</div>
          <div class="text-subtitle1">Crea, actualiza y modifica tareas.</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="welcometext">
   <h2> Es un gusto darte la Bienvenida Fernando Gonzalez.</h2>
   <h2> Prueba.</h2>
   <h2> Prueba nuevos comandos.</h2>

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
  name: 'PageIndex',
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
       isAuthenticated,
       slide: ref(1),
       autoplay: ref(true)
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
  margin-top: 10rem;
  color: rgb(66, 165, 20);
}
</style>
