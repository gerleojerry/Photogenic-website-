<template>

  <div class='grey lighten-4'>
    <v-container>
      <h3 class='title text-center pb-3 text-h4 my-8 grey--text'>Latest Posts</h3>

      <v-row>
    <v-col
      v-for="(item, index) in items"
      :key="index"
      class="d-flex child-flex"
      cols="4"
    >
      <v-card
        class="mx-auto"
  >
        <v-img
          v-bind:src="item.img_src"
          height="200px"
        ></v-img>

        <v-card-title>
          {{item.title}}
        </v-card-title>

        <v-card-subtitle>
          {{item.subtitle}}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="primary"
            text
          >
            More
          </v-btn>

          <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{item.description}}
            </v-card-text>
          </div>
      </v-expand-transition>
  </v-card>
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
        show: false,
        items: [
          { 'title' : 'The Joke Of Photography',
            'subtitle' : 'The irony of the profession of Photography which are actually funny.',
            'description' : "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?",
            'img_src' : require('../assets/images/image19.jpg')},

          { 'title' : 'Ethic Of Photography',
            'subtitle' : 'The ethics and Moral Principle guiding the profession of Photography',
            'description' : "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?",
            'img_src' : require('../assets/images/image20.jpg')},

          { 'title' : 'Reward Of Photography.',
            'subtitle' : 'The fufillment and joy of being a photographer.',
            'description' : "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?",
            'img_src' : require('../assets/images/image21.jpg')},

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
