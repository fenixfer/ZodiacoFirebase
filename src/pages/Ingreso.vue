<template>

    <div class="row justify-center">
        
       <div class="form2"> 
            <q-img src="~/src/assets/carrusel1.jpg" style="height:680px" class="estiloimagen"> </q-img>
        </div>
        <q-form action class="form" @submit.prevent="procesarFormulario"> 
            
            <q-item-label class="title"> 
                <h3>    
                Ingreso
                </h3>
            </q-item-label>
            
            <q-input dark label-color="yellow" class="form-label" type="email" color="yellow" v-model="email" label="Correo :" required placeholder="EJ123456@ncr.com"/>          
            <q-input dark label-color="yellow" class="form-label" type="password" color="yellow" v-model="password" label="Contraseña :" required placeholder="Contraseña"/>

            <br>
            <br>

            
            <div class="row justify-center"> 
            <q-btn rounded class="btnform" glossy size="md" label="Ingresar" type="submit" @click="showLoading" :disabled="bloquear"/>

            </div>
            <br>
            <p class="text-center text-white">¿Aún no te registras?</p>
            <div class="row justify-center">
                <router-link to="/registro" class="routerlinkd">
                    <q-btn rounded class="btnformR" outline size="md" label="Registrar" type="submit"/>
                </router-link>
            </div>

    
        </q-form>
    </div>


</template>

<script>
import { useQuasar, QSpinnerFacebook, Notify, QSpinnerBall } from 'quasar'
import { ref, onBeforeUnmount } from 'vue'
import {mapActions,mapState, createStore} from 'vuex'

//--------- importamos el auth lo nuevo

import {auth,db} from '../boot/firebase'


// import { route, store} from 'quasar/wrappers'
// import { createStore } f rom 'vuex'
// import router from '../router/routes'
// import Router from '../router/routes'
// import router from '../router/routes'

// import route from '../router/index'
//import router from '../router'
// import VueRouter from 'vue-router'
import router from '../router'
// // import store from 'src/store'
// // import Vue from "vue";
import VueRouter from 'vue-router'
    
// // Vue.use(VueRouter)
// import Vue from 'vue';
// import Router from 'vue-router';


import Swal from 'sweetalert2'

//---------------------------

import { route, store} from 'quasar/wrappers'


export default {
    name: 'Ingreso',
    setup () {

        const email = ref("");
        const password = ref("");

        const $q = useQuasar()
        let timer

        onBeforeUnmount(() => {
            if (timer !== void 0) {
                clearTimeout(timer)
                $q.loading.hide()
            }
        })

        // const procesarFormulario = async () => {
        //     // if(!email.value.trim() || !password.value.trim()){
        //     //     console.log("campos vacios");
        //     //     return
        //     // }
        //     try {
        //         const usuario = await auth.signInWithEmailAndPassword(email.value,password.value) 
        //         console.log(usuario.user);
                
        //         //Para limpiar los campos cuando enviamos
        //         // email.value = "";
        //         // password.value = "";
        //         //router().push('/bienvenida')

        //         //this.router().push({path: '/bienvenida'})
        //         //location.reload()
        //         //router().go()
        //         //this.$router.replace({ path: '/' })
            

        //         //this.$Router.push({ path: '/' })
        //         //this.$router.push({path: '/'})
        //     } catch (error) {
        //         console.log(error);
        //         Swal.fire({
        //         icon: 'error',
        //         title: 'Credenciales invalidas.',
        //         text: 'Verifique su correo o contraseña.',
        //         confirmButtonText: 'Entendido',
        //         confirmButtonColor: '#E84176',
        //         //footer: '<a href="">Why do I have this issue?</a>'
        //   })
        //     }
        // };
        
        
        return {
            email,
            password,
            // procesarFormulario,

            sizes: ['xs','sm','md','lg','xl'],

            //El loading
            showLoading () {
                $q.loading.show({
                spinner: QSpinnerBall,
                spinnerColor: 'yellow',
                spinnerSize: 120,
                backgroundColor: 'green',
                message: 'Verificando <b>credenciales</b>...<br/><span class="text-amber-14"><b>Espere un momento por favor.</b></span>',
                html: true,
                messageColor: 'white',
                })

            // hiding in 3s
                timer = setTimeout(() => {
                    $q.loading.hide()
                    timer = void 0
                }, 3000)
            }
    


            //---------------

        }
    },
    
    computed: {
        bloquear(){
           if(this.password.length >= 6 && this.email.includes('@')){
                return false 
            }else {
                return true
            }
        },

        ...mapState(['error'])
    },
    methods: {
        ...mapActions(['inicioUsuario']),

        async procesarFormulario(){            // const email = ''
            // const password = ''
                // const usuario = await auth.signInWithEmailAndPassword(email.value,password.value) 
            try {
                const usuario = await auth.signInWithEmailAndPassword(this.email,this.password)
                await db.collection('usuarios').doc(usuario.user.uid).update({ 
                estado: true,
             })
                //Este va
                // console.log(usuario.user);  
            

                setTimeout( () => this.$router.push({ path: '/'}), 3000);

                //  this.$router.push({path: '/'})

                // Todo: Tengo que checar esto
                // await db.collecion('usuarios').doc(usuario.user.uid).update({
                //     estado: true,
                // })
                
                // await this.inicioUsuario()
            } catch (error) {
                //Este va
                // console.log(error);
                setTimeout( () =>
                    Swal.fire({
                    icon: 'error',
                    title: 'Credenciales invalidas.',
                    text: 'Verifique su correo o contraseña.',
                    // showConfirmButton: false,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#E84176',
                    // timer: 2000,
                }), 3000)
                
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
.pc::placeholder{
    color: white ;
}
.form {
  margin: 2rem -1px;

  border-top-right-radius: 20px;
  border-end-end-radius: 20px;


  background: rgba(23, 109, 42, 0.9);
 
  border-top-right-radius: 25px;
  border-end-end-radius: 25px;
  padding: 40px;

}
.form2 {
  margin: 2rem -1px;
  width: 20%;
  border-top-left-radius: 25px;
  border-end-start-radius: 25px;
  box-shadow: 0 4px 20px 8px rgba(20, 117, 52, 0.3);
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
    margin-top: 0.1rem;
    color: yellow;
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
  margin-top: 1.5rem;
  color: white;
}
.form-input {
  //padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
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
