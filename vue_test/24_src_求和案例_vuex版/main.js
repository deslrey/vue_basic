//  引入Vue
import Vue from "vue"
//  引入App
import App from "./App.vue"

import store from './store'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建 vm
new Vue({
    el: '#app',
    store,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})