import Vue from "vue"
import VueRouter from "vue-router";
// import Main from "../components/Pages/Main";
import Error from "../components/Pages/Error404";
import ShoppingCart from "../components/Pages/ShoppingCart";
import ProductList from "../components/Shop/Product-list/Product-list";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: { name: 'products' }
    },
    {
        name: 'products',
        path: '/products',
        component: ProductList
    },
    {
        path: '/cart',
        component: ShoppingCart
    },
    {
        path: '*',
        component: Error
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
})