<template>
  <div class="q-px-xl">
      <h5>Formulario de {{ acceder ? 'Login':'Registro'}}</h5>
      <!--Este para ver la información que se registro en firebase -->
   <!-- <pre>{{isAuthenticated}}</pre>
   <pre>{{user}}</pre>    -->
  <!--Para separar los elementos ponemos q-gutter-md-->
  <q-form class="q-gutter-md" @submit.prevent="procesarFormulario">
      <q-input label="Email" v-model="email"/>
      <q-input label="Password" v-model="password"/>
      <!--Hacer el botón interactivo -->
      <q-btn
        :label="acceder ? 'Login':'Registro'"
        type="submit"
        color="primary"
      />
      <!-- El v-if es para que no se muestre -->
      <q-btn color="primary" outline v-if="!acceder" @click="acceder = true">
          ¿Ya tienes cuenta?
      </q-btn>
      <!-- Y si esta en true que no muestre el de abajo pero que no que muestre este -->
      <q-btn color="negative" outline v-else @click="acceder = false">
          ¿No tienes cuenta?
      </q-btn>

  </q-form>
  </div>

</template>

<script>
//importamos el auth para autorizaciñon lo que instale @vue/firebase
//import {useAuth} from '@vueuse/firebase'
import { ref } from 'vue'
//Utilizando ya la autenticación
import {auth} from 'boot/firebase'
//importamos para detectar al usuario
//import firebase from 'firebase'
//--------Junto con esta importación y las demás
import { useAuth } from '@vueuse/firebase'
// import { computed } from "vue";
//--------------Importaciones extras si funcionan -----
import firebase from 'firebase/compat/app'
//import { initializeApp, firebase } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//-----------------------------------------------

export default {
    name: 'VistaAcceso',
    setup () {
    //Para mostrar el usuario
        const email = ref('');
        const password = ref('');
        const acceder = ref(true);
        //const acceder2 = true;

        //--Para detectar al usuario
        const {user, isAuthenticated} = useAuth(firebase.auth)

        const procesarFormulario = async() =>{
            if(!email.value.trim() || !password.value.trim()){
                console.log('campos vacios')
                return
            }
            try {
                if(!acceder.value){
                    //Registrar
                    //Esto es lo que registramos 
                    const usuario = await auth.createUserWithEmailAndPassword(email.value, password.value)
                    console.log(usuario.user)
                }else{
                    //Login
                    const usuario = await auth.signInWithEmailAndPassword(email.value, password.value)
                    console.log(usuario.user)    

                }
                //cuando termina de registrarse que no se vean los datos en el formulario 
                email.value = ""
                password.value = ""
            } catch (error) {
                console.log(error)
            }
        }


        return {
            email,
            password,
            procesarFormulario,
            acceder,
            // isAuthenticated, 
            // user,
            //--Para que detecte al usuario
            isAuthenticated, 
            user
        }
    },

}
</script>

<style>

</style>