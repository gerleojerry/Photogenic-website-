<template>
  <div>
    <v-carousel cycle hide-delimiters height='480' >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      width='100%'
    >

        <v-row
            class="fill-height title hidden-xs-only pb-7"
            justify="center"
            align='end'

        >
          <div class="white--text title_text" >
            {{ item.title}} 
          </div>
        </v-row>
    
    </v-carousel-item>

    
  </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {'src' : require('../assets/images/image1.jpg'),
          'title' : "we are professionals."
          },

          {'src' : require('../assets/images/image2.jpg'),
          'title' : 'We are Creative'
          },

          {'src' : require('../assets/images/image3.jpg'),
          'title' : 'We are HardWorking.'
          },

          {'src' : require('../assets/images/image4.jpg'),
          'title' : 'We are the Best in The Field.'
          },

          {'src' : require('../assets/images/image5.jpg'),
          'title' : 'We will beat your expectations.'
          },

          {'src' : require('../assets/images/image6.jpg'),
          'title' : 'We will beat your imagination.'
          },

          {'src' : require('../assets/images/image7.jpg'),
          'title' : 'We deliver The Best'
          },

          {'src' : require('../assets/images/image8.jpg'),
          'title': 'We will blow your mind.'
          },
        ]
        
      }
    },
  }
</script>

<style  scoped>
  .title {
   background-color: rgba(0, 0, 0, .4);
    
    
  }

  .title_text {
    font-size: 2.9rem;
  }
</style>