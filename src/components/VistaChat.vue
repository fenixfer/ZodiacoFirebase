<template>
<!--El RefChat lo creamos para el scroll que este hacia abajo como en un chat -->
    <div v-if="uidSeleccionado !== ''" class="q-mt-xl" ref="RefChat">
        <!--Esto es para el chat --->
        <div class="q-pa-md row justify-center q-mt-xl">
            <div style="width: 100%; max-width: 1300px" class="q-mb-xl">
                <q-chat-message
                v-for="chat in chats" :key="chat.id"
                    :name="chat.user"
                    :text="[chat.texto]"
                    :sent="chat.uid === user.uid"
                />
            </div>
        </div>
        <!--------------------------->
        <q-footer elevated class="q-mb-xl">
            <!-- El q-form ayudara para enviar mensajes --->
            <q-form @submit.prevent="enviarMensaje">
                <q-toolbar class="bg-amber-14 text-white row">
                    <q-btn round flat icon="insert_emoticon" class="q-mr-sm" />
                    <q-input rounded outlined dense class="WAL__field col-grow q-mr-sm"  v-model="message" bg-color="orange-14" color="positive" placeholder="Type a message" />
                    <q-btn round flat icon="send" type="submit"/>
                </q-toolbar>
            </q-form>
        </q-footer>
    </div>

    <div v-else class="imagenlist" align="center">
        <h4>Seleccione a alguien para hablar.</h4>
        <!-- <h5 class="q-mt-xl"> Selecciona a un usuario para hablar.</h5> -->
        <q-img src="~/src/assets/chat.png" style="width: 100%" class="alingItems-center"> </q-img>

    </div>

</template>

<script>
import {ref, inject, watch, watchEffect} from 'vue'
//para detectar al usuario que esta activo
import {useAuth} from '@vueuse/firebase'
//importamos esto por el useAuth
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'
import {auth,marcaTiempo,db} from 'boot/firebase';

export default {
    setup() {
        const {user} = useAuth(firebase.auth)

        const chats = ref([])

        const RefChat = ref(null)

        let unsuscribe;

        const message = ref('')
        //Igual el inject como el de UsuariosActivos
        const uidSeleccionado = inject('uidSeleccionado')
        //Junto con esto al presionar a quien le enviamos mensajes regresa el uid
        watchEffect(() => {
            console.log(uidSeleccionado.value);
        })

        //Para comprobar los mensajes pintarlos en el chat
        const obtenerData = (uidDelUsuarioSeleccionado) => {
            //Si agregamos este chats.value = [] hace que cuando cambiemos de chat no tenga la misma información
            chats.value = []
            unsuscribe = db.collection('chat')
            .doc(user.value.uid)
            .collection(uidDelUsuarioSeleccionado)
            .orderBy("fecha")
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log("New city: ", change.doc.data());
                    //Esto es una colleción de chat
                    chats.value.push({...change.doc.data(), id: change.doc.id})
                }
                    //Agregamos el RefChat
                    if(RefChat.value !== null){
                        setTimeout(() => {
                            window.scrollTo(0, RefChat.value.scrollHeight)                        
                        }, 50);
                    } 
                });
            });
        }

        //Esto es para obtener la data
        watch(
            () => uidSeleccionado.value,
            (newUid) => {
                if(unsuscribe){
                    //si ya se ejecuto una vez el unsuscribe lo quitamos para que ya no se ejecute
                    unsuscribe()
                    if(newUid){
                        obtenerData(newUid)
                    }
                } else {
                    obtenerData(newUid)
                }
            }
        )

        //para enviar mensaje con async porque se hace una solicitud a firebase
        const enviarMensaje = async() => {
            //Este if es para que no se envien mensajes en blanco
            if(!message.value.trim()){
                return;
            }
            try {
                //Este es para enviar información a firebase de los mensajes
                const objetoMensaje = {
                    user: user.value.email,
                    texto: message.value,
                    fecha: marcaTiempo(),
                    uid: user.value.uid
                }
                await db.collection('chat')
                .doc(user.value.uid)
                .collection(uidSeleccionado.value)
                .add(objetoMensaje)

                //Esto para el otro usuario
                await db.collection('chat')
                .doc(uidSeleccionado.value)
                .collection(user.value.uid)
                .add(objetoMensaje)

                message.value = "";
            } catch (error) {
                console.log(error)
            }
        }

        return {
            message,
            enviarMensaje,
            uidSeleccionado,
            chats,
            user,
            RefChat
        }
    },
}
</script>

<style lang="scss" scoped>
.imagenlist{
  margin-top: 6rem;
}

</style>