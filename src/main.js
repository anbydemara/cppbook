import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueCookie from 'vue-cookie'
// Vue.use(VueCookie)
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)



Vue.config.productionTip = false

// Vue.use(ElementUI);
router.afterEach((to, from) => {
    if (to.hash) {
        const target = document.querySelector(to.hash)
        if (target) {
            // 让页面滚动到指定的锚点位置
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }
})

// 这个方法是为了每个页面添加属于自己的title
router.beforeEach((to,  from,  next)  =>  {  
    if  (to.meta.title)  {     document.title  =  to.meta.title   }  
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')