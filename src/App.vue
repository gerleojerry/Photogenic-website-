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
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>

import MainHeader from './components/MainHeader.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',

  components: {
    MainHeader,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
