import Router from 'vue-router'
import Vue from 'vue'
import Home from '@/components/Home'
import AuthCallback from '@/components/AuthCallback'
Vue.use(Router)
export default new Router ({
    mode: 'history',
    linkActiveClass: 'regular-active',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        // {
        //     path: '/upload',
        //     name: 'Upload',
        //     component: UploadForm
        // },
        {
            path: '/callback',
            name: 'AuthHandler',
            component: AuthCallback
        }
    ]
})