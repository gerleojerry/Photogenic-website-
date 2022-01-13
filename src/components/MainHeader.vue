<template>
  <v-container>
    <v-app-bar
      dense
      flat
      light
      class='header'
    >

      <v-toolbar-title class='font-weight-bold medium' >FOTO<em>GENIC</em> </v-toolbar-title>

    
      <v-spacer></v-spacer>

        <v-btn depressed plain>
          <router-link to='/' class='small'> Home</router-link> 
        </v-btn>

        <v-btn depressed plain>
          <router-link to='/about' class='small'> About</router-link> 
        </v-btn>

        <v-btn depressed plain>
          <router-link to='/contact' class='small'> Contact</router-link> 
        </v-btn>
      

    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'MainHeader',

    data: () => ({
     
    }),
  }
</script>

<style scoped>
  .medium {
    font-size: 16px;
  }
  .small  {
    font-size: 13px;
  }
</style>
