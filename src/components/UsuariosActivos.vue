<template>
    <q-page-sticky position="top" expand class="tabs-zindex">
        <q-tabs
            v-model="uidSeleccionado"
            inline-label
            outside-arrows
            mobile-arrows
            class="bg-amber-14 text-white shadow-2 full-width"
        >
            <q-tab 
            v-for="user in arraySinUser" :key="user.uid"
            :name="user.uid" icon="account_circle" :label="user.email" 
            :class="user.estado ? 'bg-positive' : 'bg-blue-grey' "
            />
            <!-- <q-tab name="alarms" icon="alarm" label="Alarms" />
            <q-tab name="movies" icon="movie" label="Movies" />
            <q-tab name="photos" icon="photo" label="Photos" />
            <q-tab name="videos" icon="slow_motion_video" label="Videos" />
            <q-tab name="addressbook" icon="people" label="Address Book" /> -->
        </q-tabs>
    </q-page-sticky>       
</template>

<script>
import {ref, computed, inject} from 'vue';
//Para mostrar los usuarios activos
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'
import {auth,db} from 'boot/firebase';
import {useAuth} from '@vueuse/firebase'

export default {
    setup() {
        //para seleccionar
        //El inject y el uidSeleccionado es el de Chat de pages
        const uidSeleccionado = inject('uidSeleccionado')
        //como son varios usuarios
        const users = ref([]);
        const {user} = useAuth(firebase.auth)

        db.collection('usuarios')
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log("Usuario nuevo: ", change.doc.data());
                    //ir llenando al usuario
                    users.value = [...users.value, change.doc.data()]
                    //para ordenar los que estan activos y los que no
                    users.value = users.value.sort((a,b) => b.estado - a.estado);
                }
                if (change.type === "modified") {
                    console.log("Usuario modificado: ", change.doc.data());
                    //cuando se modifica el estado
                    users.value = users.value.map(user =>
                        user.uid === change.doc.data().uid
                        ? {...user, estado: change.doc.data().estado}
                        : user
                    );
                    //también ordenar aqui cuando se modifica
                    users.value = users.value.sort((a,b) => b.estado - a.estado);
                }
                if (change.type === "removed") {
                    console.log("Remover usuario: ", change.doc.data());
                }
            });
        });
        //Para que no aparezca nosotros mismos en el chat
        const arraySinUser = computed(() => {
            return users.value.filter(item => item.uid !== user.value.uid)
        })
        return {
            uidSeleccionado,
            arraySinUser
        }
    },
}
</script>

<style scoped>
.tabs-zindex {
    z-index: 2000;
}
</style>