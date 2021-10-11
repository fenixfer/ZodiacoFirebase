<template>

    <div class="row justify-center">
        
       <div class="form2"> 
            <q-img src="~/src/assets/carrusel3.jpg" style="height:780px" class="estiloimagen"> </q-img>
        </div>
        <q-form action class="form" @submit.prevent="procesarFormulario"> 
            
            <q-item-label class="title"> 
                <h3>    
                Registro
                </h3>
            </q-item-label>
            <q-input dark label-color="yellow" class="form-label" color="yellow" v-model="quicklookid" label="QuicklookID :" required placeholder="EJ123456"/>

            <q-input dark label-color="yellow" class="form-label" color="yellow" v-model="name" label="Nombre :" type="text" required placeholder="Nombre"/>

            <q-input dark label-color="yellow" class="form-label" color="yellow" v-model="lastname" label="Apellido :" type="text" required placeholder="Apellido"/>


            <q-input dark label-color="yellow" type="email" color="yellow" v-model="email" label="Correo :" required placeholder="EJ123456@ncr.com"
            :class="[error.tipo === 'email' ? 'is-invalid': '']"/>

            <q-input dark label-color="yellow" class="form-label" type="password" color="yellow" v-model="password" label="Contraseña :" required placeholder="contraseña" />



            <q-input dark label-color="yellow" class="form-label" type="password" color="yellow" v-model="password2" label="Repetir contraseña :" required placeholder="contraseña" />

            <div class="row justify-center">
                <!-- <router-link to="/registro" class="routerlinkd"> -->
                <q-btn rounded class="btnformR" glossy size="md" label="Registrar" type="submit" :disabled="bloquear"/>
                <!-- </router-link> -->
            </div>

            <br>
            <!-- <div class="row justify-center"> -->
            <router-link to="/ingreso">
                <p class="text-center text-green">Ingrese si ya tiene cuenta</p>
            </router-link> 

    
        </q-form>
    </div>

</template>

<script>
import {useQuasar, QSpinnerFacebook } from 'quasar'
import { ref , onBeforeUnmount } from 'vue'
import axios from 'axios'
import {mapActions,mapState} from 'vuex'
//import router from 'src/router'
import router from '../router/routes'

//Ahora importamos el auth 

import {auth} from '../boot/firebase'

import Swal from 'sweetalert2'


export default {
    name: 'Registro',
    setup () {
        
        const quicklookid = ref('AB123456');
        const name = ref('Fer');
        const lastname = ref('G');
        const email = ref('fer31@gmail.com');
        const password = ref('123456');
        const password2 = ref('123456');
        const acceder = ref(true);
   
        const $q = useQuasar()
        let timer
        
        onBeforeUnmount(() => {
            if (timer !== void 0) {
                clearTimeout(timer)
                $q.loading.hide()
            }
        })
        

        return {
            quicklookid,
            name,
            lastname,
            email,
            password,
            password2,
            // procesarFormulario,
            acceder,
            // displayName,
            // displayName: this.name + ' ' + this.lastname,

            sizes: ['xs','sm','md','lg','xl'],

            loading: false,

            //--------Para el loading
            showLoading () {
                $q.loading.show({
                    message: '<b>Espere un momento por favor.</b><br/><span class="text-primary">Registrando...</span>',
                    html: true
                })
                
                // hiding in 3s
                timer = setTimeout(() => {
                    $q.loading.hide()
                    timer = void 0
                }, 2000)
            }


        }
    },

    computed: {
        bloquear(){
            //Haciendo las validaciones
            if(!this.email.includes('@')){
                return true 
            }
            //El método para el password
            if(this.password.length > 5 && this.password === this.password2){
                return false 
            }else {
                return true
            }
        },
        ...mapState(['error'])
    },
    methods: {
        async procesarFormulario(){
            // this.displayName = this.name + " " + this.lastname;

            try {
                // const usuario = await auth.signInWithEmailAndPassword(email.value,password.value) 
                const usuario = await auth.createUserWithEmailAndPassword(this.email,this.password) 
                console.log(usuario.user);

                //Para limpiar los campos cuando enviamos
                this.email= "";
                this.password = "";

                Swal.fire({
                    //position: 'top-end',
                    icon: 'success',
                    title: 'Se a registrado.',
                    showConfirmButton: false,
                    timer: 2000
                })

                this.$router.push({ path: '/ingreso' })
                
                // await this.inicioUsuario()
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: 'Error',
                    text: 'Usuario ya registrado',
                    icon: 'error',
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#E84176',
                })
                
            }   
            
        }

    }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
  color: white;
}
.routerlinkd{
    text-decoration: none;
}
.form {
  margin: 2rem -1px;
  border-top-right-radius: 20px;
  border-end-end-radius: 20px;
  background: rgba(20, 82, 107, 0.9);
  border-top-right-radius: 25px;
  border-end-end-radius: 25px;
  padding: 40px;
}
.form2 {
  margin: 2rem -1px;
  width: 20%;
  border-top-left-radius: 25px;
  border-end-start-radius: 25px;
  box-shadow: 0 4px 20px 8px rgba(40, 146, 216, 0.3);
}
.estiloimagen{
    border-top-left-radius: 25px;
    border-end-start-radius : 25px;
}
.btnform{
    margin-top: 2rem;
    background-color : rgb(206, 206, 32);
    color: black;
}
.btnformR{
    margin-top: 2rem;
    background-color : rgb(214, 160, 116);    
    color: rgb(255, 255, 255);
}
.textdesc{
    margin-top: 0.5;
    text-align: center;
}
.terminosbtn{
    margin-top: 2rem;
}
//lo pondre en el centro
.centro{
    justify-content: center;
}
.form-label {
  margin-top: 1rem;
}
.form-input {
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}
.colorpl{
    text-decoration-color: white;
}
.pc::placeholder{
    color: white;
    font-size: 1.5em;
    font-style: italic;
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
</style>
