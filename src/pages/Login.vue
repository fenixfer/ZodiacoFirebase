<template>
  <!-- <div class="q-px-xl"> -->

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
            <!-- <q-item-label class="form-label" for="#email">Correo:</q-item-label>
            <q-input type="email" id="email" color="yellow" required placeholder="ej123456@ncr.com" /> -->

            <q-input dark label-color="yellow" class="form-label" type="email" color="yellow" v-model="userForm.email" label="Correo :" required placeholder="EJ123456@ncr.com"/>

            <!-- <q-item-label class="form-label" for="#password">Contraseña:</q-item-label>
            <q-input type="password" id="password" color="yellow" placeholder="Contraseña"/> -->
            <q-input dark label-color="yellow" class="form-label" type="password" color="yellow" v-model="userForm.password" label="Contraseña :" required placeholder="Contraseña"/>

            <br>
            <br>

            <!-- <q-toggle v-model="accept" color="yellow" keep-color class="terminosbtn" label="Acepto." /> -->
            <div class="row justify-center"> <!--justify-center Para centrar btn-->
                <!-- <q-btn class="btnform" glossy label="Ingresar" type="submit" />
                <q-btn class="btnform" glossy label="Registrar" type="submit" /> -->

            <q-btn rounded class="btnform" glossy size="md" label="Ingresar" type="submit" />

            </div>
            <br>
            <p class="text-center text-white">¿Aún no te registras?</p>
            <div class="row justify-center">
                <router-link to="/registro" class="routerlinkd">
                    <q-btn rounded class="btnformR" outline size="md" label="Registrar" type="submit"/>
                </router-link>
            </div>
            <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
            <!-- <q-but type="submit" value="Login"/> -->
    
        </q-form>
    </div>

  <!-- </div> -->
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import {mapActions,mapState} from 'vuex'


export default {
    name: 'Login',
    setup () {
        // const $q = useQuasar()

        // const name = ref(null)
        // const age = ref(null)
        // const accept = ref(false)
        const userForm = ref({
            //quicklookid: '',
            //name: '',
            //lastname: '',
            email: '',
            password: '',
            //password2: '',
        })
        
        
        return {
            userForm,
            //name,
            //age,
            //accept,
            sizes: ['xs','sm','md','lg','xl'],

            ph: ref(''),
            ph2: ref(''),
            dense: ref(false),
            dense2: ref(false),

        }
    },
    computed: {
        bloquear(){
            //Haciendo las validaciones
            if(!this.userForm.email.includes('@')){
                return true 
            }
            //El método para el password
            if(this.userForm.password .length > 5){
                return false 
            }else {
                return true
            }
        },
        //Mapeamos el error que se declara en la alerta y llamamos al error
        ...mapState(['error'])
    },
    methods: {
        ...mapActions(['ingresoUsuario']),
        //para que cuando mandemos el formulario limpie los campos
        async procesarFormulario(){
            //el await espera la respuesta del servidor
            //TODO: ESTO LO TENGO QUE CAMBIAR EN EL REGISTRO
            await this.ingresoUsuario({email: this.userForm.email, password: this.userForm.password})
            //Si no son validas las credenciales entonces que queden esos mismos datos para que lo acomode
            if(this.error.tipo !== null){
                return
            }
            //TODO: ESTO TAMBIÉN LO TENGO QUE CAMBIAR EN EL REGISTRO
            this.userForm.email = '';
            this.userForm.password = '';
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
  background: rgba(23, 109, 42, 0.9);
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
  //border-radius: 25px;
  border-top-left-radius: 25px;
  border-end-start-radius: 25px;
  //padding: 10px;
  //Este para resaltar borde
  box-shadow: 0 4px 20px 8px rgba(20, 117, 52, 0.3);
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
    margin-top: 0.1rem;
    //background-color : rgb(36, 146, 236);
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
