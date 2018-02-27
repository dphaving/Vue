// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import Analysis from './pages/detail/analysis'
import Count from './pages/detail/count'
import Forecast from './pages/detail/forecast'
import Publish from './pages/detail/publish'
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(axios)
let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: IndexPage
        },
        {
            path: '/detail',
            component: DetailPage,
            redirect: '/detail/analysis',
            children: [{
                    path: 'analysis',
                    component: Analysis
                },
                {
                    path: 'count',
                    component: Count
                },
                {
                    path: 'forecast',
                    component: Forecast
                }, {
                    path: 'publish',
                    component: Publish
                }
            ]
        }

    ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { Layout },
    template: '<Layout/>'
})