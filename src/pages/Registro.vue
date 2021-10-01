<template>

    <div class="row justify-center">
        
       <div class="form2"> 
            <q-img src="~/src/assets/carrusel3.jpg" style="height:780px" class="estiloimagen"> </q-img>
        </div>
        <!--Definimos onSubmit es el método que lo agregamos en el return-->
        <q-form action class="form" @submit.prevent="procesarFormulario"> 
            
            <q-item-label class="title"> 
                <h3>    
                Registro
                </h3>
            </q-item-label>
            <!-- <q-item-label class="form-label" for="#qid">QuicklookID:</q-item-label>
            <q-input id="qid" color="yellow" required placeholder="EJ123456"/> -->
            <!--bg-white pendiente -->
            <!-- Dark es para el color blanco del input es lo inverso -->
            <q-input dark label-color="yellow" class="form-label" color="yellow" v-model="userForm.quicklookid" label="QuicklookID :" required placeholder="EJ123456"/>

            <q-input dark label-color="yellow" class="form-label" color="yellow" v-model="userForm.name" label="Nombre :" type="text" required placeholder="Nombre"/>

            <q-input dark label-color="yellow" class="form-label" color="yellow" v-model="userForm.lastname" label="Apellido :" type="text" required placeholder="Apellido"/>

            <!-- <q-item-label class="form-label" for="#email">Correo:</q-item-label>
            <q-input type="email" id="email" color="yellow" required placeholder="ej123456@ncr.com"/> -->
            <!--Este sirve--->
            <!-- class='form-label' -->
            <q-input dark label-color="yellow" type="email" color="yellow" v-model="userForm.email" label="Correo :" required placeholder="EJ123456@ncr.com"
            :class="[error.tipo === 'email' ? 'is-invalid': '']"/>
            <!----ESTA FORMA ME GUSTOOOOOO
            <q-input label-color="white" class="form-label" type="email" filled color="yellow" v-model="ph2" label="Correo" required placeholder="EJ123456@ncr.com" :dense="dense2"/>
            ---->   


            <!-- <q-item-label class="form-label" for="#password">Contraseña:</q-item-label>
            <q-input type="password" id="password" color="yellow" placeholder="Contraseña"/> -->

            <q-input dark label-color="yellow" class="form-label" type="password" color="yellow" v-model="userForm.password" label="Contraseña :" required placeholder="contraseña" />


            <!-- <q-item-label class="form-label" for="#password">Repita la contraseña:</q-item-label>
            <q-input type="password" id="password" color="yellow" placeholder="Contraseña"/> -->

            <q-input dark label-color="yellow" class="form-label" type="password" color="yellow" v-model="userForm.password2" label="Repetir contraseña :" required placeholder="contraseña" />

            <div class="row justify-center">
                <!-- <router-link to="/registro" class="routerlinkd"> -->
                <q-btn rounded class="btnformR" glossy size="md" label="Registrar" type="submit" :disabled="bloquear"/>
                <!-- </router-link> -->
            </div>

            <br>
            <!-- <div class="row justify-center"> -->
            <router-link to="/login">
                <p class="text-center text-green">Ingrese si ya tiene cuenta</p>
            </router-link> 
            <!-- </div> -->
            <!-- <q-toggle v-model="accept" color="yellow" keep-color class="terminosbtn" label="Acepto." /> -->
            <!-- <div class="row justify-center"> justify-center Para centrar btn -->
                <!-- <q-btn class="btnform" glossy label="Ingresar" type="submit" />
                <q-btn class="btnform" glossy label="Registrar" type="submit" /> -->
                <!-- <router-link to="/login" class="routerlinkd">
                    <q-btn rounded class="btnform" glossy size="md" label="Ingresar" type="submit" />
                </router-link>
            </div> -->
            <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
            <!-- <q-but type="submit" value="Login"/> -->
    
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


