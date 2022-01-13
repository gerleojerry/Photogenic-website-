<template>
  <div class='grey lighten-4'>
    <v-container>
      <h3 class='title text-center text-h4 my-8 grey--text'>Gallery</h3>

      <v-row>
    <v-col
      v-for="(item, index) in items"
      :key="index"
      class="d-flex child-flex"
      cols="12" sm='4'
    >
      <v-img
        :src='item.src'
        :lazy-src='items.src'
        aspect-ratio="1"
        class="grey lighten-2"
      >
        
      </v-img>
    </v-col>
  </v-row>
  
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
      return {
        items: [
          {'src' : require('../assets/images/image11.jpg')},

          {'src' : require('../assets/images/image12.jpg')},

          {'src' : require('../assets/images/image13.jpg')},

          {'src' : require('../assets/images/image14.jpg')},

          {'src' : require('../assets/images/image15.jpg')},

          {'src' : require('../assets/images/image16.jpg')},

          {'src' : require('../assets/images/image17.jpg') },

          {'src' : require('../assets/images/image18.jpg')},

          {'src' : require('../assets/images/image19.jpg')},
        ],
        
      }

    },

}
</script>

<style scoped>

.title {
  position :relative;
  padding: .2rem 0;
}

.title::after {
  position : absolute;
  height: 3px;
  content: " ";
  background-color: grey;
  width: 30px;
  bottom: 0;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  
}
  
</style>
