<template>
  <v-container>
    <v-app-bar
      dense
      flat
      light
      class='header'
    >

      <v-toolbar-title class='font-weight-bold medium ' >FOTO<em>GENIC</em> </v-toolbar-title>

    
      <v-spacer></v-spacer>


        <div class='hidden-xs-only'>
          <v-btn depressed plain>
            <router-link to='/' class='small'> Home</router-link> 
          </v-btn>

          <v-btn depressed plain>
            <router-link to='/about' class='small'> About</router-link> 
          </v-btn>

          <v-btn depressed plain>
            <router-link to='/contact' class='small'> Contact</router-link> 
          </v-btn>
        </div>


        <div class="hidden-sm-and-up text-center">
          <v-menu
            bottom
            :offset-y="offset"
          >
            <template v-slot:activator="{ on, attrs }">

              <v-app-bar-nav-icon v-bind="attrs"
                v-on="on"></v-app-bar-nav-icon>
            </template>

            <v-list>
              <v-list-item>
                <v-btn depressed plain>
                  <router-link to='/' class='small'> Home</router-link> 
                </v-btn> 
              </v-list-item>
          
              <v-list-item>
                <v-btn depressed plain>
                  <router-link to='/about' class='small'> About</router-link> 
                </v-btn> 
              </v-list-item>

              <v-list-item>
                <v-btn depressed plain>
                  <router-link to='/contact' class='small'> Contact</router-link> 
                </v-btn> 
              </v-list-item>

            </v-list>
          </v-menu>
 
        </div>
      

    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'MainHeader',

    
     data: () => ({
      offset: true,
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
