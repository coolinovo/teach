import Vue from 'vue'
import {
    Message,
    Container,
    Header,
    Aside,
    Main,
    Row,
    Col
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)

Vue.prototype.$msg = Message