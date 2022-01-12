<template>
  <v-app>
    <v-app-bar
      app
      flat
      dense
      light
    >
      <MainHeader/>
    </v-app-bar>

    <v-main>
      <Hero/>
      <Gallery/>
    </v-main>
  </v-app>
</template>

<script>

import MainHeader from './components/MainHeader.vue'
import Hero from './components/Hero.vue'
import Gallery from './components/Gallery.vue'
export default {
  name: 'App',

  components: {
    MainHeader,
    Hero,
    Gallery
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
