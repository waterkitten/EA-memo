import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
import * as notification from '@/store/modules/notification.js' // <-- import it
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user,
    event,
    notification // <-- add it here
  },
  state: {
    categories: [
      '软件部',
      '硬件部',
      '宣传部',
      '策划部',
      '拓展部',
      '职能部全体',
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  }
})