import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import List from '@/components/List.vue'
import SlotExample from '@/components/SlotExample.vue'

Vue.component('ListComponent', List)
Vue.component('SlotExample', SlotExample)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
