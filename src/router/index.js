// Page Components
import Index from '../pages/Index.vue'
import Home from '../pages/Home.vue'
import Sort from '../pages/Sort.vue'
import Store from '../pages/Store.vue'
import Earnings from '../pages/Earnings.vue'
import User from '../pages/User.vue'
import Search from '../pages/search.vue'
import Detail from '../pages/detail.vue'
import Rookie from '../pages/rookie.vue'
import LoadApp from '../pages/loadApp.vue'
import NoCancle from '../pages/nocancle.vue'

const routes = [
  { path: '/',component:Index,beforeEnter(to,from,next){
      if(to.path === '/'){
         next("/home")  
      }else{
         next()
      }
  },
  children:[
            { path: 'home', component: Home},
            { path: 'sort', component: Sort},
            { path: 'store', component: Store},
            { path: 'earnings', component: Earnings},
            { path: 'user', component: User},
           
     ]
  },
  {path:'/search',component:Search},
  {path:'/detail',component:Detail},
  {path:'/rookie',component:Rookie},
  {path:'/loadapp',component:LoadApp},
  {path:'/nocancle',component:NoCancle}
  ]
  

export default routes