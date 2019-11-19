import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import router from './routes'


Vue.component('app', require('./components/App'));

Vue.component('articleindex', require('./components/pages/ArticleIndex'));
Vue.component('articleshow', require('./components/pages/ArticleShow'));
Vue.component('articleedit', require('./components/pages/ArticleEdit'));
Vue.component('articlecreate', require('./components/pages/ArticleCreate'));

Vue.use(BootstrapVue)

const app = new Vue({
    router,
    el: '#app'
});
