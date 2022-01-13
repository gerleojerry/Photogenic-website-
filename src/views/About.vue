<template>
  <div>
    <v-img
      height="400"
      src="./../assets/images/image19.jpg"
    >
      <v-row align='end' class='fill-height white--text hero' >
        <v-col>
          <v-container >
            <h1>About</h1>
          </v-container>
        </v-col>
      </v-row>
    </v-img>

    <div>
      <v-container class='pt-10' >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis numquam nihil unde earum neque iusto mollitia voluptatum porro aspernatur ratione debitis recusandae, sequi minima rerum molestiae ex ullam tempora, maiores dolores natus amet facere consequatur? Consequuntur soluta aliquam, quam aperiam distinctio magni labore eveniet porro debitis alias possimus architecto doloribus!
        </p>
      </v-container>
    </div>

    <div class='pt-10'>
      <v-container>
        <h2 class='title text-center pb-2 font-weight-bold grey-text'>Our Team</h2>

        <v-row class='mt-9'>
        
          <v-col v-for='member in team' :key='member.id'  cols='12' sm='4' >
            <v-card
              class="mx-auto">

            <v-img
              :src='member.src'
              height="200px"
            ></v-img>

              <v-card-title>
                {{member.name}}
              </v-card-title>

              <v-card-subtitle>
                {{member.title}}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>


    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data(){
    return {
      team: [
        { id : 1, name: 'Peter Pan', title : 'Senior Photographer', src: require('./../assets/images/image3.jpg')},

        {id: 2, name: 'Mary Jane', title : 'Editor', src: require('./../assets/images/image9.jpg')},

        {id : 3, name: 'Elon Maverick', title : 'Designer', src: require('./../assets/images/image4.jpg')},
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  background-color: rgba(0, 0, 0, .5) ;
}

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