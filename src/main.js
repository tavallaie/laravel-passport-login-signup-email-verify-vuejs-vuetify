import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaInfo from 'vue-meta-info'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VeeValidate from 'vee-validate';
import  interceptors  from './store/interceptors'
import Snotify from 'vue-snotify'; // 1. Import Snotify

Vue.config.productionTip = false;
interceptors();

Vue.use(MetaInfo);
Vue.use(Vuetify);
Vue.use(VeeValidate);
Vue.use(Snotify);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({
                name: 'home',
            })
        } else {
            next()
        }
    } else if (to.meta.requiresAdmin) {
        console.log('before each admin');
        if (store.getters.isAdmin) {

            next()
        } else {
            next('/')
        }
    } else {
        next()
    }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
