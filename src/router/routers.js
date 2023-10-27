import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import IndexPage from "@/components/IndexPage";
Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'IndexPage',
            component: IndexPage
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },

    ]
})