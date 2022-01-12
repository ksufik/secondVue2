import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import List from '@/components/List.vue'
import SlotExample from '@/components/SlotExample.vue'
import myPlugin from './plugins/myplugin'
import vuetify from './plugins/vuetify'

Vue.component('ListComponent', List)
Vue.component('SlotExample', SlotExample)

Vue.use(myPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
