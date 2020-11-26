import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElemnetUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.use(ElemnetUI)
Vue.use(ViewUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
