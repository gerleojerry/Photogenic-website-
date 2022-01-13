<template>
  <v-container>
    <h2 class='title text-center my-6' >Page Not Found.</h2>
    <div class='text-center mb-6 '>
      <v-icon  class='white red--text big'> mdi-close-octagon  </v-icon>
    </div>

    <p class='text-center'>
      Sorry, This page can not be accessed currently, but you can contact at gerleojerry@gmail.com 
    </p>
  </v-container >
</template>

<script>
export default {
  name: "Error"
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
  width: 50px;
  bottom: 0;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  }

  .big {
    font-size: 4rem;
  }

</style>