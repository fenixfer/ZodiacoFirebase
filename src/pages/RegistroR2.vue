<template>

    <div class="row justify-center">
        
       <div class="form2"> 
            <q-img src="~/src/assets/carrusel3.jpg" style="height:750px" class="estiloimagen"> </q-img>
        </div>
        <!--Definimos onSubmit es el método que lo agregamos en el return-->
        <q-form action class="form" @submit.prevent="onSubmit"> 
            
            <q-item-label class="title"> 
                <h3>    
                Registro
                </h3>
            </q-item-label>
            <!-- <q-item-label class="form-label" for="#qid">QuicklookID:</q-item-label>
            <q-input id="qid" color="yellow" required placeholder="EJ123456"/> -->
            <!--bg-white pendiente -->
            <q-input label-color="yellow" class="form-label" color="yellow" v-model="userForm.quicklookid" label="QuicklookID :" required placeholder="EJ123456"/>

            <q-input label-color="yellow" class="form-label" color="yellow" v-model="userForm.name" label="Nombre :" type="text" required placeholder="Nombre"/>

            <q-input label-color="yellow" class="form-label" color="yellow" v-model="userForm.lastname" label="Apellido :" type="text" required placeholder="Apellido"/>

            <!-- <q-item-label class="form-label" for="#email">Correo:</q-item-label>
            <q-input type="email" id="email" color="yellow" required placeholder="ej123456@ncr.com"/> -->

            <q-input label-color="yellow" class="form-label" type="email" color="yellow" v-model="userForm.email" label="Correo :" required placeholder="EJ123456@ncr.com"/>
            <!----ESTA FORMA ME GUSTOOOOOO
            <q-input label-color="white" class="form-label" type="email" filled color="yellow" v-model="ph2" label="Correo" required placeholder="EJ123456@ncr.com" :dense="dense2"/>
            ---->   


            <!-- <q-item-label class="form-label" for="#password">Contraseña:</q-item-label>
            <q-input type="password" id="password" color="yellow" placeholder="Contraseña"/> -->

            <q-input label-color="yellow" class="form-label" type="password" color="yellow" v-model="userForm.password" label="Contraseña :" required placeholder="contraseña" />


            <!-- <q-item-label class="form-label" for="#password">Repita la contraseña:</q-item-label>
            <q-input type="password" id="password" color="yellow" placeholder="Contraseña"/> -->

            <q-input label-color="yellow" class="form-label" type="password" color="yellow" v-model="userForm.password" label="Repetir contraseña :" required placeholder="contraseña" />

            <div class="row justify-center">
                <!-- <router-link to="/registro" class="routerlinkd"> -->
                <q-btn rounded class="btnformR" glossy size="md" label="Registrar" type="submit"/>
                <!-- </router-link> -->
            </div>

            <br>
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
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import useAuth from '../composables/useAuth'

export default {
    name: 'Registro',
    setup () {
        //traemos el composable 
        //El createUser el que vamos a estar llamando en onSubmitn en el return
        const { createUser} = useAuth()

        //const $q = useQuasar()

        //const name = ref(null)
        //const age = ref(null)
        //const accept = ref(false)

        const userForm = ref({
            quicklookid: 'EJ123456',
            name: 'Fernando',
            lastname: 'Gonzalez',
            email: 'fer1@gmail.com',
            password: '123456',
        })

        return {
            userForm,

            onSubmit: async() => {
                console.log(userForm.value);
                //createUser(userForm.value)
            },
            //name,
            //age,
            //accept,
            colors: ['#f00', '#0f0', '#00f'],
            sizes: ['xs','sm','md','lg','xl'],

            text: ref(''),
            ph: ref(''),
            ph2: ref(''),
            ph3: ref(''),
            ph4: ref(''),
            dense: ref(false),
            dense2: ref(false),
            dense3: ref(false),
            dense4: ref(false),
            
            // onSubmit () {
            //     if (accept.value !== true) {
            //         $q.notify({
            //         color: 'red-5',
            //         textColor: 'white',
            //         icon: 'warning',
            //         message: 'You need to accept the license and terms first'
            //         })
            //      }
            //     else {
            //         $q.notify({
            //             color: 'green-4',
            //             textColor: 'white',
            //             icon: 'cloud_done',
            //             message: 'Submitted'
            //         })
            //     }
            // },

            // onReset () {
            //     name.value = null
            //     age.value = null
            //     accept.value = false
            // }
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
//---display: inline-block;
  //margin: 20px;
  //padding: 20px;
  margin: 6rem -1px;
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
  margin: 6rem -1px;
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
  margin-top: 1.2rem;
  //margin-bottom: 0.5rem;
//   &:first-of-type {
//     margin-top: 0rem;
//   }
}
.form-input {
  //padding: 10px 15px;
  margin-top: 1.2rem;
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
