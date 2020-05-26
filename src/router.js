import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import SobreMi from './components/SobreMi'
import Contact from './components/Contact'
import Post from './components/Post'
import Article from './components/Article'
import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index,
            name: 'index'
        },
        {
            path: '/SobreMi',
            component: SobreMi,
            name: 'SobreMi'
        },
        {
            path: '/Contact',
            component: Contact,
            name: 'Contact'
        },
        {
            path:'/post/:id',
            component: Post,
            name:'post',
            children:[{
                path:'article',
                component:Article,
                name:'article'
        }]
        },
        {
            path: '*',
            component: NotFound,
        },
    ]
})