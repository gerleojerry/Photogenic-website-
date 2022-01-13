import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import NotFound from  './views/Error.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes : [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    {path: '*', component: NotFound},
  ]
})
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
