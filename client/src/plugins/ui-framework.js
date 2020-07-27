import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ko'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuetify)
Vue.use(ElementUI, {locale})

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
})


