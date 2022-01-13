<template>
  <div>
    <v-img
      height="400"
      src="./../assets/images/image19.jpg"
    >
      <v-row align='end' class='fill-height white--text hero' >
        <v-col>
          <v-container >
            <h1>Contact Us</h1>
          </v-container>
        </v-col>
      </v-row>
    </v-img>

    <div>
      <v-container class='pt-10'>
        <h2 class='title text-center pb-2 font-weight-bold grey-text'>Send Us a Message</h2>

        <v-row class='mt-9' justify="center">
        
          <v-col   cols='8' >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-textarea
                v-model='message'
                :rules='messageRules'
                clearable
                clear-icon="mdi-close-circle"
                label="Message"
              ></v-textarea>

              <v-btn
                :disabled="!valid"
                class="mr-4 mt-4 green accent-3 white--text"
                @click="validate"> Send </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </div>



    <div>
      <v-container fluid class='pt-10'>
        <h2 class='title text-center pb-2 font-weight-bold grey-text'>Our Location.</h2>

        <v-row class='mt-9' justify="center">
        
          <v-col   width='80%' >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.909485957476!2d4.248114686592943!3d8.129214255908881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370d6bf40683d5%3A0x5878db044b92c702!2sSoun%20Palace!5e0!3m2!1sen!2sng!4v1642079942845!5m2!1sen!2sng" width="100%" class='mx-auto' height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </v-col>
        </v-row>
      </v-container>


    </div>
  </div>
</template>

<script>
  export default {
    name : 'About',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length <= 10) || 'Message must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
     
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      
    },
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
  width: 50px;
  bottom: 0;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  
}
</style>