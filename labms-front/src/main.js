import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElemnetUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import axios from 'axios'

Vue.use(ElemnetUI)
Vue.use(ViewUI)

Vue.config.productionTip = false

axios.defaults
Vue.prototype.axios=axios

new Vue({
  data:function (){
    return{
      USER:null
    }
  },
  render: h => h(App),
  router
}).$mount('#app')
