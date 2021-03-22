import VueRouter from 'vue-router'
import createWebHistory from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'

// 2. Define some routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    //history: createWebHistory(process.env.BASE_URL),
    routes // short for `routes: routes`
})

//const router = createRouter({
//    history: createWebHistory(process.env.BASE_URL),
//    routes,
//})

export default router