import Vue from 'vue'
import ElementUI from 'element-ui';
import './index.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import store from '../vuex';
import router from '../vue_router';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})