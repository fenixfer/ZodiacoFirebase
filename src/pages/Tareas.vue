<template>
  <!-- <div class="body"> -->
  <q-layout view="lHh Lpr lFf">

    <!-- <div> -->
      <q-parallax :height="300" :speed="0.8" class="imagenlist">
        <template v-slot:media>
          <img src="~/src/assets/technology1.jpg">
        </template>

        <h1 class="text-white">BIENVENIDO</h1>
      </q-parallax>
    <!-- </div> -->
  
    <h1>Hola</h1>

  </q-layout>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Tareas'
  
  }
</script>

<style lang="scss" scoped>
.imagenlist{
  margin-top: 6rem;
}
.body{
  background-color: aquamarine;
}

</style>