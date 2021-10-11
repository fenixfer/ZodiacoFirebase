<template>
  <transition name="slide-fade">
    <div>
      <UsuariosActivos />
      <VistaChat />
    </div>
  </transition>
</template>

<script>
import UsuariosActivos from '../components/UsuariosActivos.vue'
//importamos lo de vistachat para mandar mensajes
import VistaChat from '../components/VistaChat.vue'
import {provide, ref} from 'vue'
export default {
    name: 'Chat',

    components: {UsuariosActivos, VistaChat},
    setup(){
      //lo de UsuariosActivos de components
      //Para que accedan a la información
      const uidSeleccionado = ref("")
      provide('uidSeleccionado', uidSeleccionado)
      return{

      }
    }
}
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(.17, .67, .83, .67);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(800px);
  opacity: 0;
}
</style>
