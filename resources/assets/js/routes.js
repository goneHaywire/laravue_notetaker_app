import Vue from 'vue'
import Router from 'vue-router'

import ArticleIndex from './components/pages/ArticleIndex'
import ArticleEdit from './components/pages/ArticleEdit'
import ArticleShow from './components/pages/ArticleShow'
import ArticleCreate from './components/pages/ArticleCreate'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'articleindex',
            component: ArticleIndex
        },
        {
            path: '/create',
            name: 'articlecreate',
            component: ArticleCreate,
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: ArticleEdit,
        },
        {
            path: '/articles/:id',
            name: 'articleshow',
            component: ArticleShow,
        },

    ],
    mode: 'history'
})