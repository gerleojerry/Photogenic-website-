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
    </v-main>
  </v-app>
</template>

<script>

import MainHeader from './components/MainHeader.vue'
import Hero from './components/Hero.vue'
export default {
  name: 'App',

  components: {
    MainHeader,
    Hero
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
