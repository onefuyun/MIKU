import Vue from 'vue'
import Vonic from 'vonic'
import routes from './router'
import axios from 'axios'
import jquery from './jquery.js'



Vue.prototype.axios = axios
// // Page Components
// import Index from './pages/Index.vue'
// import About from './pages/About.vue'

// Routes
// const routes = [
//   { path: '/', component: Index },
//   { path: '/about', component: About }
// ]
Vue.filter('change',function(value){
   return value.substr(0,22)
})
Vue.use(Vonic.app, {
  routes: routes
})
