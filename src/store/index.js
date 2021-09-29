import { route, store } from 'quasar/wrappers'
import { createStore } from 'vuex'
//import router from '../router/routes'
//import Router from '../router/routes'
//import router from '../router/routes'
//import router from '../router'
import router from '../router/routes'

import axios from 'axios'


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
    modules: {
      // example
    },
    state:{
      user:  null,

      error: {
        tipo: null, mensaje: null
      }
    },
    mutations:{
      setUser(state, payload){
        state.user = payload
      },
    },
    actions: {
    async registrarUsuario({commit}, usuario){
      //Creamos constantes de las que vamos a ocupar
      //const { email, password} = usuario
      try {
        //const res = 
        const data = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7V2g0I4gReTEjJ5e9VAR_I4dCrUuqD0w", {
          //Esto sirve normal
          // email: usuario.email,
          // password: usuario.password,
          // returnSecureToken: true
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
            // email,
            // password,
            // returnSecureToken: true
        });
        // this.usuario = respone.data
        console.log(data);

        commit('setUser', data)

        this.$router.push({ path: '/' })

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
        //empujamos al usuario a la raiz o la del CRUD  
        //routes.push('/')
        //Aqui también como en el ingreso usuario debemos matener la información aunque refresquemos
        // localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
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
  },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
