//  引入Vue
import Vue from "vue"
//  引入App
import App from "./App.vue"
import { mixin, hunhe2 } from "./js/minin"
// 关闭Vue的生产提示
Vue.config.productionTip = false

Vue.mixin(mixin)
Vue.mixin(hunhe2)

// 创建 vm
new Vue({
    el: '#app',
    render: h => h(App)
})