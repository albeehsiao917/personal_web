import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import store from './store';
import router from './router';
import VueScrollTo from 'vue-scrollto'
// import 'aos/dist/aos.css'
// import AOS from 'aos'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

new Vue({
    router,
    store,
    render: h => h(App),
    // created () {
    //     AOS.init()
    // },
}).$mount('#app')
