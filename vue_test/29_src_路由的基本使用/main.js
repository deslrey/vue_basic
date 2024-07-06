//  引入Vue
import Vue from "vue"
//  引入App
import App from "./App.vue"
//  引入VueRouter
import VueRouter from "vue-router"
//  引入路由器
import router from './router'
// 关闭Vue的生产提示
Vue.config.productionTip = false
//  使用VueRouter
Vue.use(VueRouter)

// 创建 vm
new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})