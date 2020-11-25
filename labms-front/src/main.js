import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElemnetUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElemnetUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
