import { boot } from 'quasar/wrappers'
import axios from 'axios'
import router from '../router/routes'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
// })
})

export { api }

// export default boot({
//   actions:{
//   async registrarUsuario({commit}, usuario){
//     try {
//       //Esta de url es de firebase de autenticacón de usuario y password
//       //Donde iba la API KEY era la que genera firebase es la pública
//       //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

//       // const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAq4Tgi3imCetP2iXYlOSuUeP7AxN09nE',{
//       //   method: 'POST',
//       //   body: JSON.stringify({
//       //     //usuario.email
//       //     email: usuario.email,
//       //     password: usuario.password,
//       //     returnSecureToken: true
//       //   })
//       // })

//       const res = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7V2g0I4gReTEjJ5e9VAR_I4dCrUuqD0w", {
//         email: this.userForm.email,
//         password: this.userForm.password,
//         returnSecureToken: true
//       });
          

//       const userDB = await res.json()
//       //HABILITAR LA AUTENTICACIÓN DE EMAIL EN FIREBASE
//       //console.log(userDB)
//       if (userDB.error) {
//         //el console iba abajo pero necesitamos mandarle mensaje al usario de que no esta registrado
//         console.log(userDB.error)
//         //Este setError lo mandamos a las mutaciones
//         return commit('setError', userDB.error.message)
//       }
//        commit('setUser', userDB)
//        commit('setError', null)
//       //empujamos al usuario a la raiz o la del CRUD  
//       router.push('/')
//       //Aqui también como en el ingreso usuario debemos matener la información aunque refresquemos
//       localStorage.setItem('usuario', JSON.stringify(userDB))
//     } catch (error) {
//       console.log(error)
//     }
//   },
// }
// }) 
