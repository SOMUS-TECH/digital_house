import  Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/Main.vue'
import Properties from '../components/Properties.vue'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            component: Main,
            name: 'Dashboard'
        },

        {
            path: '/properties',
            component: Properties,
            name: 'properties'
        },
        // {
        //     path: '/tenant',
        //     component: Tenant,
        //     name: 'Tenant'
        // },
        
    ],
    mode: 'history'
})

export default router
