import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import PostView from '@/views/PostView'
import PostDetail from '@/views/PostDetail';
import CreatePost from '@/views/CreatePost.vue';
import RestaurantView from '@/views/RestaurantView'
import MenuVuew from '@/views/MenuView'
import SignUp from '@/views/SignUp';
import SignIn from '@/views/SignIn';

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/about',
        component: AboutView
    },
    {
        path: '/post',
        component: PostView
    },
    {
        path: '/restaurant',
        component: RestaurantView
    },

    {
        path: '/post',
        name: 'PostView',
        component: PostView
    },
    {
        path: '/post/:id',
        name: 'PostDetail',
        component: PostDetail,
    },
    {
        path: '/sign_up',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/create-post',
        name: 'CreatePost',
        component: CreatePost,
    },
    {
        path: '/menu',
        component: MenuVuew
    },

];


const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
})

export default router;

