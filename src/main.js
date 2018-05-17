import Vue from 'vue'
import App from './App.vue'
import Sortable from 'vue-sortable/vue-sortable.js'


Vue.config.productionTip = false
Vue.use(Sortable)

new Vue({
  render: h => h(App)
}).$mount('#app')
