import Home from './../../components/pages/Home.vue';
import Blog from './../../components/pages/blog/index.vue'
import Admin from './../../components/pages/Admin.vue'

const routes = [
    {path: '/', component : Home},
    {path : '/blog', component : Blog},
    {path : '/admin', component : Admin}
]
export default routes;