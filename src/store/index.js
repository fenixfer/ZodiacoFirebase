import { route, store} from 'quasar/wrappers'
import { createStore } from 'vuex'
//import router from '../router/routes'
//import Router from '../router/routes'
//import router from '../router/routes'
//import router from '../router'
import router from '../router/routes'
import axios from 'axios'


// ES6 Modules or TypeScript

//------------------------------------

import Vue from 'vue';


//---------------------------------

import Swal from 'sweetalert2'

const ENDPOINT_F = "https://identitytoolkit.googleapis.com/v1/accounts";
const ENDPOINT_A = "=AIzaSyA7V2g0I4gReTEjJ5e9VAR_I4dCrUuqD0w";


// import example from './module-example'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    // CommonJS
    modules: {
      // example
    },
    state:{
      user:  null,
      
      error: {
        tipo: null, mensaje: null
      },
      //Agregando los demás
      idToken: null,
      refreshToken: null,
      status: 'not-authenticated',

    },
    mutations:{
      setUser(state, payload){
        state.user = payload
      },
      //---------Este lo ingresamos para los datos
      setIdToken(state, payload){
        state.user = payload,
        state.idToken = payload,
        state.refreshToken = payload,
        state.status = payload       
      },
    },
    actions: {
      async inicioUsuario(){
        this.$router.push({ path: '/' })
      },
      //-----------------Ingreso de usuario
      async ingresoUsuario({commit}, usuario ) {
        const Swal = require('sweetalert2')
        try {
          const data = await axios.post(ENDPOINT_F+':signInWithPassword?key'+ENDPOINT_A,{
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
          
        commit('setUser', data)

        this.$router.push({ path: '/' })

          
        } catch (error) {
          //console.log(error)
          // Swal.fire({
          //   //position: 'top-end',
          //   icon: 'success',
          //   title: 'Se a registrado.',
          //   showConfirmButton: false,
          //   timer: 2000
          // })
          Swal.fire({
            icon: 'error',
            title: 'Credenciales invalidas.',
            text: 'Verifique su correo o contraseña.',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#E84176',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
        }
      },

      //----------------Registro de usuario
      async registrarUsuario({commit}, usuario){
      const Swal = require('sweetalert2')
      //Creamos constantes de las que vamos a ocupar
      //const { email, password} = usuario
      try {
        //const res = 
        const data = await axios.post(ENDPOINT_F+":signUp?key"+ENDPOINT_A, {
          //Esto sirve normal
          // email: usuario.email,
          // password: usuario.password,
          // returnSecureToken: true
            //name: usuario.name,
            displayName: usuario.displayName,
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
            // email,
            // password,
            // returnSecureToken: true
        }).then(Response => {console.log(Response.data)}) 
        // this.usuario = respone.data
        //console.log(data);

        commit('setUser', data)

        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Se a registrado.',
          showConfirmButton: false,
          timer: 2000
        })

        this.$router.push({ path: '/login' })

        //this.$router.push({path: '/yourPath'})
        //router.push('/bienvenida')
        //Router.push('/bienvenida')
        //const userDB = await data.json()
        //HABILITAR LA AUTENTICACIÓN DE EMAIL EN FIREBASE
        //console.log(userDB)
        // if (userDB.error) {
        //   //el console iba abajo pero necesitamos mandarle mensaje al usario de que no esta registrado
        //   console.log(userDB.error)
        //   //Este setError lo mandamos a las mutaciones
        //   return commit('setError', userDB.error.message)
        // }
        //  commit('setUser', userDB)
        //  commit('setError', null)
        // //empujamos al usuario a la raiz o la del CRUD  
        // router.push('/bienvenida')
        //Aqui también como en el ingreso usuario debemos matener la información aunque refresquemos
        //localStorage.setItem('usuario', JSON.stringify(userDB))
        //router.push('/bienvenida')

        // const userDB = await data()
        // //HABILITAR LA AUTENTICACIÓN DE EMAIL EN FIREBASE
        // //console.log(userDB)
        // if (userDB.error) {
        //   //el console iba abajo pero necesitamos mandarle mensaje al usario de que no esta registrado
        //   console.log(userDB.error)
        //   //Este setError lo mandamos a las mutaciones
        //   return commit('setError', userDB.error.message)
        // }
        //  commit('setUser', userDB)
        //  commit('setError', null)
        //empujamos al usuario a la raiz o la del CRUD  
        //routes.push('/')
        //this.$router.push({ path: '/' })
        //Aqui también como en el ingreso usuario debemos matener la información aunque refresquemos
        // localStorage.setItem('usuario', JSON.stringify(userDB))



      } catch (error) {
        //console.log(error)
        Swal.fire({
          title: 'Error',
          text: 'Usuario ya registrado',
          icon: 'error',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#E84176',
        })
      }


        //return res 

        //TODO: Traemos el idToken y el refreshToken del console que nos arrojo en la respuesta
        //desestructuramos lo que necesitamos solo extraemos lo que necesitamos
        // const {idToken, refreshToken } = data
        // //lo de displayName lo define firebase en su página
        // await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA7V2g0I4gReTEjJ5e9VAR_I4dCrUuqD0w", {
        //   displayName: name , 
        //   idToken
        // });
        // console.log(data);

        //return {ok: true}
            
  
        // const userDB = await res.json()
        // //HABILITAR LA AUTENTICACIÓN DE EMAIL EN FIREBASE
        // //console.log(userDB)
        // if (userDB.error) {
        //   //el console iba abajo pero necesitamos mandarle mensaje al usario de que no esta registrado
        //   console.log(userDB.error)
        //   //Este setError lo mandamos a las mutaciones
        //   return commit('setError', userDB.error.message)
        // }
        //  commit('setUser', userDB)
        //  commit('setError', null)
        // //empujamos al usuario a la raiz o la del CRUD  
        // router.push('/ingreso')
        // //Aqui también como en el ingreso usuario debemos matener la información aunque refresquemos
        // localStorage.setItem('usuario', JSON.stringify(userDB))
      // } catch (error) {
      //   console.log(error)
      //   //console.log(error.response);
      // }
    },
    async usuarioname({commit}, usuario){
      const idToken = localStorage.getItem('idToken')
      const refreshToken = localStorage.getItem('idToken')

      if(!idToken){
        commit()

      }


      // try {
      //   const data = await axios.post(ENDPOINT_F+':lookup?key'+ENDPOINT_F,{
      //       idToken = usuario.idToken
      //   }).then((result) =>{ this.result = result.data})        

      //   commit('setUser', data)
      // } catch (error) {
      //   console.log(error);
      // }
    },




    async registrarUsuarioB ({commit}, usuario){
      
      const userDB = await registrarUsuario()
        //HABILITAR LA AUTENTICACIÓN DE EMAIL EN FIREBASE
        //console.log(userDB)
        if (userDB.error) {
          //el console iba abajo pero necesitamos mandarle mensaje al usario de que no esta registrado
          console.log(userDB.error)
          //Este setError lo mandamos a las mutaciones
          return commit('setError', userDB.error.message)
        }
         commit('setUser', userDB)
         commit('setError', null)

    }


  },


  //----------Lo nuevo
  async checkAuthentication({commit}, usuario){
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('idToken')

    //Si no tenemos el idToken significa que no esta autenticado el usuario
    if(!idToken){
      commit('setIdToken')
      return {ok: false, message: 'No hay token'}
    }

    try {
      const data = await axios.post(ENDPOINT_F+':lookup?key'+ENDPOINT_A,{
        idToken
      })
      console.log(data)
      const {displayName, email} = data

      const user = {
        name: displayName,
        email
      }
      
      commit('setIdToken', usuario)

      return{ok: true}

    } catch (error) {
      commit('setIdToken')
      return {ok: false, message: error.response.data.error.message}
    }

  },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
