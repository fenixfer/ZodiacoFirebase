<template>
  <q-item
    clickable
    tag="a"
    :href="link"
  >
    <!-- target="_blank" -->
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <!-- <h1>aaa</h1> -->
</template>

<script>
import { defineComponent} from 'vue'
//importamos el auth para autorizaciñon lo que instale @vue/firebase
//import {useAuth} from '@vueuse/firebase'

export default defineComponent({
  name: 'EssentialLink',
  // setup () {
  //   //Para mostrar el usuario
  //   const {isAuthenticated, user} = useAuth()

  //   return {
  //     isAuthenticated, 
  //     user,
  //   }
  // },
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  
  }
  
})
</script>