export default {
    name: 'Registro',
    setup () {
        //const $q = useQuasar()

        //const name = ref(null)
        //const age = ref(null)
        //const accept = ref(false)
        const userForm = ref({
            quicklookid: 'AB123456',
            name: 'Fer',
            lastname: 'G',
            email: 'fer21@gmail.com',
            password: '123456',
            password2: '123456',
        })
        //------Para el loading
        const $q = useQuasar()
        let timer
        
        onBeforeUnmount(() => {
            if (timer !== void 0) {
                clearTimeout(timer)
                $q.loading.hide()
            }
        })
        //-------Loading
        

        return {
            userForm,

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
        //-----------Loading

    //         showLoading () {
    //     $q.loading.show({
    //       spinner: QSpinnerFacebook,
    //       spinnerColor: 'yellow',
    //       spinnerSize: 140,
    //       backgroundColor: 'purple',
    //       message: 'Some important process is in progress. Hang on...',
    //       messageColor: 'black'
    //     })

    //     // hiding in 3s
    //     timer = setTimeout(() => {
    //       $q.loading.hide()
    //       timer = void 0
    //     }, 3000)
    //   }


        }
    },
    // methods: {
    //     async registerUser() {
    //         await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7V2g0I4gReTEjJ5e9VAR_I4dCrUuqD0w", {
    //             email: this.userForm.email,
    //             password: this.userForm.password,
    //             returnSecureToken: true
    //             });
    //         },
    // },
    computed: {
        bloquear(){
            //Haciendo las validaciones
            if(!this.userForm.email.includes('@')){
                return true 
            }
            //El método para el password
            if(this.userForm.password.length > 5 && this.userForm.password === this.userForm.password2){
                return false 
            }else {
                return true
            }
        },
        ...mapState(['error'])
    },
    methods: {
        ...mapActions(['registrarUsuario']),
        //...mapActions(['registrarUsuarioB']),
        //para que cuando mandemos el formulario limpie los campos
        async procesarFormulario(){
            await this.registrarUsuario({displayName: this.userForm.name + ' ' + this.userForm.lastname,email: this.userForm.email, password: this.userForm.password})
            //Si no son validas las credenciales entonces que queden esos mismos datos para que lo acomode
            // if(this.error.tipo !== null){
            //     return
            // }
            this.userForm.email = '';
            this.userForm.password = '';
            this.userForm.password2 = '';
        },

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
//---display: inline-block;
  //margin: 20px;
  //padding: 20px;
  margin: 2rem -1px;
  //display: flex;
  //---flex-direction: column;
  //--justify-content: center;
  //height: 30%;
  border-top-right-radius: 20px;
  border-end-end-radius: 20px;
  //width: 20%;
  //--min-width: 350px;
  //--max-width: 100%;
  background: rgba(20, 82, 107, 0.9);
  //border-radius: 20px;
  border-top-right-radius: 25px;
  border-end-end-radius: 25px;
  padding: 40px;
  //Este para resaltar borde
  //box-shadow: 0 4px 20px 8px rgba(20, 117, 52, 0.3);
}
.form2 {
  margin: 2rem -1px;
  //display: flex;
  //--display: inline-block;
  //margin: 20px;
  //padding: 10px;
  //--flex-direction: column;
  //--justify-content: center;
  //height: 30%;
  width: 20%;
  //--min-width: 100px;
  //--max-width: 100%;
  //--background: rgba(96, 99, 97, 0.9);
  //--border-radius: 25px;
  border-top-left-radius: 25px;
  border-end-start-radius: 25px;
  //padding: 10px;
  //Este para resaltar borde
  box-shadow: 0 4px 20px 8px rgba(40, 146, 216, 0.3);
}
.estiloimagen{
    border-top-left-radius: 25px;
    //border-top-right-radius: 20px;
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
    //background-color : rgb(36, 146, 236);
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
  //margin-bottom: 0.5rem;
//   &:first-of-type {
//     margin-top: 0rem;
//   }
}
.form-input {
  //padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  //margin-left: 4rem;
//   &:focus {
//     outline: 0;
//     border-color: #1ab188;
//   }
}
.colorpl{
    //background: white;
    //background-color: white;
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
//   &:hover {
//     background: #0b9185;
//   }
}
</style>
