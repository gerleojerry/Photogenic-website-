<template>
  <div>
    <Hero/>
    <Gallery/>
    <Posts/>
  </div>
  
</template>

<script>
import Hero  from './../components/Hero.vue'
import Gallery from './../components/Gallery.vue'
import Posts from './../components/Posts.vue'

export default {
  name: "Home",
  components: {
    Hero,
    Gallery,
    Posts,
  }
}
</script>

<style scoped>

</style>